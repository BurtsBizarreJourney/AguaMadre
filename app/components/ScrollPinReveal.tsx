"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Frame = {
  alt: string;
  caption?: string;
  src?: string; // Added image source
};

type ScrollPinRevealProps = {
  frames: Frame[];
  scrollLengthVh?: number;
};

export default function ScrollPinReveal({
  frames,
  scrollLengthVh = 300,
}: ScrollPinRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const els = frameRefs.current.filter(Boolean) as HTMLDivElement[];
      if (els.length === 0) return;

      gsap.set(els, { autoAlpha: 0 });
      gsap.set(els[0], { autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollLengthVh}%`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      els.slice(1).forEach((el) => {
        tl.to(els, { autoAlpha: 0, duration: 0.4 }, "+=0.3");
        tl.to(el, { autoAlpha: 1, duration: 0.4 }, "<");
      });
    }, container);

    return () => ctx.revert();
  }, [scrollLengthVh]);

  return (
    <div ref={containerRef} className="pin-reveal">
      <div className="pin-reveal-stage">
        {frames.map((frame, i) => (
          <div
            key={frame.alt}
            ref={(el) => {
              frameRefs.current[i] = el;
            }}
            className="pin-reveal-frame"
            role="img"
            aria-label={frame.alt}
            style={frame.src ? {
              backgroundImage: `url('${frame.src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } : {}}
          >
            {/* Overlay to ensure text is readable over images */}
            {frame.src && <div className="pin-reveal-overlay" />}
            
            {frame.caption && (
              <p className="pin-reveal-caption">{frame.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}