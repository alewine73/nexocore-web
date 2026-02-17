import Link from "next/link";
import ContactForm from "@/components/ContactForm";
export default function FamiliaDoradaPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-yellow-600/20 blur-[120px] opacity-70 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Bienvenido a la Familia Dorada
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Un espacio donde pequeñas y medianas empresas crecen acompañadas, con claridad,
            transparencia y un equipo que se implica de verdad en su negocio.
          </p>

          <a
            href="#unirse"
            className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-full text-lg hover:bg-yellow-400 transition-all shadow-[0_0_25px_rgba(234,179,8,0.4)]"
          >
            Unirse a la Familia Dorada
          </a>
        </div>
      </section>

      {/* SECCIÓN 1 – POR QUÉ EXISTE */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-white">Por qué existe la Familia Dorada</h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            Muchas empresas sienten que avanzan solas. Toman decisiones sin una guía clara,
            prueban estrategias que no funcionan y pierden tiempo en tareas que no generan
            crecimiento real. La Familia Dorada nace para cambiar eso.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Aquí no vienes a comprar un servicio. Vienes a formar parte de un equipo que te
            acompaña, te entiende y te ayuda a tomar decisiones inteligentes para que tu negocio
            avance con seguridad.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2 – FILOSOFÍA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-white">Nuestra filosofía</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-lg text-gray-400 leading-relaxed">
              Creemos en la cercanía, en la transparencia y en construir relaciones que duren.
              No buscamos clientes rápidos, buscamos negocios con los que podamos crecer juntos.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Cada empresa es única. Por eso analizamos tu situación real, tus recursos, tus
              objetivos y tu potencial antes de proponerte cualquier solución.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 – QUÉ SIGNIFICA PERTENECER */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-white">Qué significa pertenecer</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                Significa tener un equipo que te acompaña en cada paso.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Significa sentir que tu negocio importa.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Significa tomar decisiones con claridad, no con dudas.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                Significa tener acceso a soluciones reales de IA y marketing adaptadas a ti.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Significa crecer acompañado, no solo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 – BENEFICIOS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-white">Lo que obtienes al unirte</h2>

          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-400 leading-relaxed">
            <li>✔ Acompañamiento cercano y humano</li>
            <li>✔ Estrategia clara y personalizada</li>
            <li>✔ Implementación real de IA en tu negocio</li>
            <li>✔ Marketing diseñado para tu empresa</li>
            <li>✔ Optimización continua</li>
            <li>✔ Comunicación directa con nuestro equipo</li>
          </ul>
        </div>
      </section>

      {/* SECCIÓN 5 – PROCESO */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-white">Cómo funciona</h2>

          <ol className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <li>1. Rellenas el formulario para unirte</li>
            <li>2. Analizamos tu negocio y tus necesidades</li>
            <li>3. Te proponemos un plan claro y transparente</li>
            <li>4. Implementamos las soluciones contigo</li>
            <li>5. Te acompañamos en cada paso del crecimiento</li>
          </ol>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="unirse" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Únete a la Familia Dorada</h2>
          <p className="text-lg text-gray-400 mt-4">
            Rellena este formulario y nos pondremos en contacto contigo muy rápidamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

    </main>
  );
}