"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Rocket, Lock } from "lucide-react"

export function DemoForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    schedule: "",
    comments: "",
    privacyAccepted: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 py-12">
        <div className="h-20 w-20 rounded-full gradient-primary flex items-center justify-center mx-auto">
          <Rocket className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold">Thank You!</h3>
        <p className="text-xl text-muted-foreground">
          We've received your request. Our team will contact you within 24 hours to schedule your personalized
          demonstration.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="bg-input border-border focus:border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Business Email *</Label>
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
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            required
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="bg-input border-border focus:border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="bg-input border-border focus:border-primary/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employees">Number of Employees *</Label>
          <select
            id="employees"
            required
            value={formData.employees}
            onChange={(e) => handleChange("employees", e.target.value)}
            className="w-full h-10 px-3 rounded-md bg-input border border-border text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="200+">200+</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="schedule">When would you like to schedule? *</Label>
          <select
            id="schedule"
            required
            value={formData.schedule}
            onChange={(e) => handleChange("schedule", e.target.value)}
            className="w-full h-10 px-3 rounded-md bg-input border border-border text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select...</option>
            <option value="this-week">This week</option>
            <option value="next-week">Next week</option>
            <option value="evaluating">Still evaluating</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Comments</Label>
        <Textarea
          id="comments"
          rows={4}
          value={formData.comments}
          onChange={(e) => handleChange("comments", e.target.value)}
          className="bg-input border-border focus:border-primary/50 resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="privacy"
          checked={formData.privacyAccepted}
          onCheckedChange={(checked) => handleChange("privacyAccepted", checked as boolean)}
          required
        />
        <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
          I accept the privacy policy *
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full gradient-primary text-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
      >
        {isSubmitting ? "Sending..." : "SCHEDULE FREE DEMONSTRATION"}
      </Button>

      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4" />
          <span>Your data is secure</span>
        </div>
        <span>•</span>
        <span>Contact within 24h</span>
      </div>

      <p className="text-center text-sm text-accent">
        ⚠️ Due to high demand, limited slots for personalized demonstrations
      </p>
    </form>
  )
}
