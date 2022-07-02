import Head from "next/head";
import { ReactNode } from "react";
import Image from "next/image";

export default function render(): ReactNode {
  return (
    <>
      <Head>
        <title>About - KagChi</title>
      </Head>

      <section>
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-segoe-bold">About me</h2>

              <p className="mt-4 lg:max-w-md">
                Hi I am KagChi , backend developer{" "}
                <a
                  className="font-bold text-blue-600 dark:text-blue-400"
                  href="https://tunebot.org"
                >
                  @tuneorg
                </a>{" "}
                , I like to develop discord bot and its resources. currently i
                am learning microservied discord bot. and i am working on it
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <a
                  className="mx-2"
                  href="https://github.com/KagChi"
                  aria-label="Github"
                >
                  <svg
                    className="w-5 h-5 text-gray-700 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </a>
              </div>
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
      </section>

      <section>
        <div className="container px-6 py-10 mx-auto">
          <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
              <h1 className="text-3xl font-segoe-bold capitalize lg:text-4xl">
                Developed Projects
              </h1>

              <p className="max-w-2xl mt-4 font-segoe">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                incidunt ex placeat modi magni quia error alias, adipisci rem
                similique, at omnis eligendi optio eos harum.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img
                  className="object-cover rounded-xl aspect-square"
                  src="https://cdn.discordapp.com/avatars/932933299687538698/766f3eac3f40d4b9de00033559bf2858.jpg?size=2048"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold font-segoe-bold">
                  Tune
                </h1>

                <p className="mt-2 capitalize font-segoe">
                  Backend developer
                </p>
              </div>

              <div>
                <img
                  className="object-cover rounded-xl aspect-square"
                  src="https://cdn.discordapp.com/avatars/616169470293049344/8816a7d1410bf85998c36775b2ba9990.jpg?size=2048"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold font-segoe-bold">
                  NezukoChan
                </h1>

                <p className="mt-2 capitalize font-segoe">
                  Fullstack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
