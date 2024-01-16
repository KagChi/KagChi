import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
    const lenis = new Lenis();

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(() => {
        lenis.raf(performance.now());
        requestAnimationFrame(raf);
    });

    return lenis;
}