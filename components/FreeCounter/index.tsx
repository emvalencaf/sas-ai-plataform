"use client";

import { Zap } from "lucide-react";
import { MAX_FREE_COUNTS } from "../../constants";
// custom components
import ClientComponent from "../ClientComponent";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

// interfaces
export interface IFreeCounterProps {
    apiLimitCount: number;
}

const FreeCounter: React.FC<IFreeCounterProps> = ({ apiLimitCount = 0 }) => {
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
                    <Button variant="premium" className="w-full">
                        Upgrade
                        <Zap className="w-4 h-4 ml--2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default FreeCounter;
