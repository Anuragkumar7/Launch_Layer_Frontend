import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import Button from '../components/ui/Button';
import Icon from '../components/icons/Icon';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PRICING_PLANS, PRICING_FAQ } from '../data/siteData';

function PricingCard({ plan, index }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 h-full flex flex-col ${
        plan.highlighted
          ? 'bg-gradient-to-b from-primary/20 to-secondary/20 border-2 border-primary/50 shadow-glow'
          : 'glass'
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-muted text-sm mb-6">{plan.description}</p>
      <div className="mb-6">
        <span className="font-display text-4xl font-bold">{plan.price}</span>
        <span className="text-muted text-sm block mt-1">{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted">
            <Icon name="Check" className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        to="/contact"
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className="w-full"
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing packages for websites and web applications—Starter, Business, and Enterprise."
        path="/pricing"
      />
      <PageHero
        badge="Pricing"
        title="Plans That Scale With You"
        subtitle="Clear, honest pricing with no surprises. Choose the package that fits your goals."
      />

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          <div className="mt-16 glass rounded-2xl p-8 overflow-x-auto">
            <h3 className="font-display text-xl font-bold mb-6 text-center">Feature Comparison</h3>
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 text-muted font-medium">Feature</th>
                  <th className="py-3 text-center">Starter</th>
                  <th className="py-3 text-center text-primary">Business</th>
                  <th className="py-3 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {[
                  ['Pages', 'Up to 5', 'Up to 15', 'Unlimited'],
                  ['Custom Design', 'Template-based', 'Full custom', 'Full custom'],
                  ['CMS', '—', '✓', '✓'],
                  ['Web App / SaaS', '—', '—', '✓'],
                  ['Support', '30 days', '90 days', 'SLA'],
                  ['Revisions', '2 rounds', '5 rounds', 'Unlimited'],
                ].map(([feature, s, b, e]) => (
                  <tr key={feature} className="border-b border-white/5">
                    <td className="py-3">{feature}</td>
                    <td className="py-3 text-center">{s}</td>
                    <td className="py-3 text-center text-text">{b}</td>
                    <td className="py-3 text-center">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ items={PRICING_FAQ} title="Pricing FAQ" />
      <CTA title="Not Sure Which Plan Fits?" subtitle="Tell us about your project and we'll recommend the perfect package." />
    </>
  );
}
