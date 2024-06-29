import { fetchProjects } from "@/actions/projects";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurIn from "@/components/magicui/blur-in";
import ShineBorder from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { IconBrandDiscordFilled, IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export default async function Home() {
    const projects = await fetchProjects();

    return (
        <main className="container pt-10 md:pt-20 max-w-2xl px-6">
            <div className="flex flex-row gap-4 md:gap-8">
                <div className="inline-block max-w-[600px]">
                    <p className="font-bold text-2xl md:text-5xl">Hi, I'm KagChi 😁</p>
                    <p className="text-gray-300 md:text-lg mt-1">Fullstack Weeb Engineer, I love building things. doesnt like Theory. curious with things. very active at Discord.</p>
                </div>
                <Image className="size-28 rounded-full" src="/assets/images/K_Logo.webp" width={256} height={256} alt="Logo Profile" />
            </div>

            <div className="mt-2">
                <AnimatedGradientText>
                    🤔 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-black" />{" "}
                    <span
                        className={cn(
                            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        )}
                    >
                        Im Curious, who are you?
                    </span>
                </AnimatedGradientText>

                <BlurIn className="text-base mt-6">
                    <p className="text-6xl font-bold">Hi <span className="animate-wave inline-block transform origin-bottom-right">👋</span></p>
                    <p className="mt-1">I'm Samuel. from Jakarta, Indonesia. At the end of 2019, I became curious about programming, particularly how Discord bots are created. This curiosity led me on a journey that has transformed me into a web developer today</p>
                </BlurIn>
            </div>

            <BlurIn className="mt-12 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Badge className="w-fit">Commisioned Projects</Badge>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-bold">Checkout my latest work</h1>
                        <p className="text-sm">
                            I take on commissions for web development, delivering high-quality websites that not only look great but also perform seamlessly. 
                            Below are some examples of my work, showcasing my ability to translate client visions into functional, aesthetically pleasing websites. 
                            Each project highlights my commitment to excellence, attention to detail, and dedication to client satisfaction.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 gap-x-6">
                    {
                        projects.filter(x => x.type === "comission").length >= 1 && projects.filter(x => x.type === "comission").map(x => <div className="flex flex-col h-full rounded-md mb-4">
                            <div className={`w-full object-cover h-28 rounded-t-md bg-cover`} style={{ backgroundImage: `url(${x.image})` }} />

                            <div className="border-r border-l border-b rounded-b border-gray-900 py-2 px-4 flex-grow flex flex-col gap-4">
                                <div>
                                    <p className="font-bold">{x.name}</p>
                                    <p className="text-xs text-gray-500">{x.description}</p>    
                                </div>

                                
                                <div className="mt-auto flex flex-row gap-2">
                                    {x.website && <Link href={x.website} className="hover:opacity-60">
                                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                                            <Globe size={12} />
                                            Website
                                        </Badge>
                                    </Link>}

                                    {x.github && <Link href={x.github} className="hover:opacity-60">
                                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                                            <Github size={12} />
                                            Source
                                        </Badge>
                                    </Link>}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </BlurIn>

            <BlurIn className="mt-12 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Badge className="w-fit">Self Projects</Badge>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-bold">Checkout my latest work</h1>
                        <p className="text-sm">
                            In my self-initiated projects, I explore and experiment with various aspects of web development to continually improve my skills and stay current with industry trends. 
                            These projects are a testament to my dedication and passion for coding, allowing me to push the boundaries of creativity and technical proficiency.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 gap-x-6">
                    {
                        projects.filter(x => x.type === "self_project").length >= 1 && projects.filter(x => x.type === "self_project").map(x => <div className="flex flex-col h-full rounded-md mb-4">
                            <div className={`w-full object-cover h-28 rounded-t-md bg-cover`} style={{ backgroundImage: `url(${x.image})` }} />

                            <div className="border-r border-l border-b rounded-b border-gray-900 py-2 px-4 flex-grow flex flex-col gap-4">
                                <div>
                                    <p className="font-bold">{x.name}</p>
                                    <p className="text-xs text-gray-500">{x.description}</p>    
                                </div>

                                
                                <div className="mt-auto flex flex-row gap-2">
                                    {x.website && <Link href={x.website} className="hover:opacity-60">
                                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                                            <Globe size={12} />
                                            Website
                                        </Badge>
                                    </Link>}

                                    {x.github && <Link href={x.github} className="hover:opacity-60">
                                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                                            <Github size={12} />
                                            Source
                                        </Badge>
                                    </Link>}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </BlurIn>

            <BlurIn className="mt-12 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Badge className="w-fit">Volunteer Projects</Badge>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-bold">Checkout my latest work</h1>
                        <p className="text-sm">
                            In addition to my professional and self-initiated projects, I have dedicated time to various volunteer projects. 
                            These opportunities have allowed me to contribute my skills to meaningful causes, 
                            support community initiatives, and collaborate with diverse teams.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 gap-x-6">
                    {
                        projects.filter(x => x.type === "volunteer").length >= 1 && projects.filter(x => x.type === "volunteer").map(x => <div className="flex flex-col h-full rounded-md mb-4">
                            <div className={`w-full object-cover h-28 rounded-t-md bg-cover`} style={{ backgroundImage: `url(${x.image})` }} />

                            <div className="border-r border-l border-b rounded-b border-gray-900 py-2 px-4 flex-grow flex flex-col gap-4">
                                <div>
                                    <p className="font-bold">{x.name}</p>
                                    <p className="text-xs text-gray-500">{x.description}</p>    
                                </div>

                                
                                <div className="mt-auto flex flex-row gap-2">
                                    {x.website && <Link href={x.website} className="hover:opacity-60">
                                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                                            <Globe size={12} />
                                            Website
                                        </Badge>
                                    </Link>}

                                    {x.github && <Link href={x.github} className="hover:opacity-60">
                                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                                            <Github size={12} />
                                            Source
                                        </Badge>
                                    </Link>}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </BlurIn>

            <BlurIn className="mt-12">
                <div className="border border-gray-900 rounded-md px-6 py-2 flex flex-col md:flex-row justify-between">
                    <div>
                        <p className="text-xl font-bold">Interested? Hit Me Up!</p>
                        <div className="text-sm text-gray-500">
                            <p>Need some help? Hiring? Find Friends?</p>
                            <p> Dont hesistate, i would like too !</p>
                        </div>
                    </div>

                    <div className="mt-2 md:mt-0 md:text-center">
                        <p className="text-xl font-bold">Get In Touch</p>

                        <div className="flex flex-col gap-1">
                            <AnimatedGradientText>
                                <span
                                    className={cn(
                                        `font-bold inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                    )}
                                >
                                    me@kagchi.my.id
                                </span>
                            </AnimatedGradientText>

                            <div className="flex flex-row gap-3 lg:gap-0 lg:justify-between">
                                <Link href={"https://github.com/KagChi"}>
                                    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="size-10 items-center justify-center" borderRadius={2000}>
                                        <IconBrandGithub />
                                    </ShineBorder>
                                </Link>

                                <Link href={"https://discord.com/users/499021389572079620"}>
                                    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="size-10 items-center justify-center" borderRadius={2000}>
                                        <IconBrandDiscordFilled />
                                    </ShineBorder>
                                </Link>

                                <Link href={"https://twitter.com/KagChi_2628"}>
                                    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="size-10 items-center justify-center" borderRadius={2000}>
                                        <IconBrandX />
                                    </ShineBorder>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </BlurIn>
            
            <BlurIn>
                <footer className="mt-12 w-full text-center pb-4">
                    <p className="font-bold text-xs">Copyright © 2024 KagChi</p>
                </footer>
            </BlurIn>
        </main>
    );
}
