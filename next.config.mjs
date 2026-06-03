/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./public/images/loader.js",
  },
}

export default nextConfig
