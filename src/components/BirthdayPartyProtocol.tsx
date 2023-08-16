import confetti from "canvas-confetti";
import { useUser } from "../states/user";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { HiOutlineCake } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const birthDayDate = new Date("2005-02-16");
const date = new Date();

export const isBirthday =
  date.getMonth() === birthDayDate.getMonth() &&
  date.getDate() === birthDayDate.getDate();

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const BirthdayPartyProtocol = () => {
  const user = useUser();
  const [isVisible, setIsVisible] = useState(isBirthday);

  useEffect(() => {
    if (typeof window !== "undefined" && isBirthday && user && isVisible) {
      setTimeout(() => setIsVisible(false), 3000);
      toast(
        `${user.data.discord_user.global_name} just turned ${
          date.getFullYear() - birthDayDate.getFullYear()
        } Today !`,
        {
          icon: HiOutlineCake({ className: "text-2xl" }),
        },
      );
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          }),
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          }),
        );
      }, 250);
    }
  }, [isVisible, user]);
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <>
            <div className="relative flex justify-center">
              <motion.img
                className="absolute z-99"
                src="/assets/images/K_Birthday_Protocol.svg"
                alt="Your Image"
                initial={{ y: -400 }}
                animate={{ y: 0 }}
                exit={{ y: -400 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ zIndex: 99 }}
              />
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
