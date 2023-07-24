import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// providers
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/contexts/ModalProvider";
import ToastProvider from "@/contexts/ToastContext/providers";
import CrispProvider from "@/contexts/CrispContext/providers";

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
                <CrispProvider />
                <body className={inter.className}>
                    <ToastProvider />
                    <ModalProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
