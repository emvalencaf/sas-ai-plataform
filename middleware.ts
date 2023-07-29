import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware

const intlMiddleware = createMiddleware({
    locales: ["en", "pt"],
    defaultLocale: "en",
})

export default authMiddleware({
    beforeAuth: (req) => {
        const url = new URL(req.url);
        
        if (url.pathname === "/api") return;

        intlMiddleware(req)
    },
    publicRoutes: ["/","/:locale", "/:locale/sign-in", "/:locale/sign-up", "/api/webhook"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
