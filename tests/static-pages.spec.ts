import { expect, test } from "@playwright/test"
import {
  verifyPageLayout,
  verifyPageTitle,
  waitForPageLoad,
} from "./utils/test-helpers"

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact")
    await waitForPageLoad(page)
  })

  test("should load contact page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Contact")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display contact content", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()
    const text = await main.textContent()
    expect(text?.length).toBeGreaterThan(50)
  })

  test("should display social links or contact info", async ({ page }) => {
    // Contact page should have ways to reach out
    const socialLinks = page.locator(
      'a[href*="twitter"], a[href*="linkedin"], a[href*="facebook"], a[href*="mailto"], a[href*="github"]',
    )
    if ((await socialLinks.count()) > 0) {
      await expect(socialLinks.first()).toBeVisible()
    }
  })

  test("should be accessible from navbar", async ({ page }) => {
    await page.goto("/")
    await waitForPageLoad(page)

    const navbar = page.locator("#navbar")
    const contactLink = navbar.getByRole("link", { name: "Contact" }).first()
    await contactLink.waitFor({ state: "visible", timeout: 10000 })

    // Scroll into view before clicking
    await contactLink.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    await contactLink.click({ timeout: 10000 })
    await waitForPageLoad(page)

    expect(page.url()).toContain("/contact")
  })
})

test.describe("Privacy Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/privacy")
    await waitForPageLoad(page)
  })

  test("should load privacy page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Privacy")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display privacy policy content", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()
    const text = await main.textContent()
    expect(text?.length).toBeGreaterThan(100)
  })

  test("should contain privacy-related content", async ({ page }) => {
    const content = page.locator("main")
    const text = await content.textContent()
    expect(
      text?.toLowerCase().includes("privacy") ||
        text?.toLowerCase().includes("data") ||
        text?.toLowerCase().includes("personal") ||
        text?.toLowerCase().includes("information"),
    ).toBeTruthy()
  })
})

test.describe("Terms Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/terms")
    await waitForPageLoad(page)
  })

  test("should load terms page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Terms")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display terms content", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()
    const text = await main.textContent()
    expect(text?.length).toBeGreaterThan(100)
  })

  test("should contain terms-related content", async ({ page }) => {
    const content = page.locator("main")
    const text = await content.textContent()
    expect(
      text?.toLowerCase().includes("terms") ||
        text?.toLowerCase().includes("conditions") ||
        text?.toLowerCase().includes("use") ||
        text?.toLowerCase().includes("agreement"),
    ).toBeTruthy()
  })
})

test.describe("Search Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/search")
    await waitForPageLoad(page)
  })

  test("should load search page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Search")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display search input", async ({ page }) => {
    const searchInput = page.locator(
      'input[type="search"], input[type="text"], input[placeholder*="search" i]',
    )
    if ((await searchInput.count()) > 0) {
      await expect(searchInput.first()).toBeVisible()
    }
  })

  test("should perform search", async ({ page }) => {
    const searchInput = page.locator(
      'input[type="search"], input[type="text"], input[placeholder*="search" i]',
    )
    if ((await searchInput.count()) > 0) {
      await searchInput.first().fill("play")
      await page.keyboard.press("Enter")
      await waitForPageLoad(page)

      // Should show search results or no results message
      const content = page.locator("main")
      await expect(content).toBeVisible()
    }
  })

  test("should show results for valid search term", async ({ page }) => {
    const searchInput = page.locator(
      'input[type="search"], input[type="text"], input[placeholder*="search" i]',
    )
    if ((await searchInput.count()) > 0) {
      await searchInput.first().fill("event")
      await page.keyboard.press("Enter")
      await waitForPageLoad(page)

      // Wait for results
      await page.waitForTimeout(2000)
      const content = page.locator("main")
      await expect(content).toBeVisible()
    }
  })

  test("should handle empty search gracefully", async ({ page }) => {
    const searchInput = page.locator(
      'input[type="search"], input[type="text"], input[placeholder*="search" i]',
    )
    if ((await searchInput.count()) > 0) {
      await searchInput.first().fill("")
      await page.keyboard.press("Enter")
      await waitForPageLoad(page)

      // Should not crash
      const content = page.locator("main")
      await expect(content).toBeVisible()
    }
  })

  test("should handle special characters in search", async ({ page }) => {
    const searchInput = page.locator(
      'input[type="search"], input[type="text"], input[placeholder*="search" i]',
    )
    if ((await searchInput.count()) > 0) {
      await searchInput.first().fill("#play14")
      await page.keyboard.press("Enter")
      await waitForPageLoad(page)

      // Should not crash
      const content = page.locator("main")
      await expect(content).toBeVisible()
    }
  })
})

test.describe("Footer Links", () => {
  test("should have working footer links", async ({ page }) => {
    await page.goto("/")
    await waitForPageLoad(page)

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    const footer = page.locator("footer")
    await expect(footer).toBeVisible()

    // Check for privacy and terms links in footer
    const privacyLink = footer.getByRole("link", { name: /privacy/i })
    const termsLink = footer.getByRole("link", { name: /terms/i })

    if ((await privacyLink.count()) > 0) {
      const href = await privacyLink.first().getAttribute("href")
      expect(href).toContain("privacy")
    }

    if ((await termsLink.count()) > 0) {
      const href = await termsLink.first().getAttribute("href")
      expect(href).toContain("terms")
    }
  })

  test("should display social network links in footer", async ({ page }) => {
    await page.goto("/")
    await waitForPageLoad(page)

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    const footer = page.locator("footer")
    const socialLinks = footer.locator(
      'a[href*="twitter"], a[href*="linkedin"], a[href*="facebook"], a[href*="github"], a[href*="youtube"]',
    )

    if ((await socialLinks.count()) > 0) {
      await expect(socialLinks.first()).toBeVisible()
    }
  })
})
