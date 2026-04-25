"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

// ─── Slide Data ───────────────────────────────────────────────────────────────
const slides = [
    {
        heading: "SherCorp Digital\nMarketing",
        body: "Solutions that fit every budget",
        image: "/portfolio/portfolio-1.jpg",
        index: "01",
    },
    {
        heading: "Social Media\nDesign",
        body: "For every industry and brand",
        image: "/portfolio/portfolio-2.jpg",
        index: "02",
    },
    {
        heading: "Let's work on\nyour project",
        body: "Or try our AI powered bot!",
        image: "/portfolio/portfolio-3.jpg",
        index: "03",
    },
    {
        heading: "Let's start with\nyour store!",
        body: "We can manage any kind of online store.",
        image: "/portfolio/maas-harvest/2.jpg",
        index: "04",
    },
]

// ─── Animation Variants ───────────────────────────────────────────────────────
const headingVariants = {
    enter: { y: 60, opacity: 0, filter: "blur(8px)" },
    center: {
        y: 0, opacity: 1, filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        y: -40, opacity: 0, filter: "blur(6px)",
        transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
    },
}

const bodyVariants = {
    enter: { y: 30, opacity: 0 },
    center: {
        y: 0, opacity: 1,
        transition: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        y: -20, opacity: 0,
        transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
    },
}

const indexVariants = {
    enter: { opacity: 0, x: -20 },
    center: {
        opacity: 1, x: 0,
        transition: { duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.25 } },
}

const imageVariants = {
    enter: { scale: 1.08, opacity: 0 },
    center: {
        scale: 1, opacity: 1,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        scale: 0.96, opacity: 0,
        transition: { duration: 0.45, ease: [0.55, 0, 1, 0.45] },
    },
}

