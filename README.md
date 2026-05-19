# Beyond Accra Concierge

Luxury travel concierge website for Africa Oil Week delegates.

## Email (Mailtrap)

Each form submission sends **two emails** using separate Mailtrap templates: one to the team and one to the client.

### Sandbox testing

1. Create a Mailtrap **Email Sandbox** and note the **Inbox ID** from the URL.
2. For each of your four templates, open **Integration** → **Email Testing** → select your sandbox.
3. Copy all four template UUIDs into `.env.local`.
4. Run `pnpm dev` and submit a form — emails appear in the sandbox inbox.

```env
MAILTRAP_API_TOKEN=your_sandbox_token
MAILTRAP_USE_SANDBOX=true
MAILTRAP_INBOX_ID=123456
MAILTRAP_TEMPLATE_BOOKING_TEAM_UUID=
MAILTRAP_TEMPLATE_BOOKING_CLIENT_UUID=
MAILTRAP_TEMPLATE_ENQUIRY_TEAM_UUID=
MAILTRAP_TEMPLATE_ENQUIRY_CLIENT_UUID=
```

### Production

Set `MAILTRAP_USE_SANDBOX=false`, use a Sending API token, set a verified `MAIL_FROM_EMAIL`, and point each template’s Integration to **Production**.

### Template variables

Variable names must match your Mailtrap HTML templates (see `concierge_request_*.html`, `enquiry_*.html` in the repo).

**Concierge request (team + guest templates)**

| Variable | Source |
|----------|--------|
| `full_name` | Form: full name |
| `company` | Form: company |
| `email_address` | Form: email |
| `phone_number` | Form: phone |
| `country_of_origin` | Not collected — sends `—` |
| `arrival_services` | Cart: ARRIVAL SERVICES |
| `transportation_services` | Cart: TRANSPORTATION |
| `accommodation` | Cart: ACCOMMODATION (team template) |
| `accommodation_selection` | Cart: ACCOMMODATION (guest template) |
| `experience_selection` | Cart: EXPERIENCES |
| `preferences_and_requirements` | Form: notes |

**Enquiry (team + guest templates)**

| Variable | Source |
|----------|--------|
| `full_name` | Form: full name |
| `company` | Form: company |
| `email_address` | Form: email |
| `phone_number` | Form: phone |
| `message` | Form: message |

## Bot protection (Cloudflare Turnstile)

Forms are protected with [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/).

1. In Cloudflare Dashboard → **Turnstile** → **Add site**.
2. Add your domain(s). For local dev, use `localhost`.
3. Copy the **Site Key** and **Secret Key** into `.env.local`:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

The widget appears on both forms. The API verifies the token before sending email. In production, both keys are required. Locally, if keys are omitted, verification is skipped for easier development.

## Run locally

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```
