import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageContainer from "@/components/Page/PageContainer";
import Providers from "@/providers";

import '../styles';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cresce Cuts",
    description: "App para promoção de produtos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <PageContainer>
                        {children}
                    </PageContainer>
                </Providers>
            </body>
        </html>
    );
}
