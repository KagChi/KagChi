// @refresh reload
import "@/app.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";

export default function App() {
    AOS.init();
    
    return (
        <>
            <MetaProvider>
                <Router root={(props) => <Suspense>{props.children}</Suspense>}>
                    <FileRoutes />
                </Router>
            </MetaProvider>
        </>
    );
}
