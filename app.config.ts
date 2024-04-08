import { defineConfig } from "@solidjs/start/config";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@": resolve(dirname(fileURLToPath(import.meta.url)), "src")
            }
        }
    },
    server: {
        preset: "cloudflare-pages"
    },
    ssr: false
});