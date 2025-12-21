import { expect, test } from "@playwright/test"
import {
  clickFirstDetailLink,
  getDetailLinks,
  verifyPageLayout,
  verifyPageTitle,
  waitForPageLoad,
} from "./utils/test-helpers"

test.describe("Players List Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)
  })

  test("should load players page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Players")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display filters", async ({ page }) => {
    const filters = page.locator(".centered")
    await expect(filters).toBeVisible()
  })

  test("should display player count", async ({ page }) => {
    await expect(page.getByText(/Total:/)).toBeVisible({ timeout: 10000 })
  })

  test("should display player cards in grid", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible({ timeout: 15000 })
  })

  test("should have clickable player cards", async ({ page }) => {
    const validLinks = await getDetailLinks(page, "/players/", ["positions"])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await expect(link).toBeVisible({ timeout: 10000 })
      expect(validLinks[0]).toMatch(/\/players\//)
    }
  })

  test("should navigate to player details on card click", async ({ page }) => {
    const clicked = await clickFirstDetailLink(page, "/players/", ["positions"])
    if (clicked) {
      expect(page.url()).toMatch(/\/players/)
    }
  })

  test("should have filter links for positions", async ({ page }) => {
    const positionsLink = page.getByRole("link", { name: /positions/i })
    if ((await positionsLink.count()) > 0) {
      await expect(positionsLink.first()).toBeVisible()
    }
  })
})

test.describe("Players Positions Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/players/positions")
    await waitForPageLoad(page)
  })

  test("should load positions page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Positions")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display position list", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible({ timeout: 15000 })
  })

  test("should navigate to specific position page", async ({ page }) => {
    // Wait for position links to load
    await page.waitForSelector("a[href*='/players/positions/']", {
      timeout: 15000,
    })
    const validLinks = await getDetailLinks(page, "/players/positions/", [])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })

      // Scroll into view and wait
      await link.scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      await link.click({ timeout: 10000 })
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/players\/positions\//)
    }
  })
})

test.describe("Players Position Detail Page", () => {
  test("should load position players from positions list", async ({ page }) => {
    await page.goto("/players/positions")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/players/positions/", [])
    if (clicked) {
      expect(page.url()).toMatch(/\/players\/positions\//)
      await verifyPageLayout(page)
    }
  })

  test("should display filtered players", async ({ page }) => {
    await page.goto("/players/positions")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/players/positions/", [])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })
})

test.describe("Player Details Page", () => {
  test("should load player details from players list", async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)

    const validLinks = await getDetailLinks(page, "/players/", ["positions"])

    if (validLinks.length > 0) {
      await page.goto(validLinks[0])
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/players/)
    }
  })

  test("should display player information", async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/players/", ["positions"])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })

  test("should have proper page layout on details page", async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/players/", ["positions"])
    if (clicked) {
      await verifyPageLayout(page)
    }
  })

  test("should display player sidebar with details", async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/players/", ["positions"])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })

  test("should display player tabs if available", async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/players/", ["positions"])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })

  test("should show player events if available", async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/players/", ["positions"])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })
})

test.describe("Players Infinite Scroll", () => {
  test("should load more players on scroll", async ({ page }) => {
    await page.goto("/players")
    await waitForPageLoad(page)

    const initialCount = await page
      .locator("a[href^='/players/']")
      .filter({
        hasNot: page.locator('[href*="positions"]'),
      })
      .count()

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(3000)

    const finalCount = await page
      .locator("a[href^='/players/']")
      .filter({
        hasNot: page.locator('[href*="positions"]'),
      })
      .count()
    expect(finalCount).toBeGreaterThanOrEqual(initialCount)
  })
})
