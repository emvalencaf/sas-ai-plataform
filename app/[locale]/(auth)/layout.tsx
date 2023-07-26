// interfaces
export interface IAuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
    console.log("auth layout");
    return (
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    );
};

export default AuthLayout;
