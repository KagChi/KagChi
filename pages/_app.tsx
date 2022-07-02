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
                    router.pathname === "/about" ? "text-yellow-700 border-yellow-700" : inactiveCSS
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
    </>
  );
}
