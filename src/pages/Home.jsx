import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Icon from '../components/icons/Icon';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  TRUSTED_BY,
  SERVICES_OVERVIEW,
  WHY_CHOOSE,
  PROCESS_STEPS,
  TECHNOLOGIES,
  PORTFOLIO_PROJECTS,
  TESTIMONIALS,
  HOME_FAQ,
} from '../data/siteData';

function AnimatedCard({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        description="Launch Layer builds fast, scalable websites and web applications that help startups and enterprises grow faster."
      />

      {/* Hero */}
      <section className="min-h-screen flex items-center section-padding pt-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full glass text-primary"
            >
              Building Digital Products That Launch Businesses Forward
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Transform Your Ideas Into{' '}
              <span className="gradient-text">Powerful Digital Products</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Launch Layer builds fast, scalable, and modern websites and web applications
              that help businesses grow faster.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button to="/contact" size="lg">
                Get Free Consultation
                <Icon name="ArrowRight" className="w-5 h-5" />
              </Button>
              <Button to="/portfolio" variant="secondary" size="lg">
                View Our Work
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section-padding border-y border-white/5">
        <div className="container-custom">
          <p className="text-center text-muted text-sm uppercase tracking-widest mb-8">
            Trusted By Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {TRUSTED_BY.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xl md:text-2xl font-display font-semibold text-muted/60 hover:text-muted transition-colors"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Services"
            title="What We Build"
            subtitle="End-to-end digital solutions tailored to your business goals."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_OVERVIEW.map((service, i) => (
              <AnimatedCard key={service.id} delay={i * 0.1}>
                <Link
                  to="/services"
                  className="block glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon name={service.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            badge="Why Us"
            title="Why Choose Launch Layer"
            subtitle="We combine technical excellence with strategic thinking to deliver results."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <AnimatedCard key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full">
                  <Icon name={item.icon} className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Process"
            title="Our Development Process"
            subtitle="A proven, transparent workflow from discovery to growth."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedCard key={step.step} delay={i * 0.08}>
                <div className="relative glass rounded-2xl p-6 h-full">
                  <span className="text-4xl font-display font-bold gradient-text opacity-80">
                    {step.step}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding border-y border-white/5">
        <div className="container-custom text-center">
          <SectionHeader
            badge="Tech Stack"
            title="Technologies We Use"
            subtitle="Modern, battle-tested tools chosen for performance and scalability."
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TECHNOLOGIES.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-muted hover:text-primary hover:border-primary/30 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Portfolio"
            title="Featured Projects"
            subtitle="Real results for real businesses across industries."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((project, i) => (
              <AnimatedCard key={project.id} delay={i * 0.1}>
                <Link
                  to="/portfolio"
                  className="block glass rounded-2xl overflow-hidden group h-full"
                >
                  <div className={`h-40 bg-gradient-to-br ${project.image}`} />
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/portfolio" variant="secondary">
              View All Projects
              <Icon name="ArrowRight" className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Partnerships built on trust, quality, and measurable results."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedCard key={t.name} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-semibold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-muted text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={HOME_FAQ} />
      <CTA />
    </>
  );
}
