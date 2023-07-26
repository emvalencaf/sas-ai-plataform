// custom components
import MusicClient from "./components/MusicClient";

// interfaces
export interface IMusicPageProps {
    params: {
        locale: string,
    },
}

const MusicPage: React.FC<IMusicPageProps> = ({ params }) => {
    return <MusicClient />
};

export default MusicPage;
