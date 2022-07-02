import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";

export default function render(): ReactNode {
  return (
    <>
      <Head>
        <title>Home - KagChi</title>
      </Head>

      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-segoe-bold text-black text-center md:text-left">
              Hey, im KagChi 👋
            </h3>
            <p className="mt-4 font-segoe text-black text-center md:text-left">
              Im just a weeb nerds who like to code and doing backend things.
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
    </>
  );
}
