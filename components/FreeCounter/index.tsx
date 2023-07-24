"use client";

// custom hooks
import { useProModal } from "@/hooks";

// ui components
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// constants
import { MAX_FREE_COUNTS } from "@/constants";

// icons
import { Zap } from "lucide-react";

// interfaces
export interface IFreeCounterProps {
    apiLimitCount: number;
    isPro: boolean;
}

const FreeCounter: React.FC<IFreeCounterProps> = ({ apiLimitCount = 0, isPro = false, }) => {

    // controller pro modal
    const proModal = useProModal();

    if (isPro) return null;

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                        </p>
                        <Progress
                            className="h-3"
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                    </div>
                    <Button onClick={proModal.onOpen} variant="premium" className="w-full">
                        Upgrade
                        <Zap className="w-4 h-4 ml--2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default FreeCounter;
