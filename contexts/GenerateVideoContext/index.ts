"use client";

// react tools
import { Dispatch, SetStateAction, createContext } from "react";

// zood
import * as z from "zod";

// interface
import { UseFormReturn } from "react-hook-form";
import { videoFormSchema } from "@/app/[locale]/(dashboard)/(routes)/video/constants";

interface IGenerateVideoContext {
    video: string;
    setVideo: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
    form: UseFormReturn<z.infer<typeof videoFormSchema>> | null;
}

const GenerateVideoContext = createContext<IGenerateVideoContext>({
    video: '',
    setVideo: () => {},
    isLoading: false,
    form: null,
});

export default GenerateVideoContext;