import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import Button from '../components/ui/Button';
import Icon from '../components/icons/Icon';
import { useToast } from '../hooks/useToast';
import { submitContactForm } from '../services/api';
import { validateContactForm } from '../utils/validation';
import { COMPANY, PROJECT_TYPES, BUDGET_OPTIONS } from '../data/siteData';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  projectType: '',
  budget: '',
  message: '',
};

function FormField({ label, error, children, required }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 rounded-xl glass bg-card/50 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-text placeholder:text-muted/60';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      addToast('Please fix the errors in the form.', 'error');
      return;
    }

    setLoading(true);
    try {
      await submitContactForm(form);
      addToast('Thank you! We received your message and will respond within 24 hours.');
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      addToast(err.message || 'Failed to send message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Launch Layer for a free consultation on your website, web app, or SaaS project."
        path="/contact"
      />
      <PageHero
        badge="Contact"
        title="Let's Build Something Great"
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
      />

      <section className="section-padding pt-0">
        <div className="container-custom grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted text-sm">
                  <Icon name="Mail" className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted text-sm">
                  <Icon name="Phone" className="w-5 h-5 text-primary shrink-0" />
                  {COMPANY.phone}
                </li>
                <li className="flex items-start gap-3 text-muted text-sm">
                  <Icon name="MapPin" className="w-5 h-5 text-primary shrink-0" />
                  {COMPANY.address}
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg mb-2">Response Time</h3>
              <p className="text-muted text-sm">
                We typically respond within 24 business hours. For urgent inquiries, use our WhatsApp button.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-8 space-y-6"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label="Full Name" error={errors.fullName} required>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </FormField>
              <FormField label="Email" error={errors.email} required>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="john@company.com"
                />
              </FormField>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+91 77528 36866"
                />
              </FormField>
              <FormField label="Company Name" error={errors.companyName}>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your Company"
                />
              </FormField>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <FormField label="Project Type" error={errors.projectType} required>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">Select project type</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField label="Budget" error={errors.budget} required>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">Select budget range</option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormField label="Message" error={errors.message} required>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your project goals, timeline, and requirements..."
              />
            </FormField>

            {loading && (
              <p className="text-muted text-sm mb-4">
                Please wait — the server may take up to a minute to wake up on the first try.
              </p>
            )}

            <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending message...
                </span>
              ) : (
                <>
                  Send Message
                  <Icon name="ArrowRight" className="w-5 h-5" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
