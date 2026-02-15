import Link from "next/link";
import { Bot, BarChart3, BrainCircuit, ChevronRight, CheckCircle2, Users, Star, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexoCore | Agencia de Automatización IA",
  description: "Consultoría tecnológica en Valladolid. Inteligencia Artificial, Marketing y Estrategia de Negocio.",
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
    
    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
      NEXO<span className="text-yellow-500">CORE</span>
    </Link>

    <div className="hidden md:flex items-center gap-8">
      <Link href="/servicios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
        Nuestros Servicios
      </Link>

      <Link href="/familia" className="text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-2">
        <Star size={16} /> Familia Dorada
      </Link>

      <a href="#contacto" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
        Agendar Auditoría
      </a>
    </div>

  </div>
</nav>
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
            CONSULTORÍA DE ESTRATEGIA & IA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Escalamos tu Negocio mediante <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600 drop-shadow-sm">
              Ecosistemas de IA y Marketing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hacemos que tu negocio valga oro. Integramos sistemas inteligentes que reducen costes operativos y disparan tu facturación sin que tú tengas que trabajar más.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contacto" className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2">
              Solicitar Consultoría <ChevronRight size={20} />
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
              "La clave del éxito es la capacidad de <span className="text-yellow-500 border-b-2 border-yellow-500">adaptarse a los cambios</span>."
            </h2>
            <p className="text-gray-500">El mercado no espera. Contrata nuestros servicios, no lo dudes.</p>
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
                  <h3 className="text-2xl font-bold text-white mb-2">Consultoría Empresarial de Viabilidad</h3>
                  <p className="text-gray-300 leading-relaxed max-w-2xl">
                    No empezamos nada sin números. Ofrecemos un análisis riguroso de tu proyecto antes de escribir una sola línea de código. Garantizamos la viabilidad práctica y calculamos el posible retorno de la inversión (ROI). Si no es rentable para ti, no lo hacemos.
                  </p>
                </div>
                <div className="ml-auto">
                   <a href="#contacto" className="inline-block px-6 py-3 border border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition-all">Empezar Aquí</a>
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
                Integramos sistemas basados en inteligencia artificial con el fin de <strong>reducir el coste de SOPs</strong> (Procedimientos Operativos) y agilizar el tiempo de ejecución en cualquier departamento.
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
                Desde creación de funnels de venta completos y publicidad digital (Ads) hasta la gestión de equipos de ventas estructurados con Agentes de IA. No solo traemos tráfico, lo convertimos en clientes.
              </p>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-500" /> Publicidad Profesional (Estilo Cine)</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-500" /> Captación de Leads Cualificados</li>
              </ul>
            </div>

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
              "Los amigos se cuentan con los dedos de una mano..."
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              En NexoCore no tendrás un proveedor, tendrás una <strong>Familia</strong>. 
              Somos un grupo selecto y aislado. No aceptamos a cualquiera. 
              Si trabajas con nosotros, dispondrás de atención profesional y única siempre.
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
              ¿Hablamos de Negocios?
            </h2>
            <p className="text-2xl text-yellow-500 font-medium">
              "Hacemos que tu negocio valga oro."
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Recibirás una recepción de lujo en el grupo NexoCore. Rellena el formulario y te llamaremos <strong>muy rápidamente</strong>.
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

          {/* Formulario Visual (Sin funcionalidad en esta versión, solo diseño) */}
          <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-600/10 blur-[60px] rounded-full pointer-events-none"></div>

            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Nombre</label>
                  <input type="text" placeholder="Tu nombre" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Empresa</label>
                  <input type="text" placeholder="Nombre negocio" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                <input type="email" placeholder="tu@email.com" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">Teléfono</label>
                <input type="tel" placeholder="+34 600 000 000" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium ml-1">¿Qué necesitas?</label>
                <textarea rows={4} placeholder="Cuéntanos brevemente tu caso..." className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all resize-none"></textarea>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                  ENVIAR SOLICITUD
                </button>
                <p className="text-center text-xs text-gray-600 mt-4">
                  Al enviar aceptas nuestra <Link href="/legal" className="underline hover:text-gray-400">política de privacidad</Link>.
                </p>
              </div>
            </form>
          </div>

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