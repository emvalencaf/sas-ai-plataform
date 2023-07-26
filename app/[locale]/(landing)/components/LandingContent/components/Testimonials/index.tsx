"use client";

// ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// constants
import { testimonials } from "@/constants";
import { useLocale, useTranslations } from "next-intl";

const Testimonials: React.FC = () => {

    const locale = useLocale();
    const t = useTranslations("main.landing.content.testimonials");

    return (
        <div>
            <h2 className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold mb-10">
                {t("main-title")}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {testimonials.map((item) => (
                    <Card
                        key={item.description}
                        className="shadow-violet-500/50 border-none text-black"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-500 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4 px-0 pl-6 pr-6">
                            {item.description}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
