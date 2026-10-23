import { test, expect } from "@playwright/test";

test.describe("Public Portfolio Navigation & Content", () => {
  test("Homepage loads with headline, proof metrics and portrait", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Bilal Shahid/i);

    // Verify main headline matches TikTok Shop positioning
    const heading = page.locator("h1");
    await expect(heading).toContainText(/Scale on TikTok Shop|Turning Attention/i);

    // Verify verified proof metrics
    await expect(page.locator("text=$616.8K").first()).toBeVisible();
    await expect(page.locator("text=95.47%").first()).toBeVisible();
    await expect(page.locator("text=3.3M").first()).toBeVisible();

    // Verify portrait image is present in hero
    const portrait = page.locator('img[alt*="Bilal Shahid"]').first();
    await expect(portrait).toBeVisible();
  });

  test("Results page lists all 5 case studies and filters work", async ({ page }) => {
    await page.goto("/results");
    await expect(page.locator("h1")).toContainText(/TikTok Shop Case Studies/i);
    await page.waitForSelector('[data-hydrated="true"]');

    // Verify 5 case study cards
    const cards = page.locator("article.card-editorial");
    await expect(cards).toHaveCount(5);

    // Click 'Apparel (2)' filter
    await page.locator("button", { hasText: "Apparel (2)" }).click();
    await expect(page.locator("article.card-editorial")).toHaveCount(2);

    // Click 'All Sectors' filter
    await page.locator("button", { hasText: /All Sectors/i }).click();
    await expect(page.locator("article.card-editorial")).toHaveCount(5);
  });

  test("Individual case dossier loads with metrics and lightbox", async ({ page }) => {
    await page.goto("/results/contemporary-apparel-q4");
    await expect(page.locator("h1")).toContainText(/Scaling Creator-Driven Q4 GMV/i);
    await expect(page.locator("text=$616,780.87").first()).toBeVisible();
    await expect(page.locator("text=@be.lush")).toBeVisible();

    // Wait for hydration & open lightbox
    await page.waitForSelector('button[data-hydrated="true"]');
    const proofButton = page.locator('button[data-hydrated="true"]').first();
    await proofButton.scrollIntoViewIfNeeded();
    await proofButton.click();
    await expect(page.locator('div[role="dialog"]')).toBeVisible();

    // Dismiss with Escape key
    await page.keyboard.press("Escape");
    await expect(page.locator('div[role="dialog"]')).not.toBeVisible();
  });

  test("Services page renders all 6 capability pillars and packages", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText(/TikTok Shop Growth Services|Full-Funnel Commerce Services/i);
    await expect(page.locator("text=Creator Sourcing & Scoring")).toBeVisible();
    await expect(page.locator("text=Multichannel Commerce Integration")).toBeVisible();
  });

  test("About page displays timeline and MBA credential", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("text=Technisia")).toBeVisible();
    await expect(page.locator("text=COMSATS University")).toBeVisible();
    await expect(page.locator("text=MBA — Marketing & Branding")).toBeVisible();
  });

  test("Contact page renders form and FAQ", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("h1")).toContainText(/Request a Free Growth Audit|Start a Conversation|Let's Discuss Your TikTok Shop Growth/i);
    await expect(page.locator('input[placeholder="Jane Doe"]')).toBeVisible();
    await expect(page.locator("text=Common Questions")).toBeVisible();
  });

  test("Resume page renders and includes PDF download link", async ({ page }) => {
    await page.goto("/resume");
    await expect(page.locator("h1")).toContainText(/Bilal Shahid/i);
    const downloadLink = page.locator('a[href="/docs/bilal-shahid-resume.pdf"]').first();
    await expect(downloadLink).toBeVisible();
  });
});
