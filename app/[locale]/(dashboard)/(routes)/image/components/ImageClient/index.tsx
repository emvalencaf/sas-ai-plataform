"use client";

// hooks
import { useTranslations } from "next-intl";

// custom components
import Heading from "@/components/Heading";

// custom image route components
import ImageForm from "../ImageForm";
import ImageContainer from "../ImageContainer";

// providers
import GenerateImageProvider from "@/contexts/GenerateImageContext/providers/GenerateImageProvider";

// icons
import { ImageIcon, } from "lucide-react";

const ImageClient: React.FC = () => {
    const t = useTranslations("main.dashboard.image");
    return (
        <div>
            <Heading
                title={t("main-title")}
                description={t("description")}
                icon={ImageIcon}
                iconColor="text-pink-700"
                bgColor="text-pink-700/10"
            />
            <GenerateImageProvider>
                <ImageForm />
                <ImageContainer />
            </GenerateImageProvider>
        </div>
    );
};

export default ImageClient;
