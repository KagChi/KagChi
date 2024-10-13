import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from "@/components/ui/tooptip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { IconHome, IconBrandLinkedin, IconBrandYoutube, IconNotebook } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import ClientLayout from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "KagChi - %s",
        default: "KagChi"
    },
    description: "I am KagChi, Fullstack Weeb developer. I Love building things. not Very active at Discord",
    openGraph: {
        type: "website",
        url: "https://kagchi.my.id",
        title: "KagChi - Home",
        description: "I am KagChi, Fullstack Weeb developer. I Love building things. Not very active at Discord",
    },
    icons: [
        {
            url: "/favicon.ico"
        }
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TooltipProvider delayDuration={0}>
                    <ClientLayout>
                        {children}
                    </ClientLayout>

                    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-10 flex origin-bottom h-full max-h-14">
                        <div className="flex inset-x-0 bottom-0 mx-auto h-full relative">
                            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-black to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
                            
                            <Image className="size-8 absolute z-[49] -top-3 -left-3 -rotate-45" src={"/assets/images/K_Footer.svg"} width={512} height={512} alt="Logo" />

                            <Dock className="pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-black transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
                                <DockIcon>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href="/"
                                            >
                                                <IconHome className="size-5" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Home</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </DockIcon>
                                <DockIcon>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href="/blog"
                                            >
                                                <IconNotebook className="size-5" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Blog</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </DockIcon>
                                {/* <Separator orientation="vertical" className="h-full rounded-full" /> */}
                                <DockIcon>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link href={"https://www.linkedin.com/in/samuel-68150028b/"}>
                                                <IconBrandLinkedin className="size-5" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Linkedin</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </DockIcon>
                                <DockIcon>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link href={"https://www.youtube.com/DevCat"}>
                                                <IconBrandYoutube className="size-5" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>YouTube</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </DockIcon>
                            </Dock>
                        </div>
                    </div>

                </TooltipProvider>
            </body>
        </html>
    );
}
