"use client";

// ui componentt
import { Button } from "../../../ui/button";

// icons
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "../../../Sidebar";

// interfaces
export interface IMobileSidebarProps {
    title?: string;
}

const MobileSidebar: React.FC<IMobileSidebarProps> = ({}) => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
                <SheetContent side="left" className="p-0">
                    <Sidebar />
                </SheetContent>
            </SheetTrigger>
        </Sheet>
    );
};

export default MobileSidebar;
