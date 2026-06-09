import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Icon from '../icons/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function FAQ({ items, badge = 'FAQ', title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader badge={badge} title={title} subtitle="Everything you need to know before starting your project." />
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="max-w-3xl mx-auto space-y-4"
        >
          {items.map((item, index) => (
            <div key={item.question} className="glass rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold pr-4">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="shrink-0 text-primary"
                >
                  <Icon name="ChevronDown" className="w-5 h-5" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-muted leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
