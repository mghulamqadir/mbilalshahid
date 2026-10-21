# BS. / Growth Systems

Production portfolio and publishing system for Bilal Shahid. The application uses Next.js 16, React 19, Payload 3, MongoDB Atlas, Cloudinary, and Brevo transactional email. Consultation requests are handled through the inquiry form; there is no automated scheduler, payment, or third-party analytics functionality.

## Local setup

Use Node 24.22.0 in WSL 2 or a native environment. The WSL 1 Windows Node bridge is not supported.

```bash
nvm use
cp .env.example .env.local
npm install
npm run generate:types
npm run generate:importmap
npm run seed
npm run dev
```

MongoDB must be reachable before Payload, seeding, or contact APIs can run. The public seed-rendered pages can still be built without provider credentials. `/book` sends visitors to the inquiry flow so calls can be arranged personally.

## Commands

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```

`npm run seed` is idempotent for cases and services. When all three bootstrap variables are present, it creates the first allow-listed owner with TOTP enabled. `ADMIN_EMAILS` remains the permanent account allow-list; `ADMIN_INITIAL_PASSWORD` and `ADMIN_TOTP_SECRET` are one-time bootstrap values and should be removed from the deployment after the owner account exists.

## Production activation

1. Create a paid MongoDB Atlas deployment in the selected region, enable backups, restrict network access, and set `DATABASE_URI`.
2. Create unique `PAYLOAD_SECRET` and `PREVIEW_SECRET` values. Generate `INTEGRATION_ENCRYPTION_KEY` as exactly 32 random bytes encoded in base64.
3. Verify a Brevo sender/domain, create an API key restricted to transactional email, and configure Cloudinary upload restrictions.
4. Set every `.env.example` variable in Vercel. Do not expose server variables with a `NEXT_PUBLIC_` prefix.
5. Deploy, seed once, and sign in at `/admin-sign-in`.
6. In Atlas, create a TTL index with `expireAfterSeconds: 0` on `rate-limits.expiresAt`. Lead retention timestamps are policy markers; confirm deletions before enabling any automatic 24-month TTL.
7. Test inquiry storage and Brevo delivery before launch. Email failures do not affect the saved inquiry and require manual follow-up from Payload admin.

## Content and assets

Typed source content lives in `src/content/seed.ts`. Payload is the production publishing source; public queries must only request published records. Development may fall back to the typed seed when the database is empty.

The portrait and case evidence are intentionally labeled `TODO_ASSET`. Follow [OUTSTANDING_ASSETS.md](./OUTSTANDING_ASSETS.md) before replacement: obtain permission, redact private data, upload through the signed Cloudinary flow, supply alt text, and publish only a transformed derivative. Never replace these with generated testimonials, logos, identities, or dashboard screenshots.

## Admin and security

- Only emails in `ADMIN_EMAILS` can be created.
- The bootstrap password and TOTP secret exist only to create the first owner without temporarily opening public admin registration. Remove both values after seeding.
- Owners can publish and manage settings; editors can save drafts only.
- Password login is rejected until a user has an encrypted TOTP secret, and every login requires the dedicated TOTP route.
- Admin TOTP secrets use AES-256-GCM encryption at rest.
- Public Payload reads filter to published content. Preview links are signed, short-lived, `noindex`, and `no-store`.
- Public inquiry submissions use MongoDB-backed, expiring IP rate limits.

See [DECISIONS.md](./DECISIONS.md) for architecture and launch decisions.
