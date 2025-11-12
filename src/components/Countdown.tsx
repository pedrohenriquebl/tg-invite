import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-11-25T21:25:00").getTime();
  const [timeLeft, setTimeLeft] = useState<{
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    done?: boolean;
  }>({});

  useEffect(() => {
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

  return (
    <div className="flex gap-4 text-center text-white font-mono text-lg sm:text-2xl">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit}>
          <p className="text-3xl font-bold text-accent">
            {timeLeft[unit as keyof typeof timeLeft] ?? "00"}
          </p>
          <p className="text-sm uppercase">{unit}</p>
        </div>
      ))}
    </div>
  );
}
