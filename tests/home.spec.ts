import { expect, test } from "@playwright/test"
import {
  verifyNavigation,
  verifyPageLayout,
  waitForPageLoad,
} from "./utils/test-helpers"

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
    await waitForPageLoad(page)
  })

  test("should load successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/#play14/)
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display navigation", async ({ page }) => {
    await verifyNavigation(page)
  })

  test("should display title section", async ({ page }) => {
    const titleSection = page.locator("#title")
    await expect(titleSection).toBeVisible()
  })

  test("should display 'What is #play14?' section", async ({ page }) => {
    const summarySection = page.locator("#summary")
    await expect(summarySection).toBeVisible()
    await expect(page.getByText("What is #play14?")).toBeVisible()
    await expect(
      page.getByText("transformative power of play", { exact: false }),
    ).toBeVisible()
  })

  test("should display upcoming events section", async ({ page }) => {
    const upcomingSection = page.locator('section:has-text("upcoming")')
    await expect(upcomingSection).toBeVisible({ timeout: 10000 })
  })

  test("should display 'What to expect?' section", async ({ page }) => {
    await expect(page.getByText("What to expect?")).toBeVisible()
  })

  test("should display gallery section", async ({ page }) => {
    const gallerySection = page.locator("#gallery")
    await expect(gallerySection).toBeVisible({ timeout: 10000 })
  })

  test("should display manifesto and code of conduct", async ({ page }) => {
    // Wait longer for values section to load
    await expect(page.getByText("Our values")).toBeVisible({ timeout: 15000 })
    // Look for manifesto content - use first() to avoid strict mode violation
    const manifestoText = page.getByText("Manifesto").first()
    await expect(manifestoText).toBeVisible({ timeout: 15000 })
  })

  test("should display event map section", async ({ page }) => {
    // Section id has space, use attribute selector
    const mapSection = page.locator('[id="event map"]')
    await expect(mapSection).toBeVisible()
    await expect(page.getByText("Where to find us?")).toBeVisible()
  })

  test("should display benefits section", async ({ page }) => {
    const benefitsSection = page.locator("#benefits")
    await expect(benefitsSection).toBeVisible()
    await expect(page.getByText("What's in it for you?")).toBeVisible()
  })

  test("should have working links to main sections", async ({ page }) => {
    // Check link to players
    await expect(
      page.getByRole("link", { name: /players/i }).first(),
    ).toBeVisible()

    // Check link to games
    await expect(
      page.getByRole("link", { name: /games/i }).first(),
    ).toBeVisible()

    // Check link to events map
    await expect(
      page.getByRole("link", { name: /global event/i }),
    ).toBeVisible()
  })

  test("should display Benjamin Franklin quote", async ({ page }) => {
    await expect(
      page.getByText("Tell me and I forget", { exact: false }),
    ).toBeVisible()
    await expect(page.getByText("Benjamin Franklin")).toBeVisible()
  })

  test("should display Plato quote", async ({ page }) => {
    await expect(
      page.getByText("discover more about a person", { exact: false }),
    ).toBeVisible()
    await expect(page.getByText("Plato")).toBeVisible()
  })

  test("should navigate to events page from navbar", async ({ page }) => {
    const navbar = page.locator("#navbar")
    const eventsLink = navbar
      .getByRole("link", { name: "Events", exact: true })
      .first()
    await eventsLink.waitFor({ state: "visible", timeout: 10000 })

    // Scroll into view before clicking
    await eventsLink.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    await eventsLink.click({ timeout: 10000 })
    await page.waitForLoadState("networkidle", { timeout: 30000 })
    await expect(page).toHaveURL(/\/events/)
  })

  test("should navigate to contact page from navbar", async ({ page }) => {
    const navbar = page.locator("#navbar")
    await navbar.getByRole("link", { name: "Contact" }).first().click()
    await expect(page).toHaveURL(/\/contact/)
  })

  test("should have footer with social links", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    const footer = page.locator("footer")
    await expect(footer).toBeVisible()
  })
})
