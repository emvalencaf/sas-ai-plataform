"use client";

// custom hooks
import { useChat, useGenerateMusic } from "@/hooks";

// components
import UserAvatar from "@/components/UserAvatar";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import BotAvatar from "@/components/BotAvatar";

// libs
import { cn } from "@/lib/utils";

// interfaces
export interface IMusicContainerProps {
    title?: string;
}

const MusicContainer: React.FC<IMusicContainerProps> = () => {
    const { music, isLoading } = useGenerateMusic();

    return (
        <div className="space-y-4 mt-4">
            {isLoading && (
                <div className="p-8 rounded lg w-full flex items-center justify-center bg-muted">
                    <Loader label="Our genie is composing a master piece... " />
                </div>
            )}
            {!music && !isLoading && (
                <Empty label="No music generated." />
            )}
            {
                music && (
                    <audio controls className="w-full mt-8">
                        <source src={music} />
                    </audio>
                )
            }
        </div>
    );
};

export default MusicContainer;
