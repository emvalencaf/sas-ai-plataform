"use client";

// components
import Heading from "@/components/Heading";

// icons
import { VideoIcon } from "lucide-react";
import VideoForm from "../VideoForm";
import GenerateVideoProvider from "@/contexts/GenerateVideoContext/providers/GenerateVideoProvider";
import VideoContainer from "../VideoContainer";

const VideoClient: React.FC = () => {
    return (
        <div>
            <Heading
                title="Video"
                description="Turn your prompt into video"
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
