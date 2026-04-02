"use client";

import { useState, FormEvent } from "react";

const industryOptions = [
  "Automotive",
  "Marine",
  "Oil & Gas",
  "Aerospace",
  "Electronics",
  "Construction",
  "Pharmaceutical & Medical",
  "Agri-Food",
  "Other",
];

const helpOptions = [
  "Product Selection",
  "Technical Support",
  "Quote Request",
  "Datasheet Request",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("_gotcha")) {
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/PLACEHOLDER_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="bg-white rounded-lg border border-grey-200 p-8 sm:p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-navy-900">
          Thank you for your enquiry
        </h3>
        <p className="mt-2 text-grey-600">
          We have received your message and will get back to you within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-steel-500 hover:text-steel-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg border border-grey-200 p-6 sm:p-8"
      noValidate
    >
      {/* Honeypot field for spam prevention */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-gotcha">Do not fill this out</label>
        <input
          type="text"
          name="_gotcha"
          id="contact-gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-navy-900 mb-1.5">
            Name <span className="text-orange-500" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="w-full px-4 py-2.5 border border-grey-300 rounded-lg text-navy-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-shadow"
            placeholder="Your full name"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-navy-900 mb-1.5">
            Company
          </label>
          <input
            type="text"
            id="contact-company"
            name="company"
            autoComplete="organization"
            className="w-full px-4 py-2.5 border border-grey-300 rounded-lg text-navy-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-shadow"
            placeholder="Company name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-navy-900 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            autoComplete="tel"
            className="w-full px-4 py-2.5 border border-grey-300 rounded-lg text-navy-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-shadow"
            placeholder="+44 or +353"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-navy-900 mb-1.5">
            Email <span className="text-orange-500" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-4 py-2.5 border border-grey-300 rounded-lg text-navy-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-shadow"
            placeholder="you@company.com"
          />
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="contact-industry" className="block text-sm font-medium text-navy-900 mb-1.5">
            Industry
          </label>
          <select
            id="contact-industry"
            name="industry"
            className="w-full px-4 py-2.5 border border-grey-300 rounded-lg text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-shadow"
            defaultValue=""
          >
            <option value="" disabled>
              Select your industry
            </option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* I need help with */}
        <div>
          <label htmlFor="contact-help" className="block text-sm font-medium text-navy-900 mb-1.5">
            I need help with
          </label>
          <select
            id="contact-help"
            name="help_with"
            className="w-full px-4 py-2.5 border border-grey-300 rounded-lg text-navy-900 bg-white focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-shadow"
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="block text-sm font-medium text-navy-900 mb-1.5">
            Message <span className="text-orange-500" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2.5 border border-grey-300 rounded-lg text-navy-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:border-transparent transition-shadow resize-y"
            placeholder="Describe what you need help with..."
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Submit */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-navy-900 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
        >
          {submitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
      </div>
    </form>
  );
}
