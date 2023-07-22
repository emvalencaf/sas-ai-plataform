"use client";

// components
import Heading from "@/components/Heading";

// icons
import { MessageSquare } from "lucide-react";
import ConversationForm from "../MusicForm";
import { ChatProvider } from "../../../../../../contexts/ChatContext/providers";
import ConversationChat from "../MusicChat";

const MusicClient: React.FC = () => {
    return (
        <div>
            <Heading
                title="Music"
                description="Turn your prompt into music"
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

export default MusicClient;
