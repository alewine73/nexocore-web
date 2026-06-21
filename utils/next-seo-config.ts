/**
 * next-seo-config.ts
 * SEO configuration for automated SEO meta tags
 */

export const siteConfig = {
  name: "NexoCore",
  description:
    "Chatbots inteligentes en WhatsApp e Instagram para fisioterapeutas y constructoras. Automatización de atención al cliente 24/7. Especialistas en Valladolid.",
  url: "https://nexocore.es",
  ogImage: "https://nexocore.es/og-image.jpg",
  locale: "es_ES",
  contactEmail: "jssbusinessnow@gmail.com",
  phone: "+34-684-709-825",
  address: "Valladolid, España",
  socialLinks: {
    whatsapp: "https://wa.me/34684709825",
    instagram: "https://instagram.com/nexocore",
  },
  keywords: [
    "chatbot whatsapp",
    "automatización atención al cliente",
    "chatbot fisioterapia",
    "chatbot constructora",
    "respuesta automática 24/7",
    "agente IA WhatsApp",
    "instagram automático",
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
