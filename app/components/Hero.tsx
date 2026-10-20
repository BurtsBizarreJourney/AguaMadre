"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-media"
        role="img"
        aria-label="Mineral spring water background"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2940&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, scale: 1.06, filter: "blur(16px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-overlay" />
      </motion.div>
      <div className="hero-inner container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Single Origin — Est. 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Water, remembered.
        </motion.h1>
        <motion.p
          className="hero-lede"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          A sparkling botanical water made with mineral spring water and wild-harvested botanicals. Nothing added. Nothing taken away.
        </motion.p>
        <motion.a
          href="#reveal"
          className="btn btn-primary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Pre-order the first batch
        </motion.a>
      </div>
    </section>
  );
}