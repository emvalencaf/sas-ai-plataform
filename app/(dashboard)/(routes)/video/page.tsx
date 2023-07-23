// custom components
import VideoClient from "./components/VideoClient";

// interfaces
export interface IVideoPageProps {
    params: {
        Id: string,
    },
}

const VideoPage: React.FC<IVideoPageProps> = ({ params }) => {
    return <VideoClient />
};

export default VideoPage;
