/**
 * SEO Integration Examples
 * How to use the new SEO components in existing pages
 */

// ============================================
// EXAMPLE 1: Using StructuredData in pages
// ============================================

import AllStructuredData from "@/components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito | NexoCore - Transformación Digital Comprobada",
  description:
    "Descubre cómo empresas como la tuya han transformado su negocio con nuestras soluciones. ROI aumentado, costes reducidos, operativa automatizada.",
  keywords:
    "casos de éxito, proyectos completados, empresas transformadas, IA empresarial, ROI",
};

export default function CasosExitoPage() {
  return (
    <>
      <AllStructuredData />
      {/* Rest of page */}
    </>
  );
}

// ============================================
// EXAMPLE 2: Using Breadcrumb Component
// ============================================

import Breadcrumb from "@/components/Breadcrumb";

export default function ServiciosPage() {
  const breadcrumbItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "IA & Automatizaciones" },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <section>
        <h1>Nuestros Servicios</h1>
        {/* Page content */}
      </section>
    </>
  );
}

// ============================================
// EXAMPLE 3: Using OptimizedImage Component
// ============================================

import OptimizedImage from "@/components/OptimizedImage";

export default function HeroSection() {
  return (
    <section className="hero">
      <OptimizedImage
        src="/hero-image.jpg"
        alt="Hero: Automatización IA para tu negocio"
        width={1200}
        height={600}
        priority={true} // Use for above-the-fold images
        quality={85}
      />

      <OptimizedImage
        src="/service-icon-1.svg"
        alt="Icono: Consultoría Empresarial"
        width={64}
        height={64}
        priority={false}
      />

      {/* Image with fill (for background-like usage) */}
      <div className="relative w-full h-96">
        <OptimizedImage
          src="/background-pattern.jpg"
          alt="Patrón de fondo"
          fill={true}
          className="object-cover"
        />
      </div>
    </section>
  );
}

// ============================================
// EXAMPLE 4: Using SEO Config for Metadata
// ============================================

import { generatePageMetadata, siteConfig } from "@/utils/next-seo-config";

export const metadata = generatePageMetadata(
  "Familia: Automatización para Pequeños Negocios",
  "Soluciones asequibles de IA y automatización diseñadas para pymes y emprendedores en Valladolid.",
  "https://nexocore.es/familia",
  "https://nexocore.es/og-familia.jpg"
);

// ============================================
// EXAMPLE 5: Using Site Config for Links
// ============================================

import { siteConfig } from "@/utils/next-seo-config";

export default function Footer() {
  return (
    <footer>
      <p>Email: {siteConfig.contactEmail}</p>
      <p>Teléfono: {siteConfig.phone}</p>
      <p>Ubicación: {siteConfig.address}</p>

      {/* Social Links */}
      <ul>
        <li>
          <a href={siteConfig.socialLinks.twitter}>Twitter</a>
        </li>
        <li>
          <a href={siteConfig.socialLinks.linkedin}>LinkedIn</a>
        </li>
        <li>
          <a href={siteConfig.socialLinks.instagram}>Instagram</a>
        </li>
        <li>
          <a href={siteConfig.socialLinks.facebook}>Facebook</a>
        </li>
      </ul>
    </footer>
  );
}

// ============================================
// EXAMPLE 6: Custom Service Schema for Specific Page
// ============================================

import { ServiceSchema } from "@/components/StructuredData";

export default function ConsultoriaPage() {
  return (
    <>
      <ServiceSchema />
      <section>
        <h1>Consultoría Empresarial</h1>
        <p>
          Nuestro servicio de consultoría analiza tu negocio con rigor,
          calculando ROI real...
        </p>
      </section>
    </>
  );
}

// ============================================
// EXAMPLE 7: Article Schema for Blog/Resources
// ============================================

import { ArticleSchema } from "@/components/StructuredData";

