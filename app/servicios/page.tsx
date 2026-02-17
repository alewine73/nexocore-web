import Link from "next/link";
import { 
  Bot, 
  BrainCircuit, 
  TrendingUp, 
  Star, 
  Megaphone, 
  Filter, 
  MessageCircle, 
  FileText, 
  Video, 
  Infinity,
  CalendarCheck 
} from "lucide-react";
import ContactForm from "@/components/ContactForm";


export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            NEXO<span className="text-yellow-500">CORE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/servicios" className="text-sm font-bold text-yellow-500 transition-colors">
              Nuestros Servicios
            </Link>
            <Link href="/familia" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Familia Dorada
            </Link>
            <Link href="/#contacto" className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HEADER --- */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hacemos que tu negocio <span className="text-yellow-500">valga oro</span>.
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Soluciones de alto impacto. Sin rodeos.
        </p>
      </section>

      {/* --- LISTA DE SERVICIOS --- */}
      <section className="pb-10 px-6 max-w-7xl mx-auto space-y-16">
        
        {/* 1. CONSULTORÍA (INTACTA - NO TOCAR) */}
        <div className="bg-gradient-to-r from-yellow-900/10 to-black border border-yellow-500/50 p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="h-20 w-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Star size={40} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Consultoría Empresarial 360º</h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl text-lg">
                Las evaluaciones de viabilidad de NexoCore ofrecen un análisis riguroso de los proyectos de IA propuestos.
                Garantizamos su viabilidad práctica y calculamos un posible retorno de la inversión antes de que gastes un euro. Si no es rentable, no lo hacemos. Desarrollaremos una estrategia unica para ti.
              </p>
            </div>
          </div>
        </div>

        {/* 2. SERVICIOS PRINCIPALES (Los 5 Cuadros) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Agentes de Voz (TEXTO ORIGINAL) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Chatbots y Agentes</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desarrollamos agentes de inteligencia artificial capaces de tomar decisiones autónomas en cualquier departamento. Eliminamos el error humano y la pérdida de oportunidades.
              </p>
            </div>

            {/* Automatización (TEXTO ORIGINAL) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automatización de Procesos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conectamos todas las áreas de su negocio. Automatizamos tareas repetitivas mediante sistemas profundos para que usted se centre en llevar su actividad empresarial al máximo.
              </p>
            </div>

            {/* Growth (TEXTO ORIGINAL) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth & Marketing IA</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No solo ahorramos tiempo, generamos dinero. Implementamos sistemas de reactivación de clientes y captación de leads mediante estrategias de datos avanzadas.
              </p>
            </div>

            {/* Publicidad (AÑADIDO) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Megaphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Publicidad Profesional</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Campañas de anuncios de nivel cinematográfico. Utilizamos IA generativa para crear vídeos y creatividades que captan la atención al instante.
              </p>
            </div>

            {/* Funnels (AÑADIDO) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Filter size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Funnels de Venta</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Diseñamos el camino exacto que recorre tu cliente desde que te ve hasta que te paga. Embudos optimizados para maximizar la conversión.
              </p>
            </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: EJEMPLOS DE AUTOMATIZACIÓN (TU IDEA) --- */}
      <section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Ejemplos de lo que construimos para ti
          </h2>
          
          <div className="space-y-6">
            
            {/* Ejemplo 1: Voz */}
            <div className="flex gap-6 items-start p-6 rounded-xl bg-black border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="bg-blue-900/20 p-3 rounded-lg shrink-0 text-blue-400">
                <CalendarCheck size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Agente IA de Voz Completo</h3>
                <p className="text-gray-400 text-sm">Gestiona reservas por teléfono de forma autónoma: añade nuevas citas, las edita si el cliente cambia de opinión o las cancela, todo conectado a tu calendario.</p>
              </div>
            </div>

            {/* Ejemplo 2: WhatsApp RAG */}
            <div className="flex gap-6 items-start p-6 rounded-xl bg-black border border-white/5 hover:border-green-500/30 transition-colors">
              <div className="bg-green-900/20 p-3 rounded-lg shrink-0 text-green-400">
                <MessageCircle size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Chatbot WhatsApp RAG (Base de Conocimiento)</h3>
                <p className="text-gray-400 text-sm">Un bot entrenado por nosotros con tus datos que responde a cualquier mensaje. Además, puede enviar plantillas proactivas a potenciales clientes (Leads) para vender.</p>
              </div>
            </div>

            {/* Ejemplo 3: Facturas */}
            <div className="flex gap-6 items-start p-6 rounded-xl bg-black border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="bg-purple-900/20 p-3 rounded-lg shrink-0 text-purple-400">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Generador de Facturas Automático</h3>
                <p className="text-gray-400 text-sm">El sistema detecta una venta, crea la factura en PDF, se la envía al cliente y la guarda en tu contabilidad sin que toques un botón.</p>
              </div>
            </div>

            {/* Ejemplo 4: Redes Sociales */}
            <div className="flex gap-6 items-start p-6 rounded-xl bg-black border border-white/5 hover:border-pink-500/30 transition-colors">
              <div className="bg-pink-900/20 p-3 rounded-lg shrink-0 text-pink-400">
                <Video size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Bot de Contenido en Instagram</h3>
                <p className="text-gray-400 text-sm">Un sistema que crea vídeos, los sube automáticamente a tu Instagram y además responde a los comentarios de tus seguidores.</p>
              </div>
            </div>

            {/* Ejemplo 5: Infinito */}
            <div className="flex gap-6 items-start p-6 rounded-xl bg-yellow-900/10 border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
              <div className="bg-yellow-500/10 p-3 rounded-lg shrink-0 text-yellow-500">
                <Infinity size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Posibilidades Infinitas</h3>
                <p className="text-gray-400 text-sm">Podemos automatizar prácticamente cualquier proceso digital que te imagines. Cuéntanos qué te quita tiempo y crearemos la máquina que lo haga por ti.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">¿Hablamos?</h2>
            <p className="text-gray-400">Rellena el formulario y te llamaremos <strong>muy rápidamente</strong>.</p>
            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10">
                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                <p className="text-white">jssbusinessnow@gmail.com</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10">
                <p className="text-xs text-gray-500 uppercase font-bold">Teléfono</p>
                <p className="text-white">644 02 50 37</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 py-12 bg-black text-center text-gray-600 text-sm">
        <p>&copy; 2026 NexoCore. Todos los derechos reservados.</p>
      </footer>

    </main>
  );
}