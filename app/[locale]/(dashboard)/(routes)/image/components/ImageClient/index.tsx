"use client";

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
    return (
        <div>
            <Heading
                title="Image"
                description="Turn your prompt into an image"
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
