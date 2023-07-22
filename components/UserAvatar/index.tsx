'use client';

// hooks
import { useUser } from "@clerk/nextjs";

// ui components
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";


const UserAvatar: React.FC = () => {

    const { user } = useUser();

    return (
            <Avatar className="h-8 w-8">
                <AvatarImage src={user?.profileImageUrl} />
                <AvatarFallback>
                    {user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                </AvatarFallback>
            </Avatar>
    );
};

export default UserAvatar;
