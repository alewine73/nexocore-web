import Link from "next/link";
import { 
  Bot, 
  BrainCircuit, 
  TrendingUp, 
  Star, 
  Megaphone, 
  Filter, 
  MessageSquare,
  Users,
  MessageCircle, // Para WhatsApp
  FileText,      // Para Facturas
  Video          // Para Redes
} from "lucide-react";

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
            <Link href="/servicios" className="text-sm font-bold text-white transition-colors">
              Nuestros Servicios
            </Link>
            <Link href="/familia" className="text-sm font-medium text-gray-400 hover:text-yellow-500 transition-colors">
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
          No somos una agencia de servicios sueltos. Somos ingenieros de negocio.
          Implementamos ecosistemas completos para que tú solo tengas que preocuparte de liderar.
        </p>
      </section>

      {/* --- LISTA DE SERVICIOS --- */}
      <section className="pb-24 px-6 max-w-7xl mx-auto space-y-16">
        
        {/* 1. CONSULTORÍA (EL PUNTO DE PARTIDA) */}
        <div className="bg-gradient-to-r from-yellow-900/10 to-black border border-yellow-500/50 p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Quitada la etiqueta de Recomendado, ahora es el Core */}
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="h-20 w-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Star size={40} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Consultoría Empresarial 360º</h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl text-lg">
                Este es el primer paso. Realizamos una auditoría profunda para ver las necesidades reales de tu negocio. 
                No instalamos cosas por instalar: analizamos dónde pierdes tiempo y dinero, y te proponemos la solución exacta. 
                <span className="text-yellow-500 font-semibold block mt-2">Una vez trazado el plan, nosotros nos encargamos de instalar todos los servicios que necesites.</span>
              </p>
            </div>
          </div>
        </div>

        {/* 2. GRID DE SOLUCIONES (Ejemplos Reales) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Servicio: VOZ (Reservas) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-900/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Agente de Voz (Reservas)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Tu teléfono atendido por IA con voz humana. No solo responde, ejecuta acciones en tiempo real:
              </p>
              <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                <li>Gestiona reservas (Añadir, Editar, Cancelar).</li>
                <li>Sincronización directa con tu calendario.</li>
                <li>Atención 24/7 sin esperas.</li>
              </ul>
            </div>

            {/* Servicio: WHATSAPP (RAG) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-green-900/20 text-green-400 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Chatbot WhatsApp RAG</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Un cerebro que conoce tu negocio mejor que nadie. Entrenado con tus datos (RAG) para responder a todo.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                <li>Responde dudas complejas al instante.</li>
                <li>Envío de plantillas a clientes potenciales (Leads).</li>
                <li>Cualificación automática de clientes.</li>
              </ul>
            </div>

            {/* Servicio: GESTIÓN INTERNA (Facturas) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Burocracia Automática</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Olvídate del papeleo. Creamos sistemas que trabajan solos en la sombra.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                <li>Generador de facturas automático.</li>
                <li>Gestión de proveedores y stock.</li>
                <li><strong>Automatizamos infinitas cosas</strong> según tu necesidad.</li>
              </ul>
            </div>

            {/* Servicio: REDES SOCIALES (Bot) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-pink-900/20 text-pink-400 rounded-lg flex items-center justify-center mb-6">
                <Video size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gestión Redes Sociales IA</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Mantén tus redes vivas sin perder tiempo grabando o escribiendo.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                <li>Bot que crea y sube vídeos a Instagram/TikTok.</li>
                <li>Respuesta automática a comentarios y DMs.</li>
                <li>Interacción con tu comunidad 24/7.</li>
              </ul>
            </div>

            {/* Servicio: PUBLICIDAD PRO */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-red-900/20 text-red-400 rounded-lg flex items-center justify-center mb-6">
                <Megaphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Publicidad Profesional</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Campañas de anuncios (Ads) de nivel cinematográfico. Utilizamos IA generativa para crear vídeos y creatividades que captan la atención al instante. Nos hacemos la nuestra propia, imagina lo que haremos por la tuya.
              </p>
            </div>

            {/* Servicio: FUNNELS */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-purple-900/20 text-purple-400 rounded-lg flex items-center justify-center mb-6">
                <Filter size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Funnels de Venta</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Diseñamos el camino exacto que recorre tu cliente desde que te ve hasta que te paga. Embudos optimizados para maximizar la conversión y filtrar a los curiosos.
              </p>
            </div>

        </div>
      </section>

      {/* --- SECCIÓN FAMILIA (CTA) --- */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <Users className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              "Los amigos se cuentan con los <br/> dedos de una mano..."
            </h2>
            
            <div className="bg-black/80 border border-yellow-500/30 p-8 rounded-3xl mb-10 text-left">
               <p className="text-lg text-gray-300 leading-relaxed mb-6">
                 En <strong>NexoCore</strong> dispondréis de atención profesional y única siempre. Somos un grupo aislado.
                 No buscamos cantidad, buscamos calidad. Queremos crecer juntos. Les daremos más de lo que pueden imaginar.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MessageSquare className="text-green-500 mt-1 shrink-0" size={20} />
                    <span className="text-gray-400"><strong>Chat Privado de WhatsApp:</strong> Tendrás un grupo directo con nuestros asistentes para apoyarte en todo momento.</span>
                  </li>
               </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/#contacto" className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold text-xl rounded-full hover:bg-yellow-400 transition-all shadow-lg transform hover:-translate-y-1">
                Contratar Servicios
              </Link>
              <Link href="/familia" className="inline-block px-10 py-4 bg-zinc-800 text-white font-bold text-xl rounded-full hover:bg-zinc-700 transition-all border border-white/10">
                Descubre nuestra Filosofía y al Equipo &rarr;
              </Link>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 py-12 bg-black text-center text-gray-600 text-sm">
        <p>&copy; 2026 NexoCore. Todos los derechos reservados.</p>
      </footer>

    </main>
  );
}