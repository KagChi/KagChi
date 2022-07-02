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
      <footer className="flex relative mt-16 bg-yellow-700">
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
      </footer>
    </>
  );
}
