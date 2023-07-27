"use client";

// react tools
import { Dispatch, SetStateAction, createContext } from "react";

// zood
import * as z from "zod";

// interface
import { ChatCompletionRequestMessage } from "openai";
import { UseFormReturn } from "react-hook-form";
import { formSchema } from "@/app/[locale]/(dashboard)/(routes)/conversation/constants";

interface IChatContext {
    messages: ChatCompletionRequestMessage[];
    setMessages: Dispatch<SetStateAction<ChatCompletionRequestMessage[]>>;
    isLoading: boolean;
    form: UseFormReturn<z.infer<typeof formSchema>> | null;
}

const ChatContext = createContext<IChatContext>({
    messages: [],
    setMessages: () => {},
    isLoading: false,
    form: null,
});

export default ChatContext;