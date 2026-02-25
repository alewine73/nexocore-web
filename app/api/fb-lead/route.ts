import { NextResponse } from "next/server";
import crypto from "crypto";

const PIXEL_ID = process.env.PIXEL_ID!;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN!;

// Función para hashear datos como exige Meta
function sha256(data: string) {
  return crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, name, fbp, fbc, eventSourceUrl } = body;

    // IP y User-Agent
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "0.0.0.0";
    const userAgent = request.headers.get("user-agent") || "";

    // Construcción del evento Lead
    const fbData = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_id: "lead-" + Date.now(),
          event_source_url: eventSourceUrl,
          action_source: "website",

          user_data: {
            em: email ? sha256(email) : undefined,
            ph: phone ? sha256(phone) : undefined,
            fn: name ? sha256(name) : undefined,
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
          },
        },
      ],
    };

    // Enviar a Meta Conversion API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fbData),
      }
    );

    const data = await response.json();
    return NextResponse.json({ success: true, fb_response: data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}