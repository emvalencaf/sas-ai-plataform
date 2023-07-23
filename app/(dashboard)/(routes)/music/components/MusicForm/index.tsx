"use client";

// hooks
import { useRouter } from "next/navigation";

// custom hooks
import { useGenerateMusic, useProModal } from "@/hooks";

// zod tools
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ui components
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// formSchema
import { musicFormSchema } from "../../constants";

// interfaces
import axios from "axios";
import { useCallback } from "react";

const MusicForm: React.FC = () => {
    // navigation controller
    const router = useRouter();

    // chat music states
    const { setMusic, form, isLoading } = useGenerateMusic();

    const proModal = useProModal();

    const onSubmit = useCallback(
        async (values: z.infer<typeof musicFormSchema>) => {
            if (!form) return null;

            try {
                setMusic('');

                console.log(values);
                const response = await axios.post("/api/music", values);

                setMusic(response.data.audio);

                form.reset();
            } catch (error: any) {
                console.log("[MUSIC_ERROR]:", error); // dev console log
                
                if (error?.response?.status === 403) proModal.onOpen();

            } finally {
                router.refresh();
            }
        },
        [form, setMusic, proModal, router]
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
                                        placeholder="A guitar solo?"
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

export default MusicForm;
