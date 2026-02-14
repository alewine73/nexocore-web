import Link from "next/link";
import { Bot, BarChart3, BrainCircuit, ChevronRight, CheckCircle2, Phone, TrendingUp } from "lucide-react";
import ContactForm from "../components/ContactForm"; // Importamos el formulario nuevo
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexoCore | Agencia de Automatización IA",
  description: "Automatiza tu negocio con Inteligencia Artificial. Recepcionistas virtuales, gestión de reservas y soluciones tecnológicas en Valladolid.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white cursor-default">
            NEXO<span className="text-yellow-500">CORE</span>
          </div>
          <a 
            href="#contacto" 
            className="hidden md:flex bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Agendar Auditoría
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            AGENCIA DE INTELIGENCIA ARTIFICIAL & MARKETING
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Convertimos la Tecnología en <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600 drop-shadow-sm">
              Resultados de Oro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Deje de operar como una empresa del pasado. Implementamos ecosistemas digitales que automatizan la captación, gestión y retención de clientes.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contacto" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Solicitar Consultoría <ChevronRight size={20} />
            </a>
            <a href="#demo" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full text-lg hover:bg-white/10 transition-all">
              Escuchar Demo
            </a>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DEMO AUDIO PREMIUM --- */}
      <section id="demo" className="w-full py-24 bg-zinc-950 flex justify-center items-center relative overflow-hidden border-y border-white/5">
        <div className="max-w-4xl w-full px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            La Tecnología en Acción
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Así suena nuestro recepcionista virtual "José" cerrando una reserva real sin intervención humana.
          </p>

          <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 max-w-lg mx-auto shadow-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="relative h-14 w-14 rounded-full bg-yellow-900/10 flex items-center justify-center border border-yellow-500/20 text-yellow-500">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-10"></span>
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-yellow-500 uppercase tracking-wider font-bold mb-1 animate-pulse">● Grabación en directo</p>
                  <h3 className="text-white font-bold text-xl">Gestión de Reserva</h3>
                </div>
              </div>

              <audio controls className="w-full h-12 rounded-lg opacity-90 hover:opacity-100 transition-opacity" style={{ filter: "invert(1) hue-rotate(180deg) sepia(1) saturate(3) hue-rotate(-50deg)" }}>
                <source src="/demo.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Más allá de la automatización. <br />
              <span className="text-yellow-500">Ingeniería de Negocio.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              No vendemos parches. Diseñamos e integramos la infraestructura completa que tu empresa necesita para liderar su sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/80 hover:border-yellow-500/20 transition-all duration-300 group">
              <div className="h-14 w-14 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agentes de Voz Neuronales</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Sistemas de IA capaces de mantener conversaciones fluidas, gestionar agendas y cualificar leads 24/7. Eliminamos el error humano y la pérdida de oportunidades.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/80 hover:border-yellow-500/20 transition-all duration-300 group">
              <div className="h-14 w-14 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automatización de Procesos</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Conectamos todas las áreas de su negocio. Automatizamos tareas repetitivas mediante sistemas profundos para que usted deje de ser un operario y pase a ser un dueño de negocio.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900/80 hover:border-yellow-500/20 transition-all duration-300 group">
              <div className="h-14 w-14 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth & Marketing IA</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                No solo ahorramos tiempo, generamos dinero. Implementamos sistemas de reactivación de clientes y captación de leads mediante estrategias de datos avanzadas.
              </p>
            </div>
          </div>
          
          {/* SECCIÓN GARANTÍA */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-green-500">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 12c0 5.097 2.974 9.53 7.262 11.555a.75.75 0 00.976 0C14.776 21.53 17.75 17.097 17.75 12a12.74 12.74 0 00-.635-6.235.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zM12 13.25a.75.75 0 000-1.5A2.25 2.25 0 009.75 9.5a.75.75 0 000 1.5 2.25 2.25 0 002.25 2.25z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <span className="text-green-500">🛡️</span> Garantía de Tranquilidad
              </h3>
              <p className="text-gray-300 mb-4">
                Sabemos que funciona. Por eso asumimos el riesgo nosotros.
              </p>
              <p className="text-lg font-medium text-white">
                Si durante los primeros 30 días el sistema no cumple tus expectativas, <span className="text-green-400 border-b border-green-400">te devolvemos el 100% de la cuota mensual</span>. Sin letra pequeña.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN CONTACTO PREMIUM (FORMULARIO CONECTADO) --- */}
      <section id="contacto" className="py-24 px-6 relative overflow-hidden bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              ¿Hablamos de Negocios?
            </h2>
            <p className="text-2xl text-yellow-500 font-medium">
              "Hacemos que tu negocio valga oro."
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              No buscamos clientes, buscamos socios estratégicos. Si estás listo para automatizar tu empresa y escalar tu facturación, rellena el formulario y analizaremos tu caso en 24h.
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
                  <a href="tel:+34644025037" className="text-lg hover:text-yellow-400 transition-colors">644 02 50 37</a>
                </div>
              </div>
            </div>
          </div>

          {/* AQUÍ CARGAMOS EL COMPONENTE NUEVO DEL FORMULARIO */}
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