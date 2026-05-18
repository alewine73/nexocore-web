/**
 * StructuredData.tsx
 * JSON-LD Schema Markup for improved SEO and AI understanding
 * Implements Google-recommended structured data for enterprise AI/Marketing services
 */

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexoCore",
    url: "https://nexocore.es",
    logo: "https://nexocore.es/logo.png",
    description:
      "Empresa especializada en automatización IA, marketing digital y consultoría empresarial",
    sameAs: [
      "https://www.linkedin.com/company/nexocore",
      "https://www.instagram.com/nexocore",
      "https://www.facebook.com/nexocore",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "contacto@nexocore.es",
      telephone: "+34-983-XXXXX",
      areaServed: "ES",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
      addressLocality: "Valladolid",
      postalCode: "47001",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NexoCore | Automatización IA + Marketing Digital",
    image: "https://nexocore.es/logo.png",
    description:
      "Soluciones de automatización IA, marketing digital y consultoría empresarial en Valladolid",
    url: "https://nexocore.es",
    telephone: "+34-983-XXXXX",
    email: "contacto@nexocore.es",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Principal, XX",
      addressLocality: "Valladolid",
      addressRegion: "Castilla y León",
      postalCode: "47001",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.6559",
      longitude: "-4.7256",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "42",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const services = [
    {
      name: "Consultoría Empresarial: Análisis de Viabilidad + ROI",
      description:
        "Análisis riguroso de viabilidad y rentabilidad. Calculamos el retorno real de tu inversión en automatización IA y marketing digital.",
      provider: "NexoCore",
      areaServed: "ES",
      category: "Business Consulting",
    },
    {
      name: "IA & Automatizaciones Empresariales",
      description:
        "Integramos agentes IA, asistentes virtuales y sistemas de automatización. Reducimos costes operativos hasta un 70% y operamos 24/7.",
      provider: "NexoCore",
      areaServed: "ES",
      category: "Software & AI Services",
    },
    {
      name: "Marketing Digital & Funnels de Venta",
      description:
        "Creamos sistemas de marketing automatizados con funnels de venta optimizados. Aumenta conversiones y ROI con estrategias data-driven.",
      provider: "NexoCore",
      areaServed: "ES",
      category: "Digital Marketing",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.name,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: service.provider,
        url: "https://nexocore.es",
      },
      areaServed: service.areaServed,
      potentialAction: {
        "@type": "CommunicateAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://nexocore.es#contacto",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const faqs = [
    {
      question: "¿Cuánto cuesta implementar automatización IA en mi negocio?",
      answer:
        "El costo depende de la complejidad de tus procesos. Hacemos un análisis de viabilidad sin compromiso. Pueden ir desde €500/mes para pequeñas automatizaciones hasta €5000+/mes para sistemas empresariales completos.",
    },
    {
      question: "¿Cuál es el tiempo de implementación?",
      answer:
        "Generalmente entre 2-8 semanas dependiendo de la complejidad. Primero hacemos auditoría (1 semana), luego desarrollo (2-6 semanas) y finalmente optimización y capacitación (1-2 semanas).",
    },
    {
      question: "¿Garantizáis el retorno de inversión?",
      answer:
        "Sí, hacemos un análisis previo riguroso. Si no creemos que sea rentable para tu negocio, somos honestos y no lo hacemos. Trabajamos por resultados.",
    },
    {
      question: "¿Ofrecéis soporte después de la implementación?",
      answer:
        "Sí, incluimos soporte técnico durante 3 meses tras la implementación. Luego ofrecemos planes de mantenimiento desde €300/mes.",
    },
    {
      question: "¿Qué sectores son ideales para automatización IA?",
      answer:
        "Ecommerce, SaaS, consultoría, agencias, inmobiliarias, seguros, educación, y más. Cualquier empresa con procesos repetitivos beneficiada enormemente.",
    },
    {
      question:
        "¿Cómo afecta la automatización a mi equipo? ¿Se quedarán sin trabajo?",
      answer:
        "La automatización mejora el trabajo, no lo elimina. Tu equipo se enfoca en tareas estratégicas y valor agregado. Generalmente mejora la retención de talento.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Organization",
      name: "NexoCore",
      url: "https://nexocore.es",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AggregateOfferSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "500",
    highPrice: "5000",
    offerCount: "3",
    description: "Servicios de automatización IA y marketing digital",
    seller: {
      "@type": "Organization",
      name: "NexoCore",
      url: "https://nexocore.es",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AllStructuredData() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ServiceSchema />
      <FAQSchema />
      <AggregateOfferSchema />
    </>
  );
}
