"use client";

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

// contexts
import GenerateImageContext from "../..";

// zood
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// interfaces

import { imageFormSchema } from "../../../../app/(dashboard)/(routes)/image/constants";

interface IGenerateImageProvider {
    children: React.ReactNode;
}

const GenerateImageProvider: React.FC<IGenerateImageProvider> = ({
    children,
}) => {
    // chat images states
    const [images, setImages] = useState<string[]>(
        []
    );

    // form values states
    const form = useForm<z.infer<typeof imageFormSchema>>({
        resolver: zodResolver(imageFormSchema),
        defaultValues: {
            prompt: "",
            amount: "1",
            resolution: "512x512",
        },
    });

    // loading state
    const isLoading = form.formState.isSubmitting;

    return (
        <GenerateImageContext.Provider
            value={{
                images,
                setImages,
                isLoading,
                form,
            }}
        >
            {children}
        </GenerateImageContext.Provider>
    );
};

export default GenerateImageProvider;
