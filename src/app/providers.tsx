// app/providers.tsx
"use client";

import { Image, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Toaster />
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
