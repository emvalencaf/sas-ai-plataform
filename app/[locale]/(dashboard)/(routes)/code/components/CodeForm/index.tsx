"use client";

// hooks
import { useRouter } from "next/navigation";
import { useCallback } from "react";

// custom hooks
import { useChat, useProModal } from "@/hooks";

// axios
import axios from "axios";

// zod tools
import * as z from "zod";

// ui components
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// formSchema
import { formSchema } from "../../constants";

// toast
import toast from "react-hot-toast";

// interfaces
import { ChatCompletionRequestMessage } from "openai";
import { useTranslations } from "next-intl";

const CodeForm: React.FC = () => {
    // navigation controller
    const router = useRouter();

    // chat messages states
    const { messages, setMessages, form, isLoading } = useChat();

    // pro modal controller
    const proModal = useProModal();

    const t = useTranslations("main.dashboard.code.form");

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

                // getting chatbot response
                const response = await axios.post("/api/code", {
                    mesages: newMessages,
                });

                setMessages((current) => [
                    ...current,
                    userMessage,
                    response.data,
                ]);

                form.reset();
            } catch (error: any) {
                console.log("[CODE_ERROR]:", error); // dev console log
                
                if (error?.response?.status === 403) {
                    proModal.onOpen();
                } else {
                    toast.error(t("error-msg"));
                }

            } finally {
                router.refresh();
            }
        },
        [form, messages, setMessages, proModal, t, router]
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

export default CodeForm;
