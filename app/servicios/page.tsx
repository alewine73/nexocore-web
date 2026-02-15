import Link from "next/link";
import { Bot, BrainCircuit, BarChart3, ShieldCheck, Phone, LayoutTemplate } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      
      {/* NAVBAR SIMPLIFICADA */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">NEXO<span className="text-yellow-500">CORE</span></Link>
          <Link href="/#contacto" className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm">Contratar</Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nuestras Soluciones</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Tecnología de vanguardia aplicada a resultados de negocio.
        </p>
      </section>

      {/* LISTA DE SERVICIOS */}
      <section className="pb-24 px-6 max-w-7xl mx-auto space-y-24">
        
        {/* 1. CONSULTORÍA (La Joya) */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-yellow-900/10 border border-yellow-500/30 p-8 rounded-3xl">
          <div>
            <div className="inline-block px-3 py-1 bg-yellow-500 text-black font-bold text-xs rounded mb-4">PREMIUM</div>
            <h2 className="text-3xl font-bold text-white mb-4">Consultoría Empresarial 360º</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              No es solo software. Es estrategia. Analizamos tu negocio de arriba a abajo para detectar ineficiencias. 
              Diseñamos un plan a medida para reducir costes operativos y aumentar márgenes usando automatización profunda.
              Nosotros nos encargamos de la arquitectura del negocio para que tú solo te encargues de recoger beneficios.
            </p>
            <ul className="space-y-2 text-sm text-yellow-200/80 mb-8">
              <li>• Auditoría completa de procesos.</li>
              <li>• Diseño de flujos de trabajo automatizados.</li>
              <li>• Estrategia de crecimiento.</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-2xl border border-white/10 flex items-center justify-center h-full">
            <BrainCircuit className="w-24 h-24 text-yellow-500 opacity-80" />
          </div>
        </div>

        {/* 2. NEXO VOICE (El clásico) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-zinc-900 p-6 rounded-2xl border border-white/5 flex items-center justify-center h-full">
            <Phone className="w-20 h-20 text-blue-400" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white mb-4">Nexo Voice (Centralita IA)</h2>
            <p className="text-gray-400 mb-4">
              Ninguna llamada perdida, ninguna reserva olvidada. Instalamos un recepcionista virtual con Inteligencia Artificial capaz de mantener conversaciones fluidas y naturales.
            </p>
            <div className="space-y-4 text-sm text-gray-500">
               <p><strong className="text-white">Atención 24/7:</strong> Gestiona llamadas fuera de horario o cuando la línea está ocupada.</p>
               <p><strong className="text-white">Gestión de Agenda:</strong> Cierra reservas consultando disponibilidad real.</p>
               <p><strong className="text-white">Resolución de Dudas:</strong> Informa sobre menús, ubicación y horarios sin molestar al personal.</p>
            </div>
          </div>
        </div>

        {/* 3. NEXO FEEDBACK */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Nexo Feedback (Reputación)</h2>
            <p className="text-gray-400 mb-4">
              El escudo digital para tu negocio. Las reseñas negativas hunden la visibilidad. Nuestro sistema filtra a los clientes insatisfechos a un canal privado y potencia que los felices publiquen 5 estrellas en Google.
            </p>
            <p className="text-sm text-gray-500 italic">"Convierte quejas en mejoras privadas y felicitaciones en publicidad pública."</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5 flex items-center justify-center h-full">
            <ShieldCheck className="w-20 h-20 text-green-400" />
          </div>
        </div>

        {/* 4. WEB & APPS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-zinc-900 p-6 rounded-2xl border border-white/5 flex items-center justify-center h-full">
            <LayoutTemplate className="w-20 h-20 text-purple-400" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white mb-4">Desarrollo Web & Apps Express</h2>
            <p className="text-gray-400 mb-4">
              Si tu web parece de 1999, estás perdiendo dinero. Creamos webs y aplicaciones modernas, rápidas y optimizadas para venta en tiempo récord usando las últimas tecnologías de IA.
            </p>
          </div>
        </div>

      </section>

      {/* CONTACTO */}
      <section className="py-20 bg-zinc-950 px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-white text-center mb-10">¿Empezamos a trabajar?</h2>
             <ContactForm />
          </div>
      </section>

    </main>
  );
}