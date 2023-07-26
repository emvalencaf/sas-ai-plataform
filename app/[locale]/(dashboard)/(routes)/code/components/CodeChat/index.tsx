"use client";

// custom hooks
import { useChat } from "@/hooks";

// components
import UserAvatar from "@/components/UserAvatar";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import BotAvatar from "@/components/BotAvatar";

// libs
import { cn } from "@/lib/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// interfaces
export interface ICodeChatProps {
    title?: string;
}

const CodeChat: React.FC<ICodeChatProps> = () => {
    const { messages, isLoading } = useChat();

    return (
        <div className="space-y-4 mt-4">
            {isLoading && (
                <div className="p-8 rounded lg w-full flex items-center justify-center bg-muted">
                    <Loader />
                </div>
            )}
            {messages.length === 0 && !isLoading && (
                <Empty label="No conversation started." />
            )}
            <div className="flex flex-col-reverse gap-y-4">
                {messages.map((message) => (
                    <div
                        key={message.content}
                        className={cn(
                            "p-8 w-full flex items-start gap-x-8 rounded-lg",
                            message.role === "user"
                                ? "bg-white border border-black/10"
                                : "bg-muted"
                        )}
                    >
                        {message.role === "user" ? (
                            <UserAvatar />
                        ) : (
                            <BotAvatar />
                        )}
                        <ReactMarkdown components={{
                            pre: ({ node, ...props}) => (
                                <div
                                    className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg"
                                >
                                    <pre {...props} />
                                </div>
                            ),
                            code: ({ node, ...props }) => (
                                <code className="bg-black/10 rounded-lg p-1" {...props} />
                            )
                        }} className="text-sm overflow-hidden leading-7">{message.content || ""}</ReactMarkdown>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CodeChat;
