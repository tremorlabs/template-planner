export const siteConfig = {
  name: "Planner",
  url: "https://planner.tremor.so",
  description: "The only planner app you will ever need.",
  baseLinks: {
    dashboard: {
      audits: "/dashboard/audits",
      overview: "/dashboard/overview",
      monitoring: "/dashboard/monitoring",
    },
    login: "/login",
    onboarding: "/onboarding/products",
  },
};

export type siteConfig = typeof siteConfig;
