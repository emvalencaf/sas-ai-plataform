import { checkSubscription } from "@/lib/subscription";
import SettingsClient from "./components/SettingsClient";

// interfaces
export interface ISettingsPageProps {
    params: {
        id: string;
    };
}

const SettingsPage: React.FC<ISettingsPageProps> = async ({ params }) => {
    const isPro = await checkSubscription();

    return (
        <div>
            <SettingsClient isPro={isPro} />
        </div>
    );
};

export default SettingsPage;
