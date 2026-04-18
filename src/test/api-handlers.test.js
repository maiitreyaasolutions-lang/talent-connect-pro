import { beforeEach, describe, expect, it, vi } from "vitest";

const sendMailMock = vi.fn();

vi.mock("../../lib/mail.js", async () => {
  const actual = await vi.importActual("../../lib/mail.js");
  return {
    ...actual,
    sendMail: sendMailMock,
  };
});

const { handleCareer, handleContact, handleHealth } = await import("../../lib/api-handlers.js");

const createRes = () => {
  const res = {
    statusCode: 200,
    body: undefined,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };

  return res;
};

describe("api handlers", () => {
  beforeEach(() => {
    sendMailMock.mockReset();
  });

  it("returns health status", async () => {
    const res = createRes();

    await handleHealth({ method: "GET" }, res);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });

  it("sends contact email for valid contact requests", async () => {
    const res = createRes();

    await handleContact(
      {
        method: "POST",
        body: {
          name: "Abhishek",
          email: "maiitreyaasolutions@gmail.com",
          phone: "9783057734",
          subject: "Testing",
          message: "Hello from the test suite.",
        },
      },
      res,
    );

    expect(sendMailMock).toHaveBeenCalledOnce();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ success: true });
  });

  it("rejects incomplete contact requests", async () => {
    const res = createRes();

    await handleContact(
      {
        method: "POST",
        body: {
          name: "Abhishek",
          email: "maiitreyaasolutions@gmail.com",
        },
      },
      res,
    );

    expect(sendMailMock).not.toHaveBeenCalled();
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: "Please fill in all contact form fields." });
  });

  it("surfaces send failures as a user-safe contact error", async () => {
    const res = createRes();
    sendMailMock.mockRejectedValueOnce(new Error("smtp failed"));

    await handleContact(
      {
        method: "POST",
        body: {
          name: "Abhishek",
          email: "maiitreyaasolutions@gmail.com",
          phone: "9783057734",
          subject: "Testing",
          message: "Hello from the test suite.",
        },
      },
      res,
    );

    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ error: "Unable to send your message right now." });
  });

  it("sends career email for valid career requests", async () => {
    const res = createRes();

    await handleCareer(
      {
        method: "POST",
        body: {
          name: "Abhishek",
          email: "maiitreyaasolutions@gmail.com",
          phone: "9783057734",
          category: "Skilled",
          jobTitle: "Electrician",
          message: "Interested in the role.",
        },
      },
      res,
    );

    expect(sendMailMock).toHaveBeenCalledOnce();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ success: true });
  });
});
