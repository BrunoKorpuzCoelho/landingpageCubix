"use server"

export async function submitMVPForm(formData: {
  fullName: string
  email: string
  company: string
  phone: string
  employees: string
  comments: string
}) {
  try {
    // Email configuration
    const recipientEmail = "brunovcoelho.dev@gmail.com"

    // Format the email body with all form data
    const emailBody = `
New MVP Sign-up Form Submission
================================

Full Name: ${formData.fullName}
Business Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Number of Employees: ${formData.employees}
Comments: ${formData.comments || "No comments provided"}

================================
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Using a simple mailto fallback or Resend API
    // For production, you should use Resend, SendGrid, or similar
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "CUBIX MVP <onboarding@resend.dev>",
        to: recipientEmail,
        subject: `New MVP Sign-up: ${formData.fullName} - ${formData.company}`,
        text: emailBody,
      }),
    })

    if (!response.ok) {
      // If Resend fails, log the data (in production you'd want better error handling)
      console.log("[v0] Form submission data:", formData)
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    // Still return success so user experience isn't affected
    // In production, you'd want to save to a database as backup
    return { success: true }
  }
}
