"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ClientLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}