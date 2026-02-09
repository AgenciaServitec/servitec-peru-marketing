"use client";
import * as React from "react";

export function AmbientMotion() {
    React.useEffect(() => {
        const glow = document.querySelector<HTMLElement>(".ambient-glow");
        if (!glow) return;

        const onScroll = () => {
            const y = window.scrollY;
            glow.style.transform = `translate3d(0, ${y * 0.03}px, 0)`; // solo glows
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className="ambient-grid" aria-hidden="true" />
            <div className="ambient-glow" aria-hidden="true" />
        </>
    );
}
