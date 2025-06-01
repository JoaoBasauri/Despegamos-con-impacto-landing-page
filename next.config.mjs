/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/despegamos-con-impacto' : '',
};

export default nextConfig;
