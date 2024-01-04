/* eslint-disable @next/next/no-page-custom-font */
"use client";
import { BirthdayPartyProtocol } from "../components/BirthdayPartyProtocol";
import ScrollSmooth from "../components/ScrollSmooth";
import "../styles/index.css";
import { Providers } from "./providers";
import { ReactLenis } from "@studio-freight/react-lenis"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              <main>{children}</main>
            </Providers>
          </ScrollSmooth>
        </body>
      </html>
    </ReactLenis>
  );
}
