import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// providers
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "../contexts/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI SaaS Plataform",
    description: "A SaaS AI plataform",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
