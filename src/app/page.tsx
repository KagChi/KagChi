"use client";
import { Image } from "@nextui-org/react";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col w-full h-auto items-center mt-11">
        <Image
          isBlurred
          width={256}
          src="https://cdn.discordapp.com/avatars/499021389572079620/def3128fe75aad6b33cee78661b5664f.png?size=4096"
          alt="NextUI Album Cover"
        />
      </div>
    </>
  );
}
