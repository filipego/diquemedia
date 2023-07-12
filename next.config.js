/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  images: {
    loader: "imgix",
    path: "https://ik.imagekit.io/utfywlxee/",
  },
};