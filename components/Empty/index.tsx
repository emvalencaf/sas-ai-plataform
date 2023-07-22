'use client';

// next components
import Image from "next/image";

// interfaces
export interface IEmpetyProps {
    label: string;
};

const Empty: React.FC<IEmpetyProps> = ({ label }) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image
                    fill
                    alt="Empety"
                    src="/assets/logo.png"
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    );
};

export default Empty;
