import { defineConfig } from "@solidjs/start/config";
import { resolve } from "path";

export default defineConfig({
    start: { 
        ssr: false
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    }
});
