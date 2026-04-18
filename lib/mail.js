import nodemailer from "nodemailer";

const requiredEnvVars = ["SMTP_USER", "SMTP_PASS", "MAIL_TO"];

export const getMissingEnvVars = () => requiredEnvVars.filter((key) => !process.env[key]);

export const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS?.replace(/\s+/g, ""),
    },
  });

export const sendMail = async ({ subject, replyTo, text, html }) => {
  const missingEnvVars = getMissingEnvVars();

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

export const buildContactMail = ({ name, email, phone, subject, message }) => ({
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

export const buildCareerMail = ({ name, email, phone, category, jobTitle, message }) => ({
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
