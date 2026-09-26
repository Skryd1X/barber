import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  tagline: string;
  onComplete: () => void;
}

export function Loader({ tagline, onComplete }: LoaderProps) {
  const [step, setStep] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 280),
      setTimeout(() => setStep(2), 760),
      setTimeout(() => setHide(true), 1600),
      setTimeout(() => onComplete(), 2100),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]" />
          <Scissors step={step} />
          <motion.p
            className="mt-8 text-xs uppercase tracking-[0.45em] text-cream-200/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {tagline}
          </motion.p>
          <div className="mt-4 flex gap-2">
            {[1, 2].map((n) => (
              <div
                key={n}
                className={`h-[2px] w-8 rounded-full transition-all duration-300 ${
                  step >= n ? 'bg-gold-400' : 'bg-gold-400/20'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Scissors({ step }: { step: number }) {
  const rotate = step === 1 ? 0 : step === 2 ? -8 : 14;
  const rotate2 = step === 1 ? 0 : step === 2 ? 8 : -14;

  return (
    <motion.svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="goldLoader" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5ead0" />
          <stop offset="55%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8a661d" />
        </linearGradient>
        <linearGradient id="steelLoader" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1f1f2" />
          <stop offset="60%" stopColor="#9fa3aa" />
          <stop offset="100%" stopColor="#d6d9df" />
        </linearGradient>
      </defs>

      <motion.g style={{ originX: '50%', originY: '50%' }} animate={{ rotate }} transition={{ duration: 0.24 }}>
        <circle cx="32" cy="34" r="14" stroke="url(#goldLoader)" strokeWidth="4" />
        <path d="M43 44 L60 60 L32 90 L24 82 Z" fill="url(#steelLoader)" stroke="#6f7680" strokeWidth="1.2" />
      </motion.g>

      <motion.g style={{ originX: '50%', originY: '50%' }} animate={{ rotate: rotate2 }} transition={{ duration: 0.24 }}>
        <circle cx="88" cy="34" r="14" stroke="url(#goldLoader)" strokeWidth="4" />
        <path d="M77 44 L60 60 L88 90 L96 82 Z" fill="url(#steelLoader)" stroke="#6f7680" strokeWidth="1.2" />
      </motion.g>

      <circle cx="60" cy="60" r="5" fill="url(#goldLoader)" />
      <circle cx="60" cy="60" r="2" fill="#08080a" />

      {step > 0 && (
        <motion.line
          key={step}
          x1="38"
          y1="102"
          x2="82"
          y2="102"
          stroke="url(#goldLoader)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.9 }}
          animate={{ pathLength: 1, opacity: 0 }}
          transition={{ duration: 0.35 }}
        />
      )}
    </motion.svg>
  );
}
