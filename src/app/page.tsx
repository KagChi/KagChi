"use client";

import { fetchProjects } from "@/actions/projects";
import { ProjectCard } from "@/components/fleet/ProjectCard";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurIn from "@/components/magicui/blur-in";
import ShineBorder from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { IconBrandDiscordFilled, IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Show, For } from "@kagchi/nextify";

export default function Home() {
    const { isPending, data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: () => fetchProjects(),
    })

    return (
        <main className="container pt-10 md:pt-20 max-w-6xl px-6">
            <BlurIn>
                <div className="flex flex-row gap-4 md:gap-8 justify-between">
                    <div className="inline-block max-w-[600px]">
                        <p className="font-bold text-2xl md:text-5xl">Hi, I'm KagChi 😁</p>
                        <p className="text-gray-500 md:text-lg mt-1">Fullstack Weeb Engineer, I love building things. doesnt like Theory. curious with things. not very active at Discord.</p>
                    </div>
                    <Image className="size-28 rounded-lg" src="/assets/images/K_Logo.webp" width={256} height={256} alt="Logo Profile" />
                </div>
            </BlurIn>

            <div className="mt-2">
                <BlurIn>
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
                </BlurIn>

                <BlurIn className="text-base mt-6">
                    <p className="text-6xl font-bold">Hi <span className="animate-wave inline-block transform origin-bottom-right">👋</span></p>
                    <p className="mt-1 text-gray-500">I'm Samuel. from Jakarta, Indonesia. At the end of 2019, I became curious about programming, particularly how Discord bots are created. This curiosity led me on a journey that has transformed me into a web developer today</p>
                </BlurIn>
            </div>

            <BlurIn className="mt-12 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Badge className="w-fit">Latest Projects</Badge>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-bold">Checkout my latest work</h1>
                        <p className="text-sm text-gray-500">
                            I take on commissions for web development, delivering high-quality websites that not only look great but also perform seamlessly.
                            Below are some examples of my work, showcasing my ability to translate client visions into functional, aesthetically pleasing websites.
                            Each project highlights my commitment to excellence, attention to detail, and dedication to client satisfaction.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-6">
                    <Show when={isPending || (projects?.length ?? 0) <= 0}>
                        <For each={Array(9).fill(null)}>
                            {(x, i) => <ProjectCard skeleton key={i} />}
                        </For>
                    </Show>

                    <Show when={projects.length >= 1}>
                        <For each={projects}>
                            {(x, i) => <ProjectCard {...x} key={i} />}
                        </For>
                    </Show>
                </div>
            </BlurIn>

            <BlurIn className="mt-12 mb-20 relative">
                <Image className="size-16 md:size-20 absolute -right-6 -top-8 md:-right-8 md:-top-10 z-50" src={"/assets/images/K_Hire.svg"} width={512} height={512} alt="Logo" />
                <div className="border border-gray-900 rounded-md px-6 py-2 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <p className="text-xl font-bold">Interested? Hit Me Up!</p>
                        <p className="text-sm text-gray-500">Need help? Looking to hire? Want to make new friends? Don't hesitate, I'd love to assist!</p>
                    </div>

                    <div className="mt-2 md:mt-0 md:text-center">
                        <p className="text-4xl font-bold md:text-xl md:-ml-1">Get In Touch</p>

                        <div className="flex items-center flex-row justify-between gap-1 md:justify-start md:flex-col">
                            <Link href={"mailto:me@kagchi.my.id"}>
                                <AnimatedGradientText className="hover:opacity-60">
                                    <span
                                        className={cn(
                                            `font-bold inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                        )}
                                    >
                                        me@kagchi.my.id
                                    </span>
                                </AnimatedGradientText>
                            </Link>

                            <div className="flex flex-row gap-3 lg:justify-between">
                                <Link href={"https://github.com/KagChi"}>
                                    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="hover:opacity-60 size-10 items-center justify-center" borderRadius={2000}>
                                        <IconBrandGithub />
                                    </ShineBorder>
                                </Link>

                                <Link href={"https://discord.com/users/499021389572079620"}>
                                    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="hover:opacity-60 size-10 items-center justify-center" borderRadius={2000}>
                                        <IconBrandDiscordFilled />
                                    </ShineBorder>
                                </Link>

                                <Link href={"https://twitter.com/KagChi_2628"}>
                                    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="hover:opacity-60 size-10 items-center justify-center" borderRadius={2000}>
                                        <IconBrandX />
                                    </ShineBorder>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </BlurIn>

            <BlurIn>
                <footer className="mt-14 w-full text-center pb-4">
                    <p className="font-bold text-xs">Copyright © 2024 KagChi</p>
                </footer>
            </BlurIn>
        </main>
    );
}
