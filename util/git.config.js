const fs = require("node:fs")

fs.writeFileSync("next.config.mjs", `/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/dashboard"
};

export default nextConfig;
`);