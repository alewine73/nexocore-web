"use client";

import { useState } from "react";
import { getCookie } from "@/utils/cookies";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fbp = getCookie("_fbp");
    const fbc = getCookie("_fbc");

    await fetch("/api/fb-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        phone,
        name,
        fbp,
        fbc,
        eventSourceUrl: window.location.href,
      }),
    });

    alert("Lead enviado correctamente");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}