interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export function generateContactEmailHtml({
  name,
  email,
  message,
  timestamp,
}: EmailTemplateProps): string {
  // Escapar caracteres básicos para seguridad
  const escapeHtml = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nuevo Packet de Contacto</title>
</head>
<body style="margin: 0; padding: 0; background-color: #090a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f0f6fc;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #090a0f; padding: 40px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #161b22; border: 1px solid #30363d; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Top Window Bar -->
          <tr>
            <td style="background-color: #0d1117; padding: 14px 20px; border-bottom: 1px solid #30363d;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="left">
                    <span style="display: inline-block; width: 10px; height: 10px; background-color: #ff5f56; border-radius: 50%; margin-right: 6px;"></span>
                    <span style="display: inline-block; width: 10px; height: 10px; background-color: #ffbd2e; border-radius: 50%; margin-right: 6px;"></span>
                    <span style="display: inline-block; width: 10px; height: 10px; background-color: #27c93f; border-radius: 50%; margin-right: 12px;"></span>
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #8b949e;">remote_session://incoming_packet</span>
                  </td>
                  <td align="right">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #00f2fe; background-color: rgba(0, 242, 254, 0.1); border: 1px solid rgba(0, 242, 254, 0.3); padding: 2px 8px; border-radius: 4px; font-weight: bold;">TLS 1.3 VERIFIED</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Email Content Body -->
          <tr>
            <td style="padding: 28px 24px;">
              <h2 style="margin: 0 0 8px 0; font-size: 20px; color: #ffffff; font-weight: 700;">
                Has recibido un nuevo mensaje de contacto
              </h2>
              <p style="margin: 0 0 24px 0; font-size: 13px; color: #8b949e; font-family: 'Courier New', Courier, monospace;">
                // Transmisión desde la sesión remota de tu portafolio
              </p>

              <!-- Sender Info Box -->
              <table role="presentation" width="100%" style="background-color: #0d1117; border: 1px solid #21262d; border-radius: 8px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 14px 16px;">
                    <table role="presentation" width="100%">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.05em;">Remitente:</span><br/>
                          <strong style="font-size: 15px; color: #00f2fe;">${safeName}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.05em;">Canal de respuesta:</span><br/>
                          <a href="mailto:${safeEmail}" style="font-size: 14px; color: #f0f6fc; text-decoration: underline;">${safeEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Payload / Message Box -->
              <div style="margin-bottom: 24px;">
                <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.05em;">// Carga Útil (Payload):</span>
                <div style="margin-top: 6px; background-color: #0d1117; border-left: 3px solid #00f2fe; border-top: 1px solid #21262d; border-right: 1px solid #21262d; border-bottom: 1px solid #21262d; border-radius: 0 8px 8px 0; padding: 16px; font-family: 'Courier New', Courier, monospace; font-size: 13px; line-height: 1.6; color: #e6edf3;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Action Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 24px; margin-bottom: 16px;">
                <tr>
                  <td align="center" style="border-radius: 6px; background-color: #00f2fe;">
                    <a href="mailto:${safeEmail}?subject=Re:%20Contacto%20Portafolio" style="display: inline-block; padding: 12px 24px; font-family: 'Courier New', Courier, monospace; font-size: 13px; font-weight: bold; color: #090a0f; text-decoration: none; border-radius: 6px;">
                      Responder a ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0d1117; padding: 16px 24px; border-top: 1px solid #30363d; text-align: center;">
              <p style="margin: 0; font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #8b949e;">
                Transmisión registrada: ${timestamp} &bull; Sys://portfolio
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
}
