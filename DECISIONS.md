# Architecture decisions

## Runtime and deployment

- Node 24.22.0 and exact application dependency versions are pinned in `package.json`, `.nvmrc`, and `.node-version`.
- Next.js and Payload share one Vercel deployment. Payload uses the Node runtime and MongoDB Atlas.
- Public content has a typed seed fallback during local development. Production publishing is Payload-backed; seed fallback must not mask an unavailable production database.

## Content integrity

- Anonymized case studies use only the supplied periods and figures. Total shop GMV is labeled as context, not creator-attributed output.
- Portraits and evidence remain visible `TODO_ASSET` placeholders until approved files and redaction consent exist.
- The public metric representation stores numeric value, unit, type, period, and provenance. Display strings are derived.

## Consultation requests

- The site has no calendar integration or automated scheduler. `/book` hands visitors to the inquiry flow and calls are arranged personally.
- Inquiry notifications use Brevo without a background retry service. The saved inquiry remains the source of truth if delivery fails.
- Payments are deliberately absent.

## Security and privacy

- Admin TOTP secrets are encrypted using AES-256-GCM.
- Admin creation is environment allow-listed. Local password login is blocked unless TOTP is configured and supplied through the dedicated secure sign-in route.
- Leads receive a 24-month retention timestamp. Deployment must create the Atlas TTL index described in the README.
- Media uses signed direct-to-Cloudinary uploads, authenticated originals, strict raster MIME and size checks, and required alt text.
- Public form abuse is constrained with expiring MongoDB-backed IP rate limits; no third-party challenge widget is used.
- Brevo sends transactional email. Delivery failures require manual follow-up from the saved inquiry.
- The public site does not load third-party analytics.

## Outstanding production decisions

- Final domain and branded sending address.
- Approved portrait and redacted case evidence.
- Confirmed legal/privacy review and controller address.
- Atlas paid tier/backups and regional placement.
- Brevo sender/domain verification and transactional API key.
