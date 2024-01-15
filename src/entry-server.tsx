import { createHandler } from "@solidjs/start/entry";
import { StartServer } from "@solidjs/start/server";
import ScrollSmooth from "./components/ScrollSmooth";


export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {assets}
                </head>
                <body>
                    <ScrollSmooth>
                        <div id="app">{children}</div>
                        {scripts}
                    </ScrollSmooth>
                </body>
            </html>
        )}
    />
));
