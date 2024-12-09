/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard/overview",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
