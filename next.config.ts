import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config: any) => {
        config.cache = false;
        return config;
    }
};

export default nextConfig;
