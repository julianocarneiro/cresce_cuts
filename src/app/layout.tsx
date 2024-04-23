import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles';
import PageContainer from "@/components/Page/PageContainer";

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
                <PageContainer>
                    {children}
                </PageContainer>
            </body>
        </html>
    );
}
