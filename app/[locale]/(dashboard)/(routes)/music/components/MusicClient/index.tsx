"use client";

// hooks
import { useTranslations } from "next-intl";

// custom components
import Heading from "@/components/Heading";
import MusicForm from "../MusicForm";
import MusicContainer from "../MusicContainer";

// providers
import GenerateMusicProvider from "@/contexts/GenerateMusicContext/providers/GenerateMusicProvider";

// icons
import { Music } from "lucide-react";

const MusicClient: React.FC = () => {

    const t = useTranslations("main.dashboard.music");

    return (
        <div>
            <Heading
                title={t("main-title")}
                description={t("description")}
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
