# Talent Connect Pro

## Email setup

This project now sends website form submissions through a local Node mail server.

Use these commands during development:

```bash
npm install
npm run dev:full
```

The frontend runs on `http://localhost:8080` and the mail server runs on `http://localhost:3001`.

Mail credentials are loaded from `.env`. A safe template is available in `.env.example`.

For Vercel deployments, add the same environment variables in the Vercel project settings:

```bash
SMTP_USER=maiitreyaasolutions@gmail.com
SMTP_PASS=your_16_character_gmail_app_password
MAIL_TO=maiitreyaasolutions@gmail.com
```

The production site sends mail through Vercel API routes in `api/`.
