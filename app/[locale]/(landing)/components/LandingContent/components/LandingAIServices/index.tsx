"use client";

// hooks
import { useLocale, useTranslations } from "next-intl";

// ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// constants
import { AIServices } from "@/constants";

// utils
import { cn } from "@/lib/utils";

// interfaces
export interface ILandingAIServicesProps {
    title?: string;
}

const LandingAIServices: React.FC<ILandingAIServicesProps> = () => {

    const locale = useLocale();
    const t = useTranslations("main.landing.content.availabe-services");

    return (
        <div>
            <h2 className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold mb-10">
                {t("main-title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                {AIServices.map((item) => (
                    <Card
                        key={item[locale as "pt" | "en"].description}
                        className="shadow-violet-500/50 border-none text-black"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                
                                    <item.icon className={cn("w-15 h-15", item.color, item.bgColor)} />
                                    <p className={cn("text-zinc-500 text-lg", item.color)}>
                                        {item[locale as "pt" | "en"].label}
                                    </p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4 px-0 pl-6 pr-6">
                            {item[locale as "pt" | "en"].description}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LandingAIServices;