// ─── Reusable Image Card ──────────────────────────────────────────────────────
function ImageCard({
    slide,
    current,
    goTo,
    autoPlay,
    className = "",
}: {
    slide: typeof slides[0]
    current: number
    goTo: (i: number) => void
    autoPlay: boolean
    className?: string
}) {
    return (
        <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl ${className}`}
            style={{ boxShadow: "0 0 80px rgba(57,255,20,0.08), 0 40px 100px rgba(0,0,0,0.6)" }}
        >
            {/* Ambient glow */}
            <div className="hero-ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Image crossfade */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`image-${current}`}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <Image
                        src={slide.image}
                        alt={slide.heading}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Bottom gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
                </motion.div>
            </AnimatePresence>

            {/* Scanline */}
            <div className="hero-scanline" />

            {/* Frame glow */}
            <div className="image-frame-border" />

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-neon-green/40 z-30 rounded-tl" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neon-green/40 z-30 rounded-tr" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-neon-green/40 z-30 rounded-bl" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-neon-green/40 z-30 rounded-br" />

            {/* Bottom caption strip */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`caption-${current}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
                    exit={{ y: 10, opacity: 0 }}
                    className="absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between gap-3"
                >
                    <div
                        className="flex-1 rounded-xl px-4 py-3"
                        style={{
                            background: "rgba(0,0,0,0.5)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <p
                            className="hero-body-font text-white/80 font-light"
                            style={{ fontSize: "0.78rem", letterSpacing: "0.04em" }}
                        >
                            {slide.body}
                        </p>
                    </div>

                    {/* Dots inside caption row */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`hero-dot ${i === current ? "active" : ""}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            {autoPlay && <div key={`progress-${current}`} className="hero-progress-bar" />}
        </div>
    )
}

// ─── Component ────────────────────────────────────────────────────────────────
export function HeroSection() {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }, [])

    const goTo = useCallback((index: number) => {
        setCurrent(index)
        setAutoPlay(false)
        setTimeout(() => setAutoPlay(true), 6000)
    }, [])

    useEffect(() => {
        if (!autoPlay) return
        const timer = setInterval(next, 4500)
        return () => clearInterval(timer)
    }, [autoPlay, next])

    const slide = slides[current]

    return (
        <>
            {/* ── Google Fonts ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

                .hero-heading-font { font-family: 'Syne', sans-serif; }
                .hero-body-font    { font-family: 'DM Sans', sans-serif; }

                .hero-glass {
                    background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
                    backdrop-filter: blur(24px) saturate(160%);
                    -webkit-backdrop-filter: blur(24px) saturate(160%);
                    border-right: 1px solid rgba(255,255,255,0.07);
                }

                /* Mobile: remove side border, keep subtle glass */
                @media (max-width: 767px) {
                    .hero-glass {
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.06);
                    }
                }

                .hero-neon-line {
                    background: linear-gradient(90deg, #39FF14 0%, transparent 100%);
                    height: 2px;
                    width: 48px;
                }

                .hero-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 1.5px solid rgba(57,255,20,0.4);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }
                .hero-dot.active {
                    background: #39FF14;
                    border-color: #39FF14;
                    box-shadow: 0 0 12px rgba(57,255,20,0.6);
                    width: 24px;
                    border-radius: 4px;
                }

                .hero-progress-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #39FF14, rgba(57,255,20,0.3));
                    animation: heroProgress 4.5s linear infinite;
                }

                @keyframes heroProgress {
                    from { width: 0%; }
                    to   { width: 100%; }
                }

                .image-frame-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 1.5rem;
                    background: linear-gradient(135deg, rgba(57,255,20,0.12) 0%, rgba(57,255,20,0) 50%, rgba(57,255,20,0.06) 100%);
                    pointer-events: none;
                    z-index: 20;
                }

                .hero-scanline {
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
                    pointer-events: none;
                    z-index: 5;
                    border-radius: 1.5rem;
                }

                .hero-ambient-glow {
                    position: absolute;
                    width: 60%;
                    height: 60%;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                }
            `}</style>

            {/* ════════════════════════════════════════════════════════════
                MOBILE LAYOUT — 70% image / 30% text, full screen height
            ════════════════════════════════════════════════════════════ */}
            <section className="md:hidden relative w-full bg-black overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>

                {/* Dot grid bg (shows through in text zone) */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `radial-gradient(rgba(57,255,20,0.07) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* ── UPPER 70% — Image ── */}
                <div className="absolute top-0 left-0 right-0 z-10" style={{ height: "70%" }}>

                    {/* Crossfading image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`mob-img-${current}`}
                            variants={imageVariants}
                            initial="enter" animate="center" exit="exit"
                            className="absolute inset-0"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.heading}
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom-left gradient so dots / text edge are readable */}
                    <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)",
                        }}
                    />

                    {/* Scanline */}
                    <div className="hero-scanline absolute inset-0 z-20 pointer-events-none" style={{ borderRadius: 0 }} />

                    {/* Corner bracket accents */}
                    <div className="absolute top-14 left-4 w-5 h-5 border-t border-l border-neon-green/40 z-30" />
                    <div className="absolute top-14 right-4 w-5 h-5 border-t border-r border-neon-green/40 z-30" />

                    {/* Dots nav — bottom of image area */}
                    <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`hero-dot ${i === current ? "active" : ""}`}
                            />
                        ))}
                    </div>

                    {/* Progress bar at very bottom of image */}
                    {autoPlay && <div key={`mob-progress-${current}`} className="hero-progress-bar z-30" />}
                </div>

                {/* ── LOWER 30% — Text content ── */}
                <div
                    className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-center px-6"
                    style={{ height: "30%", background: "rgba(0,0,0,0.92)", borderTop: "1px solid rgba(57,255,20,0.1)" }}
                >
                    {/* Slide index watermark */}
                    <div className="absolute top-3 right-5 hero-body-font text-white/8 select-none" style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1, color: "rgba(255,255,255,0.05)" }}>
                        {slide.index}
                    </div>

                    {/* Neon label line */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="hero-neon-line" style={{ width: "28px" }} />
                        <span className="hero-body-font text-[10px] tracking-[0.22em] uppercase text-neon-green/60">
                            Portfolio · Work · Agency
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="overflow-hidden mb-1">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={`mob-heading-${current}`}
                                variants={headingVariants}
                                initial="enter" animate="center" exit="exit"
                                className="hero-heading-font text-white leading-[1.05] whitespace-pre-line"
                                style={{ fontSize: "clamp(1.4rem, 6vw, 1.9rem)", fontWeight: 800, letterSpacing: "-0.01em" }}
                            >
                                {slide.heading}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Body + CTA row */}
                    <div className="flex items-center justify-between gap-4 mt-2">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`mob-body-${current}`}
                                variants={bodyVariants}
                                initial="enter" animate="center" exit="exit"
                                className="hero-body-font text-white/50 font-light flex-1"
                                style={{ fontSize: "clamp(0.78rem, 3vw, 0.95rem)", lineHeight: 1.5 }}
                            >
                                {slide.body}
                            </motion.p>
                        </AnimatePresence>

                        <motion.a
                            href="/casestudies"
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-neon-green/30 text-neon-green flex-shrink-0"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                DESKTOP LAYOUT — side-by-side split
            ════════════════════════════════════════════════════════════ */}
            <section className="hidden md:flex relative w-full min-h-screen bg-black items-stretch overflow-hidden">

                {/* Dot grid bg */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{
                        backgroundImage: `radial-gradient(rgba(57,255,20,0.07) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />

                {/* ── Left panel ── */}
                <div className="hero-glass relative z-10 flex flex-col justify-center w-[52%] lg:w-[48%] px-12 lg:px-16 py-24 min-h-screen">

                    {/* Top label */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="hero-neon-line" />
                        <span className="hero-body-font text-xs tracking-[0.25em] uppercase text-neon-green/70">
                            Portfolio · Work · Agency
                        </span>
                    </div>

                    {/* Slide index */}
                    <div className="mb-6 overflow-hidden" style={{ height: "2.5rem" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`index-${current}`}
                                variants={indexVariants}
                                initial="enter" animate="center" exit="exit"
                                className="hero-body-font text-4xl font-light text-white/10 select-none"
                                style={{ lineHeight: 1 }}
                            >
                                {slide.index}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Heading */}
                    <div className="mb-6 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={`heading-${current}`}
                                variants={headingVariants}
                                initial="enter" animate="center" exit="exit"
                                className="hero-heading-font text-white leading-[1.0] whitespace-pre-line"
                                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
                            >
                                {slide.heading}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Neon divider */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`divider-${current}`}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }}
                            exit={{ scaleX: 0, opacity: 0 }}
                            className="origin-left mb-6"
                            style={{ height: "1px", width: "100px", background: "linear-gradient(90deg, #39FF14 0%, transparent 100%)" }}
                        />
                    </AnimatePresence>

                    {/* Body */}
                    <div className="mb-12 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`body-${current}`}
                                variants={bodyVariants}
                                initial="enter" animate="center" exit="exit"
                                className="hero-body-font text-white/50 font-light"
                                style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.7 }}
                            >
                                {slide.body}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* CTA */}
                    <motion.a
                        href="/casestudies"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-3 self-start"
                    >
                        <span
                            className="hero-body-font text-neon-green font-medium tracking-wide"
                            style={{ fontSize: "0.9rem", letterSpacing: "0.08em" }}
                        >
                            VIEW OUR WORK
                        </span>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-neon-green/30 text-neon-green">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </motion.a>

                    {/* Dot navigation */}
                    <div className="absolute bottom-10 left-12 lg:left-16 flex items-center gap-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`hero-dot ${i === current ? "active" : ""}`}
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    {autoPlay && <div key={`progress-${current}`} className="hero-progress-bar" />}
                </div>

                {/* ── Right panel ── */}
                <div className="relative z-10 flex flex-1 items-center justify-center p-8 lg:p-12">
                    <ImageCard
                        slide={slide}
                        current={current}
                        goTo={goTo}
                        autoPlay={autoPlay}
                        className="w-full max-w-[520px] aspect-[4/5]"
                    />

                    {/* Side slide counter */}
                    <div
                        className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 items-center"
                        style={{ writingMode: "vertical-rl" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`side-${current}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                                exit={{ opacity: 0, y: -10 }}
                                className="hero-body-font text-white/20 text-xs tracking-[0.3em]"
                            >
                                {slide.index} / 0{slides.length}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </>
    )
}
