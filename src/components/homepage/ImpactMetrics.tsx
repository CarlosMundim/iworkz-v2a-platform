'use client';

import { useEffect, useRef } from 'react';

interface Metric {
  value: number;
  suffix?: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 98, suffix: '%', label: 'Successful Placement Rate' },
  { value: 40, suffix: '+', label: 'University Partners' },
  { value: 68, suffix: '%', label: 'Faster Onboarding' },
  { value: 10_000, label: 'Workers Upskilled' }
];

function useCountUp(value: number, duration = 1_200) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * value);
      if (ref.current) ref.current.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else if (ref.current) ref.current.textContent = value.toLocaleString();
    };
    requestAnimationFrame(step);
  }, [value, duration]);
  return ref;
}

function MetricItem({ metric }: { metric: Metric }) {
  const ref = useCountUp(metric.value);
  
  return (
    <div className="flex flex-col items-center flex-1 min-w-[130px]">
      <span
        ref={ref}
        className="text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight"
        aria-label={String(metric.value) + (metric.suffix || '')}
      />
      <span className="text-2xl font-semibold text-blue-600 mt-2">{metric.suffix}</span>
      <span className="text-lg text-gray-500 mt-3 text-center">{metric.label}</span>
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="w-full py-12 px-2 md:px-16 lg:px-24 bg-white/70 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-10 justify-between items-center max-w-6xl mx-auto mb-10 border border-blue-50">
      {metrics.map((metric, idx) => (
        <MetricItem key={idx} metric={metric} />
      ))}
    </section>
  );
}
