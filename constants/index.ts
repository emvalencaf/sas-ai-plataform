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

// interfaces
interface INavRoutes {
    pt: {
        label: string;
    };
    en: {
        label: string;
    };
    icon: LucideIcon;
    href: string;
    color: string;
}

interface ITool {
    pt: {
        label: string;
    };
    en: {
        label: string;
    };
    icon: LucideIcon;
    href: string;
    color: string;
    bgColor: string;
}

interface IAiService {
    pt: {
        label: string;
        description: string;
    };
    en: {
        label: string;
        description: string;
    };
    icon: LucideIcon;
    color: string;
    bgColor: string;
}

interface ITestimonials {
    name: string;
    avatar: string;
    title: string;
    description: string;
}

export const SideBarMenuRoutes: INavRoutes[] = [
    {
        pt: {

            label: "Dashboard",
        },
        en: {

            label: "Dashboard",
        },
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        pt: {
            label: "Conversar",
        },
        en: {
            label: "Conversation",
        },
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        pt: {
            label: "Geração de Imagem",
        },
        en: {
            label: "Image Generation",
        },
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
    },
    {
        pt: {
            label: "Geração de Vídeo",
        },
        en: {
            label: "Video Generation",
        },
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
    },
    {
        pt: {
            label: "Geração de Música",
        },
        en: {
            label: "Music Generation",
        },
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        pt: {
            label: "Geração de Código",
        },
        en: {
            label: "Code Generation",
        },
        icon: Code,
        href: "/code",
        color: "text-green-700",
    },

    {
        pt: {
            label: "Configurações",
        },
        en: {
            label: "Settings",
        },
        icon: Settings,
        href: "/settings",
        color: "text-orange-700",
    },
];

export const AIServices: IAiService[] = [
    {
        pt: {
            label: "Conversar",
            description:
                "Bata um papo com nosso mais avançado um chatbot turbinado com a mais poderosa Inteligência Artificial no mercado. Descubra a informação que você não acharia com facilidade no Google.",
        },
        en: {
            label: "Conversation",
            description:
                "Have a chat with our most advanced chatbot powered by the most powerful Artificial Intelligence on the market. Discover information you wouldn't easily find on Google.",
        },
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        pt: {
            label: "Geração de Imagem",
            description:
                "Instrua a nossa AI a criar aquela imagem que está na sua cabeça em diferentes resoluções.",
        },
        en: {
            label: "Image Generation",
            description:
                "Prompt our AI to create that image in your mind at different resolutions.",
        },
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        icon: ImageIcon,
    },
    {
        pt: {
            label: "Geração de Vídeo",
            description:
                "Crie vídeos incríveis por meio da nossa IA por meio de instruções.",
        },
        en: {
            label: "Video Generation",
            description:
                "Create amazing videos through our AI with your prompts.",
        },
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
    },
    {
        pt: {
            label: "Geração de Música",
            description:
                "Crie músicas (instrumentais) por meio de instruções a nossa IA",
        },
        en: {
            label: "Music Generation",
            description:
                "You can grasp the song you want to make by prompt to our AI",
        },
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        pt: {
            label: "Geração de Código",
            description:
                "Utilize esse serviço para criar códigos que facilitarão sua jornada de trabalho ou aprenizado",
        },
        en: {
            label: "Code Generation",
            description:
                "Utilize this service to create codes that will ease your work or learning journey.",
        },
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
    },
];

export const tools: ITool[] = [
    {
        pt: {
            label: "Conversar",
        },
        en: {
            label: "Conversation",
        },
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation",
    },
    {
        pt: {
            label: "Geração de Imagem",
        },
        en: {
            label: "Image Generation",
        },
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image",
    },
    {
        pt: {
            label: "Geração de Vídeo",
        },
        en: {
            label: "Video Generation",
        },
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: "/video",
    },
    {
        pt: {
            label: "Geração de Música",
        },
        en: {
            label: "Music Generation",
        },
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music",
    },
    {
        pt: {
            label: "Geração de Código",
        },
        en: {
            label: "Code Generation",
        },
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: "/code",
    },
];

export const MAX_FREE_COUNTS = 5;

export const testimonials: ITestimonials[] = [
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
