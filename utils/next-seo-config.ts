/**
 * next-seo-config.ts
 * SEO configuration for automated SEO meta tags
 */

export const siteConfig = {
  name: "NexoCore",
  description:
    "Escalamos tu negocio con Inteligencia Artificial y Marketing Digital. Automatizaciones, funnels de venta y sistemas inteligentes para aumentar ROI.",
  url: "https://nexocore.es",
  ogImage: "https://nexocore.es/og-image.jpg",
  locale: "es_ES",
  contactEmail: "contacto@nexocore.es",
  phone: "+34-983-XXXXX",
  address: "Valladolid, España",
  socialLinks: {
    twitter: "https://twitter.com/nexocore_es",
    linkedin: "https://linkedin.com/company/nexocore",
    instagram: "https://instagram.com/nexocore",
    facebook: "https://facebook.com/nexocore",
  },
  keywords: [
    "automatización IA",
    "marketing digital",
    "consultoría empresarial",
    "funnels de venta",
    "inteligencia artificial",
    "escalamiento negocio",
    "digitalización empresarial",
    "agentes IA",
    "Valladolid",
  ],
};

export const generatePageMetadata = (
  title: string,
  description: string,
  canonical?: string,
  ogImage?: string
) => {
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    canonical: canonical || siteConfig.url,
    openGraph: {
      title,
      description,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage || siteConfig.ogImage],
    },
  };
};
