import { defineConfig } from "@solidjs/start/config";

import { resolve } from "path";

console.log(resolve(__dirname, "src"));

export default defineConfig({
    start: { ssr: false },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});