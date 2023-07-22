"use client";

// hooks
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// custom hooks
import { useConversationChat } from "@/hooks";

// zod tools
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ui components
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// formSchema
import { formSchema } from "../../constants";

// interfaces
import { ChatCompletionRequestMessage } from "openai";
import axios from "axios";

const ConversationForm: React.FC = () => {
    // navigation controller
    const router = useRouter();

    // chat messages states
    const { messages, setMessages, form, isLoading } = useConversationChat();

    if (!form) return null;

    // form values states
    /*
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    // loading state
    const isLoading = form.formState.isSubmitting;
*/
    // handle submit
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // new chat message
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt,
            };

            // insert new chat message into chat
            const newMessages = [...messages, userMessage];

            // getting chatbot response
            const response = await axios.post("/api/conversation", {
                mesages: newMessages,
            });

            setMessages((current) => [...current, userMessage, response.data]);

            form.reset();
        } catch (error: any) {
            console.log("[CONVERSATION_ERROR]:", error); // dev console log
            // TODO: OPEN PREMIUM MODAL
        } finally {
            router.refresh();
        }
    };

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
                                        placeholder="Who is Ryan Gosling?"
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
                        Generate
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ConversationForm;
