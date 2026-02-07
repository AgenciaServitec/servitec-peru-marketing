"use client";

import {cn} from "@/lib/utils";

const TOP_WORDS = [
    "Strategy",
    "TikTok Growth",
    "Content Creation",
    "Paid Ads",
    "Influencer Marketing",
    "Reels",
    "Brand Positioning",
    "Community",
];

const BOTTOM_WORDS = [
    "SEO",
    "Google Ads",
    "Landing Pages",
    "Web Design",
    "E-commerce",
    "Analytics",
    "Automation",
    "CRM",
];

export function CrossingTapeSection() {
    return (
        <section className="relative py-10 md:py-14">
            <div className="">
                <div className="relative h-28 md:h-32">
                    <Tape
                        words={TOP_WORDS}
                        className="bg-primary text-primary-foreground shadow-primary"
                        rotate="-rotate-[8deg]"
                        top="top-7 md:top-10"
                    />
                    <Tape
                        words={BOTTOM_WORDS}
                        className="bg-foreground text-background"
                        rotate="rotate-[6deg]"
                        top="top-9 md:top-12"
                    />
                </div>
            </div>
        </section>
    );
}

function Tape({
                  words,
                  className,
                  rotate,
                  top,
              }: {
    words: string[];
    className: string;
    rotate: string;
    top: string;
}) {
    const repeated = [...words, ...words, ...words];

    return (
        <div
            className={cn(
                "absolute left-1/2 -translate-x-1/2 w-[140%] md:w-[160%]",
                top,
                rotate,
            )}
        >
            <div
                className={cn(
                    "rounded-full border border-border/40",
                    "px-6 py-3 md:py-4",
                    className,
                )}
            >
                <div className="flex items-center gap-5 md:gap-7 whitespace-nowrap overflow-hidden">
                    <div className="flex items-center gap-5 md:gap-7 animate-marquee">
                        {repeated.map((w, i) => (
                            <TapeItem key={`${w}-${i}`} text={w} />
                        ))}
                    </div>

                    <div
                        className="flex items-center gap-5 md:gap-7 animate-marquee"
                        aria-hidden
                    >
                        {repeated.map((w, i) => (
                            <TapeItem key={`${w}-dup-${i}`} text={w} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 18s linear infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-marquee {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
}

function TapeItem({ text }: { text: string }) {
    return (
    <span className="inline-flex items-center h-15 gap-5 md:gap-7 text-sm md:text-base font-semibold tracking-tight">
      <span>{text}</span>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-background/80 opacity-80" />
    </span>
    );
}
