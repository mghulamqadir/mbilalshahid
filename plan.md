# Bilal Shahid — Master Build Prompt v3

Portfolio, CMS and free-consultation booking. This merges the creative direction of the 'Growth Is Engineered' prompt with the CMS and booking engineering of Master Plan v2, with the known issues fixed. Where older documents conflict with this one, this one wins.

## 0. Operating rules for the coding agent

1. **Build, don't describe.** Work in the stages in §12. At every stage gate run build, lint, type-check and tests, and inspect rendered pages at 375, 768 and 1440 px before moving on.
2. **Never invent proof.** Every metric comes from §4 or the supplied PDF. If a screenshot, portrait, logo or number is missing, use a clearly labeled editable placeholder (`TODO_ASSET`) and list it in the final handoff. Never generate fake dashboard screenshots, testimonials, logos, awards or team members.
3. **Decisions.** Where this document states a default, use it and record it in `DECISIONS.md`. Ask the owner only if work is truly blocked.
4. **Pin versions.** Record exact Node, Next.js, React, Tailwind, Motion and CMS versions. Read the current docs for caching, auth and CMS APIs before using them; do not rely on memory.
5. **No payments, anywhere.** No checkout, pricing tables, invoices, deposits, subscriptions or payment SDKs. Booking event types are free.
6. **Honest wording.** US spelling (jewelry, Seller Center). Footer disclaimer: 'Independent specialist. Not affiliated with, endorsed by, or sponsored by TikTok.'

## 1. Positioning and concept

**Brand:** BS. / GROWTH SYSTEMS. **Concept:** Growth Is Engineered. **Audience:** US DTC founders and heads of e-commerce. **Emotional arc:** Curiosity → Intrigue → Evidence → Confidence → Booked call.

The site must feel like a custom premium studio build, not a template: no smiling-headshot-plus-three-cards layout, no skill bars, no stock photography, no generic gradient landing page. Within five seconds it feels different; within thirty seconds the specialty is clear; within two minutes the visitor has seen credible evidence and a reason to book.

## 2. Design system

| Token | Hex | Use |
| --- | --- | --- |
| Background | `#080A0B` | Dark canvas, nav |
| Surface | `#121617` | Panels, rows |
| Text | `#F5F5F0` | Primary on dark |
| Secondary | `#929A98` | Supporting text on dark |
| Light section | `#F2F1EA` | Deliberate contrast sections |
| Ink | `#121617` | Body text on light |
| Accent | `#C6FF58` | Primary CTA and focused highlights only (about 5% of any screen) |

- **Type:** Geist for display and body, Geist Mono for data labels and coordinates. No other families. Hero `clamp(3rem, 8vw, 8rem)`, reading width 60–75 characters.
- **Layout:** 12 / 8 / 4 column grid, asymmetric compositions, hairline dividers, discreet coordinate labels, terminal-like data panels. Radius 8–16px, used sparingly. Every section gets its own composition; no run of identical cards.
- **Accessibility:** WCAG AA in real combinations; dark text on accent buttons; visible focus rings; no meaning carried by color or motion alone.
- All tokens are CSS variables consumed by Tailwind.

## 3. Routes and homepage narrative

**Public:** `/`, `/results`, `/results/[slug]`, `/services`, `/services/[slug]`, `/how-i-work`, `/about`, `/book`, `/book/confirmed`, `/contact`, `/faq`, `/privacy`, 404. **Admin:** `/admin/login`, `/admin`, plus the collections in §6.

**Homepage order**

1. **Nav:** `BS. / GROWTH SYSTEMS`, Work, Services, Process, About, and a dominant `Book a Call ↗`. Transparent, becoming a lightly blurred surface after scroll. Mobile drawer with a persistent contact action.
2. **Hero.** Eyebrow `TIKTOK SHOP × CREATOR COMMERCE × E-COMMERCE` (admin toggle swaps in `AVAILABLE FOR SELECT PROJECTS` only when confirmed). Headline: `I DON'T JUST MANAGE SHOPS.` / `I BUILD GROWTH ENGINES.` with the second line as the visual event. Support copy: 'Helping US DTC brands build creator-led commerce through TikTok Shop operations, affiliate activation, strategic sampling, and performance-focused execution.' CTAs: `Book a Free Consultation ↗` and `Explore My Work`.
   - **Signature visual:** an original SVG composition of a growth operating system (creator-activation cards, affiliate nodes, sample-to-content workflow lines, mono labels). It may show only §4 figures, each with a period label. No fake live data, orders or sales events.
