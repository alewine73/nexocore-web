import Link from "next/link";
import { MessageCircle, CalendarCheck, Brain, Zap, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatbot IA para WhatsApp e Instagram | Cómo Funciona NexoCore",
  description: "Descubre cómo NexoCore instala un chatbot inteligente en tu WhatsApp e Instagram. Especialistas en fisioterapia y construcción. Valladolid, España.",
  keywords: "chatbot whatsapp automatización, cómo funciona chatbot, agente IA WhatsApp, respuesta automática 24/7, atención al cliente automatizada",
};

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            NEXO<span className="text-yellow-500">CORE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/como-funciona" className="text-sm font-bold text-yellow-500 transition-colors">
              Cómo Funciona
            </Link>
            <a href="/#para-quien" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Para Quién
            </a>
            <Link href="/#contacto" className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all text-sm">
              Ver Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HEADER --- */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Cómo automatizamos <span className="text-yellow-500">tu atención al cliente</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Un chatbot inteligente que responde, agenda citas y califica leads. Automático, 24/7, sin errores.
        </p>
      </section>

      {/* --- QUÉ HACE --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Cuatro Funcionalidades Clave</h2>
            <p className="text-gray-400 text-lg">Todo integrado en un solo sistema.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Funcionalidad 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/30 p-8 rounded-2xl hover:border-blue-500/60 transition-all">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <div className="h-12 w-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Respuesta instantánea 24/7</h3>
                <p className="text-gray-300">En WhatsApp e Instagram, siempre hay alguien respondiendo. A las 2 de la mañana, los domingos, siempre.</p>
              </div>
            </div>

            {/* Funcionalidad 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 p-8 rounded-2xl hover:border-green-500/60 transition-all">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                <div className="h-12 w-12 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mb-6">
                  <CalendarCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agenda y confirma citas automáticamente</h3>
                <p className="text-gray-300">El bot ve tu disponibilidad, deja que el cliente elija hora y guarda la cita. Hecho.</p>
              </div>
            </div>

            {/* Funcionalidad 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 p-8 rounded-2xl hover:border-purple-500/60 transition-all">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="h-12 w-12 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-6">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Responde preguntas frecuentes con tu información</h3>
                <p className="text-gray-300">Le entrenamos con tus datos: precios, servicios, horarios. El bot responde como si fueras tú.</p>
              </div>
            </div>

            {/* Funcionalidad 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/30 p-8 rounded-2xl hover:border-orange-500/60 transition-all">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                <div className="h-12 w-12 bg-orange-500/20 text-orange-400 rounded-lg flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Te avisa solo cuando necesitas intervenir</h3>
                <p className="text-gray-300">Las consultas complejas te llegan a ti. El 95% de mensajes, el bot lo maneja solo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CASO FISIOTERAPEUTAS --- */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Para Fisioterapeutas</h2>
            <p className="text-gray-400 text-lg">Un ejemplo real de cómo funciona.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">El escenario típico:</h3>
              <p className="text-gray-300 leading-relaxed">
                Un potencial paciente te encuentra por Google/Instagram a las 10 de la noche. Escribe: "¿Cuánto cuesta sesión de espalda?"
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Con NexoCore:</strong> Tu chatbot responde en 2 segundos con tu lista de precios, duración, info del seguro. El paciente, satisfecho, elige hora y automáticamente aparece en tu agenda.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Sin NexoCore:</strong> Mañana ves el mensaje. Llama cuando puedes. El paciente ya tiene cita en otra clínica.
              </p>
              <div className="pt-6 border-t border-gray-700">
                <p className="text-yellow-500 font-bold text-lg">Resultado: 2-3 pacientes nuevos por semana que antes perdías.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 p-8 rounded-2xl">
              <h4 className="text-white font-bold mb-4">Lo que hace el chatbot:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Responde "¿Cuánto cuesta?" con tus tarifas exactas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Explica si cubre el seguro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Deja elegir día y hora disponibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Confirma la cita automáticamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Envía recordatorio 1 día antes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CASO CONSTRUCTORAS --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Para Constructoras</h2>
            <p className="text-gray-400 text-lg">Cómo evitas perder contactos comerciales.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/30 p-8 rounded-2xl order-2 md:order-1">
              <h4 className="text-white font-bold mb-4">Lo que hace el chatbot:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Pregunta si es consulta de obra, presupuesto o información</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Responde plazos y presupuestos aproximados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Agencia visita de obra si lo solicita</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Te notifica si hay consulta urgente o importante</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Guarda datos del contacto automáticamente</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-white">El escenario típico:</h3>
              <p className="text-gray-300 leading-relaxed">
                Un constructor buscando presupuesto te contacta por WhatsApp a las 7 de la mañana. Pregunta: "¿Cuánto me cuesta una reforma de 50m²?"
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Con NexoCore:</strong> Tu chatbot responde con datos típicos, le propone visita de obra. El contacto está guardado y clasificado en tu CRM. Tú ves la notificación cuando quieras.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Sin NexoCore:</strong> Ves el mensaje horas después. Llama cuando puedes. Ese contacto ya pidió presupuesto en 3 lugares más.
              </p>
              <div className="pt-6 border-t border-gray-700">
                <p className="text-yellow-500 font-bold text-lg">Resultado: Nunca pierdes un lead. Siempre respondes primero.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECNOLOGÍA --- */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Construido sobre lo mejor</h2>
            <p className="text-gray-400 text-lg">Tecnología probada, confiable y escalable.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp Business API</h3>
                <p className="text-gray-300">Conectado directamente con WhatsApp. Tus mensajes llegan con verificación oficial y el cliente sabe que habla con tu negocio.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">IA Conversacional Avanzada</h3>
                <p className="text-gray-300">El chatbot entiende contexto, intención y matices. Habla como un humano, no como un bot mecánico.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Sincronización en Tiempo Real</h3>
                <p className="text-gray-300">Tu calendario, tus clientes, tus datos. Todo sincronizado automáticamente. Una única fuente de verdad.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Instagram Automático</h3>
                <p className="text-gray-300">El chatbot también funciona en Instagram. Un único sistema, dos canales cubiertos.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Escala Infinita</h3>
                <p className="text-gray-300">Un mensaje o mil mensajes simultáneos. El sistema responde igual de rápido. Sin demoras, sin caídas.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Análisis & Reportes</h3>
                <p className="text-gray-300">Ve métricas: mensajes atendidos, citas agendadas, leads cualificados. Datos que importan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              ¿Quieres verlo en acción?
            </h2>
            <p className="text-2xl text-yellow-500 font-medium">
              Te mostramos una demo en 15 minutos.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Personalizada para tu sector. Verás exactamente cómo funcionaría tu chatbot, qué respondería a tus clientes y cómo se integraba con tu negocio.
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
                  <a href="https://wa.me/34684709825" className="text-lg hover:text-yellow-400 transition-colors">684 70 98 25</a>
                </div>
              </div>
            </div>
          </div>

          {/* === FORMULARIO === */}
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
