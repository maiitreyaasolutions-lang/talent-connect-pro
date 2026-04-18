import { buildCareerMail, buildContactMail, sendMail } from "./mail.js";

const methodNotAllowed = (res) => res.status(405).json({ error: "Method not allowed." });

export const handleHealth = async (req, res) => {
  if (req.method && req.method !== "GET") {
    return methodNotAllowed(res);
  }

  return res.status(200).json({ ok: true });
};

export const handleContact = async (req, res) => {
  if (req.method && req.method !== "POST") {
    return methodNotAllowed(res);
  }

  const { name, email, phone, subject, message } = req.body ?? {};

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "Please fill in all contact form fields." });
  }

  try {
    await sendMail(buildContactMail({ name, email, phone, subject, message }));
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return res.status(500).json({ error: "Unable to send your message right now." });
  }
};

export const handleCareer = async (req, res) => {
  if (req.method && req.method !== "POST") {
    return methodNotAllowed(res);
  }

  const { name, email, phone, category, jobTitle, message } = req.body ?? {};

  if (!name || !email || !phone || !category || !jobTitle) {
    return res.status(400).json({ error: "Please fill in all required application fields." });
  }

  try {
    await sendMail(buildCareerMail({ name, email, phone, category, jobTitle, message }));
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Career email failed:", error);
    return res.status(500).json({ error: "Unable to submit your application right now." });
  }
};
