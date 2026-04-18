import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json());

const requiredEnvVars = ["SMTP_USER", "SMTP_PASS", "MAIL_TO"];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS?.replace(/\s+/g, ""),
    },
  });

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sendMail = async ({ subject, replyTo, text, html }) => {
  if (missingEnvVars.length > 0) {
    throw new Error(`Missing email configuration: ${missingEnvVars.join(", ")}`);
  }

  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Maiitreyaa Website" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    replyTo,
    subject,
    text,
    html,
  });
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body ?? {};

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "Please fill in all contact form fields." });
  }

  try {
    await sendMail({
      subject: `New Contact Form Message: ${subject}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return res.status(500).json({ error: "Email sending failed. Please check the mail server settings." });
  }
});

app.post("/api/careers", async (req, res) => {
  const { name, email, phone, category, jobTitle, message } = req.body ?? {};

  if (!name || !email || !phone || !category || !jobTitle) {
    return res.status(400).json({ error: "Please fill in all required application fields." });
  }

  try {
    await sendMail({
      subject: `New Job Application: ${jobTitle}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Category: ${category}`,
        `Job Title: ${jobTitle}`,
        "",
        "Message:",
        message || "No message provided.",
      ].join("\n"),
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Category:</strong> ${escapeHtml(category)}</p>
        <p><strong>Job Title:</strong> ${escapeHtml(jobTitle)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No message provided.").replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Career email failed:", error);
    return res.status(500).json({ error: "Application sending failed. Please check the mail server settings." });
  }
});

app.listen(port, () => {
  console.log(`Mail server listening on http://localhost:${port}`);
});
