'use client';

// interfaces
export interface ILandingNavbarProps {
    title?: string;
};

const LandingNavbar: React.FC<ILandingNavbarProps> = ({ title = '' }) => {
    return (
        <div>
            <h1> {title} </h1>
        </div>
    );
};

export default LandingNavbar;
