# TheVision Infotech

Official website for TheVision Infotech — a Chennai digital agency covering UI/UX, web design, web development, SEO, digital marketing, and video.

## Stack

- React + TypeScript
- TanStack Start / Vite
- Tailwind CSS
- Motion (Framer Motion)
- Contact API with Zod validation
- Optional SMTP via Nodemailer
- Prepared for PostgreSQL later (the site does not require a database to run)

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run typecheck` — TypeScript
- `npm run preview` — serve the production build

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `EMAIL_HOST` | SMTP host. Leave empty to accept enquiries without sending email. |
| `EMAIL_PORT` | SMTP port (default `587`) |
| `EMAIL_USER` | SMTP username |
| `EMAIL_PASSWORD` | SMTP password |
| `CONTACT_EMAIL` | Inbox that receives enquiries |
| `FRONTEND_ORIGIN` | CORS origin for `POST /api/contact` |

Do not commit secrets. If SMTP is not configured, the contact form still validates and stores the enquiry in memory for the running process.

## Contact API

`POST /api/contact`

```json
{
  "name": "Aisha",
  "email": "aisha@example.com",
  "phone": "+91 90000 00000",
  "company": "Studio",
  "service": "Web Development",
  "message": "We need a new marketing site."
}
```

Success:

```json
{ "success": true, "message": "Message sent successfully." }
```

Error:

```json
{ "success": false, "message": "Unable to send your message." }
```

## Updating content

Company details live in `src/config/site.ts`.

| What | File |
| --- | --- |
| Services | `src/data/services.ts` |
| Projects | `src/data/projects.ts` |
| Team | `src/data/team.ts` |
| Technologies | `src/data/technologies.ts` |
| FAQ | `src/data/faq.ts` |
| Process | `src/data/process.ts` |
| Principles | `src/data/principles.ts` |
| SEO / marketing / video | `src/data/growth.ts` |

Social links: set URLs in `site.social`. Empty values hide the icons so nothing is broken.

## Images

Place files under `public/images/`:

```
public/images/
  logo/thevision-infotech.png
  favicon/favicon.png
  team/santosh.webp
  team/rakesh.webp
  team/shiva.webp
  team/abhishak.webp
  team/rajprasath.webp
  projects/celestique.webp
  projects/krio.webp
  projects/valam.webp
  projects/ganapathi.webp
  projects/meridian.webp
```

Team image paths are configured in `src/data/team.ts`. Project image paths are in `src/data/projects.ts`. If an image is missing, the layout still holds a designed empty frame.

## Future PostgreSQL

The contact handler in `src/server/contact.ts` is isolated so a `contact_submissions` table can be added later:

`id`, `name`, `email`, `phone`, `company`, `service`, `message`, `created_at`

The public website does not depend on a database today.
