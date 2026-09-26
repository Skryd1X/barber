import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LoaderProps { tagline: string; onComplete: () => void; }

export function Loader({ tagline, onComplete }: LoaderProps) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const exit = window.setTimeout(() => setHide(true), 1900);
    const done = window.setTimeout(onComplete, 2300);
    return () => { window.clearTimeout(exit); window.clearTimeout(done); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-[10000] grid place-items-center overflow-hidden bg-ink-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.018, filter: 'blur(8px)' }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.13),transparent_46%)]" />
          <div className="relative flex flex-col items-center">
            <RealScissors />
            <motion.div
              className="mt-7 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold-300 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 0.55, 1], opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 1.45, times: [0, .34, .62, 1], ease: 'easeInOut' }}
            />
            <motion.p
              className="mt-5 text-[10px] font-medium uppercase tracking-[0.46em] text-cream-200/[0.45]"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .25, duration: .45 }}
            >{tagline}</motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RealScissors() {
  const transition = { duration: 1.48, times: [0, .18, .34, .56, .72, 1], ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
  return (
    <motion.svg width="154" height="154" viewBox="0 0 154 154" fill="none" aria-hidden="true" initial={{ opacity: 0, scale: .9, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .45 }}>
      <defs>
        <linearGradient id="steel" x1="25" y1="18" x2="123" y2="136" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFFFF"/><stop offset=".25" stopColor="#AEB3BA"/><stop offset=".48" stopColor="#F2F2F0"/><stop offset=".72" stopColor="#777C84"/><stop offset="1" stopColor="#D9D9D5"/></linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF3C7"/><stop offset=".45" stopColor="#D4AF37"/><stop offset="1" stopColor="#7B5717"/></linearGradient>
        <filter id="soft"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      <ellipse cx="77" cy="80" rx="54" ry="52" fill="#d4af37" opacity=".06" filter="url(#soft)"/>

      <motion.g style={{ transformOrigin: '77px 78px' }} animate={{ rotate: [-22, -22, 7, -22, 7, -22] }} transition={transition}>
        <path d="M73 77 31 121c-5 5-13 5-18 0s-5-13 0-18L61 67Z" fill="url(#steel)" stroke="#45484F" strokeWidth="1.4"/>
        <path d="M72 75 46 50" stroke="#8D929A" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="35" cy="39" r="16" stroke="url(#gold)" strokeWidth="5" fill="#0C0C0F"/>
        <circle cx="35" cy="39" r="9.5" stroke="#6E5520" strokeWidth="1" opacity=".7"/>
      </motion.g>

      <motion.g style={{ transformOrigin: '77px 78px' }} animate={{ rotate: [22, 22, -7, 22, -7, 22] }} transition={transition}>
        <path d="M81 77 123 121c5 5 13 5 18 0s5-13 0-18L93 67Z" fill="url(#steel)" stroke="#45484F" strokeWidth="1.4"/>
        <path d="M82 75 108 50" stroke="#8D929A" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="119" cy="39" r="16" stroke="url(#gold)" strokeWidth="5" fill="#0C0C0F"/>
        <circle cx="119" cy="39" r="9.5" stroke="#6E5520" strokeWidth="1" opacity=".7"/>
      </motion.g>

      <circle cx="77" cy="78" r="6.5" fill="url(#gold)" stroke="#F5EAD0" strokeWidth="1"/>
      <circle cx="77" cy="78" r="2.2" fill="#171719"/>

      {[0,1].map((i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: [0,0,1,0] }} transition={{ delay: i === 0 ? .46 : 1.02, duration: .32 }}>
          <path d="M43 79H111" stroke="#F0D98D" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M49 74 44 70M105 74l5-4M53 84l-4 5M101 84l4 5" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round"/>
        </motion.g>
      ))}
    </motion.svg>
  );
}
