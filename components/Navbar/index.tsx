// ui components
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

// icons
import { Menu } from 'lucide-react';
import { MobileSidebar } from './components';
import { getApiLimitCount } from '../../lib/api-limit';


const Navbar: React.FC = async () => {

    const apiLimitCount = await getApiLimitCount();

    return (
        <div className="flex items-center p-4">
            <MobileSidebar apiLimitCount={apiLimitCount} />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    );
};

export default Navbar;
