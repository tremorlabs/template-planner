/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/quotes",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
