"use client";

// hooks
import { useState } from "react";

// axios
import axios from "axios";

// ui components
import { Button } from "@/components/ui/button";

// icons
import { Zap } from "lucide-react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

// interfaces
interface ISubscriptionButtonProps {
    isPro: boolean;
}

const SubscriptionButton: React.FC<ISubscriptionButtonProps> = ({
    isPro = false,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const t = useTranslations("main.dashboard.settings");

    const onClick = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get("api/stripe");

            window.location.href = response.data.url;
        } catch (error: any) {
            console.log("[BILLING_ERROR]:", error);
            toast.error(t("error-msg"));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            disabled={isLoading}
            onClick={onClick}
            variant={isPro ? "default" : "premium"}
        >
            {isPro ? t("btn-label.pro") : t("btn-label.free-trial")}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
        </Button>
    );
};

export default SubscriptionButton;
