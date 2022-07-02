import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { BackGroundComponent } from "../components/background";
import { ParticlesComponent } from "../components/particles";

export default function render(): ReactNode {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About - KagChi</title>
      </Head>
      <ParticlesComponent />
      <BackGroundComponent />

      <div className="animate__animated animate__bounceInDown animate__faster">
        <header className="p-4">
          <div className="container flex justify-center h-16 mx-auto">
            <ul className="items-stretch space-x-4 flex">
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  onClick={() => router.push("/")}
                  className="flex items-center px-4 -mb-1 font-segoe-bold border-b-2 dark:border-transparent hover:text-yellow-700 hover:border-yellow-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                >
                  Home
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  onClick={() => router.push("/about")}
                  className="flex items-center px-4 -mb-1 font-segoe-bold border-b-2 dark:border-transparent dark:text-yellow-700 dark:border-yellow-700 "
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
