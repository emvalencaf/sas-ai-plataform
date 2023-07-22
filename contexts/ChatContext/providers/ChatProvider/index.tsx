"use client";

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

// contexts
import ConversationChatContext from "../..";

// zood
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// interfaces
import { ChatCompletionRequestMessage } from "openai";

import { formSchema } from "../../../../app/(dashboard)/(routes)/conversation/constants";

interface IConversationChatProvider {
    children: React.ReactNode;
}

const ConversationChatProvider: React.FC<IConversationChatProvider> = ({
    children,
}) => {
    // chat messages states
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>(
        []
    );

    // form values states
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    // loading state
    const isLoading = form.formState.isSubmitting;

    return (
        <ConversationChatContext.Provider
            value={{
                messages,
                setMessages,
                isLoading,
                form,
            }}
        >
            {children}
        </ConversationChatContext.Provider>
    );
};

export default ConversationChatProvider;
