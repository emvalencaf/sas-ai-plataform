"use client";

// components
import Heading from "@/components/Heading";

// icons
import { MessageSquare } from "lucide-react";
import ConversationForm from "../ConversationForm";
import { ChatProvider } from "../../../../../../contexts/ChatContext/providers";
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
            <ChatProvider>
                <ConversationForm />
                <ConversationChat />
            </ChatProvider>
        </div>
    );
};

export default ConversationClient;
