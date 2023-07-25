// interface
interface ILandingLayoutProps {
    children: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayoutProps> = ({ children }) => {
    return (
        <main className="h-full bg-white overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>
        </main>
    );
};

export default LandingLayout;
