"use client";

const WHATSAPP_URL = "https://wa.me/34684709825";

type WhatsAppLeadLinkProps = {
  className?: string;
  children: React.ReactNode;
};

export default function WhatsAppLeadLink({ className, children }: WhatsAppLeadLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }

    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <a href={WHATSAPP_URL} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
