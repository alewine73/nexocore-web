import React from 'react';
import { Phone, Star, Brain, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white font-sans">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            NEXO<span className="text-purple-500">CORE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#servicios" className="hover:text-white transition">Servicios</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <a href="#planes" className="hover:text-white transition">Planes</a>
          </div>
          {/* BOTÓN CONTACTO - WHATSAPP */}
          <a 
            href="https://wa.me/34644025037" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-xs font-medium text-purple-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Agencia de Automatización IA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Automatiza tu negocio.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Recupera tu tiempo.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
            Implementamos empleados digitales que atienden llamadas, gestionan reseñas y protegen la reputación de tu negocio 24/7.
          </p>

          {/* ETIQUETA VALLADOLID */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-10 font-medium tracking-wide">
            📍 SERVICIO EXCLUSIVO EN <span className="text-purple-400 font-bold">VALLADOLID</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* BOTÓN AGENDAR */}
            <a 
              href="https://wa.me/34644025037?text=Hola,%20quiero%20agendar%20una%20consultoría" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              Agendar Consultoría <ArrowRight size={20} />
            </a>
            
            <a 
              href="#demo" 
              className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition flex items-center justify-center"
            >
              Escuchar Demo
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS / PROBLEMAS */}
      <section id="servicios" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Soluciones para Empresas Reales</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="text-yellow-500" size={32} />,
                title: "Reputación Blindada",
                desc: "Filtramos las reseñas negativas antes de que lleguen a Google y potenciamos las de 5 estrellas automáticamente."
              },
              {
                icon: <Phone className="text-green-500" size={32} />,
                title: "Centralita IA",
                desc: "Tu teléfono nunca comunica. Nuestra IA atiende, resuelve dudas y agendá citas en tu calendario real."
              },
              {
                icon: <Brain className="text-blue-500" size={32} />,
                title: "Consultoría a Medida",
                desc: "Conectamos tu software de facturación, CRM o TPV para que dejes de hacer tareas repetitivas."
              }
            ].map((item, i) => (
              <div key={i} className="bg-black border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition duration-300">
                <div className="bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO DE AUDIO */}
     {/* --- SECCIÓN DEMO DE AUDIO PREMIUM (NexoCore) --- */}
<section id="demo" className="w-full py-24 bg-black flex justify-center items-center relative overflow-hidden">
  
  {/* Fondo con brillo sutil */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />

  <div className="max-w-4xl w-full px-4 text-center relative z-10">
    
    {/* Títulos */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
      Escucha el Futuro
    </h2>
    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
      Así suena nuestro recepcionista virtual "José" cerrando una reserva real sin intervención humana.
    </p>

    {/* Tarjeta del Reproductor */}
    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 max-w-lg mx-auto shadow-2xl relative overflow-hidden group hover:border-gray-700 transition-all duration-300">
      
      <div className="flex flex-col gap-6">
        
        {/* Cabecera con Icono y Texto */}
        <div className="flex items-center gap-5">
          {/* Icono Teléfono Verde Parpadeante */}
          <div className="relative h-14 w-14 rounded-full bg-green-900/20 flex items-center justify-center border border-green-500/20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20"></span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 relative z-10">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 4.5V4.5z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Textos */}
          <div className="text-left">
            <p className="text-xs text-green-500 uppercase tracking-wider font-bold mb-1 animate-pulse">● Grabación en directo</p>
            <h3 className="text-white font-bold text-xl">Gestión de Reserva</h3>
          </div>
        </div>

        {/* Reproductor de Audio */}
        <audio controls className="w-full h-12 rounded-lg opacity-90 hover:opacity-100 transition-opacity" style={{ filter: "invert(1) hue-rotate(180deg) contrast(1.2)" }}>
          <source src="/demo.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>

      </div>
    </div>
    
    <p className="mt-8 text-sm text-gray-500 font-medium">
      Audio real sin editar • Tiempo de respuesta: &lt;500ms
    </p>
  </div>
</section>

      {/* PLANES Y PRECIOS */}
      <section id="planes" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Catálogo de Servicios</h2>
          <p className="text-center text-gray-400 mb-16">Elige la solución que tu negocio necesita hoy.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* SERVICIO 1: NEXO FEEDBACK */}
            <div className="border border-white/10 rounded-3xl p-6 hover:bg-white/5 transition flex flex-col">
              <h3 className="text-xl font-bold text-gray-400 mb-2">Nexo Feedback</h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-white">90€ <span className="text-sm font-normal text-gray-400">/mes</span></div>
                <div className="text-xs text-gray-500">+ 350€ Setup único</div>
              </div>
              <p className="text-sm text-gray-400 mb-6 border-b border-white/10 pb-6">
                El escudo para tu reputación en Google. Filtra quejas y consigue 5 estrellas.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {['QR de valoración en mesa', 'Filtrado de reseñas malas', 'Potenciador de reseñas Google', 'Informe mensual'].map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                    <ShieldCheck size={16} className="text-purple-500" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/34644025037?text=Me%20interesa%20Nexo%20Feedback" target="_blank" className="block w-full border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white hover:text-black transition text-center text-sm">
                Contratar Feedback
              </a>
            </div>

            {/* SERVICIO 2: NEXO VOICE (DESTACADO) */}
            <div className="border border-purple-500 rounded-3xl p-6 bg-purple-500/10 relative flex flex-col transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Más Vendido
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nexo Voice</h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-white">150€ <span className="text-sm font-normal text-gray-400">/mes</span></div>
                <div className="text-xs text-purple-300 font-bold">+ 500€ Setup único</div>
              </div>
              <p className="text-sm text-gray-300 mb-6 border-b border-white/10 pb-6">
                IA entrenada a medida con los datos de tu negocio. Responde y gestiona la agenda exactamente como tú quieres.

              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {['Atención telefónica 24/7', 'Voz Humana Ultrarealista', 'Gestión de Agenda/Reservas', 'Desvío de llamadas urgentes'].map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-white">
                    <Phone size={16} className="text-purple-400" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/34644025037?text=Quiero%20el%20servicio%20Nexo%20Voice" target="_blank" className="block w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 transition text-center text-sm">
                Contratar Voz
              </a>
            </div>

            {/* SERVICIO 3: CONSULTORÍA */}
            <div className="border border-white/10 rounded-3xl p-6 hover:bg-white/5 transition flex flex-col hover:border-purple-500/50">
              <h3 className="text-xl font-bold text-blue-300 mb-2">A Medida</h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-white">Presupuesto</div>
                <div className="text-xs text-gray-500">Consultoría Estratégica</div>
              </div>
              <p className="text-sm text-gray-400 mb-6 border-b border-white/10 pb-6">
                Para empresas que necesitan conectar software o flujos complejos.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {['Auditoría de procesos', 'Conexión de APIs y Software', 'CRMs personalizados', 'Ahorro de costes operativos'].map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                    <Brain size={16} className="text-blue-500" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/34644025037?text=Hola,%20tengo%20un%20proyecto%20a%20medida" target="_blank" className="block w-full border border-blue-500 text-blue-400 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition text-center text-sm">
                Pedir Presupuesto
              </a>
            </div>

          </div>
        </div>
        {/* --- SECCIÓN GARANTÍA --- */}
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
      </section>

     {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        <p>&copy; 2026 NexoCore. Todos los derechos reservados.</p>
        
        <div className="mt-4 flex justify-center gap-6">
          <p>Valladolid, España 🇪🇸</p>
          <span>|</span>
          <a href="/legal" className="text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4 transition-colors">
            Política de Privacidad y Aviso Legal
          </a>
        </div>
      </footer>

      {/* CIERRES FINALES */}
    </div>
  );
}