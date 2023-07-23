"use client";

// ui components
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

// interfaces
export interface IModalProps {
    title: string;
    badgeLabel: string;
    content: React.ReactNode;
    btnLabel: string;
    btnIcon: LucideIcon;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({
    isOpen,
    onClose,
    title,
    badgeLabel,
    content,
    btnLabel,
    btnIcon: Icon,
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            {title}
                            <Badge
                                variant="premium"
                                className="uppercase text-sm py-1"
                            >
                                {badgeLabel}
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {content}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button size="lg" variant="premium" className="w-full">
                        {btnLabel}
                        <Icon className="w-4 h-4 ml--2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
