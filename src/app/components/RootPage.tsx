"use client";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-screen w-full bg-fixed bg-cover bg-no-repeat bg-center" style={{
          backgroundImage: "url('./assets/images/K_Background.webp')"
        }}>

          <div className="mt-40">
            <div className="flex flex-col w-full lg:w-1/2 px-6 md:px-12 lg:px-32 gap-4">
              <div className="flex flex-col w-full justify-center items-center md:justify-none md:items-none">
                <h3 style={{
                  textShadow: "0px 6px 6px #A72139"
                }} className="text-white text-4xl font-bold lg:ml-2 lg:mr-auto">I&apos;am</h3>
                <h2 style={{
                  WebkitTextStrokeColor: "#E23C23",
                  WebkitTextStrokeWidth: "1.5px",
                  textShadow: "0px 6px 6px #E23C23"
                }}
                  className="text-white text-7xl font-bold font-serif">KagChi</h2>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-white font-bold font-serif" style={{
                  textShadow: "0px 6px 6px #E23C23"
                }}
                >A Fullstack Weeb Developer</h2>
                <button className="flex bg-[#E23C23] lg:mr-2 w-32 h-8 text-white font-bold rounded-md text-sm items-center justify-center">
                  &quot;Show Your Work&quot;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}