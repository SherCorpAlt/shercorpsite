import Image from "next/image"

export function TrustBar() {
    const partners = [
        { name: "Laam", image: "/logos/laam.png" },
        { name: "Cardwalla", image: "/logos/cardwalla1.png" },
        { name: "Wavecom", image: "/logos/Wavecom-White-02.png" },
        { name: "Xfinity", image: "/logos/Xfinity_Logo-02.png" },
        { name: "Dynasty Telecom", image: "/logos/Dynasty Telecom Logo white 2-01.png" },
        { name: "City Apartments", image: "/logos/City apats fb logo.jpg" },
    ]

    return (
        <section className="py-16 border-y border-white/5 bg-background/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs font-semibold text-muted-foreground mb-10 uppercase tracking-[0.3em]">
                    Brands that trust SherCorp with their digital marketing and design
                </p>
                <div className="relative w-full overflow-hidden mask-gradient-x">
                    <div className="flex w-max animate-marquee space-x-20">
                        {/* First set of logos */}
                        <div className="flex space-x-20 items-center">
                            {partners.map((partner, i) => (
                                <div key={i} className={`group relative flex items-center justify-center cursor-pointer transition-all duration-300 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100 hover:scale-110 shrink-0 ${partner.name === 'Wavecom' ? 'w-60 h-24' : 'w-40 h-16'}`}>
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate set for seamless loop */}
                        <div className="flex space-x-20 items-center">
                            {partners.map((partner, i) => (
                                <div key={`dup-${i}`} className={`group relative flex items-center justify-center cursor-pointer transition-all duration-300 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100 hover:scale-110 shrink-0 ${partner.name === 'Wavecom' ? 'w-60 h-24' : 'w-40 h-16'}`}>
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
