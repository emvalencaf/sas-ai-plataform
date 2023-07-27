// styles
import "../globals.css";

import { Inter } from "next/font/google";

// providers
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/contexts/ModalProvider";
import ToastProvider from "@/contexts/ToastContext/providers";
import CrispProvider from "@/contexts/CrispContext/providers";

// next-intl
import { getTranslator } from "next-intl/server";
import { NextIntlClientProvider, } from "next-intl";

// next navigation
import { notFound } from "next/navigation";

// Clerk localization
import { enUS, ptBR } from "@clerk/localizations";

// fonts
const inter = Inter({ subsets: ["latin"] });
/*
export const metadata: Metadata = {
    title: "AI Genie",
    description: "A plataform where you can find a genie to make your wishes come true",
};*/

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslator(locale, "head");

    return {
        title: t("title"),
        description: t("description"),
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}) {

    const { locale } = params;

    const lng = locale === "pt" ? ptBR : enUS;

    let messages;

    try {
        messages = (await import(`@/messages/${locale}.json`)).default;
    } catch (error: any) {
        console.log("[NEXINTL_ERROR]", error);
        notFound();
    }

    return (
        <ClerkProvider localization={lng}>
            <html lang="en">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <body className={inter.className}>
                        <ToastProvider />
                        <ModalProvider />
                        {children}
                    </body>
                    <CrispProvider />
                </NextIntlClientProvider>
            </html>
        </ClerkProvider>
    );
}
