import Link from "next/link";
import { 
  Bot, 
  BrainCircuit, 
  TrendingUp, 
  Star, 
  Megaphone, 
  Filter, 
  Users, 
  MessageSquare,
  Lock
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
          Soluciones de alto impacto. Sin rodeos.
        </p>
      </section>

      {/* --- LISTA DE SERVICIOS --- */}
      <section className="pb-24 px-6 max-w-7xl mx-auto space-y-16">
        
        {/* 1. CONSULTORÍA (DESTACADA) */}
        <div className="bg-gradient-to-r from-yellow-900/10 to-black border border-yellow-500/50 p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-bl-xl z-10">RECOMENDADO</div>
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="h-20 w-20 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Star size={40} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Consultoría Empresarial</h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl text-lg">
                Las evaluaciones de viabilidad de NexoCore ofrecen un análisis riguroso de los proyectos de IA propuestos.
                Garantizamos su viabilidad práctica y calculamos un posible retorno de la inversión antes de que gastes un euro. Si no es rentable, no lo hacemos.
              </p>
            </div>
          </div>
        </div>

        {/* 2. LOS 3 CUADRADOS DE LA IMAGEN (TEXTO EXACTO) + NUEVOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Agentes de Voz Neuronales (TEXTO ORIGINAL DE TU FOTO) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Agentes de Voz Neuronales</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sistemas de IA capaces de mantener conversaciones fluidas, gestionar agendas y cualificar leads 24/7. Eliminamos el error humano y la pérdida de oportunidades.
              </p>
            </div>

            {/* Automatización de Procesos (TEXTO ORIGINAL DE TU FOTO) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automatización de Procesos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conectamos todas las áreas de su negocio. Automatizamos tareas repetitivas mediante sistemas profundos para que usted se centre en hacer crecer su empresa y liderar su sector.
              </p>
            </div>

            {/* Growth & Marketing IA (TEXTO ORIGINAL DE TU FOTO) */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth & Marketing IA</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No solo ahorramos tiempo, generamos dinero. Implementamos sistemas de reactivación de clientes y captación de leads mediante estrategias de datos avanzadas.
              </p>
            </div>

            {/* --- NUEVOS SERVICIOS AÑADIDOS --- */}

            {/* Publicidad */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Megaphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Publicidad Profesional</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Campañas de anuncios de nivel cine. Utilizamos IA para crear vídeos y creatividades que captan la atención al instante. Nos hacemos la nuestra propia, imagina lo que haremos por la tuya.
              </p>
            </div>

            {/* Funnels */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-all duration-300">
              <div className="h-12 w-12 bg-yellow-500/10 text-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Filter size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Funnels de Venta</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Diseñamos embudos de venta automatizados para convertir visitas en clientes de pago sin que tengas que intervenir.
              </p>
            </div>

        </div>
      </section>

      {/* --- SECCIÓN FAMILIA (LA DIFERENCIA) --- */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/10 relative overflow-hidden">
         {/* Fondo decorativo */}
         <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/10 to-transparent pointer-events-none"></div>

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
                  <li className="flex items-start gap-3">
                    <Lock className="text-yellow-500 mt-1 shrink-0" size={20} />
                    <span className="text-gray-400"><strong>Herramientas Exclusivas:</strong> Tendrás acceso a todo tipo de herramientas internas que usamos para escalar negocios.</span>
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