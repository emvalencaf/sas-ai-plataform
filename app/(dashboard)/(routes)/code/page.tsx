// custom components
import CodeClient from "./components/CodeClient/";

// interfaces
export interface ICodePageProps {
    params: {
        Id: string,
    },
}

const CodePage: React.FC<ICodePageProps> = ({ params }) => {
    return <CodeClient />
};

export default CodePage;
