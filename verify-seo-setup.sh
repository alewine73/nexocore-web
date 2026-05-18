#!/bin/bash

# 🚀 SEO SETUP SCRIPT
# Ejecuta este script para verificar que todo está en lugar

echo "🔍 Verificando SEO Implementation..."
echo ""

# Check if files exist
files_to_check=(
  "components/StructuredData.tsx"
  "components/Breadcrumb.tsx"
  "components/OptimizedImage.tsx"
  "utils/next-seo-config.ts"
  "public/robots.txt"
  "public/sitemap.xml"
  "SEO_OPTIMIZATION_GUIDE.md"
  "SEO_QUICK_CHECKLIST.md"
  "SEO_IMPLEMENTATION_EXAMPLES.tsx"
  "RESUMEN_SEO_OPTIMIZACIONES.md"
)

missing_files=0

for file in "${files_to_check[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ MISSING: $file"
    missing_files=$((missing_files + 1))
  fi
done

echo ""
echo "================================"

if [ $missing_files -eq 0 ]; then
  echo "✅ All SEO files are in place!"
  echo ""
  echo "📋 NEXT STEPS:"
  echo "1. Read: RESUMEN_SEO_OPTIMIZACIONES.md"
  echo "2. Check: SEO_QUICK_CHECKLIST.md"
  echo "3. Run: npm run build"
  echo "4. Deploy to production"
  echo "5. Setup Google Search Console"
  echo ""
  echo "🚀 Good luck with your SEO journey!"
else
  echo "⚠️  Missing $missing_files file(s). Please check the setup."
fi
