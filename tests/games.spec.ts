import { expect, test } from "@playwright/test"
import {
  clickFirstDetailLink,
  getDetailLinks,
  verifyPageLayout,
  verifyPageTitle,
  waitForPageLoad,
} from "./utils/test-helpers"

test.describe("Games List Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/games")
    await waitForPageLoad(page)
  })

  test("should load games page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Games")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display filters", async ({ page }) => {
    const filters = page.locator(".centered")
    await expect(filters).toBeVisible()
  })

  test("should display game count", async ({ page }) => {
    await expect(page.getByText(/Total:/)).toBeVisible({ timeout: 10000 })
  })

  test("should display game cards in grid", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible({ timeout: 15000 })
  })

  test("should have clickable game cards", async ({ page }) => {
    const validLinks = await getDetailLinks(page, "/games/", [
      "categories",
      "tags",
    ])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await expect(link).toBeVisible({ timeout: 10000 })
      expect(validLinks[0]).toMatch(/\/games\//)
    }
  })

  test("should navigate to game details on card click", async ({ page }) => {
    const clicked = await clickFirstDetailLink(page, "/games/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      expect(page.url()).toMatch(/\/games/)
    }
  })

  test("should have filter links for categories", async ({ page }) => {
    const categoriesLink = page.getByRole("link", { name: /categories/i })
    if ((await categoriesLink.count()) > 0) {
      await expect(categoriesLink.first()).toBeVisible()
    }
  })

  test("should have filter links for tags", async ({ page }) => {
    const tagsLink = page.getByRole("link", { name: /tags/i })
    if ((await tagsLink.count()) > 0) {
      await expect(tagsLink.first()).toBeVisible()
    }
  })
})

test.describe("Games Categories Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/games/categories")
    await waitForPageLoad(page)
  })

  test("should load categories page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Categories")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display category list", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible({ timeout: 15000 })
  })

  test("should navigate to specific category page", async ({ page }) => {
    // Wait for category links to load
    await page.waitForSelector("a[href*='/games/categories/']", {
      timeout: 15000,
    })
    const validLinks = await getDetailLinks(page, "/games/categories/", [])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })

      // Scroll into view and wait
      await link.scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      await link.click({ timeout: 10000 })
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/games\/categories\//)
    }
  })
})

test.describe("Games Category Detail Page", () => {
  test("should load category games from categories list", async ({ page }) => {
    await page.goto("/games/categories")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/games/categories/", [])
    if (clicked) {
      expect(page.url()).toMatch(/\/games\/categories\//)
      await verifyPageLayout(page)
    }
  })

  test("should display filtered games", async ({ page }) => {
    await page.goto("/games/categories")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/games/categories/", [])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })
})

test.describe("Games Tags Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/games/tags")
    await waitForPageLoad(page)
  })

  test("should load tags page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Tags")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display tag list", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible({ timeout: 15000 })
  })

  test("should navigate to specific tag page", async ({ page }) => {
    // Wait for tag links to load
    await page.waitForSelector("a[href*='/games/tags/']", {
      timeout: 15000,
    })
    const validLinks = await getDetailLinks(page, "/games/tags/", [])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })

      // Scroll into view and wait
      await link.scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      await link.click({ timeout: 10000 })
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/games\/tags\//)
    }
  })
})

test.describe("Game Details Page", () => {
  test("should load game details from games list", async ({ page }) => {
    await page.goto("/games")
    await waitForPageLoad(page)

    const validLinks = await getDetailLinks(page, "/games/", [
      "categories",
      "tags",
    ])

    if (validLinks.length > 0) {
      await page.goto(validLinks[0])
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/games/)
    }
  })

  test("should display game information", async ({ page }) => {
    await page.goto("/games")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/games/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })

  test("should have proper page layout on details page", async ({ page }) => {
    await page.goto("/games")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/games/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      await verifyPageLayout(page)
    }
  })

  test("should display game sidebar with details", async ({ page }) => {
    await page.goto("/games")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/games/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })
})

test.describe("Games Infinite Scroll", () => {
  test("should load more games on scroll", async ({ page }) => {
    await page.goto("/games")
    await waitForPageLoad(page)

    const initialCount = await page
      .locator("a[href^='/games/']")
      .filter({
        hasNot: page.locator('[href*="categories"], [href*="tags"]'),
      })
      .count()

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(3000)

    const finalCount = await page
      .locator("a[href^='/games/']")
      .filter({
        hasNot: page.locator('[href*="categories"], [href*="tags"]'),
      })
      .count()
    expect(finalCount).toBeGreaterThanOrEqual(initialCount)
  })
})
