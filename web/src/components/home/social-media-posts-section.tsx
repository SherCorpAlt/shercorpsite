"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

// ---------------------------------------------------------------------------
// Data — filename → href mapping (null = no case study link)
// ---------------------------------------------------------------------------
interface PostItem {
    src: string
    alt: string
    href: string | null
    client: string
}

const posts: PostItem[] = [
    {
        src: "/sm-posts/Artemis Luxe 1.jpg",
        alt: "Artemis Luxe Social Campaign — Post 1",
        href: "/artimes-luxe",
        client: "Artimes Luxe",
    },
    {
        src: "/sm-posts/Artemis Luxe 2.png",
        alt: "Artemis Luxe Social Campaign — Post 2",
        href: "/artimes-luxe",
        client: "Artimes Luxe",
    },
    {
        src: "/portfolio/maas-harvest/2.jpg",
        alt: "Shopify Expertise - Maas Harvests",
        href: "/shopify-expertise",
        client: "Maas Harvests",
    },
    {
        src: "/sm-posts/Wavecomm Ads 1.jpg",
        alt: "Wavecomm Ads Campaign — Creative 1",
        href: "/Wavecomm",
        client: "Wavecomm",
    },
    {
        src: "/sm-posts/Wavecomm Ads 2.jpg",
        alt: "Wavecomm Ads Campaign — Creative 2",
        href: "/Wavecomm",
        client: "Wavecomm",
    },
    {
        src: "/sm-posts/Wavecomm Ads 3.jpg",
        alt: "Wavecomm Ads Campaign — Creative 3",
        href: "/Wavecomm",
        client: "Wavecomm",
    },
    {
        src: "/sm-posts/Wavecomm Ads 4.jpg",
        alt: "Wavecomm Ads Campaign — Creative 4",
        href: "/Wavecomm",
        client: "Wavecomm",
    },
    // No slug match — displayed but not linked
    {
        src: "/sm-posts/5.jpg",
        alt: "SherCorp Social Media Creative",
        href: null,
        client: "SherCorp",
    },
]

// How many items per "page" (2-col grid, 2 rows visible)
const ITEMS_PER_PAGE = 4

export function SocialMediaPostsSection() {
    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE)
    const [page, setPage] = useState(0)

    const prev = useCallback(
        () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1)),
        [totalPages]
    )
    const next = useCallback(
        () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1)),
        [totalPages]
    )

    const visiblePosts = posts.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )

    return (
        <section id="social-media-posts" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/8 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/8 blur-[140px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* ── Section Header ── */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div className="space-y-3">
                        <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-neon-green">
                            Our Work
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                            Designs That{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
                                Drive Engagement
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                            Social media creatives built with strategy, performance, and brand psychology in mind.
                        </p>
                    </div>

                    {/* Navigation buttons — desktop right-aligned */}
                    {totalPages > 1 && (
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={prev}
                                aria-label="Previous posts"
                                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 text-white hover:border-neon-green hover:text-neon-green hover:bg-neon-green/10 flex items-center justify-center transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="text-sm font-mono text-white/40 tabular-nums w-12 text-center">
                                {page + 1} / {totalPages}
                            </span>
                            <button
                                onClick={next}
                                aria-label="Next posts"
                                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 text-white hover:border-neon-green hover:text-neon-green hover:bg-neon-green/10 flex items-center justify-center transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Image Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {visiblePosts.map((post, i) => (
                        <PostCard key={`${page}-${i}`} post={post} index={i} />
                    ))}
                </div>

                {/* ── Dot pagination (mobile) ── */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-10 md:hidden">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                aria-label={`Page ${i + 1}`}
                                className={`transition-all duration-400 rounded-full ${page === i
                                        ? "w-8 h-2 bg-neon-green shadow-[0_0_8px_#39FF14]"
                                        : "w-2 h-2 bg-white/25 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

// ---------------------------------------------------------------------------
// Individual card — linked if href provided, plain div otherwise
// ---------------------------------------------------------------------------
function PostCard({ post, index }: { post: PostItem; index: number }) {
    const inner = (
        <div
            className="group relative w-full overflow-hidden rounded-3xl border border-white/10"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image */}
            <div className="relative w-full aspect-square">
                <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                />

                {/* Dark overlay — fades on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 transition-opacity duration-500 ease-out group-hover:opacity-0" />

                {/* Hover glow ring */}
                <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-neon-green/30 transition-all duration-500 pointer-events-none" />

                {/* Client label + link arrow — visible on hover */}
                {post.href && (
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                        <span className="text-sm font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                            {post.client}
                        </span>
                        <span className="w-9 h-9 rounded-full bg-neon-green text-black flex items-center justify-center shadow-[0_0_16px_rgba(57,255,20,0.5)]">
                            <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </div>
                )}
            </div>
        </div>
    )

    // Wrap in Link only when a case-study URL exists
    if (post.href) {
        return (
            <Link href={post.href} className="block cursor-pointer">
                {inner}
            </Link>
        )
    }

    return <div>{inner}</div>
}
