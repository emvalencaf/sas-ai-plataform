// custom components
import ImageClient from "./components/ImageClient";

// interfaces
export interface IImagePageProps {
    params: {
        Id: string,
    },
}

const ImagePage: React.FC<IImagePageProps> = ({ params }) => {
    return <ImageClient />
};

export default ImagePage;
