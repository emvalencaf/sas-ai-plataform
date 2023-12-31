"use client";

// hooks
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

// ui components
import { Card } from "@/components/ui/card";

// custom components
import ClientComponent from "@/components/ClientComponent";

// constants
import { tools } from "@/constants";

// utils
import { cn } from "@/lib/utils";

// icons
import { ArrowRight } from "lucide-react";

const DashboardClient: React.FC = () => {

    const router = useRouter();

    const locale = useLocale();
    const t = useTranslations("main.dashboard.index");

    return (
        <ClientComponent>
            <div>
                <div className="mb-8 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-center">
                        {t("main-title")}
                    </h2>
                    <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                        {t("sub-title")}
                    </p>
                </div>
                <div className="px-4 md:px-20 lg:px-32 space-y-4">
                    {tools.map((tool) => (
                        <Card
                            onClick={() => router.push(tool.href)}
                            key={tool.href}
                            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                        >
                            <div className="flex items-center gap-x-4">
                                <div
                                    className={cn(
                                        "p-2 w-fit rounded-md",
                                        tool.bgColor
                                    )}
                                >
                                    <tool.icon
                                        className={cn("w-8 h-8", tool.color)}
                                    />
                                </div>
                                <div className="font-semibold">
                                    {tool[locale as "pt" | "en"].label}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Card>
                    ))}
                </div>
            </div>
        </ClientComponent>
    );
};

export default DashboardClient;