3. **The numbers speak:** four metrics, each labeled by case and period (rules in §4). Count-up on viewport entry, with the final value present in HTML.
4. **The work:** `FIVE BRANDS. REAL EXECUTION. MEASURABLE OUTCOMES.` Desktop (≥1024px): sticky storytelling where the visual stays pinned, the project index shows progress, and details and metrics transition without layout jumps. Mobile and tablet: vertical stacked stories. Each case opens a real route (`/results/[slug]`), not a modal-only view, so it is shareable and indexable.
5. **Process:** `GROWTH ISN'T GUESSWORK. IT'S A SYSTEM.` Discover → Qualify → Activate → Amplify → Optimize, as an SVG system diagram that highlights connections on scroll (desktop) and becomes a stacked timeline (mobile).
6. **Services:** `YOUR STORE. MY OPERATING SYSTEM.` Six expandable editorial rows (§3a), each linking to its service page.
7. **About:** `THE PERSON BEHIND THE PERFORMANCE.` Facts: 4+ years in e-commerce; last 2 years on TikTok Shop and creator/affiliate programs; US DTC brands across beauty, apparel, jewelry and sports nutrition; operated creator programs across five active shops in parallel. Tools: TikTok Shop Seller Center, Euka, Kalodata, FastMoss, Shopify, UpPromote, LTK, Instagram, Google Sheets, Notion. Designed portrait placeholder if no photo is supplied.
8. **Closing CTA:** `YOUR NEXT GROWTH CHAPTER STARTS HERE.` 'If you're building a serious e-commerce brand and need someone who understands the entire creator-commerce engine, let's talk.' Primary `Book a Free Call ↗` with an inquiry alternative.
9. **FAQ and footer.**

**3a. Services (six, replacing the earlier eight)**

1. Creator Sourcing and Qualification
2. Outreach, Sampling and PR Gifting
3. Affiliate Activation and Retention
4. TikTok Shop Creator Program Management (absorbs general shop operations)
5. Performance Analytics and Reporting
6. TikTok Shop Program Review (a consultation discussion, not a free written deliverable)

Each page covers who it is for, problems solved, responsibilities, relevant cases, what the brand provides, FAQ, `Book a Free Consultation` (to `/book?service=<slug>`) and a secondary `Send Inquiry`. No guarantees such as '10x your sales'.

## 4. Case-study data and proof rules

**Headline rule:** lead each case with the figure attributable to the creator/affiliate program. Total shop GMV may appear only as labeled context, never as the hero number. Never sum figures across cases or periods. Never imply one person caused all revenue.

| # | Case | Period | Reported metrics |
| --- | --- | --- | --- |
| 1 | US Contemporary Apparel (featured) | Nov 18–Dec 23, 2025 | $616,780 creator-attributed GMV; 9,337 items sold; 1,661 creator videos; 210 LIVE streams; 35 daily creators posting; 31 daily creators making sales; $87,469 estimated commission |
| 2 | US Sports Nutrition (featured) | Jun 29–Jul 28, 2026 | $91,030 revenue; 95.47% affiliate-driven; 475 active affiliates; 747 affiliate videos; 1,920 units sold |
| 3 | US Premium Apparel | Jun 1–Jul 29, 2026 | $22.4K affiliate GMV (context: $129K total shop GMV); 3.3M video views; 57.60% post rate; 1,100 orders; 291 videos posted |
| 4 | US Fine Jewelry | Jun 1–Jul 29, 2026 | $11.7K affiliate GMV (context: $14.7K total shop GMV); 40.2K creators reached; 464 samples shipped; 389 videos; 741.3K views; 52.37% post rate |
| 5 | US Beauty | Jun 1–Jul 29, 2026 | $6.2K affiliate GMV (context: $7.5K total shop GMV); 70.4K creators reached; 177.9K initial messages; 188 samples; 221 videos; 229.7K views; 282 orders |

**Proof-strip default (admin-editable within validation):** $616,780 creator-attributed GMV (Nov–Dec 2025); 95.47% affiliate-driven share of $91,030 revenue (Jun–Jul 2026); 475 active affiliates (Sports Nutrition, 30 days); 3.3M video views (Premium Apparel, Jun–Jul 2026). Hover or tap reveals a one-line definition and a link to the case.

**Metric schema (all fields required to publish unless marked optional):**

