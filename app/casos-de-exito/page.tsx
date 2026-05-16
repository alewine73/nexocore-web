import Link from "next/link";
import { Award, TrendingUp, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito: Empresas que Escalaron con IA y Marketing Digital | NexoCore",
  description: "Descubre los casos de éxito de nuestros clientes. Empresas que redujeron costes, automatizaron operaciones y multiplicaron ingresos con IA y marketing digital.",
  keywords: "casos de éxito, resultados IA, automatización empresarial, ROI marketing digital, transformación digital",
};

export default function CasosDeExito() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Efecto de luz dorada de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            RESULTADOS REALES DE TRANSFORMACIÓN DIGITAL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Casos de <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600 drop-shadow-sm">
              Éxito
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empresas que crecieron exponencialmente con nuestras soluciones de Inteligencia Artificial y Marketing Digital. Descubre cómo aumentaron ingresos, redujeron costes y escalaron sus operaciones.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/#contacto" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Solicitar Auditoría Gratis
            </a>
          </div>
        </div>
      </section>

      {/* --- CASOS DE ÉXITO PRINCIPAL --- */}
      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Efecto de luz de fondo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tres Historias de <span className="text-yellow-500">Éxito Empresarial</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Empresas reales que confiaron en NexoCore y transformaron sus resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Caso 1 */}
            <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">E-commerce B2B</h3>
                  <p className="text-sm text-gray-400">Sector: Distribución Industrial</p>
                </div>
                <div className="text-blue-400 group-hover:scale-110 transition-transform">
                  <TrendingUp size={28} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/50 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">El Reto</p>
                  <p className="text-sm text-gray-300">Procesamiento manual de 500+ pedidos diarios, errores frecuentes y equipo completamente saturado sin escalabilidad.</p>
                </div>

                <div className="bg-black/50 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Nuestra Solución</p>
                  <p className="text-sm text-gray-300">Sistema IA para automatizar pedidos + clasificación inteligente + generación de reportes 24/7 sin intervención humana.</p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-transparent border border-blue-500/40 rounded-lg p-4">
                  <p className="text-xs text-blue-400 uppercase font-bold mb-3">Resultados Alcanzados</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 85% reducción de errores operativos</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 3 miembros del equipo reasignados a valor estratégico</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> +40% velocidad en procesamiento</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> ROI: 320% en primer año</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Caso 2 */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Agencia de Servicios</h3>
                  <p className="text-sm text-gray-400">Sector: Consultoría Digital</p>
                </div>
                <div className="text-purple-400 group-hover:scale-110 transition-transform">
                  <TrendingUp size={28} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/50 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">El Reto</p>
                  <p className="text-sm text-gray-300">Bajo engagement en redes sociales, leads no cualificados y sin sistemas de venta estructurados. Crecimiento estancado.</p>
                </div>

                <div className="bg-black/50 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Nuestra Solución</p>
                  <p className="text-sm text-gray-300">Estrategia de marketing digital + funnels de venta optimizados + agente IA para seguimiento y conversión de leads.</p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-transparent border border-purple-500/40 rounded-lg p-4">
                  <p className="text-xs text-purple-400 uppercase font-bold mb-3">Resultados Alcanzados</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> +320% aumento en leads cualificados</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 68% tasa de conversión de leads a clientes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 5 clientes nuevos por mes (promedio)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> +180% crecimiento de ingresos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Caso 3 */}
            <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-2xl p-8 hover:border-green-500/60 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">SaaS en Crecimiento</h3>
                  <p className="text-sm text-gray-400">Sector: Software as a Service</p>
                </div>
                <div className="text-green-400 group-hover:scale-110 transition-transform">
                  <TrendingUp size={28} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">El Reto</p>
                  <p className="text-sm text-gray-300">Churn alto (45%), atención al cliente manual ineficiente y sin escalabilidad operativa. Clientes insatisfechos.</p>
                </div>

                <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Nuestra Solución</p>
                  <p className="text-sm text-gray-300">Chatbot IA para soporte 24/7 + automatización de procesos + sistema inteligente de retención de clientes.</p>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-transparent border border-green-500/40 rounded-lg p-4">
                  <p className="text-xs text-green-400 uppercase font-bold mb-3">Resultados Alcanzados</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Churn reducido de 45% a 18%</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> +$150k MRR (ingresos recurrentes mensuales)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 95% satisfacción del cliente</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Costo soporte reducido 60%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-900/20 to-black border border-yellow-500/50 rounded-3xl p-12 max-w-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¿Quieres ser el próximo caso de éxito?
              </h3>
              <p className="text-gray-300 mb-8">
                Análisis gratuito de tu negocio. Descubre cómo podemos ayudarte a escalar con IA y marketing digital.
              </p>
              <a href="/#contacto" className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Solicitar Auditoría Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 py-12 bg-black text-center text-gray-600 text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
           <span className="font-bold text-gray-400 tracking-wider">NEXOCORE</span>
           <span className="hidden md:block text-gray-800">|</span>
           <span>Valladolid, España 🇪🇸</span>
        </div>
        <div className="flex justify-center gap-6">
          <Link href="/legal" className="hover:text-yellow-500 transition-colors">Aviso Legal</Link>
          <Link href="/legal" className="hover:text-yellow-500 transition-colors">Política de Privacidad</Link>
          <Link href="/legal" className="hover:text-yellow-500 transition-colors">Política de Cookies</Link>
        </div>
        <p className="mt-8 opacity-50">&copy; 2026 NexoCore. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
