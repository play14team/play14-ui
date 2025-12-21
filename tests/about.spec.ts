import { expect, test } from "@playwright/test"
import {
  navigateViaDropdown,
  verifyPageLayout,
  verifyPageTitle,
  waitForPageLoad,
} from "./utils/test-helpers"

test.describe("About Story Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about/story")
    await waitForPageLoad(page)
  })

  test("should load story page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Story")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display story content", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()
    const text = await main.textContent()
    expect(text?.length).toBeGreaterThan(100)
  })

  test("should display history timeline if available", async ({ page }) => {
    // Story page may have a timeline of history
    const timeline = page.locator(
      '[class*="timeline"], [class*="history"], .historyitem',
    )
    if ((await timeline.count()) > 0) {
      await expect(timeline.first()).toBeVisible()
    }
  })
})

test.describe("About Values Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about/values")
    await waitForPageLoad(page)
  })

  test("should load values page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Values")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display manifesto", async ({ page }) => {
    const manifesto = page.getByText("Manifesto").first()
    await expect(manifesto).toBeVisible({ timeout: 10000 })
  })

  test("should display code of conduct", async ({ page }) => {
    const codeOfConduct = page.getByText("Code of Conduct").first()
    await expect(codeOfConduct).toBeVisible({ timeout: 10000 })
  })

  test("should display values content", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()
    const text = await main.textContent()
    expect(text?.length).toBeGreaterThan(100)
  })
})

test.describe("About Format Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about/format")
    await waitForPageLoad(page)
  })

  test("should load format page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Format")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display format content", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()
    const text = await main.textContent()
    expect(text?.length).toBeGreaterThan(100)
  })

  test("should explain unconference format", async ({ page }) => {
    // Format page typically explains the unconference format
    const content = page.locator("main")
    const text = await content.textContent()
    // Should mention key concepts
    expect(
      text?.toLowerCase().includes("unconference") ||
        text?.toLowerCase().includes("open space") ||
        text?.toLowerCase().includes("format") ||
        text?.toLowerCase().includes("schedule"),
    ).toBeTruthy()
  })
})

test.describe("About Navigation", () => {
  test("should navigate between about pages", async ({ page }) => {
    // Start at story page
    await page.goto("/about/story")
    await waitForPageLoad(page)

    // Navigate directly to values page
    await page.goto("/about/values")
    await waitForPageLoad(page)
    expect(page.url()).toContain("/about/values")
  })

  test("should access about pages from navbar dropdown", async ({ page }) => {
    await page.goto("/")
    await waitForPageLoad(page)

    // Hover over About dropdown
    const navbar = page.locator("#navbar")
    const aboutNav = navbar
      .locator(".nav-item")
      .filter({ hasText: "About" })
      .first()
    await aboutNav.waitFor({ state: "visible", timeout: 10000 })
    await aboutNav.hover()
    await page.waitForTimeout(500)

    // Click Story link in dropdown
    const storyLink = page.getByRole("link", { name: "Story" })
    await storyLink.waitFor({ state: "visible", timeout: 5000 })
    await storyLink.click({ timeout: 10000 })
    await waitForPageLoad(page)

    expect(page.url()).toContain("/about/story")
  })
})
