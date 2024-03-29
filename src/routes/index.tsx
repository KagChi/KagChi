// @refresh reload

import { Project, fetchProjects } from "@/actions/projects/fetch";
import { LoadingState } from "@/components/LoadingState";
import { Navbar } from "@/components/Navbar";
import { useLenis } from "@/utilities/Lenis";
import { useAction } from "@solidjs/router";
import { Show, createEffect, createSignal } from "solid-js";

export default function Page() {
    const lenis = useLenis();
    const [projects, setProjects] = createSignal<Project[]>([]);

    createEffect(() => {
        useAction(fetchProjects)().then(x => setProjects(x));
    }, [])

    return (
        <main class="overflow-x-hidden bg-[#D9D9D9]">
            <Navbar lenis={lenis} />

            <section id="home" class="flex flex-col w-full h-screen min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/assets/images/K_Background.webp')]">
                <div class="h-screen w-full relative">
                    <div class="container mx-auto">
                        <div class="mt-40">
                            <div class="flex flex-col w-full lg:w-1/2 px-6 md:px-12 lg:px-32 gap-4">
                                <div class="flex flex-col w-full justify-center items-center md:justify-none md:items-none">
                                    <h3 style={{
                                        "text-shadow": "0px 6px 6px #A72139"
                                    }} class="text-white text-2xl sm:text-4xl font-bold mr-52 sm:ml-2 sm:mr-64">I&apos;am</h3>
                                    <h2 style={{
                                        "-webkit-text-stroke-color": "#E23C23",
                                        "-webkit-text-stroke-width": "1.5px",
                                        "text-shadow": "0px 6px 6px #E23C23"
                                    }}
                                        class="text-white text-6xl sm:text-7xl font-bold font-serif">KagChi</h2>
                                </div>
                                <div class="flex flex-col items-center gap-2">
                                    <h2 class="text-white font-bold font-serif" style={{
                                        "text-shadow": "0px 6px 6px #E23C23",
                                        "-webkit-text-stroke-color": "#E23C23",
                                        "-webkit-text-stroke-width": "0.4px",
                                    }}
                                    >A Fullstack Weeb Developer</h2>
                                    <button onClick={() => lenis && lenis.scrollTo("#projects", { lerp: 0.05 })} class="flex bg-[#E23C23] lg:mr-2 h-8 text-white font-bold rounded-md text-sm items-center justify-center px-3 py-1">
                                        &quot;Show Your Work&quot;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <img class="hidden lg:block w-32 h-32 xl:w-64 xl:h-64 md:bottom-80 lg:bottom-10 md:absolute right-32 z-50 rounded-full border-4 border-[#D9D9D9]" width={2256} height={2256} alt="K_Logo" src={"/assets/images/K_Logo.webp"} />
                    </div>
                    <svg class="w-full absolute -bottom-1 h-auto fill-background" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1457 1C865.451 127.15 537.208 170.807 -17 1V179H1457V1Z" fill="#D9D9D9" stroke="#D9D9D9" />
                    </svg>
                </div>
            </section>

            <section id="about" class="container mx-auto">
                <div class="h-full bg-[#D9D9D9]">
                    <div class="w-full px-6 md:px-20 flex flex-col lg:flex-row pt-10 md:pt-0">
                        <div data-aos="fade-right" class="relative w-3/5 mr-auto pl-4 md:mr-0 md:pl-0">
                            <img width={2556} height={4008} style={{
                                transform: "scaleX(-1)"
                            }} class="w-48 md:w-64 h-auto rounded-lg" alt="K_About" src={"/assets/images/K_About_Background.webp"} />
                            <div class="absolute flex flex-col left-28 sm:left-36 md:left-48 bottom-10 gap-2">
                                <div data-aos="fade-up" class="flex items-center p-2 rounded-md bg-[#E23C23] w-28 sm:h-8 sm:w-36">
                                    <p class="text-xs sm:text-base text-white">Mobile Developer</p>
                                </div>
                                <div data-aos="fade-up" class="flex items-center p-2 rounded-md bg-[#E23C23] w-32 sm:h-8 sm:w-44">
                                    <p class="text-xs sm:text-base text-white">Backend Developer</p>
                                </div>
                                <div data-aos="fade-up" class="flex items-center p-2 rounded-md bg-[#E23C23] w-32 sm:h-8 sm:w-40">
                                    <p class="text-xs sm:text-base text-white">Frontend Developer</p>
                                </div>
                                <div data-aos="fade-up" class="flex items-center p-2 rounded-md bg-[#E23C23] w-24 sm:h-8 sm:w-28">
                                    <p class="text-xs sm:text-base text-white">And Others...</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex mt-8 md:ml-0">
                            <div class="w-96 flex flex-col ml-auto lg:mr-8 gap-2 px-2 md:px-0">
                                <div data-aos="fade-up" class="flex flex-col">
                                    <p class="text-[#E23C23] text-5xl md:text-7xl font-bold font-baloo">I Always</p>
                                    <p class="text-[#E23C23] text-2xl sm:text-4xl md:text-5xl font-bold -mt-1 font-baloo">Learn New Stuff</p>
                                </div>
                                <div data-aos="fade-up" class="flex flex-col gap-6 mt-2 md:mt-0">
                                    <p class="inline-block text-[#E23C23]">
                                        I’m Samuel, from Indonesia. I always experiment with new things;
                                        it makes me curious. What happens if I create that? I also enjoy creating websites.
                                        I can easily grasp the concepts of websites using Tailwind CSS in just 2 months.
                                        It&apos;s truly surprising.
                                    </p>
                                    <p class="inline-block text-[#E23C23]">
                                        I also wondering to create my own game someday;
                                        it feels incredibly exciting to make your own game !
                                    </p>
                                </div>
                                {/* TODO: Add every Holiday, like birthday party ! */}
                                <div data-aos="fade-up">
                                    <a href="/lunar" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex justify-center items-center p-2 rounded-md bg-[#E23C23] w-48">
                                        <p class="text-xs sm:text-base text-white">Its Chinese New Year !</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="bg-[#D9D9D9] pt-10 w-full">
                <svg preserveAspectRatio="none" class="w-full -mb-1" viewBox="0 0 1440 123" fill="#E13F32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 36.0799C541.314 -12.289 856.831 -11.7635 1440 36.0799V123H0V36.0799Z" fill="#E13F32" />
                </svg>
            </div>

            <section id="projects" class="h-full bg-[#E13F32] w-full -mb-2">
                <div class="container mx-auto px-6 md:px-0 flex flex-col gap-4">
                    <h1 data-aos="zoom-in" class="text-white font-bold text-center text-3xl md:text-7xl">
                        My Projects
                    </h1>

                    <Show when={projects().length} fallback={<LoadingState />}>
                        <div class="w-full mt-12 columns-1 md:columns-2 lg:columns-4 pb-4 md:px-14">
                            {
                                projects().map(x => (
                                    <>
                                        <div data-aos="fade-up" class="flex flex-col bg-[#bf372e] h-full rounded-xl gap-4 mb-4 break-inside-avoid-column">
                                            <div class={`w-full object-cover h-28 rounded-t-xl bg-fixed bg-cover`} style={{ "background-image": `url(${x.image})` }} />

                                            <div class="flex flex-col px-4 py-2 gap-6">
                                                <p class="font-bold text-white text-xl">{x.name}</p>
                                                <p class="text-white">{x.description}</p>
                                                <p class="font-bold text-white">{x.role}</p>

                                                <div class="flex flex-row gap-2 pb-2">
                                                    {x.links.length && x.links.slice(0, 4).map(y => (
                                                        <a href={y}>
                                                            <i class="text-white fa-solid fa-link fa-lg"></i>
                                                        </a>
                                                    ))}
                                                    {x.github && (
                                                        <a href={x.github}>
                                                            <i class="text-white fa-brands fa-github fa-lg"></i>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </Show>
                </div>
            </section>

            <div class="bg-[#D9D9D9] w-full -mt-4 md:-mt-0">
                <svg class="w-full" viewBox="0 0 1440 463" fill="#E13F32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.10352e-05 0H1440C1440 0 2133.5 350 1440 350C746.5 350 349 -36.5 6.10352e-05 350C-349 736.5 6.10352e-05 0 6.10352e-05 0Z" fill="#E13F32" stroke="#E13F32" />
                </svg>
            </div>

            <section id="contact" class="container mx-auto h-96 flex flex-col bg-[#D9D9D9] w-full relative">
                <img data-aos="fade-left" class="w-20 h-20 md:w-28 md:h-28 absolute right-0 md:right-20 lg:right-28 z-50" src="/assets/images/K_Hire.png" />
                <div class="bg-[#D9D9D9] pt-12">
                    <div class="px-6 md:px-28 lg:px-40">
                        <div data-aos="flip-up" class="rounded-lg bg-[#F2522E] w-full h-auto p-2 md:p-3">
                            <div class="flex flex-col md:flex-row justify-between rounded-lg bg-[#E13D32] w-full h-full py-4 px-6 md:px-12 gap-6 md:gap-0">
                                <div class="flex flex-col gap-2">
                                    <p class="text-white text-2xl md:text-3xl font-baloo font-extrabold">Interested? Hit Me Up !</p>
                                    <div>
                                        <p class="text-white text-xs md:text-base font-rubik font-bold">Need some help? Hiring? Find Friends?</p>
                                        <p class="text-white text-xs md:text-base font-rubik font-bold">Dont hesistate, i would like too !</p>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-4 md:gap-2">
                                    <p class="text-white text-2xl font-baloo font-bold">Contact me at</p>
                                    <div class="flex bg-[#E9675E] p-1 rounded-full w-full justify-center items-center">
                                        <p class="text-white font-bold">me@kagchi.my.id</p>
                                    </div>
                                    <div class="flex flex-row gap-2">
                                        <a href="https://github.com/KagChi" class="flex justify-center items-center p-2 rounded-full w-10 h-10 bg-[#E9675E]">
                                            <i class="text-white fa-brands fa-github fa-lg"></i>
                                        </a>
                                        <a href="https://twitter.com/KagChi_2628" class="flex justify-center items-center p-2 rounded-full w-10 h-10 bg-[#E9675E]">
                                            <i class="text-white fa-brands fa-x-twitter fa-lg"></i>
                                        </a>
                                        <a href="https://discord.com/users/499021389572079620" class="flex justify-center items-center p-2 rounded-full w-10 h-10 bg-[#E9675E]">
                                            <i class="text-white fa-brands fa-discord fa-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="pt-12 bg-[#D9D9D9] w-full">
                <img class="w-24 h-24 absolute -mt-[4.5rem] md:-mt-12 left-12 z-50" src="/assets/images/K_Footer.png" />
                <div class="flex flex-col">
                    <svg class="w-full h-auto" viewBox="0 0 1440 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1438.5 21.4364C849.124 -6.20033 534.933 -5.42113 0 21.4364V192.936H1438.5V21.4364Z" fill="#F2522E" stroke="#F2522E" />
                        <path d="M1440 41.4432C846.322 13.7973 529.838 14.5767 -9 41.4432V213H1440V41.4432Z" fill="#E13D32" stroke="#E13D32" />
                    </svg>

                    <div class="bg-[#E13D32] md:bg-inherit h-auto p-2 px-6 md:-mt-10 flex justify-center items-center">
                        <p class="text-white font-baloo font-bold">
                            Copyright © {new Date().getFullYear()} KagChi
                        </p>
                    </div>
                </div>
            </footer>

        </main>
    );
}
