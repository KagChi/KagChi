/* eslint-disable tailwindcss/no-custom-classname */
// @refresh reload
import "@/app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import ScrollSmooth from "./components/ScrollSmooth";

export default function App() {
    return (
        <ScrollSmooth>
            <Router root={(props) => <Suspense>{props.children}</Suspense>}>
                <FileRoutes />
            </Router>
        </ScrollSmooth>
    );
}
