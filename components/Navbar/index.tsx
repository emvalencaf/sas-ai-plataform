// ui components
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

// icons
import { Menu } from 'lucide-react';
import { MobileSidebar } from './components';


const Navbar: React.FC = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    );
};

export default Navbar;
