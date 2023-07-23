import { create } from "zustand";

interface IUseProModalStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useProModal = create<IUseProModalStoreProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true, }),
    onClose: () => set({ isOpen: false, }),
}));

export default useProModal;