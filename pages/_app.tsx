import { AppProps } from "next/app";
import "../styles/index.css";
import "animate.css";
import { BackGroundComponent } from "../components/background";
import { ParticlesComponent } from "../components/particles";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const activeCSS = "text-yellow-700 border-yellow-700";
  const inactiveCSS =
    "hover:text-yellow-700 hover:border-yellow-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110";
  return (
    <>
      <ParticlesComponent />
      <BackGroundComponent />
      <div className="animate__animated animate__bounceInDown animate__faster">
        <header className="p-4">
          <div className="container flex justify-center h-16 mx-auto">
            <ul className="items-stretch space-x-4 flex">
              <li className="flex">
                <button
                  onClick={() => router.push("/")}
                  className={`flex items-center px-4 -mb-1 font-segoe-bold border-b-2 ${
                    router.pathname === "/" ? activeCSS : inactiveCSS
                  }`}
                >
                  Home
                </button>
              </li>
              <li className="flex">
                <button
                  onClick={() => router.push("/about")}
                  className={`flex items-center px-4 -mb-1 font-segoe-bold border-b-2 ${
                    router.pathname === "/about"
                      ? "text-yellow-700 border-yellow-700"
                      : inactiveCSS
                  }`}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </header>
        <Component {...pageProps} />
      </div>
      <div className="relative mt-16 bg-yellow-700">
          <svg
            className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-yellow-700"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
          >
            <path
              fill="currentColor"
              d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            />
          </svg>
          <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
              <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                <div>
                  <p className="font-semibold tracking-wide font-segoe-bold">
                    Navigation
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a
                        href="https://tunebot.org"
                        className="transition-colors duration-300 font-segoe"
                      >
                        Tune
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://nezu.my.id"
                        className="transition-colors duration-300 font-segoe"
                      >
                        Nezu
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/tanjiro-project/kamado-tanjiro"
                        className="transition-colors duration-300 font-segoe"
                      >
                        Tanjiro
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-black sm:flex-row">
              <p className="text-sm font-segoe-bold">
                © Copyright 2022 KagChi All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <a href="https://github.com/KagChi/KagChi" className="transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
