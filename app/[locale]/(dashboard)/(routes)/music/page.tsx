// custom components
import MusicClient from "./components/MusicClient";

// interfaces
export interface IMusicPageProps {
    params: {
        Id: string,
    },
}

const MusicPage: React.FC<IMusicPageProps> = ({ params }) => {
    return <MusicClient />
};

export default MusicPage;
