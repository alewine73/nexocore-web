import { NextResponse } from "next/server";
import crypto from "crypto";

const N8N_WEBHOOK_URL = "https://machine.nexocore.es/webhook/Contacto";
const PIXEL_ID = process.env.PIXEL_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

function sha256(data: string) {
  return crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, mensaje, fbp, fbc, eventSourceUrl, eventId } = body;

    if (!nombre || !email || !telefono) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (!eventId || typeof eventId !== "string") {
      return NextResponse.json({ error: "Falta eventId para deduplicación Meta" }, { status: 400 });
    }

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, empresa, email, telefono, mensaje }),
    });

    if (!n8nResponse.ok) {
      return NextResponse.json({ error: "Error al enviar el formulario" }, { status: 502 });
    }

    if (PIXEL_ID && ACCESS_TOKEN) {
      try {
        const clientIp =
          request.headers.get("x-forwarded-for")?.split(",")[0] || "0.0.0.0";
        const userAgent = request.headers.get("user-agent") || "";

        const capiPayload = {
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              event_source_url: eventSourceUrl,
              action_source: "website",
              user_data: {
                em: sha256(email),
                ph: sha256(normalizePhone(telefono)),
                client_ip_address: clientIp,
                client_user_agent: userAgent,
                ...(fbp && { fbp }),
                ...(fbc && { fbc }),
              },
            },
          ],
        };

        const metaResponse = await fetch(
          `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(capiPayload),
          }
        );

        if (!metaResponse.ok) {
          const metaError = await metaResponse.text();
          console.error("Meta CAPI error:", metaError);
        }
      } catch (metaError) {
        console.error("Meta CAPI error:", metaError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
