import Lenis from "@studio-freight/lenis";
import { Title, Meta } from "@solidjs/meta";
import { createSignal } from "solid-js";

export const Navbar = ({ lenis }: { lenis: Lenis }) => {
    const [section, setSection] = createSignal<string | null>("home");
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const getVisibleSection = () => {
            const scrollY = window.scrollY;
            for (const section of sections) {
                const top = (section as HTMLElement).offsetTop - 350;
                if (scrollY >= top && scrollY < top + (section as HTMLElement).offsetHeight) {
                    return section;
                }
            }
            return null;
        };

        const currentSection = getVisibleSection();
        if (currentSection) setSection(currentSection.id);
    });

    return (
        <>
            <nav data-aos="fade-down" class="container mx-auto w-full fixed top-0 px-4 inset-x-0 sm:px-10 pt-6 z-[100]">
                <div class="flex justify-between ">
                    <img
                        style={{
                            transform: "scaleX(-1)"
                        }}
                        width={2256} height={2256}
                        class="hidden md:flex w-12 h-12 rounded-full border-2 border-white" src="/assets/images/K_Logo.webp" alt="K_Logo" />

                    <div class="flex flex-row justify-between items-center w-full md:w-auto h-12 bg-white rounded-2xl gap-2 p-1 px-2">
                        <button onClick={() => lenis && lenis.scrollTo("#home", { lerp: 0.05 })} class={`${section() === "home" ? "bg-[#EE7214] text-white" : "text-[#EE7214]"} hover:bg-[#EE7214] hover:text-white h-8 w-20 md:w-24 items-center justify-center rounded-lg font-bold`}>
                            Home
                        </button>

                        <button onClick={() => lenis && lenis.scrollTo("#about", { lerp: 0.05 })} class={`${section() === "about" ? "bg-[#EE7214] text-white" : "text-[#EE7214]"} hover:bg-[#EE7214] hover:text-white h-8 w-20 md:w-24 items-center justify-center rounded-lg font-bold`}>
                            About
                        </button>

                        <button onClick={() => lenis && lenis.scrollTo("#projects", { lerp: 0.05 })} class={`${section() === "projects" ? "bg-[#EE7214] text-white" : "text-[#EE7214]"} hover:bg-[#EE7214] hover:text-white h-8 w-20 md:w-24 items-center justify-center rounded-lg font-bold`}>
                            Projects
                        </button>

                        <button onClick={() => lenis && lenis.scrollTo("#contact", { lerp: 0.05 })} class={`${section() === "contact" ? "bg-[#EE7214] text-white" : "text-[#EE7214]"} hover:bg-[#EE7214] hover:text-white h-8 w-20 md:w-24 items-center justify-center rounded-lg font-bold`}>
                            Contact
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}