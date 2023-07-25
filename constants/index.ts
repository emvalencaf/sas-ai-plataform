// icons
import {
    Code,
    ImageIcon,
    LayoutDashboard,
    LucideIcon,
    MessageSquare,
    Music,
    Settings,
    VideoIcon,
} from "lucide-react";

interface INavRoutes {
    label: string;
    icon: LucideIcon;
    href: string;
    color: string;
}

interface ITool {
    label: string;
    icon: LucideIcon;
    href: string;
    color: string;
    bgColor: string;
}

interface IAiService {
    label: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    description: string;
}

export const SideBarMenuRoutes: INavRoutes[] = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
    },

    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-orange-700",
    },
];


export const AIServices: IAiService[] = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        description: "Chat with our most advanced AI chatbot to find out info you won't find easy on google",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        description: "Give our AI your guides to make that pretty image on the backside of your head",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        description: "Create amazings vidos by only prompting to our AI what you wanna see",
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        description: "You can grasp the song you want to make by prompt to our AI",
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        description: "Use our code generation to get develop more codes for your application",
    },
]

export const tools: ITool[] = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/video",
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music",
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/code",
    },
];

export const MAX_FREE_COUNTS = 5;

export const testimonials = [
    {
        name: "Joe Doe",
        avatar: "JD",
        title: "Software Engineer",
        description: "This is the best application I've used!",
    },
    {
        name: "Mary Smith",
        avatar: "MS",
        title: "Student",
        description: "It's just amazing how AI make my life easier",
    },
];