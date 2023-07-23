
// custom components
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "../../lib/api-limit";

// interfaces
export interface ILayoutLayoutProps {
    children: React.ReactNode;
}

const LayoutLayout: React.FC<ILayoutLayoutProps> = async ({ children }) => {

    // get api limit from db
    const apiLimitCount = await getApiLimitCount();

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar apiLimitCount={apiLimitCount} />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default LayoutLayout;
