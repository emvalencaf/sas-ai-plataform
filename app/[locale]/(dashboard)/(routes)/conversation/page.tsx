// custom components
import ConversationClient from "./components/ConversationClient";

// interfaces
export interface IConversationPageProps {
    params: {
        Id: string,
    },
}

const ConversationPage: React.FC<IConversationPageProps> = ({ params }) => {
    return <ConversationClient />
};

export default ConversationPage;
