"use client";

// custom hooks
import { useGenerateImage } from "@/hooks";

// next components
import Image from "next/image";

// custom components
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

// ui components
import { Card, CardFooter } from "@/components/ui/card";

// libs
import { cn } from "@/lib/utils";
import { Button } from "../../../../../../components/ui/button";
import { Download } from "lucide-react";

// interfaces
export interface IImageContainerProps {
    title?: string;
}

const ImageContainer: React.FC<IImageContainerProps> = () => {
    const { images, isLoading } = useGenerateImage();

    return (
        <div className="space-y-4 mt-4">
            {isLoading && (
                <div className="p-8 rounded lg w-full flex items-center justify-center bg-muted">
                    <Loader label="Our genie is creating..." />
                </div>
            )}
            {images.length === 0 && !isLoading && (
                <Empty label="No image created." />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                {images.map((src) => (
                    <Card key={src} className="rounded-lg overflow-hidden">
                        <div className="relative aspect-square">
                            <Image alt="Image" fill src={src} />
                        </div>
                        <CardFooter className="p-2">
                            <Button
                                onClick={() => window.open(src)}
                                variant="secondary"
                                className="w-full"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                Download
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ImageContainer;
