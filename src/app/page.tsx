"use client";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { useUser } from "../states/user";
import { CDNRoutes, ImageFormat, RouteBases } from "discord-api-types/v10";

export default function RootPage() {
  const user = useUser();

  return (
    <>
      {user && (
        <div className="flex flex-col w-full h-auto items-center mt-6">
          <Image
            as={NextImage}
            height={128}
            width={128}
            isBlurred
            src={`${RouteBases.cdn}/${CDNRoutes.userAvatar(
              user.data.discord_user.id,
              user.data.discord_user.avatar,
              ImageFormat.JPEG,
            )}?size=4096`}
            alt="User Avatar"
            classNames={{
              wrapper: "flex pt-6",
              blurredImg: "flex pt-6",
            }}
          />

          <p className="font-bold text-2xl mt-4">
            {user.data.discord_user.global_name}
          </p>
          <p className="text-sm">Backend Developer</p>
        </div>
      )}
    </>
  );
}
