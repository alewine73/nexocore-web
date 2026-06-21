import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          NEXO<span className="text-yellow-500">CORE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/como-funciona" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Cómo Funciona
          </Link>

          <a href="/#para-quien" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Para Quién
          </a>

          <a href="/#contacto" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contacto
          </a>

          <a href="/#contacto" className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
            Ver Demo Gratuita
          </a>
        </div>

      </div>
    </nav>
  );
}
