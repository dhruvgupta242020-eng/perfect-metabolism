import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, phone, message } = req.body as {
    name?: string;
    phone?: string;
    message?: string;
  };

  if (!name || !phone) {
    res.status(400).json({ error: "Name and phone are required." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];

  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not set");
    res.status(503).json({ error: "Email service not configured." });
    return;
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Perfect Metabolism <onboarding@resend.dev>",
      to: ["perfectmetabolism@gmail.com"],
      subject: `New Consultation Request — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafaf8; border: 1px solid #e8e0d0; border-radius: 12px;">
          <h2 style="color: #1c1c19; font-size: 22px; margin-bottom: 8px;">New Consultation Request</h2>
          <p style="color: #b8965a; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 24px;">Perfect Metabolism · Website Form</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #6b6b66; font-size: 13px; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #1c1c19; font-size: 15px; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #6b6b66; font-size: 13px;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e8e0d0; color: #1c1c19; font-size: 15px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px 12px 0; color: #6b6b66; font-size: 13px; vertical-align: top;">Goals</td>
              <td style="padding: 12px 0; color: #1c1c19; font-size: 15px;">${message || "Not specified"}</td>
            </tr>
          </table>
          <p style="margin-top: 28px; color: #6b6b66; font-size: 12px;">Submitted via the Perfect Metabolism website. Please follow up within 24 hours.</p>
        </div>
      `,
    });

    req.log.info({ name, phone }, "Consultation request email sent via Resend");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send consultation request email");
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
