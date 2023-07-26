import * as z from "zod";

export const imageFormSchema = z.object({
    prompt: z.string().min(1, {
        message: "Image prompt is required",
    }),
    amount: z.string().min(1),
    resolution: z.string().min(1),
});

export const amountOptions = [
    {
        value: "1",
        pt: {

            label: "1 foto",
        },
        en: {
            label: "1 photo",
        },
    },
    {
        value: "2",
        pt: {
            label: "2 fotos",
        },
        en: {
            label: "2 photo",
        },
    },
    {
        value: "3",
        pt: {
            label: "3 fotos",
        },
        en: {
            label: "3 photo",
        },
    },
    {
        value: "4",
        pt: {
            label: "4 fotos",
        },
        en: {
            label: "4 photo",
        },
    },
    {
        value: "5",
        pt: {
            label: "5 fotos",
        },
        en: {
            label: "5 photo",
        },
    },
];

export const resolutionOptions = [
    {
        value: "256x256",
        label: "256x256",
    },
    {
        value: "512x512",
        label: "512x512",
    },
    {
        value: "1024x1024",
        label: "1024x1024",
    },
];