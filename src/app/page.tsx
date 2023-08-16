"use client";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col w-full h-auto items-center p-14">
        <Image
          as={NextImage}
          height={256}
          width={256}
          isBlurred
          src="https://cdn.discordapp.com/avatars/499021389572079620/def3128fe75aad6b33cee78661b5664f.png?size=4096"
          alt="User Avatar"
          classNames={{
            wrapper: "p-14"
          }}
        />
      </div>
    </>
  );
}
