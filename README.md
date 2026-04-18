# Talent Connect Pro

## Email setup

Use these commands during development:

```bash
npm install
npm run dev
```

The frontend runs on `http://localhost:8080`.

This project now uses a frontend-only email flow.

1. If `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_CONTACT_TEMPLATE_ID`, `VITE_EMAILJS_CAREER_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` are configured, the forms send directly with EmailJS from the browser.
2. If those variables are not configured, the form now stays on the page and shows a clear setup error instead of opening the local mail app.

A safe template is available in `.env.example`.

For EmailJS deployments, add these variables in Vercel project settings:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_CAREER_TEMPLATE_ID=your_career_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Suggested EmailJS template variables:

```text
{{to_email}}
{{form_type}}
{{from_name}}
{{from_email}}
{{phone}}
{{subject}}
{{job_title}}
{{category}}
{{message}}
```
