"use client";
import { useUser } from "../states/user";
import { useEffect, useState } from "react";
import { isBirthday } from "../components/BirthdayPartyProtocol";
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
            <div className="flex ml-auto mr-auto mt-auto mb-auto h-64 object-center justify-center items-center">
              <Image className="static" loading="lazy" src="https://count.getloli.com/get/@kagchi?theme=rule34" alt="moe-counter"></Image>
            </div>

            <p>A Fullstack Weeb Developer</p>
          </div>
      </div>
    </>
  );
}
