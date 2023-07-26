// custom components
import ImageClient from "./components/ImageClient";

// interfaces
export interface IImagePageProps {
    params: {
        locale: string,
    },
}

const ImagePage: React.FC<IImagePageProps> = ({ params }) => {
    return <ImageClient />
};

export default ImagePage;
