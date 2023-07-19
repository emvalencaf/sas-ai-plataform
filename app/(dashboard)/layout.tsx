
// custom components
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

// interfaces
export interface ILayoutLayoutProps {
    children: React.ReactNode;
}

const LayoutLayout: React.FC<ILayoutLayoutProps> = ({ children }) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default LayoutLayout;
