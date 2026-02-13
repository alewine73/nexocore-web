import Link from "next/link";
import { Bot, BarChart3, Zap, BrainCircuit, ChevronRight, CheckCircle2, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white">
            NEXO<span className="text-yellow-500">CORE</span>
          </div>
          <a 
            href="mailto:jssbusinessnow@gmail.com" 
            className="hidden md:flex bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-300"
          >
            Agendar Auditoría
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION (LA ENTRADA TRIUNFAL) --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Efecto de luz dorada de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium tracking-wide">
            AGENCIA DE INTELIGENCIA ARTIFICIAL & MARKETING
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Escalamos tu Negocio mediante <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600">
              Ecosistemas de IA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Deje de operar como una empresa del pasado. Implementamos infraestructuras digitales que automatizan la captación, gestión y retención de clientes.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:jssbusinessnow@gmail.com" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Solicitar Consultoría Privada <ChevronRight size={20} />
            </a>
            <a href="#servicios" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full text-lg hover:bg-white/10 transition-all">
              Ver Soluciones
            </a>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DEMO AUDIO (Rediseñada Gold) --- */}
      <section className="py-20 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">La Tecnología en Acción</h3>
          <p className="text-gray-400 mb-8">Escucha cómo nuestra IA gestiona una situación real de negocio.</p>
          
          <div className="bg-black border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
             <div className="flex items-center gap-5 mb-6">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-500">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-yellow-500 uppercase tracking-widest font-bold">Nexo Voice</p>
                  <h4 className="text-white font-bold text-lg">Recepcionista Inteligente</h4>
                </div>
             </div>
             
             {/* Player con filtro dorado */}
             <audio controls className="w-full h-12 rounded-lg opacity-90 hover:opacity-100 transition-opacity" style={{ filter: "invert(1) hue-rotate(180deg) sepia(1) saturate(5) hue-rotate(-50deg)" }}>
                <source src="/demo.mp3" type="audio/mpeg" />
                Tu navegador no soporta audio.
             </audio>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS (VALUE STACK) --- */}
      <section id="servicios" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Más allá de la automatización. <br />
              <span className="text-yellow-500">Ingeniería de Negocio.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No vendemos parches. Diseñamos e integramos la infraestructura completa que tu empresa necesita para liderar su sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/60 transition-colors group">
              <div className="h-14 w-14 bg-blue-900/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agentes de Voz Neuronales</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Sistemas de IA capaces de mantener conversaciones fluidas, gestionar agendas y cualificar leads 24/7. Eliminamos el error humano y la pérdida de oportunidades por líneas ocupadas.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Atención inmediata sin esperas</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Integración con CRM en tiempo real</li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/60 transition-colors group">
              <div className="h-14 w-14 bg-purple-900/20 text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automatización de Procesos</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Conectamos todas las áreas de su negocio. Automatizamos tareas repetitivas mediante sistemas profundos para que usted deje de ser un operario y pase a ser un dueño de negocio.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Facturación y logística autónoma</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Reducción de costes operativos</li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/60 transition-colors group">
              <div className="h-14 w-14 bg-green-900/20 text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth & Marketing IA</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                No solo ahorramos tiempo, generamos dinero. Implementamos sistemas de reactivación de clientes y captación de leads mediante estrategias de datos avanzadas.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Embudos de venta automatizados</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-yellow-500" /> Reputación online (Google Reviews)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL (HIGH TICKET) --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Fondo degradado dorado sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-900/5 to-black pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 border border-white/10 bg-black/50 backdrop-blur-sm p-12 rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Está su empresa lista para el siguiente nivel?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Trabajamos con un número limitado de clientes para garantizar la máxima calidad en la implementación. Reserve una sesión de consultoría para analizar su caso.
          </p>
          <a 
            href="mailto:jssbusinessnow@gmail.com" 
            className="inline-flex px-10 py-5 bg-white text-black font-bold rounded-full text-xl hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Contactar con el Equipo
          </a>
          <p className="mt-6 text-sm text-gray-600">
            Respuesta en menos de 24 horas. Estudio de viabilidad gratuito.
          </p>
        </div>
      </section>

      {/* --- FOOTER LEGAL --- */}
      <footer className="border-t border-white/10 py-12 bg-black text-center text-gray-600 text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
           <span className="font-bold text-gray-400">NEXOCORE</span>
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