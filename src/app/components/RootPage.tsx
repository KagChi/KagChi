"use client";
import { RouteBases, CDNRoutes, ImageFormat } from "discord-api-types/v10";
import { useState, useEffect } from "react";
import { isBirthday } from "../../components/BirthdayPartyProtocol";
import { useUser } from "../../states/user";
import { Image } from "@nextui-org/react";

export default function RootPage() {
  const user = useUser();
  const [isVisible, setIsVisible] = useState(!isBirthday);

  useEffect(() => {
    if (isBirthday) setTimeout(() => setIsVisible(true), 3700);
  }, []);

  return (
    <>
      <div className="flex px-4">
        <div className="flex flex-col ml-auto mr-auto justify-center items-center">
          {user && isVisible && (
            <>
              <Image
                height={128}
                width={128}
                isBlurred
                src={`${RouteBases.cdn}${CDNRoutes.userAvatar(
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

          {
            !user && isVisible && <>
              <Image
                height={128}
                width={128}
                isBlurred
                src={"https://cdn.discordapp.com/avatars/499021389572079620/849cb35fc8da4960a7371bbfb7a4d49d.jpeg?size=4096"}
                alt="User Avatar"
              />

              <p className="font-bold text-2xl mt-4">
                Loading...
              </p>
            </>
          }

          {isVisible && <p>A Fullstack Weeb Developer</p>}
        </div>
      </div>
    </>
  );
}