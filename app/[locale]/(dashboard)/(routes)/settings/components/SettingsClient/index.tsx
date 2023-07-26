'use client';

import { Settings } from "lucide-react";
import Heading from "@/components/Heading";
import SubscriptionButton from "../SubscriptionButton";
import { useTranslations } from "next-intl";

// interfaces
export interface ISettingsClientProps {
    isPro: boolean;
};

const SettingsClient: React.FC<ISettingsClientProps> = ({ isPro, }) => {

    const t = useTranslations("main.dashboard.settings");

    return (
        <div>
            <Heading
                title={t("main-title")}
                description={t("description")}
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isPro
                        ? t("content.pro")
                        : t("content.free-trial")}
                </div>
                <SubscriptionButton isPro={isPro} />
            </div>
        </div>
    );
};

export default SettingsClient;
