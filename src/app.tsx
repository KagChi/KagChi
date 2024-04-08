// @refresh reload
import "@/app.css";
import "aos/dist/aos.css";

import { Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start/router";

export default function App() {
    
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
