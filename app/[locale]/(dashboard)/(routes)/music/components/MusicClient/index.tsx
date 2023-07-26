"use client";

// components
import Heading from "@/components/Heading";

// icons
import { Music } from "lucide-react";
import MusicForm from "../MusicForm";
import GenerateMusicProvider from "@/contexts/GenerateMusicContext/providers/GenerateMusicProvider";
import MusicContainer from "../MusicContainer";

const MusicClient: React.FC = () => {
    return (
        <div>
            <Heading
                title="Music"
                description="Turn your prompt into music"
                icon={Music}
                iconColor="text-emerald-500"
                bgColor="text-emerald-500/10"
            />
            <GenerateMusicProvider>
                <MusicForm />
                <MusicContainer />
            </GenerateMusicProvider>
        </div>
    );
};

export default MusicClient;
