export const siteConfig = {
  name: "Planner",
  url: "https://planner.tremor.so",
  description: "The only planner app you will ever need.",
  baseLinks: {
    reports: "/reports",
    transactions: "/transactions",
    settings: {
      audit: "/settings/audit",
      users: "/settings/users",
      billing: "/settings/billing",
    },
    login: "/login",
    onboarding: "/onboarding/products",
  },
};

export type siteConfig = typeof siteConfig;
