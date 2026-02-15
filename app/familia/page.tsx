import Link from "next/link";
import { MessageSquare, Heart, Lock } from "lucide-react";

export default function FamiliaPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-sans selection:bg-yellow-500/30">
      
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">NEXO<span className="text-yellow-500">CORE</span></Link>
          <Link href="/#contacto" className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm">Unirse</Link>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          La Familia <span className="text-yellow-500">Dorada</span>.
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          "Los amigos se cuentan con los dedos de una mano, y en NexoCore dispondréis de atención profesional y única siempre."
        </p>

        <div className="grid gap-8 text-left">
          <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl flex gap-6 items-start hover:border-yellow-500/50 transition-colors">
            <MessageSquare className="w-10 h-10 text-green-500 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Chat Privado de Asistencia</h3>
              <p>No eres un ticket de soporte. Tendrás un grupo de WhatsApp directo con nosotros y nuestros asistentes para apoyarte en todo momento.</p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl flex gap-6 items-start hover:border-yellow-500/50 transition-colors">
            <Heart className="w-10 h-10 text-red-500 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Trato Cercano y Personal</h3>
              <p>Crecemos juntos. Si tú ganas, nosotros ganamos. Nos implicamos en tu negocio como si fuera nuestro.</p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl flex gap-6 items-start hover:border-yellow-500/50 transition-colors">
            <Lock className="w-10 h-10 text-yellow-500 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Acceso a Herramientas Exclusivas</h3>
              <p>Te daremos más de lo que puedes imaginar. Acceso a nuestra tecnología interna y estrategias que no compartimos con nadie más.</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <a href="mailto:jssbusinessnow@gmail.com" className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold text-xl rounded-full hover:bg-yellow-400 transition-all shadow-lg">
            Quiero entrar en la Familia
          </a>
        </div>
      </section>

    </main>
  );
}