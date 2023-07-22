"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// interfaces
export interface IBotAvatarProps {
    title?: string;
}

const BotAvatar: React.FC<IBotAvatarProps> = ({ title = "" }) => {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage src={"/assets/robot.png"} />
        </Avatar>
    );
};

export default BotAvatar;
