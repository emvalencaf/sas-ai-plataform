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
import { NextIntlClientProvider, useLocale, } from "next-intl";

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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locale = useLocale();

    if (params.locale !== locale) return notFound();

    const lng = locale === "pt" ? ptBR : enUS;

    let messages;

    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (err: any) {
        console.log(err);
        notFound();
    }


    return (
        <ClerkProvider localization={lng}>
            <html lang={locale}>
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
