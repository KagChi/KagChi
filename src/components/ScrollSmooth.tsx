"use client"

import Lenis from '@studio-freight/lenis'
import React, { useEffect } from "react";

export default function ScrollSmooth({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        children
    )
}