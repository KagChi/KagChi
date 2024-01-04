// app/providers.tsx
"use client";

import { Image, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { useLenis } from "@studio-freight/react-lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Toaster />
        <div className="absolute px-4 sm:px-10 pt-6 w-full">
          <div className="flex justify-between ">
            <Image
              style={{
                transform: "scaleX(-1)"
              }}
              className="w-12 h-12 rounded-full border-3 border-white" src="./assets/images/K_Logo.png" alt="K_Logo" />

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
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
