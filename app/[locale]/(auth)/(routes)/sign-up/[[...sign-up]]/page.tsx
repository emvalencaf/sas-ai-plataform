import { SignUp } from "@clerk/nextjs";
import { useLocale } from "next-intl";

const SignUpPage: React.FC = () => {
    const locale = useLocale();
    return (
        <SignUp
            path={`/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!!}`}
            routing="path"
            signInUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
            afterSignInUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}`}
        />
    );
};

export default SignUpPage;
