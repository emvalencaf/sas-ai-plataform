'use client';

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

// interfaces
export interface ICrispChatProps {
    title?: string;
};

const CrispChat: React.FC<ICrispChatProps> = ({ title = '' }) => {

    useEffect(() => {
        Crisp.configure("ad4b48eb-8e17-4769-a619-86fcbcc04fb8");
    }, [])

    return null;
};

export default CrispChat;
