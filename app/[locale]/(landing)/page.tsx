
// custom components
import LandingNavbar from "./components/LandingNavbar";
import LandingHero from "./components/LandingHero";
import LandingContent from "./components/LandingContent";


// interfaces
export interface ILandingPageProps {
    params: {
        locale: string;
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
