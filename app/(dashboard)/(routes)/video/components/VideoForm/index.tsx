"use client";

// hooks
import { useRouter } from "next/navigation";

// custom hooks
import { useGenerateVideo, useProModal } from "@/hooks";

// zod tools
import * as z from "zod";

// ui components
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// formSchema
import { videoFormSchema } from "../../constants";

// interfaces
import axios from "axios";
import { useCallback } from "react";
import toast from "react-hot-toast";

const VideoForm: React.FC = () => {
    // navigation controller
    const router = useRouter();

    // chat video states
    const { setVideo, form, isLoading } = useGenerateVideo();

    // pro modal controller
    const proModal = useProModal();

    const onSubmit = useCallback(
        async (values: z.infer<typeof videoFormSchema>) => {
            if (!form) return null;

            try {
                setVideo('');

                console.log(values);
                const response = await axios.post("/api/video", values);

                setVideo(response.data[0]);

                form.reset();
            } catch (error: any) {
                console.log("[VIDEO_ERROR]:", error); // dev console log

                if (error?.response?.status === 403) {
                    proModal.onOpen();
                } else {
                    toast.error("Something went wrong!");
                }

            } finally {
                router.refresh();
            }
        },
        [form, setVideo, proModal, router]
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
                                        placeholder="A cat jumping"
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

export default VideoForm;
