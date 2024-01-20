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
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

                    <title>Kagchi - Home</title>
                    <meta name="title" content="Kagchi - Home" />
                    <meta name="description" content="I am KagChi, Fullstack Weeb developer. I always experiment with new things, it makes me curious. It's truly surprising." />

                    <meta name="theme-color" content="#E13F32" />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://kagchi.my.id/" />
                    <meta property="og:title" content="Kagchi - Home" />
                    <meta property="og:description" content="I am KagChi, Fullstack Weeb developer. I always experiment with new things, it makes me curious. It's truly surprising." />
                    <meta property="og:image" content="https://cms.kagchi.my.id/assets/c4015e1f-5159-480b-b21a-371969dd1c00" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://kagchi.my.id/" />
                    <meta property="twitter:title" content="Kagchi - Home" />
                    <meta property="twitter:description" content="I am KagChi, Fullstack Weeb developer. I always experiment with new things, it makes me curious. It's truly surprising." />
                    <meta property="twitter:image" content="https://cms.kagchi.my.id/assets/c4015e1f-5159-480b-b21a-371969dd1c00" />

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
