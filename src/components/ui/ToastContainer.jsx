import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../icons/Icon';
import { useToast } from '../../hooks/useToast';

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className={`glass-strong rounded-xl px-5 py-4 flex items-start gap-3 shadow-lg ${
              toast.type === 'error'
                ? 'border-red-500/30'
                : 'border-emerald-500/30'
            }`}
          >
            <div
              className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                toast.type === 'error' ? 'bg-red-500/20' : 'bg-emerald-500/20'
              }`}
            >
              <Icon
                name="Check"
                className={`w-4 h-4 ${
                  toast.type === 'error' ? 'text-red-400 hidden' : 'text-emerald-400'
                }`}
              />
              {toast.type === 'error' && (
                <Icon name="X" className="w-4 h-4 text-red-400" />
              )}
            </div>
            <p className="text-sm text-text flex-1">{toast.message}</p>
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-muted hover:text-text transition-colors"
              aria-label="Dismiss"
            >
              <Icon name="X" className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
