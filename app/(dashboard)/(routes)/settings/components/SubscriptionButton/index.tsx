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

// interfaces
interface ISubscriptionButtonProps {
    isPro: boolean;
}

const SubscriptionButton: React.FC<ISubscriptionButtonProps> = ({
    isPro = false,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get("api/stripe");

            window.location.href = response.data.url;
        } catch (error: any) {
            console.log("[BILLING_ERROR]:", error);
            toast.error("Something went wrong");
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
            {isPro ? "Manage Subscription" : "Upgrade"}{" "}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
        </Button>
    );
};

export default SubscriptionButton;
