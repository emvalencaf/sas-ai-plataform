"use client";

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

// contexts
import GenerateMusicContext from "../..";

// zood
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// interfaces
import { ChatCompletionRequestMessage } from "openai";

import { musicFormSchema } from "@/app/[locale]/(dashboard)/(routes)/music/constants";

interface IGenerateMusicProvider {
    children: React.ReactNode;
}

const GenerateMusicProvider: React.FC<IGenerateMusicProvider> = ({
    children,
}) => {
    // music states
    const [music, setMusic] = useState<string>(
        "",
    );

    // form values states
    const form = useForm<z.infer<typeof musicFormSchema>>({
        resolver: zodResolver(musicFormSchema),
        defaultValues: {
            prompt: "",
        },
    });

    // loading state
    const isLoading = form.formState.isSubmitting;

    return (
        <GenerateMusicContext.Provider
            value={{
                music,
                setMusic,
                isLoading,
                form,
            }}
        >
            {children}
        </GenerateMusicContext.Provider>
    );
};

export default GenerateMusicProvider;
