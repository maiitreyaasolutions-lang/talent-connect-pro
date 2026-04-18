import { beforeEach, describe, expect, it, vi } from "vitest";

const sendMock = vi.fn();

vi.mock("@emailjs/browser", () => ({
  default: {
    send: sendMock,
  },
}));

describe("frontend email helper", () => {
  beforeEach(() => {
    vi.resetModules();
    sendMock.mockReset();
    vi.unstubAllEnvs();
  });

  it("uses EmailJS for contact submissions when config is present", async () => {
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "service_123");
    vi.stubEnv("VITE_EMAILJS_CONTACT_TEMPLATE_ID", "template_contact");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "public_123");

    const { sendContactEmail } = await import("../lib/frontend-mail");

    const result = await sendContactEmail({
      name: "Abhishek",
      email: "maiitreyaasolutions@gmail.com",
      phone: "9783057734",
      subject: "Testing",
      message: "Hello from vitest.",
    });

    expect(result).toEqual({ mode: "emailjs" });
    expect(sendMock).toHaveBeenCalledWith(
      "service_123",
      "template_contact",
      expect.objectContaining({
        to_email: "maiitreyaasolutions@gmail.com",
        name: "Abhishek",
        email: "maiitreyaasolutions@gmail.com",
        title: "Testing",
        form_type: "contact",
        from_name: "Abhishek",
        from_email: "maiitreyaasolutions@gmail.com",
        phone: "9783057734",
        subject: "Testing",
        message: "Hello from vitest.",
      }),
      { publicKey: "public_123" },
    );
  });

  it("falls back to mailto when EmailJS config is missing", async () => {
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "");
    vi.stubEnv("VITE_EMAILJS_CONTACT_TEMPLATE_ID", "");
    vi.stubEnv("VITE_EMAILJS_CAREER_TEMPLATE_ID", "");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "");

    const { sendContactEmail } = await import("../lib/frontend-mail");

    await expect(
      sendContactEmail({
        name: "Abhishek",
        email: "maiitreyaasolutions@gmail.com",
        phone: "9783057734",
        subject: "Testing",
        message: "Hello from vitest.",
      }),
    ).rejects.toThrow("Email sending is not configured yet.");
  });
});
