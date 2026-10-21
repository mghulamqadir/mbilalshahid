"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/content/seed";
export function ProcessPath() { const ref = useRef<HTMLOListElement>(null); const reduced = useReducedMotion(); const { scrollYProgress } = useScroll({ target: ref, offset: ["start .8", "end .3"] }); const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]); return <div className="process-path"><motion.span aria-hidden className="process-path__line" style={{ scaleY: reduced ? 1 : scaleY }} /><ol className="process-list" ref={ref}>{processSteps.map(([number, title, copy]) => <motion.li key={number} initial={reduced ? false : { opacity: .55, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: .5, once: true }}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></motion.li>)}</ol></div>; }
