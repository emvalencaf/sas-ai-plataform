import React from "react";

// hooks
import { useLocale } from "next-intl";

// clerk components
import { SignIn } from "@clerk/nextjs";

// custom components
import DemoSignInButton from "@/app/[locale]/(auth)/components/DemoSignInButton";

const SignInPage: React.FC = () => {

    const locale = useLocale();

    return (
        <>
            <SignIn
                path={`/${locale}${process.env
                    .NEXT_PUBLIC_CLERK_SIGN_IN_URL!!}`}
                routing="path"
                signUpUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
                afterSignInUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}`}
            />
            <DemoSignInButton />
        </>
    );
};

export default SignInPage;
