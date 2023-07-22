// hooks
import { useContext } from "react";

// contexts
import ConversationChatContext from "@/contexts/ConversationChatContext";

const useConversationChat = () => useContext(ConversationChatContext);

export default useConversationChat;