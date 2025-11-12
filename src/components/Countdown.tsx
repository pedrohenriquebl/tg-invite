import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    done?: boolean;
  }>({});

  useEffect(() => {
    const targetDate = new Date("2025-11-25T21:25:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ done: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.done) {
    return <p className="text-accent text-xl">A apresentação já começou! 🚀</p>;
  }

  const units = [
    { key: 'days', label: 'Dias' },
    { key: 'hours', label: 'Horas' },
    { key: 'minutes', label: 'Minutos' },
    { key: 'seconds', label: 'Segundos' },
  ];

  return (
    <motion.div className="flex gap-3 text-center font-mono text-base sm:text-lg" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {units.map((u) => (
        <div key={u.key} className="card px-4 py-3 rounded-lg min-w-16">
          <p className="text-2xl sm:text-3xl font-bold text-accent text-body">
            {String(timeLeft[u.key as keyof typeof timeLeft] ?? '00').padStart(2, '0')}
          </p>
          <p className="text-xs uppercase text-muted mt-1">{u.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
