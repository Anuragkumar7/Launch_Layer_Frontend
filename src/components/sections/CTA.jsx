import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Icon from '../icons/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function CTA({
  title = 'Ready to Launch Your Digital Product?',
  subtitle = 'Book a free consultation and let us turn your vision into a high-performance reality.',
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="secondary" size="lg" className="!bg-white !text-primary !border-0">
                Get Free Consultation
                <Icon name="ArrowRight" className="w-5 h-5" />
              </Button>
              <Button to="/portfolio" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
