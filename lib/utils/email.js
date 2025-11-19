import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text?.toString().replace(/[&<>"']/g, (m) => map[m]) || '';
}

// Send contact form submission notification
export async function sendContactFormSubmission(formData, retryAttempt = 0) {
  const { firstName, lastName, email, message } = formData;
  const fullName = `${firstName} ${lastName}`.trim();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);
          color: #fff;
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background-color: #f9f9f9;
          padding: 30px;
          border-radius: 0 0 8px 8px;
        }
        .info-box {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          border: 2px solid #3b82f6;
        }
        .field {
          margin-bottom: 15px;
        }
        .field-label {
          font-weight: bold;
          color: #1e40af;
          display: block;
          margin-bottom: 5px;
        }
        .field-value {
          color: #333;
          padding: 10px;
          background-color: #f5f5f5;
          border-radius: 4px;
        }
        .message-box {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #666;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📧 New Contact Form Submission</h1>
        <p>Nomadsoft</p>
      </div>
      <div class="content">
        <p>You have received a new message from your website contact form.</p>
        <div class="info-box">
          <div class="field">
            <span class="field-label">Name:</span>
            <div class="field-value">${escapeHtml(fullName)}</div>
          </div>
          <div class="field">
            <span class="field-label">Email:</span>
            <div class="field-value">${escapeHtml(email)}</div>
          </div>
        </div>
        <div class="message-box">
          <span class="field-label">Message:</span>
          <div style="margin-top: 10px; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString('en-US', {
          dateStyle: 'long',
          timeStyle: 'short'
        })}</p>
      </div>
      <div class="footer">
        <p>Nomadsoft - Custom Software Solutions</p>
        <p>https://nomadsoft.us</p>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission - Nomadsoft

You have received a new message from your website contact form.

Name: ${fullName}
Email: ${email}

Message:
${message}

Submitted at: ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}

---
Nomadsoft - Custom Software Solutions
https://nomadsoft.us
  `.trim();

  try {
    const fromName = process.env.EMAIL_FROM_NAME || 'Nomadsoft';
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || 'no-reply@nomadsoft.us';
    const recipientEmail = process.env.EMAIL_RECIPIENT || 'webmaster@nomadsoft.us';

    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromAddress}>`,
      to: [recipientEmail],
      subject: `New Contact Form Message from ${fullName}`,
      html: htmlContent,
      text: textContent,
      replyTo: email, // Allow direct reply to the person who submitted the form
    });

    if (error) {
      // Check if it's a rate limit error
      if (error.statusCode === 429 && retryAttempt < 3) {
        console.log(`Rate limited, retrying in 3 seconds... (Attempt ${retryAttempt + 1}/3)`);
        await new Promise(resolve => setTimeout(resolve, 3000));
        return sendContactFormSubmission(formData, retryAttempt + 1);
      }
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending contact form email:', error);
    throw error;
  }
}
