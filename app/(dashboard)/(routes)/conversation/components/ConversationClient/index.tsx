"use client";

// components
import Heading from "@/components/Heading";

// icons
import { MessageSquare } from "lucide-react";
import ConversationForm from "../ConversationForm";

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
            <ConversationForm />
            <div className="space-y-4 mt-4">
                Message Generated
            </div>
        </div>
    );
};

export default ConversationClient;
