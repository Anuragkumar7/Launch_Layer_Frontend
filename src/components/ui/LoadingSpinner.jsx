import { motion } from 'framer-motion';

export default function LoadingSpinner({ fullScreen = false }) {
  const content = (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <span className="text-white font-display font-bold text-xl">L</span>
      </motion.div>
      <motion.p
        className="text-muted text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading Launch Layer...
      </motion.p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
        {content}
      </div>
    );
  }

  return <div className="flex justify-center py-12">{content}</div>;
}
