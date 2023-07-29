"use client";

// hooks
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

// custom hooks
import { useChat, useProModal } from "@/hooks";

// zod tools
import * as z from "zod";

// axios
import axios, { AxiosResponse } from "axios";

// toast
import toast from "react-hot-toast";

// ui components
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// formSchema
import { formSchema } from "../../constants";

// interfaces
import { ChatCompletionRequestMessage } from "openai";

const ConversationForm: React.FC = () => {
    // navigation controller
    const router = useRouter();

    // chat messages states
    const { messages, setMessages, form, isLoading } = useChat();
    const [firstMsg, setFirstMsg] = useState<boolean>(true);

    // pro modal controller
    const proModal = useProModal();

    // i18n
    const locale = useLocale();
    const t = useTranslations("main.dashboard.conversation.form");

    // handle submit
    const onSubmit = useCallback(
        async (values: z.infer<typeof formSchema>) => {
            if (!form) return null;

            try {
                // new chat message
                const userMessage: ChatCompletionRequestMessage = {
                    role: "user",
                    content: values.prompt,
                };

                // insert new chat message into chat
                const newMessages = [...messages, userMessage];
                setMessages(newMessages);
                console.log("new messages in form", newMessages);

                // getting chatbot response
                const response: AxiosResponse<string> = await axios.post(`/api/conversation`, {
                    messages: userMessage,
                    firstMsg,
                    locale,
                });

                setFirstMsg(false);

                setMessages((current) => [
                    ...current,
                    {
                        role: "assistant",
                        content: response.data,
                    },
                ]);
                form.reset();
            } catch (error: any) {
                console.log("[CONVERSATION_ERROR]:", error); // dev console log
                // will open up a modal
                if (error?.response?.status === 403) {
                    proModal.onOpen();
                } else {
                    toast.error(t("error-msg"));
                }
            } finally {
                router.refresh();
            }
        },
        [form, messages, setMessages, proModal, router, locale, t, firstMsg]
    );

    if (!form) return null;

    return (
        <div className="px-4 lg:px-8">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                >
                    <FormField
                        name="prompt"
                        render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-10">
                                <FormControl className="m-0 p-0">
                                    <Input
                                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                        disabled={isLoading}
                                        placeholder={t("placeholder")}
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button
                        className="col-span-12 lg:col-span-2 w-full"
                        disabled={isLoading}
                    >
                        {t("btn-label")}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ConversationForm;
