/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/imc-page",
                destination: "/imc-page",
            },
            {
                source: "/passou-page",
                destination: "/passou-page",
            }
        ]
    }
};

export default nextConfig;
