"use client";

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

// contexts
import GenerateVideoContext from "../..";

// zood
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// interfaces
import { videoFormSchema } from "@/app/[locale]/(dashboard)/(routes)/video/constants";

interface IGenerateVideoProvider {
    children: React.ReactNode;
}

const GenerateVideoProvider: React.FC<IGenerateVideoProvider> = ({
    children,
}) => {
    // video states
    const [video, setVideo] = useState<string>(
        "",
    );

    // form values states
    const form = useForm<z.infer<typeof videoFormSchema>>({
        resolver: zodResolver(videoFormSchema),
        defaultValues: {
            prompt: "",
        },
    });

    // loading state
    const isLoading = form.formState.isSubmitting;

    return (
        <GenerateVideoContext.Provider
            value={{
                video,
                setVideo,
                isLoading,
                form,
            }}
        >
            {children}
        </GenerateVideoContext.Provider>
    );
};

export default GenerateVideoProvider;