export default function BlogArticle() {
  const article = {
    title: "Guía Completa: Automatización IA en Ecommerce",
    description:
      "Descubre cómo implementar inteligencia artificial en tu tienda online...",
    image: "https://nexocore.es/blog/automatizacion-ecommerce.jpg",
    datePublished: "2026-05-18T10:00:00Z",
    dateModified: "2026-05-18T15:30:00Z",
  };

  return (
    <>
      <ArticleSchema {...article} />
      <article>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        {/* Article content */}
      </article>
    </>
  );
}

// ============================================
// EXAMPLE 8: Using FAQ Schema in Page
// ============================================

import { FAQSchema } from "@/components/StructuredData";

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <section>
        <h1>Preguntas Frecuentes</h1>
        <div className="faq-list">
          <details>
            <summary>¿Cuánto cuesta implementar automatización IA?</summary>
            <p>
              Depende de tu caso específico. Hacemos análisis gratuito. Desde
              €500/mes para pequeñas automatizaciones...
            </p>
          </details>
          {/* More FAQs */}
        </div>
      </section>
    </>
  );
}

// ============================================
// EXAMPLE 9: Complete Page with All SEO Elements
// ============================================

import type { Metadata } from "next";
import AllStructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";
import { generatePageMetadata } from "@/utils/next-seo-config";

export const metadata = generatePageMetadata(
  "IA & Automatizaciones: Reduce Costes Operativos 70%",
  "Integramos agentes IA, asistentes virtuales y sistemas de automatización. Operativa 24/7, reducción de errores humanos y costes operativos.",
  "https://nexocore.es/servicios/ia-automatizaciones"
);

export default function IAAutomacionesPage() {
  return (
    <>
      {/* 1. Structured Data */}
      <AllStructuredData />

      {/* 2. Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "IA & Automatizaciones" },
        ]}
      />

      {/* 3. Hero Section with Optimized Image */}
      <section className="hero">
        <OptimizedImage
          src="/servicios/ia-hero.jpg"
          alt="IA y Automatizaciones empresariales"
          width={1200}
          height={600}
          priority={true}
        />

        <h1>IA & Automatizaciones Empresariales</h1>
        <p>
          Integramos agentes IA avanzados que trabajan 24/7 sin descanso,
          mejorando tu operativa y reduciendo costes hasta un 70%.
        </p>
      </section>

      {/* 4. Services with Icons */}
      <section className="services">
        <div className="service-card">
          <OptimizedImage
            src="/icons/chatbot.svg"
            alt="Icono: Chatbots IA"
            width={64}
            height={64}
          />
          <h3>Chatbots IA</h3>
          <p>Atención al cliente 24/7 con IA avanzada...</p>
        </div>

        <div className="service-card">
          <OptimizedImage
            src="/icons/automation.svg"
            alt="Icono: Automatización de procesos"
            width={64}
            height={64}
          />
          <h3>Automatización de Procesos</h3>
          <p>Eliminamos tareas repetitivas y mejoramos eficiencia...</p>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="cta">
        <h2>¿Listo para transformar tu negocio?</h2>
        <a href="/#contacto" className="btn-primary">
          Solicitar Auditría Gratuita
        </a>
      </section>
    </>
  );
}

// ============================================
// EXAMPLE 10: How to Check Your SEO
// ============================================

/*
VERIFICATION CHECKLIST - Use these tools:

1. Google Rich Results Test
   - URL: https://search.google.com/test/rich-results
   - What to check: JSON-LD schemas are detected
   - Expected: Organization, Service, FAQ schemas visible

2. PageSpeed Insights
   - URL: https://pagespeed.web.dev
   - What to check: Core Web Vitals scores
   - Expected: LCP < 2.5s, FID < 100ms, CLS < 0.1

3. Google Search Console
   - URL: https://search.google.com/search-console
   - What to check: Indexation status, crawl errors
   - Expected: All pages indexed, no errors

4. Mobile Friendly Test
   - URL: https://search.google.com/test/mobile-friendly
   - What to check: Mobile responsiveness
   - Expected: "Page is mobile friendly"

5. Sitemap Test
   - Check that /sitemap.xml is valid XML
   - Verify all URLs are accessible
   - Expected: 200 status code for all URLs
*/

export const exampleToolsForSEOChecking = "See comments above";
