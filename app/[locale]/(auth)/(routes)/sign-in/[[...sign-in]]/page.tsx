import React from "react";

import { SignIn } from "@clerk/nextjs";
import { useLocale } from "next-intl";

const SignInPage: React.FC = () => {
    console.log("in sign in page");

    const locale = useLocale();

    console.log({
        path: `/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!!}`,
        signUpUrl: `/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`,
    });

    return (
        <SignIn
            path={`/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!!}`}
            routing="path"
            signUpUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
            afterSignInUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}`}
        />
    );
};

export default SignInPage;
