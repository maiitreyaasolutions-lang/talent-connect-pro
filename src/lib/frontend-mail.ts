import emailjs from "@emailjs/browser";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type CareerPayload = {
  name: string;
  email: string;
  phone: string;
  category: string;
  jobTitle: string;
  message?: string;
};

const EMAIL_TO = "maiitreyaasolutions@gmail.com";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId:
    import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  careerTemplateId:
    import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const canUseEmailJsTemplate = (templateId?: string) =>
  Boolean(emailJsConfig.serviceId && templateId && emailJsConfig.publicKey);

const sendWithEmailJs = async (templateId: string, templateParams: Record<string, string>) => {
  await emailjs.send(
    emailJsConfig.serviceId!,
    templateId,
    {
      to_email: EMAIL_TO,
      ...templateParams,
    },
    { publicKey: emailJsConfig.publicKey! },
  );
};

const missingEmailJsError = () =>
  new Error(
    "Email sending is not configured yet. Add the EmailJS environment values to enable direct form submission.",
  );

export const sendContactEmail = async (data: ContactPayload) => {
  if (canUseEmailJsTemplate(emailJsConfig.contactTemplateId)) {
    await sendWithEmailJs(emailJsConfig.contactTemplateId!, {
      name: data.name,
      email: data.email,
      title: data.subject,
      form_type: "contact",
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      job_title: "",
      category: "",
      message: data.message,
    });
    return { mode: "emailjs" as const };
  }
  throw missingEmailJsError();
};

export const sendCareerEmail = async (data: CareerPayload) => {
  if (canUseEmailJsTemplate(emailJsConfig.careerTemplateId)) {
    const careerSubject = `Career Application: ${data.jobTitle}`;

    await sendWithEmailJs(emailJsConfig.careerTemplateId!, {
      name: data.name,
      email: data.email,
      title: careerSubject,
      form_type: "career",
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      category: data.category,
      subject: careerSubject,
      job_title: data.jobTitle,
      message: data.message || "No message provided.",
    });
    return { mode: "emailjs" as const };
  }
  throw missingEmailJsError();
};
