"use client";

import { useEffect } from "react";

export default function TrackPageView() {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        // --- Leer cookies fbp y fbc ---
        const getCookie = (name: string) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop()!.split(";").shift();
          return undefined;
        };

        const fbp = getCookie("_fbp");
        const fbc = getCookie("_fbc");

        // --- Enviar evento al backend ---
        await fetch("/api/fb-events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventName: "PageView",
            eventSourceUrl: window.location.href,
            eventId: "pageview-" + new Date().getTime(),
            fbp,
            fbc,
          }),
        });

        console.log("Evento API enviado a Facebook");
      } catch (e) {
        console.error("Error enviando evento API", e);
      }
    };

    trackPageView();
  }, []);

  return null;
}