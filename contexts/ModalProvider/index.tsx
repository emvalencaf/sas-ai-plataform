'use client';

// custom components
import ClientComponent from "../../components/ClientComponent";

// custom modal components
import { ProModal } from "../../components/modals";


const ModalProvider: React.FC = () => {
    return (
        <ClientComponent>
            <ProModal />
        </ClientComponent>
    );
};

export default ModalProvider;
