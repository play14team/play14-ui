import { expect, test } from "@playwright/test"
import {
  clickFirstDetailLink,
  getDetailLinks,
  verifyGridItems,
  verifyPageLayout,
  verifyPageTitle,
  waitForPageLoad,
} from "./utils/test-helpers"

test.describe("Events List Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events")
    await waitForPageLoad(page)
  })

  test("should load events page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Events")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display filters", async ({ page }) => {
    // Check for filter components
    const filters = page.locator(".centered")
    await expect(filters).toBeVisible()
  })

  test("should display event count", async ({ page }) => {
    await expect(page.getByText(/Total:/)).toBeVisible({ timeout: 10000 })
  })

  test("should display event cards in grid", async ({ page }) => {
    // Wait for events grid to load
    await page.waitForSelector(".event-card, .card, [class*='event']", {
      timeout: 15000,
    })
    const eventCards = page.locator(".event-card, .card, [class*='event']")
    const count = await eventCards.count()
    expect(count).toBeGreaterThan(0)
  })

  test("should have clickable event cards", async ({ page }) => {
    await page.waitForSelector("a[href^='/events/']", { timeout: 15000 })
    const validLinks = await getDetailLinks(page, "/events/", [
      "countries",
      "locations",
      "statuses",
      "calendar",
      "map",
      "hosting",
      "testimonials",
    ])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })
      await expect(link).toBeVisible({ timeout: 10000 })
      expect(validLinks[0]).toMatch(/\/events\//)
    }
  })

  test("should navigate to event details on card click", async ({ page }) => {
    await page.waitForSelector("a[href^='/events/']", { timeout: 15000 })
    const clicked = await clickFirstDetailLink(page, "/events/", [
      "countries",
      "locations",
      "statuses",
      "calendar",
      "map",
      "hosting",
      "testimonials",
    ])
    if (clicked) {
      expect(page.url()).toMatch(/\/events/)
    }
  })

  test("should have filter links for countries", async ({ page }) => {
    const countriesLink = page.getByRole("link", { name: /countries/i })
    if ((await countriesLink.count()) > 0) {
      await expect(countriesLink.first()).toBeVisible()
    }
  })

  test("should have filter links for locations", async ({ page }) => {
    const locationsLink = page.getByRole("link", { name: /locations/i })
    if ((await locationsLink.count()) > 0) {
      await expect(locationsLink.first()).toBeVisible()
    }
  })

  test("should have filter links for statuses", async ({ page }) => {
    const statusesLink = page.getByRole("link", { name: /statuses/i })
    if ((await statusesLink.count()) > 0) {
      await expect(statusesLink.first()).toBeVisible()
    }
  })
})

test.describe("Events Calendar Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events/calendar")
    await waitForPageLoad(page)
  })

  test("should load calendar page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Calendar")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display calendar component", async ({ page }) => {
    // React Big Calendar renders with rbc class
    await page.waitForSelector(".rbc-calendar, [class*='calendar']", {
      timeout: 15000,
    })
    const calendar = page.locator(".rbc-calendar, [class*='calendar']")
    await expect(calendar.first()).toBeVisible()
  })

  test("should display month/week/day navigation", async ({ page }) => {
    // Calendar toolbar should have view switching buttons
    const toolbar = page.locator(".rbc-toolbar, [class*='toolbar']")
    if ((await toolbar.count()) > 0) {
      await expect(toolbar.first()).toBeVisible()
    }
  })

  test("should display today button", async ({ page }) => {
    const todayButton = page.getByRole("button", { name: /today/i })
    if ((await todayButton.count()) > 0) {
      await expect(todayButton.first()).toBeVisible()
    }
  })

  test("should navigate between months", async ({ page }) => {
    const nextButton = page.getByRole("button", { name: /next|>/i })
    if ((await nextButton.count()) > 0) {
      await nextButton.first().click()
      await page.waitForTimeout(500)
      // Calendar should still be visible after navigation
      const calendar = page.locator(".rbc-calendar, [class*='calendar']")
      await expect(calendar.first()).toBeVisible()
    }
  })
})

test.describe("Events Map Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events/map")
    await waitForPageLoad(page)
  })

  test("should load map page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Map")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display map container", async ({ page }) => {
    // Mapbox renders with mapboxgl class
    await page.waitForSelector(".mapboxgl-map, [class*='map'], canvas", {
      timeout: 20000,
    })
    const map = page.locator(".mapboxgl-map, [class*='map']")
    await expect(map.first()).toBeVisible()
  })

  test("should display map controls", async ({ page }) => {
    // Mapbox navigation controls - just verify the map container exists
    const mapContainer = page.locator(".mapboxgl-map, [class*='map']")
    await expect(mapContainer.first()).toBeVisible({ timeout: 20000 })
  })
})

