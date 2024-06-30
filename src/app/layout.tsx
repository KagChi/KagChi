import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "KagChi - Home",
    description: "I am KagChi, Fullstack Weeb developer. I Love building things. Very active at Discord",
    openGraph: {
        type: "website",
        url: "https://kagchi.my.id",
        title: "KagChi - Home",
        description: "I am KagChi, Fullstack Weeb developer. I Love building things. Very active at Discord",
    },
    icons: [
        {
            url: "/favicon.ico"
        }
    ]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
