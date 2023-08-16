"use client";

import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <Navbar>
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
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
        </NavbarContent>
      </Navbar>
    </>
  );
}
