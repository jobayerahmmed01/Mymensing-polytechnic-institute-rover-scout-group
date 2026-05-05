import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
}

const Counter = ({ end }: CounterProps) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setVal(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(tick);
        };
        
        requestAnimationFrame(tick);
      }
    });
    
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{val}</span>;
};

export default Counter;
