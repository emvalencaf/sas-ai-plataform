"use client";

// hooks
import { useLocale, useTranslations } from "next-intl";

// custom components
import Heading from "@/components/Heading";

// custom page components
import ConversationForm from "../ConversationForm";
import ConversationChat from "../ConversationChat";

// providers
import { ChatProvider } from "@/contexts/ChatContext/providers";

// icons
import { MessageSquare } from "lucide-react";

const ConversationClient: React.FC = () => {

    const t = useTranslations("main.dashboard.conversation");

    return (
        <div>
            <Heading
                title={t("main-title")}
                description={t("description")}
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="text-violet-500/10"
            />
            <ChatProvider>
                <ConversationForm />
                <ConversationChat />
            </ChatProvider>
        </div>
    );
};

export default ConversationClient;
