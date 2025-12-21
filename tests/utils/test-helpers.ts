import { expect, Page } from "@playwright/test"

/**
 * Common test helper functions for play14-ui tests
 */

/**
 * Verifies the page layout has essential elements
 */
export async function verifyPageLayout(page: Page) {
  // Navbar should be visible
  await expect(page.locator("#navbar")).toBeVisible()

  // Main container should exist
  await expect(page.locator("main")).toBeVisible()

  // Footer should be visible (scroll to bottom)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await expect(page.locator("footer")).toBeVisible()
}

/**
 * Verifies navigation menu items are present
 */
export async function verifyNavigation(page: Page) {
  const navbar = page.locator("#navbar")
  await expect(navbar.getByRole("link", { name: "Home" }).first()).toBeVisible()
  await expect(navbar.getByText("Events").first()).toBeVisible()
  await expect(navbar.getByText("Community").first()).toBeVisible()
  await expect(navbar.getByText("About").first()).toBeVisible()
  await expect(
    navbar.getByRole("link", { name: "Contact" }).first(),
  ).toBeVisible()
}

/**
 * Wait for page to fully load (no network activity)
 */
export async function waitForPageLoad(page: Page, timeout = 30000) {
  await page.waitForLoadState("networkidle", { timeout })
  // Also wait for dom content to be loaded
  await page.waitForLoadState("domcontentloaded", { timeout })
}

/**
 * Check if grid items are displayed
 */
export async function verifyGridItems(
  page: Page,
  selector: string,
  minCount = 1,
) {
  const items = page.locator(selector)
  await expect(items.first()).toBeVisible({ timeout: 10000 })
  expect(await items.count()).toBeGreaterThanOrEqual(minCount)
}

/**
 * Verify page title contains expected text or is valid
 */
export async function verifyPageTitle(page: Page, expectedTitle: string) {
  // First wait for page to have a title
  await page.waitForFunction(() => document.title.length > 0, {
    timeout: 10000,
  })
  const title = await page.title()
  // Check if title contains expected text or contains play14
  const titleLower = title.toLowerCase()
  const expectedLower = expectedTitle.toLowerCase()
  expect(
    titleLower.includes(expectedLower) || titleLower.includes("play14"),
  ).toBeTruthy()
}

/**
 * Test infinite scroll / load more functionality
 */
export async function testLoadMore(page: Page, gridItemSelector: string) {
  const initialCount = await page.locator(gridItemSelector).count()

  // Scroll to bottom to trigger load more
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

  // Wait for potential new items
  await page.waitForTimeout(2000)

  const newCount = await page.locator(gridItemSelector).count()
  return { initialCount, newCount }
}

/**
 * Check for error messages
 */
export async function verifyNoErrors(page: Page) {
  const errorElements = page.locator('[class*="error"]')
  const count = await errorElements.count()
  // If there are error elements, they should be hidden or contain expected messages
  for (let i = 0; i < count; i++) {
    const isVisible = await errorElements.nth(i).isVisible()
    if (isVisible) {
      const text = await errorElements.nth(i).textContent()
      // Allow expected error states
      if (text && !text.includes("No results") && !text.includes("not found")) {
        throw new Error(`Unexpected error found: ${text}`)
      }
    }
  }
}

/**
 * Test search functionality
 */
export async function testSearch(page: Page, searchTerm: string) {
  const searchBox = page.locator('[type="search"], [placeholder*="Search"]')
  if ((await searchBox.count()) > 0) {
    await searchBox.first().fill(searchTerm)
    await page.keyboard.press("Enter")
    await waitForPageLoad(page)
    return true
  }
  return false
}

/**
 * Verify links are working
 */
export async function verifyLinkWorks(page: Page, linkText: string) {
  const link = page.getByRole("link", { name: linkText }).first()
  await expect(link).toBeVisible()
  const href = await link.getAttribute("href")
  expect(href).toBeTruthy()
  return href
}

/**
 * Test theme toggle
 */
export async function testThemeToggle(page: Page) {
  const themeToggle = page
    .locator('[aria-label*="theme"], .theme-toggle')
    .first()
  if ((await themeToggle.count()) > 0) {
    const htmlBefore = await page.locator("html").getAttribute("class")
    await themeToggle.click()
    await page.waitForTimeout(500)
    const htmlAfter = await page.locator("html").getAttribute("class")
    return htmlBefore !== htmlAfter
  }
  return false
}

/**
 * Get detail page links by filtering out navigation links
 * More robust approach: get all links, then filter by checking href patterns
 */
export async function getDetailLinks(
  page: Page,
  baseHref: string,
  excludePatterns: string[] = [],
) {
  // Wait for links to exist first
  await page.waitForSelector(`a[href^='${baseHref}']`, { timeout: 15000 })

  const allLinks = page.locator(`a[href^='${baseHref}']`)
  const count = await allLinks.count()
  const validLinks: string[] = []

  for (let i = 0; i < count; i++) {
    const href = await allLinks.nth(i).getAttribute("href")
    if (href) {
      // Check if href matches any exclude patterns
      const shouldExclude = excludePatterns.some((pattern) =>
        href.includes(pattern),
      )
      if (!shouldExclude) {
        validLinks.push(href)
      }
    }
  }

  return validLinks
}

/**
 * Click on first valid detail link with retry logic
 */
export async function clickFirstDetailLink(
  page: Page,
  baseHref: string,
  excludePatterns: string[] = [],
  retries = 3,
): Promise<boolean> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      // Wait for links to exist first
      await page.waitForSelector(`a[href^='${baseHref}']`, { timeout: 15000 })

      const validLinks = await getDetailLinks(page, baseHref, excludePatterns)

      if (validLinks.length === 0) {
        return false
      }

      // Find the first link with this href that is visible
      const firstHref = validLinks[0]
      const link = page.locator(`a[href='${firstHref}']`).first()

      await link.waitFor({ state: "visible", timeout: 10000 })
      await link.click({ timeout: 10000 })
      await waitForPageLoad(page)
      return true
    } catch (error) {
      if (attempt === retries - 1) {
        throw error
      }
      await page.waitForTimeout(1000)
    }
  }
  return false
}

/**
 * Navigate via dropdown menu with retry logic
 */
export async function navigateViaDropdown(
  page: Page,
  dropdownTrigger: string,
  linkName: string,
  retries = 3,
): Promise<boolean> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      // Hover over the dropdown trigger
      const trigger = page.getByText(dropdownTrigger).first()
      await trigger.waitFor({ state: "visible", timeout: 10000 })
      await trigger.hover()

      // Wait for dropdown to appear
      await page.waitForTimeout(500)

      // Click the link
      const link = page.getByRole("link", { name: linkName })
      await link.waitFor({ state: "visible", timeout: 5000 })
      await link.click()

      await waitForPageLoad(page)
      return true
    } catch (error) {
      if (attempt === retries - 1) {
        throw error
      }
      // Reset state before retry
      await page.mouse.move(0, 0)
      await page.waitForTimeout(1000)
    }
  }
  return false
}
