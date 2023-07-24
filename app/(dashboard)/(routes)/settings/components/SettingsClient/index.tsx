'use client';

import { Settings } from "lucide-react";
import Heading from "../../../../../../components/Heading";
import SubscriptionButton from "../SubscriptionButton";

// interfaces
export interface ISettingsClientProps {
    isPro: boolean;
};

const SettingsClient: React.FC<ISettingsClientProps> = ({ isPro, }) => {
    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings."
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isPro
                        ? "You are currently on a pro plan."
                        : "You are currently on a free plan."}
                </div>
                <SubscriptionButton isPro={isPro} />
            </div>
        </div>
    );
};

export default SettingsClient;
