import { useState, useEffect } from 'react';

interface OpenStatus {
  isOpen: boolean;
  closesIn: string | null;
  opensIn: string | null;
}

function parseTime(timeStr: string): { hours: number; minutes: number } {
  const [h, m] = timeStr.split(':').map(Number);
  return { hours: h, minutes: m };
}

function getMinutes(hours: number, minutes: number): number {
  return hours * 60 + minutes;
}

export function useOpenStatus(openTime: string, closeTime: string): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>({
    isOpen: false,
    closesIn: null,
    opensIn: null,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const currentMinutes = getMinutes(now.getHours(), now.getMinutes());

      const open = parseTime(openTime);
      const close = parseTime(closeTime);

      const openMinutes = getMinutes(open.hours, open.minutes);
      let closeMinutes = getMinutes(close.hours, close.minutes);

      // Handle midnight crossing (e.g. 13:00–01:00)
      if (closeMinutes <= openMinutes) {
        closeMinutes += 24 * 60;
      }

      let currentAdjusted = currentMinutes;
      if (currentMinutes < openMinutes && closeMinutes > 24 * 60) {
        currentAdjusted += 24 * 60;
      }

      const isOpen = currentAdjusted >= openMinutes && currentAdjusted < closeMinutes;

      let closesIn: string | null = null;
      let opensIn: string | null = null;

      if (isOpen) {
        const diff = closeMinutes - currentAdjusted;
        closesIn = formatDuration(diff);
      } else {
        let diff = openMinutes - currentAdjusted;
        if (diff < 0) diff += 24 * 60;
        opensIn = formatDuration(diff);
      }

      setStatus({ isOpen, closesIn, opensIn });
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [openTime, closeTime]);

  return status;
}

function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  return `${m}m`;
}
