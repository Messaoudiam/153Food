'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide"
    }

    const phoneRegex = /^[\d\s.+-]+$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis'
    } else if (
      !phoneRegex.test(formData.phone) ||
      formData.phone.replace(/\D/g, '').length < 10
    ) {
      newErrors.phone = "Le numéro de téléphone n'est pas valide"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "L'objet est requis"
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      // Success
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setErrors({})
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div>
      {submitStatus === 'success' && (
        <Alert variant="success" className="mb-6">
          <CheckCircle2 className="h-4 w-4" />
          <div>
            <h3 className="font-semibold">Message envoyé avec succès !</h3>
            <p className="text-sm">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert variant="error" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <div>
            <h3 className="font-semibold">Erreur lors de l&apos;envoi</h3>
            <p className="text-sm">
              Veuillez réessayer ou nous appeler directement.
            </p>
          </div>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nom <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full rounded-md border px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 ${
              errors.name ? 'border-red-600' : 'border-input'
            }`}
            placeholder="Votre nom complet"
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full rounded-md border px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 ${
              errors.email ? 'border-red-600' : 'border-input'
            }`}
            placeholder="votre.email@exemple.com"
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Téléphone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full rounded-md border px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 ${
              errors.phone ? 'border-red-600' : 'border-input'
            }`}
            placeholder="06 12 34 56 78"
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Objet <span className="text-red-600">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            className={`w-full rounded-md border px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 ${
              errors.subject ? 'border-red-600' : 'border-input'
            }`}
          >
            <option value="">Sélectionnez un objet</option>
            <option value="reservation">Réservation</option>
            <option value="information">Demande &apos;information</option>
            <option value="event">Événement privé</option>
            <option value="feedback">Avis / Suggestion</option>
            <option value="other">Autre</option>
          </select>
          {errors.subject && (
            <p
              id="subject-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            rows={5}
            className={`w-full rounded-md border px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 ${
              errors.message ? 'border-red-600' : 'border-input'
            }`}
            placeholder="Votre message..."
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-blue-900 text-white hover:bg-brand-blue-950"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            'Envoyer le message'
          )}
        </Button>
      </form>
    </div>
  )
}
