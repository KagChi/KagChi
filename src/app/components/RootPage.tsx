"use client";

import Image from "next/image";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col w-full h-screen min-h-screen bg-cover bg-no-repeat bg-center bg-[url('/assets/images/K_Background.webp')]">
        <div className="h-screen w-full">
          <div className="mt-40">
            <div className="flex flex-col w-full lg:w-1/2 px-6 md:px-12 lg:px-32 gap-4">
              <div className="flex flex-col w-full justify-center items-center md:justify-none md:items-none">
                <h3 style={{
                  textShadow: "0px 6px 6px #A72139"
                }} className="text-white text-2xl sm:text-4xl font-bold mr-52 sm:ml-2 sm:mr-64">I&apos;am</h3>
                <h2 style={{
                  WebkitTextStrokeColor: "#E23C23",
                  WebkitTextStrokeWidth: "1.5px",
                  textShadow: "0px 6px 6px #E23C23"
                }}
                  className="text-white text-6xl sm:text-7xl font-bold font-serif">KagChi</h2>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-white font-bold font-serif" style={{
                  textShadow: "0px 6px 6px #E23C23",
                  WebkitTextStrokeColor: "#E23C23",
                  WebkitTextStrokeWidth: "0.4px",
                }}
                >A Fullstack Weeb Developer</h2>
                <button className="flex bg-[#E23C23] lg:mr-2 w-32 h-8 text-white font-bold rounded-md text-sm items-center justify-center">
                  &quot;Show Your Work&quot;
                </button>
              </div>
            </div>
          </div>
          <Image className="hidden lg:block w-32 h-32 xl:w-64 xl:h-64 md:bottom-80 lg:bottom-auto md:absolute right-32 rounded-full border-4 border-[#D9D9D9]" width={2256} height={2256} alt="K_Logo" src={"/assets/images/K_Logo.webp"} />
        </div>
        <div className="w-full h-screen xs:mt-72 mt-32 lg:mt-66">
          <svg className="w-full h-auto fill-background" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1457 1C865.451 127.15 537.208 170.807 -17 1V179H1457V1Z" fill="#D9D9D9" stroke="#D9D9D9" />
          </svg>
          <div id="about" className="-mt-1 h-full bg-[#D9D9D9]">
            <div className="w-full px-6 md:px-20 flex flex-col lg:flex-row pt-10 md:pt-0">
              <div className="relative w-3/5 mr-auto pl-4 md:mr-0 md:pl-0">
                <Image width={2556} height={4008} style={{
                  transform: "scaleX(-1)"
                }} className="w-48 md:w-64 h-auto rounded-lg" alt="K_About" src={"/assets/images/K_About_Background.webp"} />
                <div className="absolute flex flex-col left-28 sm:left-36 md:left-48 bottom-10 gap-2">
                  <div className="flex items-center p-2 rounded-md bg-[#E23C23] w-28 sm:h-8 sm:w-36">
                    <p className="text-xs sm:text-base text-white">Mobile Developer</p>
                  </div>
                  <div className="flex items-center p-2 rounded-md bg-[#E23C23] w-32 sm:h-8 sm:w-44">
                    <p className="text-xs sm:text-base text-white">Backend Developer</p>
                  </div>
                  <div className="flex items-center p-2 rounded-md bg-[#E23C23] w-32 sm:h-8 sm:w-40">
                    <p className="text-xs sm:text-base text-white">Frontend Developer</p>
                  </div>
                  <div className="flex items-center p-2 rounded-md bg-[#E23C23] w-24 sm:h-8 sm:w-28">
                    <p className="text-xs sm:text-base text-white">And Others...</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex mt-8 md:ml-0">
                <div className="w-96 flex flex-col ml-auto lg:mr-8 gap-2 px-2 md:px-0">
                  <div className="flex flex-col">
                    <p className="text-[#E23C23] text-5xl md:text-7xl font-bold font-baloo">I Always</p>
                    <p className="text-[#E23C23] text-2xl sm:text-4xl md:text-5xl font-bold -mt-1 font-baloo">Learn New Stuff</p>
                  </div>
                  <div className="flex flex-col gap-6 mt-2 md:mt-0">
                    <p className="inline-block text-[#E23C23]">
                      I’m Samuel, from Indonesia. I always experiment with new things;
                      it makes me curious. What happens if I create that? I also enjoy creating websites.
                      I can easily grasp the concepts of websites using Tailwind CSS in just 2 months.
                      It&apos;s truly surprising.
                    </p>
                    <p className="inline-block text-[#E23C23]">
                      I also wondering to create my own game someday;
                      it feels incredibly exciting to make your own game !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}