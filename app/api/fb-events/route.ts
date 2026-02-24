import { NextResponse } from 'next/server';

const PIXEL_ID = "904024115582171"; 
const ACCESS_TOKEN = "EAAmvmZB8qe40BQ29OOffj61ZByX5ZCmtFvwtd6QZAlRdy2j10Oq9ZAyfNa2uZCl2qbpSDkqId4NA7kr1rllLZA8Xk8c55BVLLzZAPqt2I2iHcVeaZBMS2uqFElhwXC5fMAdEnPTcItrUNhMJeF0a9hK0RXfA1cpK6YRseAcdMjb6axxhRRzZCfTYj1fFuS8ZCGPJQ4LSAZDZD"; // <--- ¡OJO! PEGA AQUÍ TU TOKEN

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventSourceUrl } = body;

    // Datos del usuario (IP y Navegador) para que Facebook sepa quién es
    // En Vercel, la IP viene en la cabecera 'x-forwarded-for'
    const clientIp = request.headers.get('x-forwarded-for') || "0.0.0.0";
    const userAgent = request.headers.get('user-agent') || "";

    const fbData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId, // Para que Facebook no cuente doble (Deduplicación)
          event_source_url: eventSourceUrl,
          action_source: "website",
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            // Aquí se podrían añadir cookies fbp/fbc si nos ponemos muy técnicos
          },
        },
      ],
      // Si estamos en test, usamos 'TEST'. En producción no ponemos nada.
      // test_event_code: "TEST1234" 
    };

    // Enviamos el chivatazo a Facebook directamente
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fbData),
      }
    );

    const data = await response.json();
    return NextResponse.json({ success: true, fb_response: data });

  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}