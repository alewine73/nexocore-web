import Link from "next/link";
import { Users, Heart, Lock, Handshake, Zap, ArrowRight } from "lucide-react";
import ContactForm from "../../components/ContactForm";

export default function FamiliaPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            NEXO<span className="text-yellow-500">CORE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/servicios" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Nuestros Servicios
            </Link>
            <Link href="/familia" className="text-sm font-bold text-yellow-500 transition-colors">
              Familia Dorada
            </Link>
            <Link href="/#contacto" className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-all text-sm">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO: BIENVENIDA A LA FAMILIA --- */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden text-center">
        {/* Luz ambiental dorada suave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-xs font-bold tracking-widest uppercase animate-fade-in">
            <Users size={14} /> Filosofía NexoCore
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Más que una Agencia. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-amber-600">
              Somos tu Alianza.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            En el mundo de los negocios, ir solo es peligroso. Nosotros no buscamos clientes para enviarles una factura y desaparecer. 
            Buscamos construir relaciones a largo plazo donde tu crecimiento sea nuestro crecimiento.
          </p>

          <Link href="#unirse" className="inline-flex items-center gap-2 text-white border-b border-yellow-500 pb-1 hover:text-yellow-400 transition-all text-lg font-medium">
            Ver cómo trabajamos <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* --- FILOSOFÍA: LOS VALORES (Diseño Limpio) --- */}
      <section className="py-24 px-6 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Texto Emocional */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                "Los amigos se cuentan con los <span className="text-yellow-500">dedos de una mano</span>."
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Y en NexoCore queremos ser uno de esos dedos para tu empresa. 
              </p>
              <p className="text-gray-500 leading-relaxed">
                Huir de las agencias masivas donde eres el "Cliente Nº 4502". Aquí tendrás nombres, apellidos y caras.
                Tendrás transparencia absoluta y la tranquilidad de saber que hay un equipo tecnológico velando por tu negocio mientras tú duermes.
              </p>

              {/* Botón Estratégico Dorado */}
              <div className="pt-4">
                 <a href="#formulario-familia" className="inline-flex px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] transform hover:-translate-y-1">
                    Quiero unirme a la Familia
                 </a>
              </div>
            </div>

            {/* Grid de Beneficios (Visual) */}
            <div className="grid gap-6">
              <div className="bg-black border border-white/10 p-6 rounded-2xl flex gap-5 hover:border-yellow-500/30 transition-colors group">
                <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                   <Handshake size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Trato Directo</h3>
                  <p className="text-sm text-gray-500">Sin tickets de soporte infinitos. Comunicación fluida y humana.</p>
                </div>
              </div>

              <div className="bg-black border border-white/10 p-6 rounded-2xl flex gap-5 hover:border-yellow-500/30 transition-colors group">
                <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                   <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Compromiso Real</h3>
                  <p className="text-sm text-gray-500">Nos duele si pierdes dinero. Celebramos si ganas. Tu éxito es nuestro éxito.</p>
                </div>
              </div>

              <div className="bg-black border border-white/10 p-6 rounded-2xl flex gap-5 hover:border-yellow-500/30 transition-colors group">
                <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                   <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Tecnología Interna</h3>
                  <p className="text-sm text-gray-500">Acceso a herramientas de IA y estrategias que usamos nosotros mismos y no vendemos a nadie más.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CÓMO FUNCIONA LA ALIANZA --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Cómo entras en la Familia?</h2>
          <p className="text-gray-400">No es un servicio que se compra en un carrito. Es una relación que se construye.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-3xl bg-zinc-900/20 border border-white/5 relative">
            <span className="absolute -top-4 left-8 text-5xl font-black text-zinc-800">01</span>
            <h3 className="text-xl font-bold text-white mb-4 mt-4">Consultoría</h3>
            <p className="text-gray-500 text-sm">Nos sentamos. Analizamos tu negocio. Vemos si podemos ayudarte de verdad.</p>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-900/20 border border-yellow-500/20 relative shadow-lg shadow-yellow-900/5">
            <span className="absolute -top-4 left-8 text-5xl font-black text-yellow-900/50">02</span>
            <div className="absolute top-4 right-4 text-yellow-500"><Zap size={20} /></div>
            <h3 className="text-xl font-bold text-white mb-4 mt-4">Implementación</h3>
            <p className="text-gray-400 text-sm">Desplegamos la tecnología. Agentes de voz, automatizaciones y sistemas a medida para ti.</p>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-900/20 border border-white/5 relative">
            <span className="absolute -top-4 left-8 text-5xl font-black text-zinc-800">03</span>
            <h3 className="text-xl font-bold text-white mb-4 mt-4">Crecimiento</h3>
            <p className="text-gray-500 text-sm">Ya eres parte de NexoCore. Tienes soporte, actualizaciones y mejoras constantes.</p>
          </div>
        </div>
      </section>

      {/* --- FORMULARIO FINAL (EL DE SIEMPRE) --- */}
      <section id="formulario-familia" className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Tu sitio en la mesa te espera.</h2>
              <p className="text-gray-400 text-lg">
                Rellena el formulario. Hablemos de negocios, de futuro y de cómo hacer que tu empresa brille.
              </p>
              <p className="text-sm text-yellow-600 font-medium">
                * Trabajamos con plazas limitadas por zona para garantizar exclusividad.
              </p>
            </div>
            
            {/* Aquí importamos tu formulario que ya funciona */}
            <ContactForm />
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-black text-center text-gray-600 text-sm">
        <p>&copy; 2026 NexoCore. Todos los derechos reservados.</p>
      </footer>

    </main>
  );
}