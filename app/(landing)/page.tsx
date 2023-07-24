import LandingNavbar from "@/components/LandingNavbar";


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
        </div>
    );
};

export default LandingPage;
