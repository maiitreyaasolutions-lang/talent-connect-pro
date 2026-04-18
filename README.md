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
