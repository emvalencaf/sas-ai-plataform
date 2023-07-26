"use client";

// custom hooks
import { useChat, useGenerateVideo } from "@/hooks";

// components
import UserAvatar from "@/components/UserAvatar";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import BotAvatar from "@/components/BotAvatar";

// libs
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// interfaces
export interface IVideoContainerProps {
    title?: string;
}

const VideoContainer: React.FC<IVideoContainerProps> = () => {
    const { video, isLoading } = useGenerateVideo();

    const t = useTranslations("main.dashboard.video")

    return (
        <div className="space-y-4 mt-4">
            {isLoading && (
                <div className="p-8 rounded lg w-full flex items-center justify-center bg-muted">
                    <Loader label={t("loader-label")} />
                </div>
            )}
            {!video && !isLoading && (
                <Empty label={t("empty-label")} />
            )}
            {
                video && (
                    <video controls className="w-full aspect-video mt-8 rounded-lg border">
                        <source src={video} />
                    </video>
                )
            }
        </div>
    );
};

export default VideoContainer;
