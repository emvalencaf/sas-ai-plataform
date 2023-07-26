"use client";

import LandingAIServices from "./components/LandingAIServices";
// custom landing components
import Testimonials from "./components/Testimonials";

const LandingContent: React.FC = () => {
    return (
        <div className="px-10 pb-20 flex flex-col gap-5">
            <LandingAIServices />
            <Testimonials />
        </div>
    );
};

export default LandingContent;
