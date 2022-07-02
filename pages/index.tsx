import Head from "next/head";
import Image from "next/image";
import { Component, ReactNode } from "react";
import { ParticlesComponent } from "../components/particles";

export default class extends Component {
  render(): ReactNode {
    return (
      <>
        <Head>
          <title>Home - KagChi</title>
        </Head>
        <ParticlesComponent />
        <div
          className="w-screen h-screen animate__animated animate__fadeOut animate__faster"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
          }}
        ></div>

        <div className="animate__animated animate__bounceInDown animate__faster">
          <header className="p-4">
            <div className="container flex justify-center h-16 mx-auto">
              <ul className="items-stretch space-x-4 flex">
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 font-segoe-bold border-b-2 dark:border-transparent dark:text-yellow-700 dark:border-yellow-700"
                  >
                    Home
                  </a>
                </li>
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href=""
                    className="flex items-center px-4 -mb-1 font-segoe-bold border-b-2 dark:border-transparent hover:text-yellow-700 hover:border-yellow-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-segoe-bold text-black text-center md:text-left">
                  Hey, im KagChi 👋
                </h3>
                <p className="mt-4 font-segoe text-black text-center md:text-left">
                  Im just a weeb nerds who like to code and doing backend
                  things.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="max-w-lg">
                    <Image
                      className="object-cover object-center w-full h-64 rounded-xl shadow"
                      src="https://i.kagchi.my.id/c372dc62d9ed77172372deda07a4a58e.png"
                      height={256}
                      width={256}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
