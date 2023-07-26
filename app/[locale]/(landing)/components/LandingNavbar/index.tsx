"use client";

// hooks
import { useAuth } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

// next components
import Image from "next/image";
import Link from "next/link";

// ui component
import { Button } from "@/components/ui/button";

// fonts
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

// interfaces
export interface ILandingNavbarProps {
    title?: string;
}

const LandingNavbar: React.FC<ILandingNavbarProps> = ({ title = "" }) => {
    const { isSignedIn } = useAuth();

    const t = useTranslations("header.navbar.landing");

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-4">
                    <Image fill alt="logo" src="/assets/logo.png" />
                </div>
                <h1
                    className={cn(
                        "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
                        font.className
                    )}
                >
                    AiGenie
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                {isSignedIn && (
                    <Link href="/dashboard">
                        <Button variant="outline" className="rounded-full">
                            {t("dashboard-btn")}
                        </Button>
                    </Link>
                )}
                {!isSignedIn && (
                    <div className="flex gap-5">
                        <Link href="/sign-up">
                            <Button variant="outline" className="rounded-full">
                                {t("sign-up-btn")}
                            </Button>
                        </Link>
                        <Link href="/sign-in">
                            <Button variant="outline" className="rounded-full">
                                {t("sign-in-btn")}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default LandingNavbar;
