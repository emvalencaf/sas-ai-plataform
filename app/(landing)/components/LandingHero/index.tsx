"use client";

// hooks
import { useAuth } from "@clerk/nextjs";

// nextjs components
import Link from "next/link";

// typewritter components
import TypewriterComponent from "typewriter-effect";

// ui components
import { Button } from "../../../../components/ui/button";

// interfaces
export interface ILandingHeroProps {
    title?: string;
}

const LandingHero: React.FC<ILandingHeroProps> = ({ title = "" }) => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-black font-bold py-36 text-center space-y-5">
            <div className="text-4xl space-y-5 font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
                <h1>The Best AI Tools for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Chatbot.",
                                "Photo Generation.",
                                "Video Generation.",
                                "Music Generation.",
                                "Code Generation.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-600">
                Create content using AI 10x faster.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button
                        variant="premium"
                        className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
                    >
                        Start Generating {!isSignedIn && "for free"}
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-600 text-xs md:Text-sm font-normal">
                No credit card required.
            </div>
        </div>
    );
};

export default LandingHero;
