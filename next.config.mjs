/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.BASEPATH ? process.env.BASEPATH : "",
    images:{
        loader:"custom",
        loaderFile:"/util/image-loader.mjs",
    }
};

export default nextConfig;
