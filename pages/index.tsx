import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import useSWR from "swr";

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json());

export default function render(): ReactNode {
  const router = useRouter();
  const { data: response } = useSWR(
    "https://animechan.vercel.app/api/random",
    fetcher
  );
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

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 text-3xl font-segoe-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Become a{" "}
                <span className="inline-block text-yellow-700">developer</span>{" "}
                among them
              </h2>

              {response && (
                <>
                  <p className="text-base font-segoe-italic md:text-lg">
                    "{response.quote}"
                  </p>
                  <p className="text-base text-gray-700 font-segoe md:text-lg">
                    - {response.character} © {response.anime}
                  </p>
                </>
              )}
              {!response && (
                <>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-yellow-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-yellow-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-yellow-400"></div>
                  </div>
                </>
              )}
            </div>
            <div>
              <button
                onClick={() => router.push("/about")}
                className="inline-flex items-center font-segoe-bold transition-colors duration-200 text-yellow-700 hover:text-yellow-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://cdn.discordapp.com/avatars/546627382153576455/5ee994bb1703e95f90cc03851a479ac0.png?size=2048"
                alt="Tanjiro San"
              />
              <img
                className="object-cover w-20 h-20 rounded-xl shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://cdn.discordapp.com/avatars/616169470293049344/8816a7d1410bf85998c36775b2ba9990.png?size=2048"
                alt="NezukoChan"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded-xl shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://cdn.discordapp.com/avatars/932933299687538698/766f3eac3f40d4b9de00033559bf2858.png?size=2048"
                alt="Musical Tune"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
