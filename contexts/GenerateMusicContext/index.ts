"use client";

// react tools
import { Dispatch, SetStateAction, createContext } from "react";

// zood
import * as z from "zod";

// interface
import { UseFormReturn } from "react-hook-form";
import { musicFormSchema } from "../../app/(dashboard)/(routes)/music/constants";

interface IGenerateMusicContext {
    music: string;
    setMusic: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
    form: UseFormReturn<z.infer<typeof musicFormSchema>> | null;
}

const GenerateMusicContext = createContext<IGenerateMusicContext>({
    music: [],
    setMusic: () => {},
    isLoading: false,
    form: null,
});

export default GenerateMusicContext;