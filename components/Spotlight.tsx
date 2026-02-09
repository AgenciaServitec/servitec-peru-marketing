"use client";
import * as React from "react";

export function Spotlight() {
    const ref = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width) * 100;
            const y = ((e.clientY - r.top) / r.height) * 100;
            el.style.setProperty("--x", `${x}%`);
            el.style.setProperty("--y", `${y}%`);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return <div ref={ref} className="spotlight pointer-events-none absolute inset-0" />;
}
