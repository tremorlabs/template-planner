export const siteConfig = {
  name: "Planner",
  url: "https://planner.tremor.so",
  description: "The simplest dashboard template.",
  baseLinks: {
    dashboard: {
      quotes: "/quotes",
      monitoring: "/monitoring",
      audits: "/audits",
    },
  },
}

export type siteConfig = typeof siteConfig
