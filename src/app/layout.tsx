"use client";
import "../styles/index.css";
import { Providers } from "./providers";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { ThemeToggler } from "../components/ThemeToggler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar className="transparent">
            <NavbarBrand className="space-x-2">
              <Image
                src="/assets/images/K_Logo.jpg"
                alt="logo"
                loading="lazy"
                height={32}
                width={32}
                radius="md"
              ></Image>
              <p className="font-bold text-inherit">KagChi</p>
            </NavbarBrand>
            <NavbarContent justify="end">
              <div className="hidden sm:flex gap-4">
                <NavbarItem>
                  <Link color="foreground" href="#">
                    <p className="font-bold text-inherit">Home</p>
                  </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page">
                    <p className="font-bold text-inherit">Blog</p>
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    <p className="font-bold text-inherit">Contact</p>
                  </Link>
                </NavbarItem>
              </div>

              <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <ThemeToggler />
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
