"use client";
import { Image, Skeleton } from "@nextui-org/react";
import NextImage from "next/image";
import { useUser } from "../states/user";
import { CDNRoutes, ImageFormat, RouteBases } from "discord-api-types/v10";
import { useEffect, useState } from "react";
import { isBirthday } from "../components/BirthdayPartyProtocol";

export default function RootPage() {
  const user = useUser();
  const [isVisible, setIsVisible] = useState(!isBirthday);

  useEffect(() => {
    if (isBirthday) setTimeout(() => setIsVisible(true), 3700);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="flex flex-col w-full h-auto items-center mt-6">
          <div className="mt-6 w-36 h-36">
            {user && (
              <>
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
                />

                <p className="font-bold text-2xl mt-4">
                  {user.data.discord_user.global_name}
                </p>
              </>
            )}

            {!user && (
              <>
                <div className="w-full flex flex-col gap-4 pr-4">
                  <Skeleton className="h-[130px] w-5/5 rounded-lg" />
                  <Skeleton className="h-6 w-5/5 rounded-lg" />
                </div>
              </>
            )}
          </div>
          <p className="text-sm mt-7 mr-6">
            {new Date().getFullYear() - 2005} y/o | Backend Developer
          </p>
        </div>
      )}
    </>
  );
}
