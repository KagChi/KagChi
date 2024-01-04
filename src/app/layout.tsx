/* eslint-disable @next/next/no-page-custom-font */
"use client";
import "../styles/index.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
        <link href="https://fonts.googleapis.com/css?family=Tilt+Neon&display=swap" rel="stylesheet"  />
        <link href="https://fonts.googleapis.com/css?family=Rubik&display=optional" rel='stylesheet' />
      </head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
