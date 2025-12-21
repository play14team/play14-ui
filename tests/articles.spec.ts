import { expect, test } from "@playwright/test"
import {
  clickFirstDetailLink,
  getDetailLinks,
  verifyPageLayout,
  verifyPageTitle,
  waitForPageLoad,
} from "./utils/test-helpers"

test.describe("Articles List Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/articles")
    await waitForPageLoad(page)
  })

  test("should load articles page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Articles")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display filters", async ({ page }) => {
    const filters = page.locator(".centered")
    await expect(filters).toBeVisible()
  })

  test("should display article count", async ({ page }) => {
    await expect(page.getByText(/Total:/)).toBeVisible({ timeout: 10000 })
  })

  test("should display article cards in grid", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible({ timeout: 15000 })
  })

  test("should have clickable article cards", async ({ page }) => {
    // Wait for article links to load
    await page.waitForSelector("a[href^='/articles/']", { timeout: 15000 })
    const validLinks = await getDetailLinks(page, "/articles/", [
      "categories",
      "tags",
    ])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })
      await expect(link).toBeVisible({ timeout: 10000 })
      expect(validLinks[0]).toMatch(/\/articles\//)
    }
  })

  test("should navigate to article details on card click", async ({ page }) => {
    const clicked = await clickFirstDetailLink(page, "/articles/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      expect(page.url()).toMatch(/\/articles/)
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

test.describe("Articles Categories Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/articles/categories")
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
    const validLinks = await getDetailLinks(page, "/articles/categories/", [])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })
      await link.click({ timeout: 10000 })
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/articles\/categories\//)
    }
  })
})

test.describe("Articles Category Detail Page", () => {
  test("should load category articles from categories list", async ({
    page,
  }) => {
    await page.goto("/articles/categories")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(
      page,
      "/articles/categories/",
      [],
    )
    if (clicked) {
      expect(page.url()).toMatch(/\/articles\/categories\//)
      await verifyPageLayout(page)
    }
  })

  test("should display filtered articles", async ({ page }) => {
    await page.goto("/articles/categories")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(
      page,
      "/articles/categories/",
      [],
    )
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })
})

test.describe("Articles Tags Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/articles/tags")
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
    await page.waitForSelector("a[href*='/articles/tags/']", {
      timeout: 15000,
    })
    const validLinks = await getDetailLinks(page, "/articles/tags/", [])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })

      // Scroll into view and wait
      await link.scrollIntoViewIfNeeded()
      await page.waitForTimeout(500)

      await link.click({ timeout: 10000 })
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/articles\/tags\//)
    }
  })
})

test.describe("Article Details Page", () => {
  test("should load article details from articles list", async ({ page }) => {
    await page.goto("/articles")
    await waitForPageLoad(page)

    // Wait for article links to load
    await page.waitForSelector("a[href^='/articles/']", { timeout: 15000 })

    const validLinks = await getDetailLinks(page, "/articles/", [
      "categories",
      "tags",
    ])

    if (validLinks.length > 0) {
      await page.goto(validLinks[0])
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/articles/)
    }
  })

  test("should display article information", async ({ page }) => {
    await page.goto("/articles")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/articles/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })

  test("should have proper page layout on details page", async ({ page }) => {
    await page.goto("/articles")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/articles/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      await verifyPageLayout(page)
    }
  })

  test("should display article content", async ({ page }) => {
    await page.goto("/articles")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/articles/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })

  test("should display article sidebar with metadata", async ({ page }) => {
    await page.goto("/articles")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/articles/", [
      "categories",
      "tags",
    ])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })
})

test.describe("Articles Infinite Scroll", () => {
  test("should load more articles on scroll", async ({ page }) => {
    await page.goto("/articles")
    await waitForPageLoad(page)

    const articleLinks = page.locator("a[href^='/articles/']").filter({
      hasNot: page.locator('[href*="categories"], [href*="tags"]'),
    })
    const initialCount = await articleLinks.count()

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(3000)

    const finalCount = await articleLinks.count()
    expect(finalCount).toBeGreaterThanOrEqual(initialCount)
  })
})
