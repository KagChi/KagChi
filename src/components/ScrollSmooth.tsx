import { JSX, createEffect } from 'solid-js';
import Lenis from '@studio-freight/lenis';

export default function ScrollSmooth({ children }: { children: JSX.Element }) {
    createEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    });

    return (
        children
    )
}