"use client";

// next components
import Image from "next/image";

// interfaces
export interface ILoaderProps {
    title?: string;
}

const Loader: React.FC<ILoaderProps> = ({ title = "" }) => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-ping">
                <Image alt="logo" fill src="/assets/logo.png" />
            </div>
            <p className="text-sm text-muted-foreground">
                Our Genie is thinking...
            </p>
        </div>
    );
};

export default Loader;
