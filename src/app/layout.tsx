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
          <Navbar as={"div"} isBlurred={false} className="transparent mt-2">
            <NavbarBrand className="space-x-2">
              <Image
                isBlurred
                src="/assets/images/K_Logo.jpg"
                alt="logo"
                height={32}
                width={32}
                radius="md"
              ></Image>
              <a
                href="https://www.kagchi.my.id"
                className="font-bold text-inherit"
              >
                KagChi
              </a>
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
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
