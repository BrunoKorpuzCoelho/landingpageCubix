"use server";

import { z } from "zod";

// Schema de validação server-side
const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid characters in name"),
  email: z
    .string()
    .email("Invalid email format")
    .max(255, "Email too long")
    .toLowerCase(),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name too long"),
  phone: z
    .string()
    .regex(/^[+]?[0-9\s\-()]+$/, "Invalid phone format")
    .max(20, "Phone number too long")
    .optional()
    .or(z.literal("")),
  employees: z.enum(["1-10", "11-50", "51-200", "200+"], {
    errorMap: () => ({ message: "Invalid employee range" }),
  }),
  program: z.enum(["Alpha", "Beta", "MVP"], {
    errorMap: () => ({ message: "Invalid program selection" }),
  }),
  comments: z
    .string()
    .max(1000, "Comments too long")
    .optional()
    .or(z.literal("")),
});

// Rate limiting em memória (para produção, usar Redis)
const submissionTracker = new Map<
  string,
  { count: number; timestamp: number }
>();
const RATE_LIMIT = 5; // 5 submissões
const RATE_WINDOW = 60 * 60 * 1000; // 1 hora

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = submissionTracker.get(identifier);

  if (!record) {
    submissionTracker.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  // Resetar se passou a janela de tempo
  if (now - record.timestamp > RATE_WINDOW) {
    submissionTracker.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  // Verificar limite
  if (record.count >= RATE_LIMIT) {
    return false;
  }

  // Incrementar contador
  record.count++;
  return true;
}

// Sanitização de strings
function sanitize(input: string): string {
  return input
    .replace(/[<>"']/g, "") // Remove caracteres perigosos
    .trim();
}

export async function submitMVPForm(formData: {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  employees: string;
  program: string;
  comments: string;
}) {
  try {
    // 1. VALIDAÇÃO SERVER-SIDE
    const validationResult = FormSchema.safeParse(formData);

    if (!validationResult.success) {
      return {
        success: false,
        error: validationResult.error.errors[0].message,
      };
    }

    const validatedData = validationResult.data;

    // 2. RATE LIMITING (usando email como identificador)
    if (!checkRateLimit(validatedData.email)) {
      return {
        success: false,
        error: "Too many submissions. Please try again in 1 hour.",
      };
    }

    // 3. SANITIZAÇÃO ADICIONAL
    const sanitizedData = {
      fullName: sanitize(validatedData.fullName),
      email: validatedData.email,
      company: sanitize(validatedData.company),
      phone: validatedData.phone ? sanitize(validatedData.phone) : "",
      employees: validatedData.employees,
      program: validatedData.program,
      comments: validatedData.comments ? sanitize(validatedData.comments) : "",
    };

    // Email configuration
    const recipientEmail = "brunovcoelho.dev@gmail.com";

    // Format the email body with sanitized data
    const emailBody = `
New MVP Sign-up Form Submission
================================

Full Name: ${sanitizedData.fullName}
Business Email: ${sanitizedData.email}
Company: ${sanitizedData.company}
Phone: ${sanitizedData.phone || "Not provided"}
Number of Employees: ${sanitizedData.employees}
Program: ${sanitizedData.program}
Comments: ${sanitizedData.comments || "No comments provided"}

================================
Submitted at: ${new Date().toLocaleString()}
    `.trim();

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
    });

    if (!response.ok) {
      // Log apenas informação não sensível
      console.error("[MVP Form] Email send failed", {
        status: response.status,
        timestamp: new Date().toISOString(),
        program: sanitizedData.program,
      });

      return {
        success: false,
        error: "Unable to send your request. Please try again later.",
      };
    }

    // Log sucesso (sem dados sensíveis)
    console.log("[MVP Form] Submission successful", {
      timestamp: new Date().toISOString(),
      program: sanitizedData.program,
    });

    return { success: true };
  } catch (error) {
    // Log erro sem dados sensíveis
    console.error("[MVP Form] Submission error", {
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });

    return {
      success: false,
      error: "An error occurred. Please try again.",
    };
  }
}
