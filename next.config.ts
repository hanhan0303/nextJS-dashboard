import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //防止你寫出「死連結」，大幅減少 404 錯誤
  typedRoutes: true,
};

export default nextConfig;