```ts
type Metric = {
  label: string;
  value: number;                  // display text is DERIVED from value + unit + format, never stored separately
  unit: 'usd' | 'count' | 'percent';
  metricType: 'creator_attributed_gmv' | 'affiliate_gmv' | 'total_shop_gmv' | 'total_revenue' | 'video_views' | 'orders' | 'items_sold' | 'units_sold' | 'videos_posted' | 'samples_shipped' | 'creators_reached' | 'messages_sent' | 'active_affiliates' | 'post_rate' | 'estimated_commission' | 'live_streams' | 'daily_creators';
  period: { from: string; to: string };
  source: 'seller_center_screenshot' | 'portfolio_pdf' | 'owner_confirmed';
  evidenceMediaId?: string;
  footnote?: string;
};
```

Publish is blocked if `metricType`, `period` or `source` is missing. A metric may appear in the homepage proof strip only if it has evidence or an `owner_confirmed` flag.

**Case page template:** hero (sector, anonymous or approved brand label, outcome line, period, Bilal's role) → metric snapshot → challenge (say 'baseline not available' if unknown) → responsibilities → strategy (3–6 steps) → evidence (readable screenshots with captions, alt text, enlarge) → outcomes (explicitly separating total GMV, affiliate GMV, attributed GMV, views, orders, samples) → what changed and what can fairly be learned, with no unsupported ROI → related cases → CTA `Discuss a similar creator program` (to `/book` with the case slug).

Only authorized real quotes. Unnamed clients stay anonymous. Screenshots are used only after permission and redaction (creator handles, buyer and order data).

## 5. Motion

- **Core (always):** staggered headline reveals, count-up numbers, tactile hovers, scroll progress indicator, CSS sticky storytelling at ≥1024px, short intro under 600ms that never blocks content.
- **Enhancement (only on fine pointer, no `prefers-reduced-motion`, no save-data):** cursor-responsive depth in the hero and a magnetic effect on at most two large CTAs. Native cursor is never replaced.
- **Banned:** scroll-jacking, particles, auto-advancing carousels, looping neon effects, meaningless 3D, fake live activity.
- **Implementation:** Motion library plus CSS; GSAP only if CSS sticky plus Motion cannot achieve the pinned story. Animate transform and opacity only; no large backdrop-blur or huge moving shadows; Intersection Observer for reveals. Content is fully readable with JavaScript animation disabled. Test on a throttled mid-tier mobile profile.

## 6. Architecture and data model

**Stack:** Next.js App Router + TypeScript, Tailwind, Motion, Lucide, MongoDB Atlas, Zod, Vitest + Playwright.

**CMS default:** Payload CMS 3 inside the same Next.js app with the MongoDB adapter, because it provides auth, drafts and versions, roles, media, live preview and revalidation hooks out of the box. Verify its current docs. If Payload is rejected, hand-build the same model: each editable type stores `draft` and `published` snapshots plus a generic `contentRevisions` collection.

**Rule: every editable public type has the same draft → published → revision model.** That includes caseStudies, services, pages and the globals below. Save Draft never changes public output.

| Collection or global | Notes |
| --- | --- |
| `caseStudies` | metrics (schema above), blocks, sector, period, role, media refs, SEO, featured, sortOrder, status |
| `services` | six records, deliverables, FAQs, related cases, bookEnabled, SEO |
| `pages` | about, how-i-work, faq, privacy (one source, no 'or') |
| globals: `homepage`, `siteSettings`, `navigation` | hero copy, section order and visibility, proof-strip refs, contact details, `showPhone` (default false), footer, SEO defaults |
| `mediaAssets` | alt, caption, width/height, usage tracking; public derivatives only |
| `leads` | name, email, brand, website, reason, message, source/UTM, consent, status, notes, timestamps |
| `bookingRecords` | provider, providerBookingId, previousBookingId?, eventTypeId, leadId?, guest, start/end, timezone, status, serviceSlug?, caseSlug?, utm, updatedAt |
| `processedWebhooks` | provider + derived dedupe key |
| `events` | server-side inquiry and booking events only |
| `publishRetries` | failed revalidations awaiting retry |
| `slugRedirects` | from, to, resourceType |
| `adminUsers` | allow-listed emails, role: `owner` or `editor` |

**Roles:** `owner` (publish, settings, users) and optional `editor` (drafts only). Use only these two names everywhere.

**Content seed:** a single typed file `content/seed.ts` holds all §3–§4 content and an idempotent script seeds the database. In development the site may fall back to the seed if the database is empty; never in production.

## 7. Publishing and caching

1. Admin edits and **Save Draft** (validated server-side with Zod, revision recorded, audit logged). Public pages unchanged.
2. **Preview** uses draft mode or a short-lived signed token; response is `noindex` and `no-store`.
3. **Publish** (owner only) validates required fields, alt text and metric rules, promotes the draft, records a revision, then invalidates tags (`case-studies`, `case-study:<slug>`, `home`, `services`, `navigation`, `sitemap`) using the caching API of the pinned Next.js version.
4. The UI says 'Published' only after the database write succeeds. If revalidation fails, write a `publishRetries` record, warn that public pages may be stale, and offer `Retry publish` with automatic retry.
5. **Slug change:** store a redirect, flatten chains, prevent loops, update canonical and sitemap. Resolve redirects in a server function that can use the Mongo driver (not edge middleware), per the pinned version's supported runtime.
6. **Unpublish or archive:** return 404 (or 410), remove from listings, homepage and sitemap. Deletion is soft by default.
7. **Concurrent edits:** optimistic `version` check with a clear conflict screen; never overwrite silently.
8. Reuse one cached MongoDB client; no per-request connections. If self-hosting multiple instances, configure a shared cache handler, or document the limitation.

## 8. Booking (free consultations)

- **Provider:** Cal.com embed (lazy-loaded) with custom booking questions (name, work email, brand, website/Shop URL, category, challenge). The provider owns availability, conflicts, calendar sync, confirmations and reminders. Set availability windows with US time zones in mind.
- **Event types:** one free Intro Call (30 minutes) by default; an optional second event type 'TikTok Shop Growth Discussion'.
- **Context:** `/book?service=` and case slug and UTM are validated against allow-lists, then passed to the provider as prefill or metadata so they land in `bookingRecords`.
- **Webhook:** verify the signature against the raw body (check the provider's current header and algorithm), then process idempotently. Do not assume a unique event ID: derive the dedupe key from provider + booking uid + trigger + payload timestamp. Handle out-of-order events. A reschedule may create a new booking uid; link it through `previousBookingId` and mark the old record `rescheduled`.
- **States:** `pending_provider` → `confirmed` → `rescheduled` / `cancelled` / `completed` / `no_show`. Only provider events (or reconciliation) set `confirmed` or `cancelled`. Admin can add notes and mark `completed` or `no_show`, never force `confirmed`.
- **Reconciliation:** a daily scheduled job plus an admin `Sync now` button list recent bookings from the provider API and repair drift. Failures raise a dashboard alert.
- **Confirmation page:** `/book/confirmed?ref=<opaque token>` shows a pending state (poll about 30 seconds) until the webhook is processed, then confirmed. It never trusts the URL alone and never exposes booking details without the token.
- **Lead linkage:** on confirmation, upsert a lead by normalized email and set status `call_booked`.
- **Fallback:** if slots are unavailable or the integration is down, show `No suitable time? Send an inquiry`. Never imply a meeting is booked.
- Admin can pause booking site-wide and show the inquiry form instead.

## 9. Contact and leads

- Form: required full name, work email, brand, reason; optional website, category, stage, challenge. Marketing consent is separate and unchecked.
- Flow: client validation → Zod server validation → Turnstile (or similar) + rate limit using a shared store (Upstash Redis or Mongo TTL, not in-memory) → lead created → owner email notification → visitor success state with loading, success and error states.
- Lead states: `new`, `reviewed`, `qualified`, `call_booked`, `closed`, `not_a_fit`, with a notes history. Dedupe by normalized email within a recent window without losing the new message.
- **Contact details:** seed `bilalshahid1609@gmail.com` and render it as a working `mailto:` (lightly obfuscated against scrapers). Seed the phone number as an editable setting with `showPhone: false` by default; when enabled render a working `tel:`. Recommend moving to a branded domain email at launch.

## 10. Admin

- **Auth:** allow-list only (`ADMIN_EMAILS` env, no public sign-up); first owner bootstrapped from the allow-list. Require MFA (passkey, TOTP, or an OAuth provider with enforced 2FA). Role checks enforced server-side on every mutation.
- **Dashboard:** show only data that exists: new inquiries, upcoming confirmed calls, drafts, last published items, provider-sync alerts, failed publishes. Quick actions: New Case Study, Edit Homepage, Upload Screenshot, View Bookings.
- **Analytics:** use a cookieless, privacy-friendly provider (Plausible or PostHog); the admin links to its dashboard rather than rebuilding charts. Store only server-confirmed inquiry and booking events in `events`. Never infer a booking from a CTA click or a success URL.
- **Media:** S3-compatible storage or Cloudinary; MIME and size checks; strip EXIF; reject or sanitize SVG; require alt text to publish; originals stay private and only redacted derivatives are served.
- **Editor:** structured blocks (`richText`, `metricGrid`, `image`, `imageGallery`, `twoColumn`, `processSteps`, `quote`, `videoLink`, `resultsTable`, `cta`), reorderable, with sanitized output only.
- Activity log of who changed what; restore from revision.

## 11. SEO, accessibility, performance and privacy

- Server-rendered public pages, per-page metadata, canonical URLs, Open Graph images, sitemap (published only), robots rules, `Person` / `ProfessionalService` JSON-LD with no fabricated reviews. Admin pages are `noindex` and authenticated.
- Keyboard-usable navigation, forms, rows and gallery; reduced-motion experience; touch targets ≥44px; no horizontal overflow at 320, 375, 430, 768, 1024, 1440 and 1920px. Note that the third-party booking embed's accessibility is limited, so provide the inquiry alternative.
- Targets (not guarantees): LCP ≤2.5s p75, CLS ≤0.1, INP ≤200ms; `next/image`, `next/font`, lazy-loaded booking.
- Privacy: concrete retention (leads 24 months unless converted; booking records 24 months), deletion on request, privacy page matching real data flows, and a consent approach matching the chosen analytics. Secrets are server-only. Verify backups (Atlas free tier does not provide them; use a paid tier before launch).

## 12. Build stages and gates

1. **Stage 1 — Foundation and full public site.** Project setup, tokens, all public pages rendered from the typed seed, responsive and accessible, SEO. *Gate:* clean build, no console or hydration warnings, visual check at all breakpoints.
2. **Stage 2 — CMS and publishing.** Collections, auth, media, preview, publish, revalidation, redirects, retries. *Gate:* a sixth case can be drafted, previewed and published with no code or redeploy; save-draft leaves public output unchanged.
3. **Stage 3 — Booking and leads.** Provider integration, webhook, reconciliation, confirmation page, inquiry form, admin lists. *Gate:* a real free booking is confirmed, rescheduled and cancelled with correct admin status, and replayed webhooks change nothing.
4. **Stage 4 — Motion, polish and QA.** Signature hero, sticky story, process diagram, performance, accessibility audit, end-to-end tests.

**Definition of done:** five source-aligned cases seeded and verified; every editable type follows draft → publish; metric rules enforced; a new image can be uploaded, assigned and published; unpublish removes content from listings and sitemap; booking, cancellation and inquiry flows verified; admin is private and MFA-protected; no payment code or routes exist; Lighthouse targets met or deviations documented.

## 13. Handoff

Provide source code, run and deploy instructions, `.env.example`, `DECISIONS.md`, the seed file, instructions for replacing the portrait and screenshots, and a short list of remaining assets and decisions: domain and email, portrait, screenshot permissions and redaction, Cal.com event IDs, analytics choice, and legal text.

## 14. Complete portfolio flow

### 14.1 Master visitor flow

```
[Entry: search | shared case link | referral | social | direct]
        |
        v
[Landing: / , /results/[slug] , /services/[slug]]
        |   5-second test: who he helps, what he does, proof, next step
        v
[Proof strip] --> [The Work: sticky story] --> [Case page /results/[slug]]
        |                                          |
        |                                          +--> CTA: Discuss a similar creator program
        v                                          v
[Process] --> [Services rows] --> [Service page] --> /book?service=slug
        |
        v
[About] --> [FAQ] --> [Closing CTA]
        |
        v
   DECISION
   |                         |
   v                         v
/book (pick a slot)     /contact (inquiry)
   |                         |
   v                         v
Provider confirms       Lead saved + owner email
   |                         |
   v                         v
/book/confirmed         Success state + expected reply time
```

**Flow rules**

- Every page has the persistent nav with `Book a Call`, and every page ends with a next step (never a dead end).
- Deep links (a shared case, a service page) must work as standalone entry points: they carry their own context, a short 'who is Bilal' strip, and a booking CTA.
- The booking CTA is always reachable within one tap on mobile (compact sticky bar after the hero).
- Inquiry is always offered next to booking, so a visitor with no suitable time is never stuck.

### 14.2 Journeys by visitor type

| Visitor | Entry | Path | Decision moment | Conversion |
| --- | --- | --- | --- | --- |
| US DTC founder | Referral or search | Home → numbers → featured apparel case → About → Book | 'Did he personally run this, and is the number honest?' (period, metric type and role labels answer it) | Free Intro Call |
| Head of e-commerce | Shared case link | Case page → evidence screenshots → Process → Services → Book | 'Can he operate and report?' (responsibilities + evidence) | Intro Call with service preselected |
| Marketing manager | Search for affiliate management | Service page → related case → How I Work → Contact | 'What is included, what do you need from us?' | Inquiry or call |
| Brand in early launch | Direct | Home → Services → Program Review → Book | 'Can we start with an assessment?' | Program Review discussion |
| Referral lead | Link from a friend | About → Work → Book | Quick credibility check | Book or email |

### 14.3 Section-by-section flow (homepage)

| # | Section | Visitor goal | What happens | Next step |
| --- | --- | --- | --- | --- |
| 1 | Hero | Understand who and what in 5 seconds | Headline reveal, system visual settles, CTAs visible without scrolling | Book, or scroll cue |
| 2 | The numbers speak | Believe it | Four labeled metrics count up on entry; hover or tap shows definition | Link to case |
| 3 | The work | See the evidence | Sticky story steps through five cases; index rail shows progress | Open case page |
| 4 | Process | Understand how he works | Five stages highlight on scroll | Services |
| 5 | Services | Match a need | Expandable rows with responsibilities and related cases | Service page or Book |
| 6 | About | Trust the person | Facts, tools, portrait | Book |
| 7 | Closing CTA | Decide | Large headline, Book plus Inquiry | Booking or form |
| 8 | FAQ and footer | Resolve objections | Accordion, contact, disclaimer, privacy | Book |

### 14.4 Booking flow with branches

1. Visitor taps any `Book` CTA. The context (service slug, case slug, UTM) is validated against allow-lists and carried to `/book`.
2. `/book` shows purpose, duration, time zone note, what to prepare, and the lazy-loaded scheduler.
3. Visitor picks a slot (shown in their own time zone) and completes the booking questions.
4. **Success branch:** provider confirms → verified webhook → booking record → lead upserted as `call_booked` → `/book/confirmed?ref=<token>` shows a pending state until verified, then the confirmed state with add-to-calendar and reschedule links. Provider sends email and reminders.
5. **Slot-taken branch:** the provider returns the visitor to slot selection with a clear message; no confirmation is shown.
6. **Provider-down branch:** the embed fails to load → show `No suitable time? Send an inquiry` with the form inline.
7. **Abandoned branch:** the visitor leaves mid-flow → no record is created; only the click and widget-open events exist.
8. **Cancel or reschedule:** done through provider links; webhooks update the admin status; a nightly sync repairs missed events.

### 14.5 Inquiry flow

Form (required: name, work email, brand, reason) → client validation → server validation → spam check and rate limit → lead created → owner notified → on-page success state with expected reply window → lead appears in the admin board as `new`. Errors never lose the typed message; the visitor can retry or use the mailto fallback.

### 14.6 Admin publishing flow

Login (MFA) → pick content → edit → **Save Draft** (public unchanged) → **Preview** (private) → **Publish** (owner) → public pages revalidate → **View Live**. Failure at any step shows what failed and what is still live; failed revalidation shows `Retry publish`. Full rules are in §7.

### 14.7 Edge and failure states

| Situation | Behavior |
| --- | --- |
| JavaScript animation fails or is disabled | All content and final metric values are readable; layouts remain intact |
| `prefers-reduced-motion` | No parallax, count-up shows final values, reveals become instant, sticky story still works as plain scroll |
| Booking paused in admin | Booking CTAs become `Send Inquiry`; `/book` shows the form |
| Case unpublished or slug changed | Redirect to the new slug, or a helpful 404 with links back to Work |
| Case has no screenshot yet | Designed placeholder labeled as pending; metrics still show with source label |
| Slow network or low-end phone | Static layout first, heavy visuals lazy-loaded, enhancements skipped |
| Form submit fails | Inline error, message preserved, retry plus mailto fallback |

### 14.8 Measurement points

| Event | Trigger | Source |
| --- | --- | --- |
| `case_study_opened` | Case page view | Client |
| `case_study_scrolled_75` | 75% scroll on a case page | Client |
| `booking_cta_clicked` | Any Book CTA (with placement) | Client |
| `booking_widget_opened` | Scheduler loads | Client |
| `booking_confirmed_by_provider` | Verified webhook | Server |
| `booking_cancelled_by_provider` | Verified webhook | Server |
| `inquiry_submitted` | Lead saved | Server |

A click or a visit to the confirmation URL is never counted as a booking.

## 15. UI plan

### 15.1 Layout foundations

| Item | Spec |
| --- | --- |
| Grid | 12 columns desktop (≥1024px), 8 tablet (640–1023px), 4 mobile; gutters 24 / 20 / 16px |
| Container | Max width 1360px; side margins 48px desktop, 32px tablet, 20px mobile |
| Section padding | `clamp(80px, 12vw, 160px)` top and bottom |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px |
| Display type | `clamp(3rem, 8vw, 8rem)`, line-height 0.95, tracking -0.03em |
| H2 / H3 | `clamp(2.25rem, 5vw, 4.5rem)` / `clamp(1.5rem, 2.5vw, 2rem)` |
| Body | 1rem mobile, 1.125rem desktop, line-height 1.6, max 70 characters |
| Mono label | 0.75rem, uppercase, tracking 0.08em, Geist Mono |
| Dividers | 1px hairlines at 12% text opacity |
| Rhythm | Dark → light → dark → light → dark → light → dark, each change tied to a story beat |

**Accent rule:** lime is a fill or highlight, never body text on a light section (it fails contrast there). On light sections use ink text and lime only as a highlight block behind dark text.

### 15.2 Section layouts

**Hero (dark, minimum 100svh)**

```
DESKTOP (12 col)
+--------------------------------------------------------------+
| BS. / GROWTH SYSTEMS      Work Services Process About  [Book]|
|--------------------------------------------------------------|
| EYEBROW (mono)                          coord label (mono)   |
|                                                              |
| I DON'T JUST MANAGE SHOPS.          +-----------------------+|
| I BUILD GROWTH ENGINES.  (cols 1-8) | SVG system visual     ||
|                                     | cards + nodes (7-12)  ||
| support copy (cols 1-5)             +-----------------------+|
| [Book a Free Consultation] [Explore My Work]   scroll cue    |
+--------------------------------------------------------------+
MOBILE: nav -> eyebrow -> headline -> 3-card simplified visual -> copy -> stacked full-width CTAs
```

The headline overlaps the visual slightly on desktop; the second line carries the accent through a highlight underline and staggered reveal. On mobile the visual shrinks to three static cards.

**Numbers (light)**

- Desktop: four metrics in an asymmetric row of unequal widths, oversized digits (display scale), mono label with case and period beneath, hairline between items.
- Mobile: one metric per row, full width, label above the digit.
- Hover (desktop) or tap (mobile) opens a small definition panel with a `View case` link.

**The work (dark, sticky story)**

```
DESKTOP
+--------+---------------------------+--------------------------+
| 01     |  STICKY STAGE (cols 2-7)  |  DETAIL COLUMN (cols 8-12)|
| 02     |  case visual + big label  |  category / period        |
| 03     |  pinned, swaps on scroll  |  context sentence         |
| 04     |                           |  3-4 metric rows          |
| 05     |                           |  [Read full case]         |
+--------+---------------------------+--------------------------+
index rail (col 1)            scrolls through five detail blocks
MOBILE: each case is a stacked block: visual, metrics, summary, Read case (no pinning)
```

Each case has its own composition (a distinct SVG glyph and a mono code such as `APPAREL-Q4`) with a very low-opacity tint glow, not a new accent color. The featured Apparel case gets a larger stage and appears first.

**Process (light)**

- Desktop: five nodes on a horizontal path; connecting line draws as the visitor scrolls; the active node enlarges and reveals a short description and an operational artifact label (for example, 'creator scoring sheet') only when it is real.
- Mobile: vertical timeline, one stage per block, line fills as you scroll.

**Services (dark)**

- Six rows, each 96px collapsed: number, title (large), arrow.
- Expanded: two columns, responsibilities list on the left; related case chip, problem solved, and `Book a Free Consultation` plus `View service` on the right.
- Only one row open at a time; opens in about 350ms; hover shifts the title right by 8px and colors the arrow with the accent.

**About (light)**

- Portrait frame in cols 1–4 (designed placeholder until supplied), narrative copy in cols 6–12.
- Facts as a mono list with hairlines. Tools as a plain text list (no third-party logos).
- Mobile: portrait, then copy, then facts, then tools.

**Closing CTA (dark)**

- Full-width oversized headline, support copy, primary `Book a Free Call` with a magnetic hover (desktop), and an inquiry link. Email and an optional phone line sit in a mono footer strip.

**Case page `/results/[slug]`**

- Hero: sector tag, outcome headline, period, role chips, cover asset.
- Sticky side summary (desktop): metric snapshot and Book CTA; stacks below the hero on mobile.
- Body blocks: challenge, responsibilities, strategy steps, evidence frames, outcomes table, learning, related cases.
- Evidence frames show screenshot, caption, source label, and an enlarge control (keyboard accessible lightbox).
- Ends with `Discuss a similar creator program` plus the next case.

### 15.3 Component inventory

| Component | Variants and states |
| --- | --- |
| `Nav` | transparent, scrolled (blurred surface), mobile drawer |
| `MobileBookBar` | appears after hero, hides when the booking embed or keyboard is active |
| `Button` | primary (lime), secondary (outline), ghost; sizes M and L; hover, focus, pressed, loading, disabled |
| `MetricDisplay` | default, counting, reduced-motion final, with definition panel |
| `CaseIndexRail` | inactive, active, progress |
| `CaseStage` | per-case composition, transition in and out |
| `EvidenceFrame` | image, placeholder, caption, enlarge |
| `ProcessDiagram` | desktop path, mobile timeline, active node |
| `ServiceRow` | collapsed, hover, expanded |
| `PortraitFrame` | image or placeholder |
| `BookingEmbed` | loading, ready, error fallback |
| `InquiryForm` | idle, invalid, submitting, success, error |
| `FAQAccordion` | closed, open, focus |
| `ScrollProgress` | thin top bar |
| `Section`, `MonoLabel`, `Footer`, `Toast` | shared primitives |

### 15.4 Motion spec

| Interaction | Duration | Easing | Notes |
| --- | --- | --- | --- |
| Hover and focus feedback | 180ms | ease-out | transform and color only |
| Headline reveal | 600ms, 60ms stagger per word | `cubic-bezier(0.22, 1, 0.36, 1)` | content stays in the DOM |
| Metric count-up | 1400ms | ease-out | final value rendered in HTML |
| Case stage swap | 450ms | same as above | cross-fade plus 16px shift, no layout jump |
| Service row expand | 350ms | ease-in-out | height animated with transform-safe technique |
| Process line draw | scroll-linked | linear | one active node at a time |
| Intro | under 600ms | ease-out | never blocks interaction |
| Hero depth (desktop only) | continuous, 8px max travel | spring | disabled on touch and reduced motion |

### 15.5 Responsive behavior

| Breakpoint | Behavior |
| --- | --- |
| 320–430px | Single column, stacked case stories, full-width CTAs, MobileBookBar, no sticky pinning, simplified hero visual |
| 768px | Two-column where it helps, process as vertical timeline, sticky stage disabled |
| 1024px | Full sticky story, horizontal process, hero visual enabled |
| 1440px and 1920px | Container capped at 1360px; larger type and more negative space, no stretched content |

No horizontal overflow at any width. Touch targets are at least 44px.

### 15.6 Interaction states

- **Focus:** 2px lime outline with 2px offset on dark, ink outline on light.
- **Forms:** labels always visible, inline error under the field with an icon and text, success announced through a live region.
- **Loading:** skeletons matching final layout for case media and the booking embed; no spinners over content.
- **Empty and error:** every list has a designed empty state (for example, 'No results yet'); every error has plain language and a next action.

### 15.7 Admin UI plan

```
+---------+--------------------------------------------------------+
| Sidebar | Top bar: environment | search | View live | account     |
| Dashboard|-------------------------------------------------------|
| Cases   |  CASE EDITOR                                           |
| Services| +------------+---------------------+----------------+ |
| Pages   | | Block list | Editing canvas      | Inspector      | |
| Media   | | (reorder)  | (live structure)    | metrics, SEO,  | |
| Bookings| |            |                     | status, slug   | |
| Leads   | +------------+---------------------+----------------+ |
| Settings| Sticky bar: Save Draft | Preview | Publish | View Live |
+---------+--------------------------------------------------------+
```

- **Dashboard:** cards for new inquiries, upcoming calls, drafts, last published, alerts. Quick actions on top.
- **Density:** compact and calm, using the same tokens in a light or dark theme that follows the system; Geist at 14px for tables and forms.
- **Editor safeguards:** unsaved-changes warning, visible draft versus live badge, version conflict screen, metric rows highlight any missing type, period or source, and publish is disabled until required fields pass.
- **Media library:** grid with alt-text status, usage list, and a redaction reminder on upload.
- **Bookings and leads:** filterable tables with status chips; booking status cannot be set to confirmed manually.

### 15.8 UI deliverables and QA

- Figma (or equivalent) with tokens, components and states, desktop and mobile frames for home, case page, service page, booking, confirmation, contact and admin editor.
- Visual QA at 320, 375, 430, 768, 1024, 1440 and 1920px; keyboard-only walkthrough of nav, services rows, forms and lightbox; screen-reader pass on metrics and process diagram; reduced-motion pass; throttled mobile performance pass.
- Acceptance: the five-second test (a stranger can say who he helps and what he does), no clipped or overlapping text at any breakpoint, and every metric on screen carries its type and period.
