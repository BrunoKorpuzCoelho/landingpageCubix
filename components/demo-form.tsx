"use client";

import type React from "react";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { submitMVPForm } from "@/app/actions/submit-mvp-form";

function DemoFormContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    program: "",
    comments: "",
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const program = searchParams.get("program");
    if (program && ["Alpha", "Beta", "MVP"].includes(program)) {
      setFormData((prev) => ({ ...prev, program }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitMVPForm({
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        employees: formData.employees,
        program: formData.program,
        comments: formData.comments,
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("[MVP Form] Submission error:", error);
      setError("Unable to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 py-12">
        <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center mx-auto">
          <Rocket className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold">{t.demo.success.title}</h3>
        <p className="text-xl text-muted-foreground">
          {t.demo.success.message}
        </p>
      </div>
    );
  }

  return (
    <form
      id="demo-form"
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            {t.demo.form.fullName} {t.demo.form.required}
          </Label>
          <Input
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="bg-input border-border focus:border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            {t.demo.form.email} {t.demo.form.required}
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-input border-border focus:border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">
            {t.demo.form.company} {t.demo.form.required}
          </Label>
          <Input
            id="company"
            required
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="bg-input border-border focus:border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{t.demo.form.phone}</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="bg-input border-border focus:border-primary/50"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="employees">
            {t.demo.form.employees} {t.demo.form.required}
          </Label>
          <select
            id="employees"
            required
            value={formData.employees}
            onChange={(e) => handleChange("employees", e.target.value)}
            className="w-full h-10 px-3 rounded-md bg-input border border-border text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">{t.demo.form.selectPlaceholder}</option>
            <option value="1-10">{t.demo.form.employeeOptions["1-10"]}</option>
            <option value="11-50">
              {t.demo.form.employeeOptions["11-50"]}
            </option>
            <option value="51-200">
              {t.demo.form.employeeOptions["51-200"]}
            </option>
            <option value="200+">{t.demo.form.employeeOptions["200+"]}</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="program">
            {t.demo.form.program} {t.demo.form.required}
          </Label>
          <select
            id="program"
            required
            value={formData.program}
            onChange={(e) => handleChange("program", e.target.value)}
            className="w-full h-10 px-3 rounded-md bg-input border border-border text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">{t.demo.form.programOptions.placeholder}</option>
            <option value="Alpha">{t.demo.form.programOptions.alpha}</option>
            <option value="Beta">{t.demo.form.programOptions.beta}</option>
            <option value="MVP">{t.demo.form.programOptions.mvp}</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">{t.demo.form.comments}</Label>
        <Textarea
          id="comments"
          rows={4}
          value={formData.comments}
          onChange={(e) => handleChange("comments", e.target.value)}
          className="bg-input border-border focus:border-primary/50 resize-none"
          placeholder={t.demo.form.commentsPlaceholder}
        />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="privacy"
          checked={formData.privacyAccepted}
          onCheckedChange={(checked) =>
            handleChange("privacyAccepted", checked as boolean)
          }
          required
        />
        <Label
          htmlFor="privacy"
          className="text-sm leading-relaxed cursor-pointer"
        >
          {t.demo.form.privacy} {t.demo.form.required}
        </Label>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full gradient-primary text-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
      >
        {isSubmitting
          ? t.demo.form.submitting
          : formData.program === "Alpha"
          ? t.demo.form.submitAlpha
          : formData.program === "Beta"
          ? t.demo.form.submitBeta
          : formData.program === "MVP"
          ? t.demo.form.submitMVP
          : t.demo.form.submit}
      </Button>

      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4" />
          <span>{t.demo.form.securityNote}</span>
        </div>
        <span>•</span>
        <span>{t.demo.form.contactTime}</span>
      </div>
    </form>
  );
}

export function DemoForm() {
  return (
    <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
      <DemoFormContent />
    </Suspense>
  );
}
