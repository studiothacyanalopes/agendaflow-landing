"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phone = "5562994693465";
  const message =
    "Olá! Quero conhecer melhor o AgendaFlow para minha barbearia ou salão.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">
        Falar no WhatsApp
      </span>
    </a>
  );
}