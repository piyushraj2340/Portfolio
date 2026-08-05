import { ContactFormData } from "@/lib/validations/contact";

export function getContactEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 24px;">
        <h2 style="color: #3b82f6; margin: 0; font-size: 24px;">New Portfolio Inquiry</h2>
        <p style="color: #666; margin-top: 8px;">You've received a new message from your website.</p>
      </div>
      
      <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="margin-bottom: 20px;">
          <h3 style="color: #333; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Sender Details</h3>
          <p style="margin: 0; color: #111; font-size: 16px;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 4px 0 0 0; color: #111; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        
        <div>
          <h3 style="color: #333; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
          <div style="background-color: #f4f4f5; padding: 16px; border-radius: 6px; color: #333; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 24px; color: #888; font-size: 12px;">
        <p>Sent securely from your portfolio website API.</p>
      </div>
    </div>
  `;
}