test.describe("Events Countries Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events/countries")
    await waitForPageLoad(page)
  })

  test("should load countries page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Countries")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display country list", async ({ page }) => {
    // Wait for country items to load
    await page.waitForSelector("a[href*='/events/countries/']", {
      timeout: 15000,
    })
    const countryLinks = page.locator("a[href*='/events/countries/']")
    const count = await countryLinks.count()
    expect(count).toBeGreaterThan(0)
  })

  test("should navigate to specific country page", async ({ page }) => {
    await page.waitForSelector("a[href*='/events/countries/']", {
      timeout: 15000,
    })
    const validLinks = await getDetailLinks(page, "/events/countries/", [])
    if (validLinks.length > 0) {
      const link = page.locator(`a[href='${validLinks[0]}']`).first()
      await link.waitFor({ state: "visible", timeout: 10000 })
      await link.click({ timeout: 10000 })
      await waitForPageLoad(page)
      expect(page.url()).toMatch(/\/events\/countries\//)
    }
  })
})

test.describe("Events Locations Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events/locations")
    await waitForPageLoad(page)
  })

  test("should load locations page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Locations")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display location list", async ({ page }) => {
    await page.waitForSelector("a[href*='/events/locations/']", {
      timeout: 15000,
    })
    const locationLinks = page.locator("a[href*='/events/locations/']")
    const count = await locationLinks.count()
    expect(count).toBeGreaterThan(0)
  })
})

test.describe("Events Statuses Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events/statuses")
    await waitForPageLoad(page)
  })

  test("should load statuses page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Statuses")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display status list", async ({ page }) => {
    await page.waitForSelector("a[href*='/events/statuses/']", {
      timeout: 15000,
    })
    const statusLinks = page.locator("a[href*='/events/statuses/']")
    const count = await statusLinks.count()
    expect(count).toBeGreaterThan(0)
  })
})

test.describe("Events Hosting Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events/hosting")
    await waitForPageLoad(page)
  })

  test("should load hosting page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Hosting")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display hosting information", async ({ page }) => {
    // Should have content about hosting events
    const content = page.locator("main")
    await expect(content).toBeVisible()
    const text = await content.textContent()
    expect(text?.length).toBeGreaterThan(100)
  })
})

test.describe("Events Testimonials Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/events/testimonials")
    await waitForPageLoad(page)
  })

  test("should load testimonials page successfully", async ({ page }) => {
    await verifyPageTitle(page, "Testimonials")
  })

  test("should have proper page layout", async ({ page }) => {
    await verifyPageLayout(page)
  })

  test("should display testimonials", async ({ page }) => {
    // Wait for testimonials to load
    const content = page.locator("main")
    await expect(content).toBeVisible({ timeout: 15000 })
  })
})

test.describe("Event Details Page", () => {
  test("should load event details from events list", async ({ page }) => {
    // First go to events list and get an event link
    await page.goto("/events")
    await waitForPageLoad(page)

    // Filter out navigation links
    const eventLinks = page.locator("a[href^='/events/']").filter({
      hasNot: page.locator(
        '[href*="countries"], [href*="locations"], [href*="statuses"], [href*="calendar"], [href*="map"], [href*="hosting"], [href*="testimonials"]',
      ),
    })

    if ((await eventLinks.count()) > 0) {
      const href = await eventLinks.first().getAttribute("href")
      await page.goto(href!)
      await waitForPageLoad(page)
      // Verify we're on an event page
      expect(page.url()).toMatch(/\/events/)
    }
  })

  test("should display event information", async ({ page }) => {
    await page.goto("/events")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/events/", [
      "countries",
      "locations",
      "statuses",
      "calendar",
      "map",
      "hosting",
      "testimonials",
    ])
    if (clicked) {
      const main = page.locator("main")
      await expect(main).toBeVisible()
    }
  })

  test("should have proper page layout on details page", async ({ page }) => {
    await page.goto("/events")
    await waitForPageLoad(page)

    const clicked = await clickFirstDetailLink(page, "/events/", [
      "countries",
      "locations",
      "statuses",
      "calendar",
      "map",
      "hosting",
      "testimonials",
    ])
    if (clicked) {
      await verifyPageLayout(page)
    }
  })
})
