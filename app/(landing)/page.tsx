
// custom components
import LandingNavbar from "@/app/(landing)/components/LandingNavbar";
import LandingHero from "@/app/(landing)/components/LandingHero";
import LandingContent from "@/app/(landing)/components/LandingContent";


// interfaces
export interface ILandingPageProps {
    params: {
        Id: string;
    };
}

const LandingPage: React.FC<ILandingPageProps> = ({ params }) => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    );
};

export default LandingPage;
