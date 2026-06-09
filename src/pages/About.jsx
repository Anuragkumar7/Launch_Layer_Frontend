import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import PageHero from '../components/sections/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import CTA from '../components/sections/CTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CORE_VALUES, TEAM } from '../data/siteData';

function Card({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="glass rounded-2xl p-6 md:p-8"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Launch Layer — our story, mission, values, and the team behind your digital success."
        path="/about"
      />
      <PageHero
        badge="About Us"
        title="We Build Products That Launch Businesses Forward"
        subtitle="Launch Layer is a modern web development company helping startups, SMBs, and enterprises create exceptional digital experiences."
      />

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <Card>
            <h2 className="font-display text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted leading-relaxed mb-4">
              Founded with a passion for technology and design, Launch Layer began as a small team
              of developers who believed every business deserves a world-class digital presence.
            </p>
            <p className="text-muted leading-relaxed">
              Today, we partner with companies worldwide—from ambitious startups to established
              enterprises—delivering websites, web apps, and SaaS platforms that drive real growth.
            </p>
          </Card>
          <Card delay={0.1}>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <span className="font-display text-6xl font-bold gradient-text opacity-50">LL</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <Card>
            <span className="text-primary text-sm font-medium uppercase tracking-wide">Mission</span>
            <h2 className="font-display text-2xl font-bold mt-2 mb-4">Empower Through Technology</h2>
            <p className="text-muted leading-relaxed">
              To empower businesses with cutting-edge web solutions that accelerate growth,
              enhance user experiences, and create lasting competitive advantages in the digital marketplace.
            </p>
          </Card>
          <Card delay={0.1}>
            <span className="text-secondary text-sm font-medium uppercase tracking-wide">Vision</span>
            <h2 className="font-display text-2xl font-bold mt-2 mb-4">Global Digital Excellence</h2>
            <p className="text-muted leading-relaxed">
              To become the most trusted web development partner for innovative companies worldwide—
              known for quality, integrity, and transformative digital products.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader badge="Values" title="Core Values" subtitle="The principles that guide every project we deliver." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, i) => (
              <Card key={value.title} delay={i * 0.1}>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader badge="Team" title="Meet Our Team" subtitle="Experienced professionals dedicated to your success." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Card key={member.name} delay={i * 0.1}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center font-display font-bold text-xl mb-4">
                  {member.initials}
                </div>
                <h3 className="font-display font-semibold text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <Card>
            <SectionHeader
              align="left"
              badge="Trust"
              title="Why Clients Trust Us"
              subtitle="We earn trust through transparency, quality delivery, and long-term partnerships."
              className="!mb-6"
            />
            <ul className="grid sm:grid-cols-2 gap-4 text-muted">
              {[
                '100+ successful projects delivered',
                'Dedicated project managers on every engagement',
                'Agile methodology with weekly progress updates',
                'Post-launch support and maintenance options',
                'NDA-friendly and enterprise security practices',
                'Satisfaction-focused revision process',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <CTA />
    </>
  );
}
