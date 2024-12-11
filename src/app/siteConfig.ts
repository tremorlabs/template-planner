export const siteConfig = {
  name: "Planner",
  url: "https://planner.tremor.so",
  description: "The simplest dashboard template.",
  baseLinks: {
    dashboard: {
      overview: "/dashboard/overview",
      monitoring: "/dashboard/monitoring",
      audits: "/dashboard/audits",
    },
  },
}

export type siteConfig = typeof siteConfig
