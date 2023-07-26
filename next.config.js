/** @type {import('next').NextConfig} */



const withNextIntl = require("next-intl/plugin")(
    // This is the default (also the `src` folder is supported out of the box)
    "./i18n.ts"
);


const nextConfig = {
    images: {
        domains: [
            "googleusercontent.com",
            "oaidalleapiprodscus.blob.core.windows.net",
            "cdn.openai.com"
        ]
    }
}

module.exports = withNextIntl(nextConfig);
