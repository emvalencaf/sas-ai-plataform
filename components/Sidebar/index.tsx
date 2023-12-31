"use client";

// hooks
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

// next components
import Image from "next/image";
import Link from "next/link";

// next fonts
import { Montserrat } from "next/font/google";

// libs
import { cn } from "@/lib/utils";
import { SideBarMenuRoutes } from "../../constants";
import FreeCounter from "../FreeCounter";
import ClientComponent from "../ClientComponent";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

// interfaces
export interface ISidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ apiLimitCount, isPro, }) => {
    // get pathname
    const pathname = usePathname();

    const locale = useLocale();

    return (
        <div className="spcae-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link
                    href="/dashboard"
                    className="flex items-center pl-3 mb-14"
                >
                    <div className="relative w-14 h-14 mr-4">
                        <Image fill alt="Logo" src="/assets/logo.png" />
                    </div>
                    <h1
                        className={cn(
                            `text-2xl font-bold`,
                            montserrat.className
                        )}
                    >
                        AIGenie
                    </h1>
                </Link>
                <div className="space-y-1">
                    {SideBarMenuRoutes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href
                                    ? "text-white bg-white/10"
                                    : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon
                                    className={cn("h-5 w-5 mr-3", route.color)}
                                />
                                {route[locale as "en" | "pt"].label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <ClientComponent>
                <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
            </ClientComponent>
        </div>
    );
};

export default Sidebar;
