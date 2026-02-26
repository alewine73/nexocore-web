// --- UTILIDAD PARA LEER COOKIES ---
function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift();
  return undefined;
}

// --- ENVIAR EVENTO A META ---
async function sendEvent(eventName: string, customData: any = {}) {
  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");

  await fetch("/api/fb-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventSourceUrl: window.location.href,
      userAgent: navigator.userAgent,
      fbp,
      fbc,
      customData,
    }),
  });
}

// --- SCROLL DEPTH ---
let lastScrollSent = 0;
window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  const rounded = Math.floor(scrollPercent / 10) * 10;

  if (rounded > lastScrollSent) {
    lastScrollSent = rounded;
    sendEvent("ScrollDepth", { percent: rounded });
  }
});

// --- CLICK EN TODO ---
window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  sendEvent("Click", {
    tag: target.tagName,
    id: target.id,
    classes: target.className,
    text: target.innerText?.slice(0, 50),
  });
});

// --- TIEMPO EN PÁGINA ---
setTimeout(() => sendEvent("TimeOnPage", { seconds: 10 }), 10000);
setTimeout(() => sendEvent("TimeOnPage", { seconds: 30 }), 30000);
setTimeout(() => sendEvent("TimeOnPage", { seconds: 60 }), 60000);
setTimeout(() => sendEvent("TimeOnPage", { seconds: 120 }), 120000);

// --- EXIT INTENT ---
document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 0) sendEvent("ExitIntent");
});

// --- SELECCIÓN DE TEXTO ---
document.addEventListener("selectionchange", () => {
  const text = window.getSelection()?.toString();
  if (text && text.length > 10) {
    sendEvent("TextSelected", { text: text.slice(0, 100) });
  }
});

// --- COPIAR / PEGAR ---
document.addEventListener("copy", () => sendEvent("Copy"));
document.addEventListener("paste", () => sendEvent("Paste"));