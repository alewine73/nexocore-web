"use client";

import { useState } from "react";
import Link from "next/link";
function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift();
  return undefined;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("loading");

  try {
    // 1. Enviar a tu webhook de N8N (como siempre)
    const response = await fetch("https://machine.nexocore.es/webhook/Contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // 2. Enviar a Meta Conversion API (nuestro plugin)
    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");

    await fetch("/api/fb-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        phone: formData.telefono,
        name: formData.nombre,
        fbp,
        fbc,
        eventSourceUrl: window.location.href,
      }),
    });

    // 3. Estado final del formulario
    if (response.ok) {
      setStatus("success");
      setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
      
      {/* --- EFECTO DE LUZ DORADA (El toque Premium) --- */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 blur-[60px] rounded-full pointer-events-none"></div>

      {status === "success" ? (
        <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
          <div className="h-20 w-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">¡Mensaje Recibido!</h3>
          <p className="text-gray-400 max-w-xs mx-auto">Gracias por contactar con NexoCore. Analizaremos tu caso y te llamaremos en menos de 24 horas.</p>
          <button onClick={() => setStatus("idle")} className="mt-8 text-yellow-500 hover:text-yellow-300 font-bold underline underline-offset-4 transition-colors">
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Nombre</label>
              <input required name="nombre" value={formData.nombre} onChange={handleChange} type="text" placeholder="Tu nombre" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all placeholder:text-gray-600" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Empresa</label>
              <input required name="empresa" value={formData.empresa} onChange={handleChange} type="text" placeholder="Nombre negocio" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all placeholder:text-gray-600" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
            <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="tu@email.com" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all placeholder:text-gray-600" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-medium ml-1">Teléfono</label>
            <input required name="telefono" value={formData.telefono} onChange={handleChange} type="tel" placeholder="+34 600 000 000" className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all placeholder:text-gray-600" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-medium ml-1">¿Qué necesitas?</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} placeholder="Cuéntanos brevemente tu caso..." className="w-full bg-zinc-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:bg-zinc-900 transition-all resize-none placeholder:text-gray-600"></textarea>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(234,179,8,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  ENVIANDO...
                </>
              ) : (
                "ENVIAR SOLICITUD"
              )}
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">
              Al enviar aceptas nuestra <Link href="/legal" className="underline hover:text-gray-400 transition-colors">política de privacidad</Link>.
            </p>
            {status === "error" && (
              <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                ❌ Hubo un error al conectar con el servidor. Por favor, inténtalo de nuevo o escríbenos por WhatsApp.
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}