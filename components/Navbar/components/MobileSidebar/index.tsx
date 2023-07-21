"use client";

// ui components
import { Button } from "../../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// custom components
import ClientComponent from "@/components/ClientComponent";
import Sidebar from "@/components/Sidebar";

// icons
import { Menu } from "lucide-react";


// interfaces
export interface IMobileSidebarProps {
    title?: string;
}

const MobileSidebar: React.FC<IMobileSidebarProps> = ({}) => {
    return (
        <ClientComponent>
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
        </ClientComponent>
    );
};

export default MobileSidebar;
