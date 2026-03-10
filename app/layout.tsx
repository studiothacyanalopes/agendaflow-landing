import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgendaFlow | Agendamento online para barbearias e salões",
  description:
    "Sistema de agendamento online para barbearias, salões e estética. Organize agenda, clientes, profissionais e pagamentos em um só lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}