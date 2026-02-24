"use client";

import { useEffect } from "react";

export default function TrackPageView() {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        await fetch('/api/fb-events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventName: 'PageView',
            eventSourceUrl: window.location.href,
            eventId: 'pageview-' + new Date().getTime()
          })
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