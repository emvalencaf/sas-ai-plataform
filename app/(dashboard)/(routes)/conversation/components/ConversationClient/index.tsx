"use client";

// components
import Heading from "@/components/Heading";

// icons
import { MessageSquare } from "lucide-react";
import ConversationForm from "../ConversationForm";
import { ConversationChatProvider } from "../../../../../../contexts/ConversationChatContext/providers";
import ConversationChat from "../ConversationChat";

const ConversationClient: React.FC = () => {
    return (
        <div>
            <Heading
                title="Conversation"
                description="Our most advanced conversation model"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="text-violet-500/10"
            />
            <ConversationChatProvider>
                <ConversationForm />
                <ConversationChat />
            </ConversationChatProvider>
        </div>
    );
};

export default ConversationClient;
