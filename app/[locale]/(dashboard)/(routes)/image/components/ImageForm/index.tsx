"use client";

// hooks
import { useRouter } from "next/navigation";

// custom hooks
import { useGenerateImage, useProModal } from "@/hooks";

// zod tools
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// axios
import axios from "axios";

// ui components
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// formSchema
import { amountOptions, imageFormSchema, resolutionOptions } from "../../constants";
import { useCallback } from "react";
import toast from "react-hot-toast";

// interfaces

const ImageForm: React.FC = () => {
    // navigation controller
    const router = useRouter();

    const { images, setImages, form, isLoading } = useGenerateImage();

    const proModal = useProModal();

    // handle submit
    const onSubmit = useCallback(async (values: z.infer<typeof imageFormSchema>) => {
        
        if (!form) return null;

        try {
            console.log("yo");

            setImages([]);

            console.log(values);// dev console

            const response = await axios.post("/api/image", values);

            const urls = response.data.map(
                (image: { url: string }) => image.url
            );

            setImages(urls);

            form.reset();
        } catch (error: any) {
            console.log("[IMAGE_ERROR]:", error); // dev console log
            if (error?.response?.status === 403) {
                proModal.onOpen();
            } else {
                toast.error("Something went wrong!");
            }
        } finally {
            router.refresh();
        }
    },[form, setImages, proModal, router]);

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
                            <FormItem className="col-span-12 lg:col-span-6">
                                <FormControl className="m-0 p-0">
                                    <Input
                                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                        disabled={isLoading}
                                        placeholder="A picture of a horse in Swiss alps?"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-2">
                                <Select
                                    disabled={isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                defaultValue={field.value}
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {amountOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value} >
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                                        <FormField
                        control={form.control}
                        name="resolution"
                        render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-2">
                                <Select
                                    disabled={isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                defaultValue={field.value}
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {resolutionOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value} >
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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

export default ImageForm;
