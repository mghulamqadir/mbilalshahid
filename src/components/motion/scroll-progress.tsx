"use client";
import { motion, useScroll } from "motion/react";
export function ScrollProgress() { const { scrollYProgress } = useScroll(); return <motion.div aria-hidden className="scroll-progress" style={{ scaleX: scrollYProgress }} />; }
