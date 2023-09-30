export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Famous Bag",
  description: "pos system for famous bag",
  mainNav: [
    {
      title: "Invoice",
      href: "/invoice",
    },
    {
      title: "Sales",
      href: "/sales",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  url: "https://famousbag.vercel.app/",
  ogImage: "https://famousbag.vercel.app/opengraph-image.jpg",
  links: {
    twitter: "https://twitter.com/sajjads72619701",
    github: "https://github.com/Darkrove/bag-bee",
  },
}

export type DocsConfig = typeof docsConfig

export const docsConfig = {
  mainNav: [
    {
      title: "Invoice",
      href: "/invoice",
    },
    {
      title: "Sales",
      href: "/sales",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
}
