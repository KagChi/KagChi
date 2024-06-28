"use client";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurIn from "@/components/magicui/blur-in";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    return (
        <main className="container py-10 md:py-20 max-w-2xl px-6">
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

            <BlurIn className="mt-12">
                <div className="flex flex-col gap-2">
                    <Badge className="bg-white text-black w-fit">Commisioned Projects</Badge>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-bold">Checkout my latest work</h1>
                        <p className="text-sm">
                            I take on commissions for web development, delivering high-quality websites that not only look great but also perform seamlessly. 
                            Below are some examples of my work, showcasing my ability to translate client visions into functional, aesthetically pleasing websites. 
                            Each project highlights my commitment to excellence, attention to detail, and dedication to client satisfaction.
                        </p>
                    </div>
                </div>
            </BlurIn>
        </main>
    );
}
