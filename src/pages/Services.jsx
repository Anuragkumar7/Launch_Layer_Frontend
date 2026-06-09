import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import Button from '../components/ui/Button';
import Icon from '../components/icons/Icon';
import CTA from '../components/sections/CTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SERVICES_DETAIL } from '../data/siteData';

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.article
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass rounded-3xl p-8 md:p-10 scroll-mt-32"
    >
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
      <p className="text-muted text-lg mb-8 max-w-3xl">{service.description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold text-primary mb-4">Features</h3>
          <ul className="space-y-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-muted text-sm">
                <Icon name="Check" className="w-4 h-4 text-emerald-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-secondary mb-4">Benefits</h3>
          <ul className="space-y-2">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-muted text-sm">
                <Icon name="Check" className="w-4 h-4 text-secondary shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button to="/contact" size="md">
        Get Started
        <Icon name="ArrowRight" className="w-5 h-5" />
      </Button>
    </motion.article>
  );
}

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Website development, web apps, SaaS, e-commerce, UI/UX, APIs, maintenance, and performance optimization."
        path="/services"
      />
      <PageHero
        badge="Services"
        title="Digital Solutions Built for Growth"
        subtitle="From marketing websites to enterprise SaaS—we deliver end-to-end development services."
      />

      <section className="section-padding">
        <div className="container-custom space-y-12">
          {SERVICES_DETAIL.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
