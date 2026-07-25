/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    loader: "custom",
    loaderFile: "./public/images/loader.js",
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/\.dev\.js$/, (resource) => {
        resource.request = resource.request.replace(".dev.js", ".js");
      }),
    );
    return config;
  },
};

export default nextConfig
