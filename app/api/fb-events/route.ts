import { NextResponse } from "next/server";

const PIXEL_ID = process.env.PIXEL_ID!;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventSourceUrl, fbp, fbc, customData } = body;

    // Obtener IP y User-Agent
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0] || "0.0.0.0";
    const userAgent = request.headers.get("user-agent") || "";

    // Construcción del evento para Meta
    const fbData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: eventSourceUrl,
          action_source: "website",

          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
          },

          custom_data: customData || {},
        },
      ],
    };

    // Enviar a Meta Conversion API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fbData),
      }
    );

    const data = await response.json();

    return NextResponse.json({ success: true, fb_response: data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error },
      { status: 500 }
    );
  }
}