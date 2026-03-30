'use client';

import { useState } from 'react';

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('[v0] Form submitted with data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', requirement: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm border border-neutral-100">
      <h2 className="mb-5 text-lg font-bold text-neutral-900">Send Enquiry</h2>

      {submitted && (
        <div className="mb-4 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 animate-in fade-in">
          Thank you! Your enquiry has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold uppercase text-neutral-700 tracking-wide"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2.5 text-sm font-medium text-neutral-900 placeholder-neutral-400 transition-all focus:border-neutral-800 focus:bg-white focus:ring-3 focus:ring-neutral-800/5 outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-semibold uppercase text-neutral-700 tracking-wide"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2.5 text-sm font-medium text-neutral-900 placeholder-neutral-400 transition-all focus:border-neutral-800 focus:bg-white focus:ring-3 focus:ring-neutral-800/5 outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-semibold uppercase text-neutral-700 tracking-wide"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (234) 567-8900"
            required
            className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2.5 text-sm font-medium text-neutral-900 placeholder-neutral-400 transition-all focus:border-neutral-800 focus:bg-white focus:ring-3 focus:ring-neutral-800/5 outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="requirement"
            className="mb-1.5 block text-xs font-semibold uppercase text-neutral-700 tracking-wide"
          >
            Your Requirement
          </label>
          <textarea
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Tell us about your needs..."
            required
            rows={5}
            className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2.5 text-sm font-medium text-neutral-900 placeholder-neutral-400 transition-all focus:border-neutral-800 focus:bg-white focus:ring-3 focus:ring-neutral-800/5 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-900 hover:-translate-y-0.5 active:translate-y-0"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
