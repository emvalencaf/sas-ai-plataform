"use client";

// hooks
import { useTranslations } from "next-intl";

// custom components
import Heading from "@/components/Heading";
import VideoForm from "../VideoForm";
import VideoContainer from "../VideoContainer";

// providers
import GenerateVideoProvider from "@/contexts/GenerateVideoContext/providers/GenerateVideoProvider";

// icons
import { VideoIcon } from "lucide-react";

const VideoClient: React.FC = () => {

    const t = useTranslations("main.dashboard.video");

    return (
        <div>
            <Heading
                title={t("main-title")}
                description={t("description")}
                icon={VideoIcon}
                iconColor="text-orange-700"
                bgColor="text-orange-700/10"
            />
            <GenerateVideoProvider>
                <VideoForm />
                <VideoContainer />
            </GenerateVideoProvider>
        </div>
    );
};

export default VideoClient;
