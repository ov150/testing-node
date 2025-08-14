const randomNumber= Math.floor(Math.random()*9999 +1)
let m = randomNumber.toString();
export const otp = m.padStart(4, '0');


export const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="x-apple-disable-message-reformatting">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Your OTP</title>
  <!-- Preheader (hidden preview text) -->
  <style>
    .preheader { display:none!important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; }
    @media (prefers-color-scheme: dark) {
      body { background:#0b0c0f !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f5f7fb;">
  <div class="preheader">Use this code to verify your email: ${otp}</div>

  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f5f7fb;padding:24px 12px;">
    <tr>
      <td align="center">
        <!-- Card -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;box-shadow:0 4px 18px rgba(0,0,0,0.06);overflow:hidden;">
          <!-- Top bar / brand -->
          <tr>
            <td style="background:#3b82f6;height:6px;"></td>
          </tr>

          <tr>
            <td style="padding:28px 28px 0 28px;text-align:center;">
              <!-- Optional logo/text -->
              <div style="font-family:ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'; font-size:18px; font-weight:700; color:#111827; letter-spacing:.2px;">
                Your App
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:12px 28px 0 28px;text-align:center;">
              <h1 style="margin:0;font-family:ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size:22px; line-height:1.35; color:#111827;">
                Verify your email
              </h1>
              <p style="margin:10px 0 0 0;font-family:ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size:14px; color:#6b7280;">
                Use the One-Time Password (OTP) below to complete verification.
              </p>
            </td>
          </tr>

          <!-- OTP Box -->
          <tr>
            <td align="center" style="padding:22px 28px 6px 28px;">
              <!-- Code boxes -->
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  ${String(otp).split('').map(d => `
                    <td style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;width:52px;height:56px;text-align:center;vertical-align:middle;">
                      <div style="font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; font-size:22px; font-weight:700; color:#111827;">${d}</div>
                    </td>
                    <td style="width:10px;"></td>
                  `).join('').replace(/<td style="width:10px;"><\/td>\s*$/, '')}
                </tr>
              </table>

              <div style="margin-top:18px;font-family:ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size:12px; color:#6b7280;">
                This code expires in 10 minutes.
              </div>
            </td>
          </tr>

          <!-- CTA (optional) -->
          <tr>
            <td align="center" style="padding:8px 28px 0 28px;">
              <a href="#" style="display:inline-block;padding:12px 18px;background:#3b82f6;color:#ffffff;text-decoration:none;font-family:ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial;font-size:14px;border-radius:10px;">
                Verify Now
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px 28px 28px 28px;text-align:center;">
              <p style="margin:0;font-family:ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size:12px; color:#9ca3af;">
                Didn’t request this? You can ignore this email.
              </p>
              <p style="margin:8px 0 0 0;font-family:ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size:11px; color:#9ca3af;">
                © ${new Date().getFullYear()} Your App, All rights reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->
      </td>
    </tr>
  </table>
</body>
</html>
`;
