"use client";

// hooks
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { useState } from "react";

// ui components
import { Button } from "@/components/ui/button";

// constants
import { DEMOAccount } from "./constants";

// utils
import toast from "react-hot-toast";

// interfaces
export interface IDemoSignInButtonProps {
    title?: string;
}

const DemoSignInButton: React.FC<IDemoSignInButtonProps> = ({ title = "" }) => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { signIn, isLoaded, setActive } = useSignIn();

    const handleSignIn = async () => {
        setIsLoading(true);
        try {
            if (!isLoaded) return;

            const result = await signIn.create({
                identifier: DEMOAccount.email,
                password: DEMOAccount.password,
            });

            if (result.status !== "complete") return console.log(result);

            await setActive({ session: result.createdSessionId });

            router.push("/");
        } catch (error: any) {
            console.log("[DEMOBUTTON_ERROR]: ", error);
            toast.error(
                "Something went wrong with sign-in with a demo account"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
            <Button
                disabled={isLoading}
                variant="default"
                onClick={handleSignIn}
            >
                {isLoading ? "SIGNING IN..." : "DEMO SIGN IN"}
            </Button>
    );
};

export default DemoSignInButton;
