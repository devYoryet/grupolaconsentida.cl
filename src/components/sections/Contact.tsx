'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedLine from '@/components/ui/AnimatedLine';
import Animate from '@/components/ui/Animate';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      // Small delay to trigger CSS transition after mount
      const timer = setTimeout(() => setSuccessVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drawCircle {
          from { stroke-dashoffset: 176; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes popIn {
          0% { transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .success-circle {
          stroke-dasharray: 176;
          stroke-dashoffset: 176;
          animation: drawCircle 0.6s ease-out 0.3s forwards;
        }
        .success-check {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: drawCheck 0.4s ease-out 0.8s forwards;
        }
        .success-icon-wrapper {
          animation: popIn 0.5s ease-out 0.2s both;
        }
      ` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <SectionLabel>{t.contact.label}</SectionLabel>
            <Animate type="fadeUp" duration={600}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
                {t.contact.title}
              </h2>
            </Animate>
            <AnimatedLine />
            <Animate type="fadeUp" delay={100} duration={600}>
              <p className="text-stone-600 leading-relaxed mb-12">
                {t.contact.subtitle}
              </p>
            </Animate>

            {/* Contact info */}
            <Animate type="fadeUp" delay={200} duration={600}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-800 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Email</p>
                    <a
                      href={`mailto:${t.contact.info.email}`}
                      className="text-stone-900 font-medium hover:text-green-800 transition-colors"
                    >
                      {t.contact.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-800 shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.485 12.0005 21.485C11.4704 21.485 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.47689 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3 12 3C13.5822 3 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.47689 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">{t.contact.info.location}</p>
                    <p className="text-stone-900 font-medium">{t.contact.info.locationDetail}</p>
                  </div>
                </div>
              </div>
            </Animate>
          </div>

          {/* Right: Form */}
          <Animate type="fadeUp" delay={200} duration={700}>
            <div className="relative">
              {/* Success state */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  isSubmitted
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="text-center p-12 bg-green-50 rounded-sm border border-green-200 w-full">
                  <div className="success-icon-wrapper">
                    <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-6 text-green-700">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className={successVisible ? 'success-circle' : ''}
                        style={!successVisible ? { strokeDasharray: 176, strokeDashoffset: 176 } : undefined}
                      />
                      <path
                        d="M20 32L28 40L44 24"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        className={successVisible ? 'success-check' : ''}
                        style={!successVisible ? { strokeDasharray: 40, strokeDashoffset: 40 } : undefined}
                      />
                    </svg>
                  </div>
                  <p className="text-green-800 font-serif text-lg font-medium">
                    {t.contact.form.success}
                  </p>
                </div>
              </div>

              {/* Form state */}
              <form
                onSubmit={handleSubmit}
                className={`space-y-6 transition-all duration-500 ${
                  isSubmitted ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className={`w-full px-4 py-3 border rounded-sm bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all ${
                        errors.name ? 'border-red-400' : 'border-stone-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.contact.form.companyPlaceholder}
                      className="w-full px-4 py-3 border border-stone-200 rounded-sm bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className={`w-full px-4 py-3 border rounded-sm bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all ${
                      errors.email ? 'border-red-400' : 'border-stone-200'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-sm bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all resize-none ${
                      errors.message ? 'border-red-400' : 'border-stone-200'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-green-900 hover:bg-green-800 text-white font-medium rounded-sm transition-all duration-300 tracking-wide text-sm disabled:opacity-60 overflow-hidden"
                >
                  <span className="relative z-10">
                    {isSubmitting ? '...' : t.contact.form.submit}
                  </span>
                  <div className="absolute inset-0 bg-green-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
