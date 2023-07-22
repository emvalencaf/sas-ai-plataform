"use client";

// react tools
import { Dispatch, SetStateAction, createContext } from "react";

// zood
import * as z from "zod";

// interface
import { UseFormReturn } from "react-hook-form";
import { imageFormSchema } from "../../app/(dashboard)/(routes)/image/constants";

interface IGenerateImageContext {
    images: string[];
    setImages: Dispatch<SetStateAction<string[]>>;
    isLoading: boolean;
    form: UseFormReturn<z.infer<typeof imageFormSchema>> | null;
}

const GenerateImageContext = createContext<IGenerateImageContext>({
    images: [],
    setImages: () => {},
    isLoading: false,
    form: null,
});

export default GenerateImageContext;