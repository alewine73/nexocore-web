import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO & Performance Optimizations */
  
  // Compression
  compress: true,
  
  // Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for SEO and Security
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  redirects: async () => {
    return [
      // Add redirects for moved pages or URL changes
      // Example: { source: "/old-page", destination: "/new-page", permanent: true }
    ];
  },

  // Rewrites for clean URLs
  rewrites: async () => {
    return {
      beforeFiles: [
        // Rewrite requests to /api to maintain SEO
      ],
    };
  },

  // Logging for debugging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Enable SWR Cache in production
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 5,
  },

  // Internationalization (prepared for future multi-language support)
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  // Production source maps (disabled for smaller bundle)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
