
// hooks
import { useLocale } from "next-intl";

// clerk components
import { SignUp } from "@clerk/nextjs";

// custom components
import DemoSignInButton from "@/app/[locale]/(auth)/components/DemoSignInButton";

const SignUpPage: React.FC = () => {
    const locale = useLocale();
    return (
        <div className="flex flex-col gap-6">
            <SignUp
                path={`/${locale}${process.env
                    .NEXT_PUBLIC_CLERK_SIGN_UP_URL!!}`}
                routing="path"
                signInUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
                afterSignInUrl={`/${locale}${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}`}
            />
            <DemoSignInButton />
        </div>
    );
};

export default SignUpPage;
