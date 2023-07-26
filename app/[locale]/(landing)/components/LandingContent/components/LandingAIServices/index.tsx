"use client";
// ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIServices } from "@/constants";
import { cn } from "@/lib/utils";

// interfaces
export interface ILandingAIServicesProps {
    title?: string;
}

const LandingAIServices: React.FC<ILandingAIServicesProps> = ({
    title = "",
}) => {
    return (
        <div>
            <h2 className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold mb-10">
                Available Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                {AIServices.map((item) => (
                    <Card
                        key={item.description}
                        className="shadow-violet-500/50 border-none text-black"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                
                                    <item.icon className={cn("w-15 h-15", item.color, item.bgColor)} />
                                    <p className={cn("text-zinc-500 text-lg", item.color)}>
                                        {item.label}
                                    </p>
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

export default LandingAIServices;
