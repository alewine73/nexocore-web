import TrackPageView from "@/components/TrackPageView";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Bot, BarChart3, BrainCircuit, ChevronRight, CheckCircle2, Users, Star, MessageSquare, Award, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización IA + Marketing Digital para Escalar tu Negocio | NexoCore Valladolid",
  description: "Transforma tu negocio con automatización IA, marketing digital estratégico y consultoría empresarial. Reduce costes operativos 70%, aumenta ingresos +300% ROI. Consultoría premium en Valladolid.",
  keywords: "automatización IA, marketing digital, escalamiento negocio, funnels venta, consultoría empresarial, transformación digital, IA Valladolid, sistemas automatizados, agentes IA, chatbot empresarial, soluciones digitales",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      {/* --- HERO SECTION (LA ENTRADA) --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Efecto de luz dorada de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            AUTOMATIZACIÓN IA | MARKETING DIGITAL | CONSULTORÍA EMPRESARIAL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Automatización IA + Marketing Digital:<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600 drop-shadow-sm">
              Escala tu Negocio hasta +300% ROI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Automatiza procesos operativos, escalamos con marketing digital inteligente. Tu negocio crece sin que incrementes gastos. Sistemas de IA + funnels de venta + atención premium.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contacto" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Auditória Digital Gratis <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS (VALUE STACK) --- */}
      <section id="servicios" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          
          {/* FRASE DE ORO */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Servicios de <span className="text-yellow-500 border-b-2 border-yellow-500">Transformación Digital</span>
            </h2>
            <p className="text-gray-500">Tres pilares para escalar tu negocio: Consultoría, Automatización IA y Marketing Digital.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Servicio 1: Consultoría (DESTACADO) */}
            <div className="lg:col-span-4 bg-gradient-to-r from-yellow-900/20 to-black border border-yellow-500/50 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMENDADO</div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="h-20 w-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <Star size={40} />
                </div>
                <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Consultoría Empresarial: Análisis de Viabilidad + ROI</h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  Antes de implementar cualquier solución IA o marketing digital, hacemos un análisis riguroso de viabilidad y rentabilidad. No empezamos sin números. Calculamos el retorno real de tu inversión. Si no es rentable para ti, somos honestos y no lo hacemos.
                  </p>
                </div>
                <div className="ml-auto">
                   <a href="#contacto" className="inline-block px-6 py-3 border border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition-all">Solicitar Auditória</a>
                </div>
              </div>
            </div>

            {/* Servicio 2: IA & Automatización */}
            <div className="lg:col-span-2 bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-blue-900/20 text-blue-400 rounded-xl flex items-center justify-center"><Bot size={24} /></div>
                <h3 className="text-xl font-bold text-white">IA & Automatizaciones</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Integramos agentes IA, asistentes virtuales y sistemas de automatización. Reducimos costes operativos hasta un 70% y operamos 24/7. Ideal para: atención al cliente, gestión de leads, data processing.
              </p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-500" /> Reducción de errores humanos</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-500" /> Operativa 24/7 sin descanso</li>
              </ul>
            </div>

            {/* Servicio 3: Marketing Digital */}
            <div className="lg:col-span-2 bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-purple-900/20 text-purple-400 rounded-xl flex items-center justify-center"><BarChart3 size={24} /></div>
                <h3 className="text-xl font-bold text-white">Marketing Digital & Funnels</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Creamos funnels de venta optimizados + publicidad digital estilo cine + gestión de equipos con agentes IA. No solo traemos tráfico, lo convertimos en clientes con ROI medible.
              </p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-500" /> Publicidad Profesional (Estilo Cine)</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-500" /> Captación de Leads Cualificados</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- CASOS DE ÉXITO (SOCIAL PROOF + SEO) --- */}
      <section id="casos-exito" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        {/* Efecto de luz de fondo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium">
              <Award size={16} />
              RESULTADOS REALES DE NUESTROS CLIENTES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Casos de Éxito: Empresas que Escalaron con <span className="text-yellow-500">IA y Marketing Digital</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Descubre cómo hemos ayudado a empresas a reducir costes, automatizar operaciones y multiplicar sus ingresos.
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
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Reto</p>
                  <p className="text-sm text-gray-300">Procesamiento manual de 500+ pedidos diarios, errores frecuentes y equipo saturado.</p>
                </div>

                <div className="bg-black/50 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Solución NexoCore</p>
                  <p className="text-sm text-gray-300">Sistema IA para automatizar pedidos + clasificación inteligente + generación de reportes 24/7</p>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-transparent border border-blue-500/40 rounded-lg p-4">
                  <p className="text-xs text-blue-400 uppercase font-bold mb-3">Resultados</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 85% reducción de errores</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 3 miembros del equipo reasignados</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> +40% velocidad procesamiento</li>
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
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Reto</p>
                  <p className="text-sm text-gray-300">Bajo engagement en redes, leads no cualificados, sin sistemas de venta estructurados.</p>
                </div>

                <div className="bg-black/50 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Solución NexoCore</p>
                  <p className="text-sm text-gray-300">Estrategia de marketing digital + funnels de venta + agente IA para seguimiento de leads</p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-transparent border border-purple-500/40 rounded-lg p-4">
                  <p className="text-xs text-purple-400 uppercase font-bold mb-3">Resultados</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> +320% leads cualificados</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 68% tasa de conversión leads</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 5 clientes nuevos/mes</li>
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
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Reto</p>
                  <p className="text-sm text-gray-300">Churn alto (45%), atención al cliente manual, sin escalabilidad operativa.</p>
                </div>

                <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-bold mb-2">Solución NexoCore</p>
                  <p className="text-sm text-gray-300">Chatbot IA + automatización soporte + sistema de retención inteligente</p>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-transparent border border-green-500/40 rounded-lg p-4">
                  <p className="text-xs text-green-400 uppercase font-bold mb-3">Resultados</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Churn reducido a 18%</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> +$150k MRR anual</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> 95% satisfacción cliente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">¿Quieres ser el próximo caso de éxito?</p>
            <a href="#contacto" className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              Comienza tu Transformación Digital
            </a>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN FAMILIA (LA DIFERENCIA) --- */}
      <section className="py-24 px-6 bg-black relative">
         <div className="max-w-4xl mx-auto text-center border border-zinc-800 bg-zinc-900/30 p-10 rounded-3xl relative overflow-hidden">
            {/* Decoración */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
            
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Familia Dorada: Tu Partner Estratégico en Transformación Digital
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              En NexoCore no somos solo un proveedor, somos tu <strong>Familia</strong>. 
              Equipo selecto especializado en IA y marketing digital. 
              Acceso directo a nuestros asistentes, directores y herramientas internas. 
              Atención profesional y dedicada para el crecimiento de tu negocio.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
               <div className="flex gap-4 p-4 bg-black/50 rounded-xl border border-white/5">
                  <MessageSquare className="text-green-500 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Chat Privado VIP</h4>
                    <p className="text-sm text-gray-500">Grupo de WhatsApp directo con nuestros asistentes y directores. Apoyo en todo momento.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-4 bg-black/50 rounded-xl border border-white/5">
                  <BrainCircuit className="text-blue-500 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Acceso a Herramientas</h4>
                    <p className="text-sm text-gray-500">Te daremos más de lo que puedes imaginar. Acceso a nuestra tecnología interna.</p>
                  </div>
               </div>
            </div>

            <Link href="/familia" className="text-yellow-500 font-bold hover:text-white transition-colors underline underline-offset-4">
              Descubre nuestra Filosofía y al Equipo &rarr;
            </Link>
         </div>
      </section>

      {/* --- SECCIÓN CONTACTO PREMIUM --- */}
      <section id="contacto" className="py-24 px-6 relative overflow-hidden bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Consultoría Gratuita: Analicemos tu Caso
            </h2>
            <p className="text-2xl text-yellow-500 font-medium">
              Reducción de costes + Aumento de ingresos = ROI garantizado
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Rellena el formulario para agendar tu auditória digital gratuita. Analizaremos tu negocio, oportunidades de automatización IA y potencial de crecimiento con marketing digital. Te llamaremos en menos de 24 horas.
            </p>
            
            <div className="pt-8 space-y-6">
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 text-yellow-500 group-hover:border-yellow-500 transition-colors">
                  📧
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email Directo</p>
                  <a href="mailto:jssbusinessnow@gmail.com" className="text-lg hover:text-yellow-400 transition-colors">jssbusinessnow@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 text-yellow-500 group-hover:border-yellow-500 transition-colors">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Teléfono / WhatsApp</p>
                  <a href="tel:+34684709825" className="text-lg hover:text-yellow-400 transition-colors">684 70 98 25</a>
                </div>
              </div>
            </div>
          </div>

          {/* === AQUI CARGAMOS EL FORMULARIO DE VERDAD === */}
          <ContactForm />

        </div>
      </section>

      {/* --- FOOTER LEGAL --- */}
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