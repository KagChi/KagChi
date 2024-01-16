import Lenis from "@studio-freight/lenis";
import { Title, Meta } from "@solidjs/meta";

export const Navbar = ({ lenis }: { lenis: Lenis }) => {
    return (
        <>
            <Title>KagChi - Home</Title>
            <Meta name="description" content="I always experiment with new things, it makes me curious. What happens if I create that? I also enjoy creating websites. I can easily grasp the concepts of websites using Tailwind CSS in just 2 months. It&apos;s truly surprising." />

            <nav class="absolute px-4 sm:px-10 pt-6 w-full">
                <div class="flex justify-between ">
                    <img
                        style={{
                            transform: "scaleX(-1)"
                        }}
                        width={2256} height={2256}
                        class="w-12 h-12 rounded-full border-2 border-white" src="/assets/images/K_Logo.webp" alt="K_Logo" />

                    <div class="flex flex-row justify-center items-center w-auto h-12 bg-white rounded-2xl gap-2 p-1 px-2">
                        <button class="flex md:hidden bg-[#EE7214] h-8 w-24 items-center justify-center rounded-lg text-white font-bold">
                            Menu
                        </button>
                        <button class="hidden md:flex bg-[#EE7214] h-8 w-24 items-center justify-center rounded-lg text-white font-bold">
                            Home
                        </button>

                        <button onClick={() => lenis && lenis.scrollTo("#about", { lerp: 0.05 })} class="hidden md:flex  h-8 w-24 items-center justify-center rounded-lg hover:bg-[#EE7214] text-[#EE7214] hover:text-white font-bold p-1">
                            About Me
                        </button>

                        <button class="hidden md:flex  h-8 w-24 items-center justify-center rounded-lg hover:bg-[#EE7214] text-[#EE7214] hover:text-white font-bold p-1">
                            Contact
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}