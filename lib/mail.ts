import nodemailer from "nodemailer";

interface MailOptions {
  to: string | string[];
  subject: string;
  body: string;
}

const domain = process.env.NEXT_PUBLIC_APP_URL;

export async function sendTwoFactorTokenEmail(email: string, token: string) {
  return sendMail({
    to: email,
    subject: "Two factor authentication code",
    body: `<p>Your two factor authentication code is: ${token}</p>`,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  return sendMail({
    to: email,
    subject: "Reset Your Password",
    body: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
}

export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `${domain}/auth/email-verification?token=${token}`;
  return sendMail({
    to: email,
    subject: "Verify your email",
    body: `<p>Click <a href="${confirmLink}">here</a> to verify your email.</p>`,
  });
}

// ─── Lead Capture Notification ────────────────────────────────────────────────

export interface LeadNotificationData {
  email: string;
  phone: string;
  whatsapp?: string;
  submittedAt: Date;
}

export async function sendLeadNotificationEmail(lead: LeadNotificationData) {
  const ADMIN_EMAILS = [
    "support@samish.ng",
    "",
    process.env.SMTP_EMAIL!,
    
    // add more admin emails here if needed
  ];

  const formattedDate = lead.submittedAt.toLocaleString("en-NG", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Lagos",
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Lead – Samish Homes</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:'Inter',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(41,61,92,0.10);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#293d5c 0%,#3a5278 100%);padding:32px 36px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(234,190,32,0.9);">
                      Samish Homes &amp; Apartments
                    </p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">
                      🏠 New Lead Captured
                    </h1>
                    <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.65);">
                      A visitor just submitted their contact details on your website.
                    </p>
                  </td>
                  <td width="60" align="right" valign="top">
                    <div style="width:48px;height:48px;background:#eabe20;border-radius:12px;display:flex;align-items:center;justify-content:center;text-align:center;line-height:48px;font-size:22px;">
                      📋
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#eabe20,#daa30d);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">

              <p style="margin:0 0 24px;font-size:14px;color:#6983a5;">
                Here are the details submitted:
              </p>

              <!-- Detail rows -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

                <!-- Email -->
                <tr>
                  <td style="padding:14px 16px;background:#f4f6f9;border-radius:10px 10px 0 0;border-bottom:1px solid #e9edf3;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" valign="middle">
                          <span style="font-size:16px;">✉️</span>
                        </td>
                        <td valign="middle">
                          <p style="margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#879fbc;">Email Address</p>
                          <p style="margin:3px 0 0;font-size:15px;font-weight:600;color:#293d5c;">
                            <a href="mailto:${lead.email}" style="color:#293d5c;text-decoration:none;">${lead.email}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding:14px 16px;background:#f4f6f9;border-bottom:1px solid #e9edf3;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" valign="middle">
                          <span style="font-size:16px;">📞</span>
                        </td>
                        <td valign="middle">
                          <p style="margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#879fbc;">Phone Number</p>
                          <p style="margin:3px 0 0;font-size:15px;font-weight:600;color:#293d5c;">
                            <a href="tel:${lead.phone}" style="color:#293d5c;text-decoration:none;">${lead.phone}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- WhatsApp -->
                <tr>
                  <td style="padding:14px 16px;background:#f4f6f9;border-bottom:1px solid #e9edf3;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" valign="middle">
                          <span style="font-size:16px;">💬</span>
                        </td>
                        <td valign="middle">
                          <p style="margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#879fbc;">WhatsApp</p>
                          <p style="margin:3px 0 0;font-size:15px;font-weight:600;color:#293d5c;">
                            ${
                              lead.whatsapp
                                ? `<a href="https://wa.me/${lead.whatsapp.replace(/\D/g, "")}" style="color:#25D366;text-decoration:none;">${lead.whatsapp}</a>`
                                : `<span style="color:#879fbc;font-weight:400;font-style:italic;">Not provided</span>`
                            }
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Submitted at -->
                <tr>
                  <td style="padding:14px 16px;background:#f4f6f9;border-radius:0 0 10px 10px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" valign="middle">
                          <span style="font-size:16px;">🕐</span>
                        </td>
                        <td valign="middle">
                          <p style="margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#879fbc;">Submitted At</p>
                          <p style="margin:3px 0 0;font-size:14px;font-weight:500;color:#293d5c;">${formattedDate}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a
                      href="mailto:${lead.email}?subject=Re: Your Property Enquiry – Samish Homes"
                      style="display:inline-block;background:#eabe20;color:#293d5c;font-weight:700;font-size:14px;padding:13px 32px;border-radius:10px;text-decoration:none;letter-spacing:0.3px;"
                    >
                      Reply to Lead →
                    </a>
                  </td>
                </tr>
              </table>

              ${
                lead.whatsapp
                  ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;">
                <tr>
                  <td align="center">
                    <a
                      href="https://wa.me/${lead.whatsapp.replace(/\D/g, "")}?text=Hello%2C%20thank%20you%20for%20your%20interest%20in%20Samish%20Homes!%20How%20can%20we%20help%20you%20find%20your%20dream%20property%3F"
                      style="display:inline-block;background:#25D366;color:#ffffff;font-weight:700;font-size:14px;padding:13px 32px;border-radius:10px;text-decoration:none;letter-spacing:0.3px;"
                    >
                      💬 Open WhatsApp Chat →
                    </a>
                  </td>
                </tr>
              </table>`
                  : ""
              }

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px 28px;border-top:1px solid #e9edf3;">
              <p style="margin:0;font-size:12px;color:#879fbc;text-align:center;line-height:1.7;">
                This notification was sent automatically by <strong style="color:#293d5c;">Samish Homes</strong> website.<br/>
                Lead source: <strong>Website Lead Capture Form</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();

  return sendMail({
    to: ADMIN_EMAILS,
    subject: `🏠 New Lead: ${lead.email} — Samish Homes`,
    body: html,
  });
}

// ─── Core sendMail ─────────────────────────────────────────────────────────────

async function sendMail({ to, subject, body }: MailOptions) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL!,
      pass: SMTP_PASSWORD!,
    },
  });

  try {
    await transport.verify();
  } catch (error) {
    console.log("Error verifying transport:", error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: `"Samish Homes" <${SMTP_EMAIL}>`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html: body,
    });
    console.log("Email sent successfully:", sendResult.messageId);
    return sendResult;
  } catch (error) {
    console.log("Error sending email:", error);
    throw error;
  }
}