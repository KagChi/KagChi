import { createHandler } from "@solidjs/start/entry";
import { StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Tilt+Neon&display=optional" rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Rubik&display=optional" rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Baloo+2&display=optional" rel='stylesheet' />
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {assets}
                </head>
                <body>
                    <div id="app">{children}</div>
                    {scripts}
                </body>
            </html>
        )}
    />
));
