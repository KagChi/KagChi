import { mount, StartClient } from "@solidjs/start/client";
import AOS from "aos";

mount(() => {
    AOS.init();

    return <>
        <link href="https://fonts.googleapis.com/css?family=Tilt+Neon&display=optional" rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css?family=Rubik&display=optional" rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css?family=Baloo+2&display=optional" rel='stylesheet' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

        <StartClient />
    </>;
}, document.getElementById("app")!);
