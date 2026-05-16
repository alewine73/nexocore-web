import Link from "next/link";
import { Star, Award } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          NEXO<span className="text-yellow-500">CORE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/servicios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Nuestros Servicios
          </Link>

          <Link href="/casos-de-exito" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <Award size={16} /> Casos de Éxito
          </Link>

          <Link href="/familia" className="text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-2">
            <Star size={16} /> Familia Dorada
          </Link>

          <a href="/#contacto" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
            Agendar Auditoría
          </a>
        </div>

      </div>
    </nav>
  );
}
