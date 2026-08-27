"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

/**
 * A CSS-only "3D-looking" gold bar. Built from a handful of gradient-filled
 * faces (top / front / side) arranged with clip-path + perspective to read
 * as an ingot, with a mouse-tracked tilt and a slow light sweep. No WebGL /
 * 3D library required, which keeps the bundle small.
 */
export function GoldBar() {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(400px circle at ${glowX}% ${glowY}%, rgba(244,231,193,0.35), transparent 70%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 22);
    rotateX.set((0.5 - py) * 16);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-md select-none"
      style={{ perspective: 1200 }}
    >
      {/* ambient glow behind the bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,175,55,0.28), transparent 75%)",
        }}
      />

      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto aspect-[16/10] w-full max-w-sm cursor-pointer"
      >
        {/* top bevel face */}
        <div
          aria-hidden
          className="absolute inset-x-[6%] top-0 h-[38%]"
          style={{
            clipPath: "polygon(8% 100%, 92% 100%, 100% 0%, 0% 0%)",
            background:
              "linear-gradient(135deg, #FBF0CE 0%, #E8CE8B 28%, #C9A227 55%, #EFDA9D 78%, #B8912B 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        />
        {/* front face */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[68%] rounded-[6px]"
          style={{
            background:
              "linear-gradient(180deg, #C9A227 0%, #A97F1F 45%, #8A6A18 100%)",
            boxShadow:
              "inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -14px 24px rgba(0,0,0,0.35), 0 30px 60px -15px rgba(0,0,0,0.6)",
          }}
        />
        {/* engraved mark */}
        <div className="absolute inset-x-0 bottom-[14%] flex flex-col items-center gap-1">
          <span
            className="font-serif text-2xl tracking-[0.2em] text-black/40 sm:text-3xl"
            style={{ textShadow: "0 1px 0 rgba(255,255,255,0.35)" }}
          >
            GOLDR
          </span>
          <span className="text-[10px] font-medium tracking-[0.35em] text-black/35">
            999.9 FINE
          </span>
        </div>
        {/* moving light sweep */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[6px] mix-blend-overlay"
          style={{
            background:
              "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.55) 32%, transparent 44%)",
            backgroundSize: "260% 100%",
          }}
          animate={{ backgroundPositionX: ["120%", "-40%"] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
          }}
        />
        {/* cursor-follow glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[6px]"
          style={{ background: glowBackground }}
        />
      </motion.div>
    </div>
  );
}
