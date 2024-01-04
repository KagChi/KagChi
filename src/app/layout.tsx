/* eslint-disable @next/next/no-page-custom-font */
"use client";
import { BirthdayPartyProtocol } from "../components/BirthdayPartyProtocol";
import ScrollSmooth from "../components/ScrollSmooth";
import "../styles/index.css";
import { Providers } from "./providers";
import { ReactLenis } from "@studio-freight/react-lenis"
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <html suppressHydrationWarning>
        <style jsx global>
          {`
          html {
            transition: background-color 0.3s ease-in-out;
          }
        `}
        </style>
        <head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css?family=Tilt+Neon&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Rubik&display=optional" rel='stylesheet' />
          <link href="https://fonts.googleapis.com/css?family=Baloo+2&display=optional" rel='stylesheet' />
        </head>
        <body>
          <ScrollSmooth>
            <BirthdayPartyProtocol />
            <Providers>
              <div className="absolute px-4 sm:px-10 pt-6 w-full">
                <div className="flex justify-between ">
                  <Image
                    style={{
                      transform: "scaleX(-1)"
                    }}
                    width={2256} height={2256}
                    className="w-12 h-12 rounded-full border-3 border-white" src="/assets/images/K_Logo.webp" alt="K_Logo" />

                  <div className="flex flex-row justify-center items-center w-auto h-12 bg-white rounded-2xl gap-2 p-1 px-2">
                    <button className="flex md:hidden bg-[#EE7214] h-8 w-24 items-center justify-center rounded-lg text-white font-bold">
                      Menu
                    </button>
                    <button className="hidden md:flex bg-[#EE7214] h-8 w-24 items-center justify-center rounded-lg text-white font-bold">
                      Home
                    </button>

                    <button onClick={() => lenis.scrollTo("#about", { lerp: 0.05 })} className="hidden md:flex  h-8 w-24 items-center justify-center rounded-lg hover:bg-[#EE7214] text-[#EE7214] hover:text-white font-bold p-1">
                      About Me
                    </button>

                    <button className="hidden md:flex  h-8 w-24 items-center justify-center rounded-lg hover:bg-[#EE7214] text-[#EE7214] hover:text-white font-bold p-1">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
              <main>{children}</main>
            </Providers>
          </ScrollSmooth>
        </body>
      </html>
    </ReactLenis>
  );
}
