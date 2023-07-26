// custom components
import ConversationClient from "./components/ConversationClient";

// interfaces
export interface IConversationPageProps {
    params: {
        locale: string,
    },
}

const ConversationPage: React.FC<IConversationPageProps> = ({ params }) => {
    return <ConversationClient />
};

export default ConversationPage;
