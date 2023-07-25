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
    title: "AI Genie",
    description: "A plataform where you can find a genie to make your wishes come true",
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
