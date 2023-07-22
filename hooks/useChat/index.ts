// hooks
import { useContext } from "react";

// contexts
import ChatContext from "@/contexts/ChatContext";

const useChat = () => useContext(ChatContext);

export default useChat;