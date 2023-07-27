"use client";

// hooks
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

// custom hooks
import { useProModal } from "../../../hooks";

// custom components
import Modal from "../Modal";

// ui components
import { Card } from "@/components/ui/card";

// constants
import { tools } from "@/constants";

// axios
import axios from "axios";

// libs
import { cn } from "@/lib/utils";

// icons
import { Check, Zap } from "lucide-react";

// toast
import toast from "react-hot-toast";

const ProModal: React.FC = () => {
    // states
    const [isLoading, setIsLoading] = useState(false);

    const proModal = useProModal();

    const locale = useLocale();
    const t = useTranslations("main.dashboard.conversation.form")

    const onSubscribe = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("/api/stripe");

            window.location.href = response.data?.url;
        } catch (error: any) {
            console.log("[STRIPE_CLIENT_ERROR]:", error);
            toast.error(t("error-msg"));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            isOpen={proModal.isOpen}
            onClose={proModal.onClose}
            title="Upgrade your personal Genie"
            badgeLabel="pro"
            content={tools.map((tool) => (
                <Card
                    key={tool.href}
                    className="p-3 border-black/5 flex items-center justify-between"
                >
                    <div className="flex items-center gap-x-4">
                        <div
                            className={cn("p-2 w-fit rounded-md", tool.bgColor)}
                        >
                            <tool.icon className={cn("w-6 h-6", tool.color)} />
                        </div>
                        <div className="font-semibold text-sm">
                            {tool[locale as "pt" | "en"].label}
                        </div>
                    </div>
                    <Check className="text-primary w-5 h-5" />
                </Card>
            ))}
            btnLabel="Upgrade"
            btnIcon={Zap}
            btnFn={onSubscribe}
            isLoading={isLoading}
        />
    );
    /*
    return (
        <Dialog open>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade your personal Genie
                            <Badge
                                variant="premium"
                                className="uppercase text-sm py-1"
                            >
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                                key={tool.href}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div
                                        className={cn(
                                            "p-2 w-fit rounded-md",
                                            tool.bgColor
                                        )}
                                    >
                                        <tool.icon
                                            className={cn(
                                                "w-6 h-6",
                                                tool.color
                                            )}
                                        />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button size="lg" variant="premium" className="w-full">
                        Upgrade
                        <Zap className="w-4 h-4 ml--2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );*/
};

export default ProModal;
