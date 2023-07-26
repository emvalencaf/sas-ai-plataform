"use client";

// hooks
import { useTranslations } from "next-intl";

// components
import Heading from "@/components/Heading";
import CodeChat from "../CodeChat";
import CodeForm from "../CodeForm";

// providers
import { ChatProvider } from "@/contexts/ChatContext/providers";

// icons
import { Code, } from "lucide-react";

const CodeClient: React.FC = () => {

    const t = useTranslations("main.dashboard.code");

    return (
        <div>
            <Heading
                title={t("main-title")}
                description={t("description")}
                icon={Code}
                iconColor="text-green-700"
                bgColor="text-green-700/10"
            />
            <ChatProvider>
                <CodeForm />
                <CodeChat />
            </ChatProvider>
        </div>
    );
};

export default CodeClient;
