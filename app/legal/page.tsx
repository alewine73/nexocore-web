import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 p-8 md:p-24 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* CABECERA CON BOTÓN DE VOLVER */}
        <div className="border-b border-white/10 pb-8">
          <Link href="/" className="group text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-flex items-center text-sm font-medium">
            <span className="group-hover:-translate-x-1 transition-transform duration-300 mr-2">←</span> 
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Términos Legales y Privacidad
          </h1>
          <p className="text-gray-500">Última actualización: Enero 2026</p>
        </div>

        {/* 1. AVISO LEGAL */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="h-8 w-1 bg-purple-500 rounded-full"></span>
            1. Aviso Legal
          </h2>
          <p className="leading-relaxed text-gray-400">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), informamos que la titularidad de este sitio web (nexocore.es) corresponde a:
          </p>
          
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 space-y-3 shadow-lg">
            <p><span className="text-white font-semibold">Razón Social / Titular:</span> [Sergio Cid BArtolomé]</p>
            <p><span className="text-white font-semibold">NIF/DNI:</span> [09294720Y]</p>
            <p><span className="text-white font-semibold">Domicilio Fiscal:</span> [C. de Jose Garrote Tebar 23. 47014 Valladolid, España]</p>
            <p><span className="text-white font-semibold">Email de contacto:</span> jssbusinessnow@gmail.com</p>
            <p><span className="text-white font-semibold">Actividad:</span> Servicios de automatización y desarrollo de software.</p>
          </div>
        </section>

        {/* 2. PRIVACIDAD */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="h-8 w-1 bg-green-500 rounded-full"></span>
            2. Política de Privacidad (RGPD)
          </h2>
          <div className="space-y-4 leading-relaxed text-gray-400">
            <p>
              En <strong>NexoCore</strong>, nos tomamos la privacidad muy en serio. No vendemos tus datos a terceros bajo ningún concepto.
            </p>
            
            <h3 className="text-xl text-white font-semibold mt-6">Uso de Tecnologías de Voz (IA)</h3>
            <p>
              Nuestros servicios de recepción telefónica utilizan tecnología de Inteligencia Artificial (procesada a través de Vapi.ai y proveedores LLM seguros en Europa). Al interactuar con nuestro asistente telefónico, el usuario es informado y consiente el procesamiento de su audio con la única finalidad de gestionar su reserva o consulta.
            </p>
            
            <h3 className="text-xl text-white font-semibold mt-6">Finalidad de los datos</h3>
            <p>
              Los datos recogidos (nombre, teléfono, detalles de reserva) se utilizan única y exclusivamente para la prestación del servicio contratado (gestión de agenda y atención al cliente) y se almacenan en servidores seguros dentro de la Unión Europea (Hetzner, Alemania).
            </p>

            <h3 className="text-xl text-white font-semibold mt-6">Tus Derechos</h3>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición enviando un email a contacto@nexocore.es.
            </p>
          </div>
        </section>

        {/* 3. COOKIES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="h-8 w-1 bg-blue-500 rounded-full"></span>
            3. Política de Cookies
          </h2>
          <p className="leading-relaxed text-gray-400">
            Utilizamos cookies técnicas imprescindibles para el funcionamiento de la web y cookies analíticas anónimas para medir el tráfico y mejorar nuestros servicios. No utilizamos cookies publicitarias invasivas. Puedes configurar tu navegador para bloquearlas, aunque algunas secciones de la web podrían no funcionar correctamente.
          </p>
        </section>

      </div>
    </main>
  );
}