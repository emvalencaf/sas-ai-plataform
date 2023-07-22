"use client";

// components
import Heading from "@/components/Heading";

// icons
import { Code, } from "lucide-react";
import CodeForm from "../CodeForm";
import { ChatProvider } from "@/contexts/ChatContext/providers";
import CodeChat from "../CodeChat";

const CodeClient: React.FC = () => {
    return (
        <div>
            <Heading
                title="Code"
                description="Generate code using descriptive text."
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
