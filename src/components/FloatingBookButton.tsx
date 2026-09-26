import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';
import type { Translation } from '@/data/translations';

interface FloatingBookButtonProps {
  t: Translation;
  visible: boolean;
  onBook: () => void;
}

export function FloatingBookButton({ t, visible, onBook }: FloatingBookButtonProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={onBook}
          className="fixed bottom-5 left-1/2 z-[7000] inline-flex -translate-x-1/2 items-center gap-2 rounded-full gold-gradient px-6 py-3 text-sm font-semibold text-ink-950 shadow-2xl shadow-gold-500/[0.2] md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          whileTap={{ scale: 0.96 }}
        >
          <Send size={15} />
          {t.floatingBook}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
