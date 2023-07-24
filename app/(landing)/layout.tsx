// interface
interface ILandingLayoutProps {
    children: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayoutProps> = ({
    children,
}) => {
    return (
        <main className="h-full overflow-auto bg-[#111827]">
<div className="mx-auo max-w-screen-xl h-full w-full">
    {children}
</div>
        </main>
    );
}

export default LandingLayout;