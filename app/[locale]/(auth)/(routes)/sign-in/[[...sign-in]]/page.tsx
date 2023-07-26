import React from "react";

import { SignIn } from "@clerk/nextjs";


const SignInPage: React.FC = () => {
    console.log("in sign in page");
    return <SignIn />
};

export default SignInPage;
