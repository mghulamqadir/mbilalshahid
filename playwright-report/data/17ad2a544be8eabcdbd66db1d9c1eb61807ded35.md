# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: public.spec.ts >> Public Portfolio Navigation & Content >> Individual case dossier loads with metrics and lightbox
- Location: tests\e2e\public.spec.ts:40:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[data-hydrated="true"]') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Bilal ShahidTikTok Shop & Creator Commerce" [ref=e4] [cursor=pointer]:
        - /url: /
      - navigation [ref=e5]:
        - link "Home" [ref=e6] [cursor=pointer]:
          - /url: /
        - link "Work" [ref=e7] [cursor=pointer]:
          - /url: /results
        - link "Services" [ref=e8] [cursor=pointer]:
          - /url: /services
        - link "Process" [ref=e9] [cursor=pointer]:
          - /url: /process
        - link "About" [ref=e10] [cursor=pointer]:
          - /url: /about
        - link "Resume" [ref=e11] [cursor=pointer]:
          - /url: /resume
        - link "Contact" [ref=e12] [cursor=pointer]:
          - /url: /contact
      - link "Let's Talk" [ref=e14] [cursor=pointer]:
        - /url: /contact
      - button "Toggle navigation menu" [ref=e19]
  - main [ref=e21]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Case Studies" [ref=e25] [cursor=pointer]:
          - /url: /results
        - text: /Contemporary Apparel Brand (US)
      - generic [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e28]: Contemporary Apparel Brand (US)
          - text: Nov 18 – Dec 23, 2025 (Q4 peak)CASE-01
        - heading "Scaling Creator-Driven Q4 GMV with Daily Posting Cadence & LIVE Streams" [level=1] [ref=e29]
        - paragraph [ref=e30]: Managed the creator engine during the highest-intent shopping window of the year. Layered high-volume outreach with a LIVE-heavy creator strategy to drive consistent daily sales.
        - generic [ref=e31]:
          - generic [ref=e32]: Verified Headline Outcome$616,780 Creator-Attributed GMV
          - generic [ref=e33]:
            - text: "Role:"
            - strong [ref=e34]: TikTok Shop Creator Engine & Live Coordination
    - generic [ref=e36]:
      - heading "Observed Program KPIs & Metrics" [level=2] [ref=e37]
      - generic [ref=e38]:
        - generic [ref=e39]:
          - generic [ref=e40]: $616,780.87Creator-Attributed GMV
          - generic [ref=e41]: Internally reported Seller Center metric
        - generic [ref=e42]:
          - generic [ref=e43]: $87,469.10Estimated Commission
          - generic [ref=e44]: Generated for participating creators
        - generic [ref=e45]:
          - generic [ref=e46]: 9.3KCreator-Attributed Items Sold
          - generic [ref=e47]: 2025-11-18 to 2025-12-23
        - generic [ref=e48]:
          - generic [ref=e49]: 1.7KCreator Videos Posted
          - generic [ref=e50]: 2025-11-18 to 2025-12-23
        - generic [ref=e51]:
          - generic [ref=e52]: 210LIVE Streams Held
          - generic [ref=e53]: 2025-11-18 to 2025-12-23
        - generic [ref=e54]:
          - generic [ref=e55]: 35Daily Creators Posting
          - generic [ref=e56]: Daily active poster baseline
        - generic [ref=e57]:
          - generic [ref=e58]: 31Daily Creators Making Sales
          - generic [ref=e59]: Daily converting creator baseline
    - generic [ref=e62]:
      - generic [ref=e63]:
        - generic [ref=e64]:
          - heading "The Operational Challenge" [level=3] [ref=e65]
          - paragraph [ref=e66]: During the Q4 holiday peak, organic reach alone is insufficient without predictable creator output. The brand needed high video cadence and continuous LIVE streaming representation from trusted creators.
        - generic [ref=e67]:
          - heading "The Creator & Commerce Strategy" [level=3] [ref=e68]
          - paragraph [ref=e69]: Recruited and mobilized a dedicated roster of daily-posting creators and live hosts. Synced product drops with TikTok Shop Seller Center promotions, ensuring 35 daily creators active and 31 daily creators closing sales.
          - generic [ref=e70]:
            - heading "Core Operational Responsibilities" [level=4] [ref=e71]
            - generic [ref=e72]: Creator outreach at scale during Q4 peak
            - generic [ref=e75]: LIVE seller coordination and stream scheduling
            - generic [ref=e78]: Daily creator posting accountability
            - generic [ref=e81]: Commission structuring and fast payouts
            - generic [ref=e84]: Seller Center performance monitoring
        - generic [ref=e87]:
          - heading "Operating Takeaway" [level=4] [ref=e88]
          - paragraph [ref=e89]: “High-intent shopping windows reward consistent multi-creator presence over one-off virality. Daily sales from 31 creators compounded to generate over $616K in creator-attributed GMV.”
        - generic [ref=e90]:
          - generic [ref=e92]:
            - heading "Dashboard Proof & Evidence" [level=3] [ref=e93]
            - paragraph [ref=e94]: Direct platform exports. Click any screenshot to open the high-resolution lightbox.
          - 'button "Enlarge proof image: TikTok Shop Seller Center Q4 Performance Dashboard" [ref=e96]':
            - generic [ref=e97]:
              - img "TikTok Shop Seller Center Q4 Performance Dashboard" [ref=e98]
              - generic [ref=e99]: Click to expand ↗
            - generic [ref=e100]:
              - heading "TikTok Shop Seller Center Q4 Performance Dashboard" [level=4] [ref=e101]
              - paragraph [ref=e102]: Official Seller Center dashboard showing $616,780.87 in creator-attributed GMV, 9,337 items sold, 1,661 videos, 210 LIVE streams, and $87,469 commission.
      - generic [ref=e103]:
        - generic [ref=e104]:
          - heading "Featured Creators & Affiliates" [level=4] [ref=e105]
          - paragraph [ref=e106]: Creators active during this campaign period.
          - generic [ref=e107]:
            - generic [ref=e108]: "@be.lushTop Q4 revenue and high engagement UGC"
            - generic [ref=e110]: "@heyitsamber4Consistent daily posting and conversion"
            - generic [ref=e112]: "@sharpafedcProduct styling and live stream closer"
            - generic [ref=e114]: "@jp.field.testedHigh AOV bundle converter"
        - generic [ref=e116]:
          - text: Data & Integrity Disclosure
          - paragraph [ref=e117]: Metrics reflect reported platform values from TikTok Shop Seller Center and Kalodata during Bilal Shahid's active tenure (Nov 18 – Dec 23, 2025 (Q4 peak)).
          - paragraph [ref=e118]: Total shop GMV and creator-attributed GMV are maintained as distinct metrics.
        - generic [ref=e119]:
          - text: Next Case Study
          - heading "Sports Nutrition Brand (US)" [level=4] [ref=e120]
          - paragraph [ref=e121]: Building an Affiliate-First Engine Generating 95.47% Creator-Driven Revenue
          - link "View dossier" [ref=e122] [cursor=pointer]:
            - /url: /results/sports-nutrition-affiliate-first
    - generic [ref=e126]:
      - text: Consultation & Operating Partnerships
      - heading "Ready to build a stronger TikTok Shop growth engine?" [level=2] [ref=e127]
      - paragraph [ref=e128]: Whether you are launching a new shop from scratch or need an experienced operator to scale daily creator output and affiliate GMV, let's evaluate your program.
      - generic [ref=e129]:
        - link "Start a Conversation" [ref=e130] [cursor=pointer]:
          - /url: /contact
        - link "Email Directly" [ref=e134] [cursor=pointer]:
          - /url: mailto:bilalshahid1609@gmail.com
  - contentinfo [ref=e138]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - generic [ref=e142]:
            - text: Bilal Shahid
            - paragraph [ref=e143]: TikTok Shop & creator commerce operator for US & UK DTC brands. Turning creator attention into predictable, profitable revenue systems.
          - generic [ref=e144]:
            - link "bilalshahid1609@gmail.com" [ref=e145] [cursor=pointer]:
              - /url: mailto:bilalshahid1609@gmail.com
            - 'link "WhatsApp: +92 304 453 9673" [ref=e149] [cursor=pointer]':
              - /url: https://wa.me/923044539673
        - generic [ref=e154]:
          - heading "Navigation" [level=4] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Home" [ref=e158] [cursor=pointer]:
                - /url: /
            - listitem [ref=e159]:
              - link "Work" [ref=e160] [cursor=pointer]:
                - /url: /results
            - listitem [ref=e161]:
              - link "Services" [ref=e162] [cursor=pointer]:
                - /url: /services
            - listitem [ref=e163]:
              - link "Process" [ref=e164] [cursor=pointer]:
                - /url: /process
            - listitem [ref=e165]:
              - link "About" [ref=e166] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e167]:
              - link "Resume" [ref=e168] [cursor=pointer]:
                - /url: /resume
            - listitem [ref=e169]:
              - link "Contact" [ref=e170] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e171]:
          - heading "Core Capabilities" [level=4] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]: • Creator Sourcing & Aesthetic Scoring
            - listitem [ref=e175]: • Seeding Logistics & PR Follow-Through
            - listitem [ref=e176]: • Affiliate Marketplace Retention & Tiered Commissions
            - listitem [ref=e177]: • TikTok Shop Seller Center & GMV Max Ads
            - listitem [ref=e178]: • Multichannel Sync (Shopify & Amazon)
            - listitem [ref=e179]: • Kalodata & Funnel Diagnostics
      - generic [ref=e180]:
        - paragraph [ref=e181]: Independent specialist. Not affiliated with, endorsed by, or sponsored by TikTok.
        - generic [ref=e182]:
          - link "Privacy Disclosure" [ref=e183] [cursor=pointer]:
            - /url: /privacy
          - link "Resume (PDF)" [ref=e184] [cursor=pointer]:
            - /url: /resume
          - generic [ref=e185]: © 2026 Bilal Shahid. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Public Portfolio Navigation & Content", () => {
  4  |   test("Homepage loads with headline, proof metrics and portrait", async ({ page }) => {
  5  |     await page.goto("/");
  6  |     await expect(page).toHaveTitle(/Bilal Shahid/i);
  7  | 
  8  |     // Verify main headline
  9  |     const heading = page.locator("h1");
  10 |     await expect(heading).toContainText(/Turning Attention Into/i);
  11 | 
  12 |     // Verify verified proof metrics
  13 |     await expect(page.locator("text=4+").first()).toBeVisible();
  14 |     await expect(page.locator("text=$616K").first()).toBeVisible();
  15 |     await expect(page.locator("text=475").first()).toBeVisible();
  16 | 
  17 |     // Verify portrait image is present
  18 |     const portrait = page.locator('img[alt*="Bilal Shahid portrait"]').first();
  19 |     await expect(portrait).toBeVisible();
  20 |   });
  21 | 
  22 |   test("Results page lists all 5 case studies and filters work", async ({ page }) => {
  23 |     await page.goto("/results");
  24 |     await expect(page.locator("h1")).toContainText(/TikTok Shop Case Studies/i);
  25 |     await page.waitForSelector('[data-hydrated="true"]');
  26 | 
  27 |     // Verify 5 case study cards
  28 |     const cards = page.locator("article.card-editorial");
  29 |     await expect(cards).toHaveCount(5);
  30 | 
  31 |     // Click 'Apparel (2)' filter
  32 |     await page.locator("button", { hasText: "Apparel (2)" }).click();
  33 |     await expect(page.locator("article.card-editorial")).toHaveCount(2);
  34 | 
  35 |     // Click 'All Sectors' filter
  36 |     await page.locator("button", { hasText: "All Sectors" }).click();
  37 |     await expect(page.locator("article.card-editorial")).toHaveCount(5);
  38 |   });
  39 | 
  40 |   test("Individual case dossier loads with metrics and lightbox", async ({ page }) => {
  41 |     await page.goto("/results/contemporary-apparel-q4");
  42 |     await expect(page.locator("h1")).toContainText(/Scaling Creator-Driven Q4 GMV/i);
  43 |     await expect(page.locator("text=$616,780.87").first()).toBeVisible();
  44 |     await expect(page.locator("text=@be.lush")).toBeVisible();
  45 | 
  46 |     // Wait for hydration & open lightbox
> 47 |     await page.waitForSelector('button[data-hydrated="true"]');
     |                ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  48 |     const proofButton = page.locator('button[data-hydrated="true"]').first();
  49 |     await proofButton.scrollIntoViewIfNeeded();
  50 |     await proofButton.click();
  51 |     await expect(page.locator('div[role="dialog"]')).toBeVisible();
  52 | 
  53 |     // Dismiss with Escape key
  54 |     await page.keyboard.press("Escape");
  55 |     await expect(page.locator('div[role="dialog"]')).not.toBeVisible();
  56 |   });
  57 | 
  58 |   test("Services page renders all 6 capability pillars", async ({ page }) => {
  59 |     await page.goto("/services");
  60 |     await expect(page.locator("h1")).toContainText(/Full-Funnel Commerce Services/i);
  61 |     await expect(page.locator("text=Creator Sourcing & Scoring")).toBeVisible();
  62 |     await expect(page.locator("text=Multichannel Commerce Integration")).toBeVisible();
  63 |   });
  64 | 
  65 |   test("About page displays timeline and MBA credential", async ({ page }) => {
  66 |     await page.goto("/about");
  67 |     await expect(page.locator("text=Technisia")).toBeVisible();
  68 |     await expect(page.locator("text=COMSATS University")).toBeVisible();
  69 |     await expect(page.locator("text=MBA — Marketing & Branding")).toBeVisible();
  70 |   });
  71 | 
  72 |   test("Contact page renders form and FAQ", async ({ page }) => {
  73 |     await page.goto("/contact");
  74 |     await expect(page.locator("h1")).toContainText(/Start a Conversation/i);
  75 |     await expect(page.locator('input[placeholder="Jane Doe"]')).toBeVisible();
  76 |     await expect(page.locator("text=Common Questions")).toBeVisible();
  77 |   });
  78 | 
  79 |   test("Resume page renders and includes PDF download link", async ({ page }) => {
  80 |     await page.goto("/resume");
  81 |     await expect(page.locator("h1")).toContainText(/Bilal Shahid/i);
  82 |     const downloadLink = page.locator('a[href="/docs/bilal-shahid-resume.pdf"]').first();
  83 |     await expect(downloadLink).toBeVisible();
  84 |   });
  85 | });
  86 | 
```