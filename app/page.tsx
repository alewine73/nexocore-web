import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import WhatsAppLeadLink from "@/components/WhatsAppLeadLink";
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
      {/* --- HERO SECTION (LA ENTRADA IMPACTANTE) --- */}
      <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden flex items-center">
        
        {/* Video de fondo */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay para oscurecer el video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none"></div>

        {/* Fondo con efectos animados */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-yellow-600/15 blur-[140px] rounded-full pointer-events-none animate-blob"></div>
        <div className="absolute -bottom-1/2 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none animate-blob" style={{animationDelay: '4s'}}></div>

        {/* Líneas decorativas */}
        <div className="absolute top-20 left-0 w-px h-40 bg-gradient-to-b from-yellow-500/30 to-transparent"></div>
        <div className="absolute top-20 right-0 w-px h-40 bg-gradient-to-b from-yellow-500/30 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          
          {/* Badge animado */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 text-sm font-medium tracking-wide hover:border-yellow-500/60 transition-all cursor-default group">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
            </span>
            <span className="flex gap-2">
              <span>🤖 AUTOMATIZACIÓN IA</span>
              <span className="text-yellow-500/50">•</span>
              <span>📈 MARKETING DIGITAL</span>
              <span className="text-yellow-500/50">•</span>
              <span>💼 CONSULTORÍA</span>
            </span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto">
            Automatización IA <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600 drop-shadow-lg">+ Marketing Digital</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Escalamos tu negocio sin incrementar gastos. 
            <strong className="block text-yellow-400 font-semibold mt-2">Reducción de costes 70% + Aumento de ingresos +300% ROI</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="#contacto" className="group px-8 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.4)] flex items-center justify-center gap-3">
              <span>Auditoría Digital Gratuita</span>
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#casos-exito" className="px-8 py-5 border-2 border-yellow-500 text-yellow-500 font-bold rounded-full text-lg hover:bg-yellow-500/10 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Award size={20} />
              Ver Casos de Éxito
            </a>
          </div>

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-yellow-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-black/40 border border-yellow-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-500/40 transition-all">
                <p className="text-4xl font-bold text-yellow-400 mb-2">+50</p>
                <p className="text-sm text-gray-400">Empresas Transformadas</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-yellow-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-black/40 border border-yellow-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-500/40 transition-all">
                <p className="text-4xl font-bold text-yellow-400 mb-2">70%</p>
                <p className="text-sm text-gray-400">Reducción Costes Promedio</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-yellow-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-black/40 border border-yellow-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-500/40 transition-all">
                <p className="text-4xl font-bold text-yellow-400 mb-2">95%</p>
                <p className="text-sm text-gray-400">Satisfacción Clientes</p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center gap-2 text-gray-500 animate-bounce">
            <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
            <div className="w-1 h-1 bg-yellow-500 rounded-full" style={{animation: 'bounce 1s infinite', animationDelay: '0.1s'}}></div>
            <div className="w-1 h-1 bg-yellow-500 rounded-full" style={{animation: 'bounce 1s infinite', animationDelay: '0.2s'}}></div>
          </div>

        </div>
      </section>

      {/* --- SERVICIOS (VALUE STACK) --- */}
      <section id="servicios" className="py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        {/* Efectos de fondo animados */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-yellow-600/5 blur-[100px] rounded-full pointer-events-none animate-blob"></div>
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none animate-blob" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* HEADER */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              SOLUCIONES PROBADAS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Tres Pilares del Crecimiento<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600">Empresarial</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Consultoría + IA + Marketing Digital = Transformación Total</p>
          </div>

          {/* SERVICIOS GRID */}
          <div className="space-y-8">
            
            {/* Servicio 1: Consultoría (DESTACADO - FULL WIDTH) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-gradient-to-r from-yellow-900/30 via-black to-black border border-yellow-500/50 p-10 rounded-3xl overflow-hidden hover:border-yellow-500/80 transition-all duration-300 shadow-golden-lg">
                
                {/* Etiqueta destacada */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                  <Star size={16} fill="currentColor" />
                  RECOMENDADO
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Icono */}
                  <div className="md:col-span-2 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500/20 blur-lg rounded-full"></div>
                      <div className="relative h-24 w-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-golden animate-float">
                        <Star size={48} className="text-white" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="md:col-span-7">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Consultoría Empresarial: ROI Garantizado</h3>
                    <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                      Antes de automatizar o escalar con marketing, <strong>analizamos números</strong>. No partimos de suposiciones, sino de data real.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 size={18} className="text-yellow-500 flex-shrink-0" />
                        Análisis profundo de viabilidad y rentabilidad
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 size={18} className="text-yellow-500 flex-shrink-0" />
                        Cálculo exacto del ROI esperado
                      </li>
                      <li className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 size={18} className="text-yellow-500 flex-shrink-0" />
                        Asesoramiento honesto: si no es rentable, te lo decimos
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-3 flex flex-col gap-3">
                    <a href="#contacto" className="px-6 py-4 bg-yellow-500 text-black font-bold rounded-full text-center hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 transform">
                      Solicitar Auditoría
                    </a>
                    <p className="text-xs text-gray-500 text-center">✓ Gratuita y sin compromiso</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Servicios 2 y 3 en grid */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Servicio 2: IA & Automatización */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/30 p-8 rounded-2xl hover:border-blue-500/60 transition-all duration-300 h-full hover:lift">
                  
                  {/* Efecto de brillo superior */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-lg"></div>
                      <div className="relative h-14 w-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                        <Bot size={28} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">IA & Automatizaciones</h3>
                      <p className="text-xs text-blue-300">Máquinas trabajando 24/7</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Agentes IA, asistentes virtuales y sistemas inteligentes que trabajan sin parar. Reducimos costes operativos hasta 70%.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-400">Procesamiento automático 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-400">Reducción 85% de errores humanos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-400">Escalabilidad sin límite</span>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-yellow-400 flex items-center gap-2">
                    <span className="text-lg">⚡</span> Reduce costes hasta 70%
                  </div>

                </div>
              </div>

              {/* Servicio 3: Marketing Digital */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 p-8 rounded-2xl hover:border-purple-500/60 transition-all duration-300 h-full hover:lift">
                  
                  {/* Efecto de brillo superior */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-lg"></div>
                      <div className="relative h-14 w-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <BarChart3 size={28} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Marketing Digital & Funnels</h3>
                      <p className="text-xs text-purple-300">Tráfico + Conversión = Dinero</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Funnels de venta profesionales + publicidad digital de alto rendimiento + retargeting inteligente. ROI medible en cada campaña.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-400">Publicidad estilo cine</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-400">Leads cualificados + conversión</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-400">Segmentación audiencia inteligente</span>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-yellow-400 flex items-center gap-2">
                    <span className="text-lg">📈</span> ROI hasta +300%
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- CASOS DE ÉXITO (EJEMPLOS DE TRABAJO) --- */}
      <section id="casos-exito" className="hidden py-32 px-6 bg-black relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-600/5 blur-[100px] rounded-full pointer-events-none animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none animate-blob" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* HEADER */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium">
              <Award size={16} />
              EJEMPLOS DE PROYECTOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Tipos de Casos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600">Transformamos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estos son ejemplos reales de los tipos de problemas que resolvemos diariamente. ¿Se parece tu negocio a alguno? Podemos hacer lo mismo por ti.
            </p>
          </div>

          {/* GRID DE CASOS */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Caso 1: E-commerce B2B */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/30 rounded-3xl p-10 overflow-hidden h-full hover:border-blue-500/60 transition-all duration-300 hover:lift">
                
                {/* Linea superior de brillo */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                {/* Imagen del caso - Con lazy loading */}
                <div className="mb-8 rounded-2xl overflow-hidden border border-blue-500/20 h-48 bg-black/40">
                  <img 
                    src="/case-study-ecommerce.png" 
                    alt="Automatización de procesos e-commerce" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Header con sector */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-xs font-bold text-blue-300">Distribución & E-commerce</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Automatización de Pedidos</h3>
                </div>

                {/* Números destacados */}
                <div className="mb-8 p-8 bg-black/40 rounded-2xl border border-blue-500/20">
                  <div className="flex justify-around items-start flex-wrap gap-8">
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-3 leading-tight">85%</div>
                      <p className="text-xs text-gray-400">Menos errores</p>
                    </div>
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-3 leading-tight">40%</div>
                      <p className="text-xs text-gray-400">Más rápido</p>
                    </div>
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-3 leading-tight">3</div>
                      <p className="text-xs text-gray-400">Personas reasignadas</p>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-2">El Problema Típico</p>
                    <p className="text-sm text-gray-300">500+ pedidos manuales diarios. Errores constantes. Equipo saturado sin poder escalar.</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-2">Nuestra Solución</p>
                    <p className="text-sm text-gray-300">Sistema IA que automatiza pedidos, valida datos y genera reportes 24/7.</p>
                  </div>
                </div>

                {/* Badge de confianza */}
                <div className="mt-8 pt-6 border-t border-blue-500/20">
                  <p className="text-xs text-blue-400 font-bold flex items-center gap-2">
                    ↳ ¿Te suena conocido?
                  </p>
                </div>
              </div>
            </div>

            {/* Caso 2: Agencia de Servicios */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-3xl p-10 overflow-hidden h-full hover:border-purple-500/60 transition-all duration-300 hover:lift">
                
                {/* Linea superior de brillo */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                {/* Imagen del caso */}
                <div className="mb-8 rounded-2xl overflow-hidden border border-purple-500/20 h-48 bg-black/40">
                  <img 
                    src="/case-study-agencia.png" 
                    alt="Dashboard marketing digital con crecimiento de leads" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Header con sector */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-xs font-bold text-purple-300">Marketing & Servicios</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Generación de Leads Calificados</h3>
                </div>

                {/* Números destacados */}
                <div className="mb-8 p-8 bg-black/40 rounded-2xl border border-purple-500/20">
                  <div className="flex justify-around items-start flex-wrap gap-8">
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-3 leading-tight">+250%</div>
                      <p className="text-xs text-gray-400">Más leads</p>
                    </div>
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-3 leading-tight">62%</div>
                      <p className="text-xs text-gray-400">Conversión</p>
                    </div>
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-3 leading-tight">3-4</div>
                      <p className="text-xs text-gray-400">Clientes/mes</p>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-2">El Problema Típico</p>
                    <p className="text-sm text-gray-300">Bajo engagement en redes. Leads fríos y no cualificados. Sin proceso de venta estructurado.</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-2">Nuestra Solución</p>
                    <p className="text-sm text-gray-300">Marketing digital estratégico + funnels de venta + agente IA que sigue up automático.</p>
                  </div>
                </div>

                {/* Badge de confianza */}
                <div className="mt-8 pt-6 border-t border-purple-500/20">
                  <p className="text-xs text-purple-400 font-bold flex items-center gap-2">
                    ↳ ¿Es tu caso?
                  </p>
                </div>
              </div>
            </div>

            {/* Caso 3: SaaS en Crecimiento */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-3xl p-10 overflow-hidden h-full hover:border-green-500/60 transition-all duration-300 hover:lift">
                
                {/* Linea superior de brillo */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

                {/* Imagen del caso */}
                <div className="mb-8 rounded-2xl overflow-hidden border border-green-500/20 h-48 bg-black/40">
                  <img 
                    src="/case-study-saas.png" 
                    alt="Sistema de retención de clientes con soporte IA" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Header con sector */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 mb-4">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-xs font-bold text-green-300">SaaS & Productos</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Retención de Clientes</h3>
                </div>

                {/* Números destacados */}
                <div className="mb-8 p-8 bg-black/40 rounded-2xl border border-green-500/20">
                  <div className="flex justify-around items-start flex-wrap gap-8">
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-green-400 mb-3 leading-tight">-50%</div>
                      <p className="text-xs text-gray-400">Churn reducido</p>
                    </div>
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-green-400 mb-3 leading-tight">+85k</div>
                      <p className="text-xs text-gray-400">$ MRR extra</p>
                    </div>
                    <div className="text-center flex-1 min-w-[80px]">
                      <div className="text-2xl md:text-4xl font-bold text-green-400 mb-3 leading-tight">92%</div>
                      <p className="text-xs text-gray-400">Satisfacción</p>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-2">El Problema Típico</p>
                    <p className="text-sm text-gray-300">Churn alto. Soporte manual desbordado. Sin escalabilidad operativa.</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-2">Nuestra Solución</p>
                    <p className="text-sm text-gray-300">Chatbot IA 24/7 + automatización de soporte + sistema inteligente de retención.</p>
                  </div>
                </div>

                {/* Badge de confianza */}
                <div className="mt-8 pt-6 border-t border-green-500/20">
                  <p className="text-xs text-green-400 font-bold flex items-center gap-2">
                    ↳ ¿Lo tuyo?
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ESTADÍSTICAS GLOBALES - HONESTAS */}
          <div className="bg-gradient-to-r from-yellow-900/20 via-black to-purple-900/20 border border-yellow-500/30 rounded-3xl p-12 mb-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">15+</p>
                <p className="text-gray-400 font-medium">Proyectos Completados</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">+70%</p>
                <p className="text-gray-400 font-medium">Reducción Costes</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">3-6 meses</p>
                <p className="text-gray-400 font-medium">ROI Positivo</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">92%</p>
                <p className="text-gray-400 font-medium">Satisfacción Clientes</p>
              </div>
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-8">¿Tu caso es similar? Hagamos una auditoría gratuita.</p>
            <a href="#contacto" className="inline-block px-10 py-5 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)]">
              Solicita tu Análisis Gratis
            </a>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN FAMILIA DORADA (PREMIUM & EXCLUSIVE) --- */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-black to-zinc-950 relative overflow-hidden">
        {/* Efectos decorativos */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none animate-blob"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* CONTENEDOR PRINCIPAL CON GLASS EFFECT */}
          <div className="relative group">
            
            {/* Efecto de glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Contenido principal */}
            <div className="relative glass-dark border border-yellow-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">

              {/* Línea dorada superior */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

              {/* Grid de contenido */}
              <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Lado izquierdo: Texto */}
                <div className="space-y-8">
                  
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
                      <Users size={16} className="text-yellow-400" />
                      <span className="text-sm font-bold text-yellow-400">COMUNIDAD EXCLUSIVA</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Familia Dorada:<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600">Tu Partner 360°</span>
                    </h2>

                    <p className="text-xl text-gray-300 leading-relaxed">
                      No somos un proveedor más. Somos tu <strong>socio estratégico</strong> comprometido con el crecimiento real de tu negocio.
                    </p>
                  </div>

                  {/* Lista de beneficios */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-yellow-500/10 hover:border-yellow-500/30 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm">✓</div>
                      <div>
                        <p className="font-bold text-white mb-1">Chat VIP Privado</p>
                        <p className="text-sm text-gray-400">Acceso directo a directores y especialistas vía WhatsApp</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-yellow-500/10 hover:border-yellow-500/30 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm">✓</div>
                      <div>
                        <p className="font-bold text-white mb-1">Herramientas Premium</p>
                        <p className="text-sm text-gray-400">Acceso a toda nuestra tecnología interna y IA</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-yellow-500/10 hover:border-yellow-500/30 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm">✓</div>
                      <div>
                        <p className="font-bold text-white mb-1">Consultoría Continua</p>
                        <p className="text-sm text-gray-400">Revisiones periódicas y optimización de estrategias</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-yellow-500/10 hover:border-yellow-500/30 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold text-sm">✓</div>
                      <div>
                        <p className="font-bold text-white mb-1">Prioridad Absoluta</p>
                        <p className="text-sm text-gray-400">Equipo dedicado. Tu negocio es nuestro negocio</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Lado derecho: Elementos visuales */}
                <div className="relative h-full min-h-[500px] hidden md:flex items-center justify-center">
                  
                  {/* Fondo con gradientes */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>

                  {/* Card superior izquierda */}
                  <div className="absolute top-0 left-0 w-48 h-32 bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-2xl p-6 flex flex-col justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <p className="text-xs text-gray-400 uppercase font-bold mb-2">Disponibilidad</p>
                    <p className="text-3xl font-bold text-blue-400">24/7</p>
                    <p className="text-xs text-gray-500 mt-2">Siempre aquí para ti</p>
                  </div>

                  {/* Card central */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-40 bg-gradient-to-br from-yellow-900/40 to-black border border-yellow-500/50 rounded-2xl p-8 flex flex-col justify-center items-center shadow-golden-lg">
                    <Star size={40} className="text-yellow-400 mb-3" fill="currentColor" />
                    <p className="text-xs text-gray-400 uppercase font-bold text-center mb-2">Atención</p>
                    <p className="text-2xl font-bold text-yellow-400 text-center">Premium</p>
                  </div>

                  {/* Card inferior derecha */}
                  <div className="absolute bottom-0 right-0 w-48 h-32 bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 rounded-2xl p-6 flex flex-col justify-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <p className="text-xs text-gray-400 uppercase font-bold mb-2">Resultado</p>
                    <p className="text-3xl font-bold text-purple-400">+300%</p>
                    <p className="text-xs text-gray-500 mt-2">ROI Promedio</p>
                  </div>

                </div>

              </div>

              {/* CTA Button */}
              <div className="mt-12 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <p className="text-gray-400">Únete a la Familia Dorada y transforma tu negocio</p>
                <Link href="/familia" className="inline-block px-8 py-4 bg-gradient-gold text-black font-bold rounded-full text-lg hover:scale-105 transform transition-all shadow-golden-lg flex items-center justify-center gap-2">
                  Conoce al Equipo <ChevronRight size={20} />
                </Link>
              </div>

            </div>
          </div>

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
                  <WhatsAppLeadLink className="text-lg hover:text-yellow-400 transition-colors">684 70 98 25</WhatsAppLeadLink>
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