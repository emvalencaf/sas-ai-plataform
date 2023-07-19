

// interfaces
export interface ILandingPageProps {
    params: {
        Id: string;
    };
}

const LandingPage: React.FC<ILandingPageProps> = ({ params }) => {
    return (
        <div>
            Landing Page (Unprotected)
            <div>
            </div>
        </div>
    );
};

export default LandingPage;
