"use client";

// custom hooks
import { useChat, useGenerateMusic } from "@/hooks";

// components
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import { useTranslations } from "next-intl";

// interfaces
export interface IMusicContainerProps {
    title?: string;
}

const MusicContainer: React.FC<IMusicContainerProps> = () => {
    const { music, isLoading } = useGenerateMusic();


    const t = useTranslations("main.dashboard.music");

    console.log("music: ",music);

    return (
        <div className="space-y-4 mt-4">
            {isLoading && (
                <div className="p-8 rounded lg w-full flex items-center justify-center bg-muted">
                    <Loader label={t("loader-label")} />
                </div>
            )}
            {!music && !isLoading && (
                <Empty label={t("empty-label")} />
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
