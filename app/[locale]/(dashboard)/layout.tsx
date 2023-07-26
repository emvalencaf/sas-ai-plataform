
// custom components
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

// interfaces
export interface ILayoutLayoutProps {
    children: React.ReactNode;
}

const LayoutLayout: React.FC<ILayoutLayoutProps> = async ({ children }) => {

    // get api limit from db
    const apiLimitCount = await getApiLimitCount();

    const isPro = await checkSubscription();

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default LayoutLayout;
