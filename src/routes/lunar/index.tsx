import { Show, createEffect, createSignal } from "solid-js"

const LoadingState = () => {
    return (
        <div class="animate-spin">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none" id="my-svg">
                <defs>
                    <linearGradient id="gradient1">
                        <stop class="stop1" offset="0%" stop-color="#8f66ff"></stop>
                        <stop class="stop2" offset="100%" stop-color="#3d12ff"></stop>
                    </linearGradient>
                </defs>
                <rect id="backgr" width="256" height="256" fill="none" rx="60"></rect>
                <path d="M213.333 128c0 7.36 -0.928 14.507 -2.688 21.333M128 213.333c-7.36 0 -14.507 -0.928 -21.333 -2.688M42.667 128c0 -7.36 0.939 -14.507 2.688 -21.333M128 42.667c7.36 0 14.507 0.928 21.333 2.688M67.733 67.595A85.675 85.675 0 0 0 54.08 85.333m134.325 102.933A85.675 85.675 0 0 0 201.92 170.667M67.733 188.405c5.227 5.227 11.147 9.781 17.6 13.515m102.944 -134.325A85.632 85.632 0 0 0 170.667 54.08m-85.333 0a84.8 84.8 0 0 1 21.333 -8.725M45.355 149.333c1.952 7.573 4.907 14.731 8.725 21.333M149.333 210.645a84.8 84.8 0 0 0 21.333 -8.725M210.645 106.667a84.832 84.832 0 0 0 -8.725 -21.333" stroke="#fcfcfc" stroke-width="14" stroke-linecap="round" id="my-path" transform="translate(0,0) scale(1)"></path>
            </svg>
        </div>
    );
}

export default function Page() {
    const [amount, setAmount] = createSignal<number | null>(1000);
    const [pesan, setPesan] = createSignal<string | null>(null);
    const [qris, setQris] = createSignal<string | null>(null);

    const [initialized, setInitialized] = createSignal(false);

    const generateQris = () => {
        setQris(null);
        fetch("/api/createInvoice", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                amount: amount() ?? 1000,
                pesan: pesan() ?? "-",
            })
        }).then(async res => {
            const { qris_url } = await res.json();

            setQris(qris_url);
        })
    }

    createEffect(() => {
        if (initialized()) return;
        generateQris();
        setInitialized(true);
    }, [initialized])

    return (
        <main class="flex flex-col gap-12 overflow-x-hidden bg-[#D9D9D9] min-h-screen">
            <div>
                <div class="flex justify-center items-center p-4 bg-[#DE3C3C] w-full rounded-b-xl">
                    <p class="text-white text-lg md:text-4xl lg:text-5xl">🏮 Happy New Chinese New Year ! 🏮</p>
                </div>
                <div class="px-4 container mx-auto flex justify-between">
                    <img class="h-28 md:h-32" src="/assets/images/angpao/lantern.png"></img>
                    <img class="h-28 md:h-32 -mb-4" src="/assets/images/angpao/lantern.png"></img>
                    <img class="h-28 md:h-32" src="/assets/images/angpao/lantern.png"></img>
                    <img class="h-28 md:h-32 hidden lg:block" src="/assets/images/angpao/lantern.png"></img>
                </div>
            </div>

            <section class="px-4 container mx-auto flex justify-center mb-4">
                <div class="flex flex-col bg-[#DE3C3C] w-96 md:w-auto rounded-md shadow-md p-4 gap-4">
                    <div class="flex flex-col items-center justify-center">
                        <p class="text-white font-bold">Gong Xi Fa Cai !</p>
                        <p class="text-white font-medium">Angpao Na Lai</p>
                    </div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex flex-col gap-4">
                            <p class="text-sm text-white font-medium">Boleh kali bagi bagi angpao, 1.000 gpp deh 😁, Silahkan masukan nominal yang mau di berikan 🤣</p>
                            <div class="flex flex-col gap-2">
                                <p class="text-sm text-white font-medium">Silahkan masukan nominal</p>
                                <div class="flex flex-row bg-white rounded-sm px-2">
                                    <p class="font-medium">Rp</p>
                                    <input required onChange={(x) => setAmount(parseInt(x.currentTarget.value ?? 1000))} value={1000} type="number" min={1} class="w-full rounded-sm px-2 border-none bg-transparent outline-none"></input>
                                </div>
                                <textarea onChange={(x) => setPesan(x.currentTarget.value ?? "-")} class="rounded-sm p-2 outline-none" placeholder="Pesan untuk KagChi" cols="30" rows="4"></textarea>
                            </div>
                        </div>
                        <div class="md:w-52 flex justify-center items-center">
                            <Show when={qris()} fallback={<LoadingState />}>
                                <img class="w-full md:w-52 rounded-sm" src={qris()!} />
                            </Show>
                        </div>
                    </div>

                    <a onClick={(e) => {
                        e.preventDefault();
                        generateQris();
                    }} class="cursor-pointer bg-[#E13F32] px-4 py-2 w-52 rounded-md border-2 justify-center items-center flex">
                        <p class="text-white font-medium">Kirim Sekarang !</p>
                    </a>
                </div>
            </section>
        </main>
    )
}