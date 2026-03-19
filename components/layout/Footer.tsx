import Container from "@/components/ui/Container";
import {
  CalendarClock,
  Instagram,
  Mail,
  MessageCircleMore,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-[#eef1ee]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.06),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_24%)]" />

      <Container className="relative z-10 py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:gap-8">
          {/* MARCA */}
          <div>
            <a href="#" className="group flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.14)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_40px_rgba(15,23,42,0.20)]">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%)]" />
                <CalendarClock className="relative h-5 w-5" />
              </div>

              <div className="leading-tight">
                <p className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-800 bg-clip-text text-[1.15rem] font-black tracking-[-0.045em] text-transparent">
                  AgendaFlow
                </p>
                <p className="text-sm font-medium text-slate-500">
                  Agendamento inteligente
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Uma experiência mais moderna, organizada e profissional para
              salões, barbearias, estúdios e clínicas que querem crescer com
              mais valor percebido.
            </p>
          </div>

          {/* PRODUTO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Produto
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="#beneficios"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Benefícios
              </a>
              <a
                href="#recursos"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Recursos
              </a>
              <a
                href="#demonstracao"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Demonstração
              </a>
              <a
                href="#preco"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Preço e pacotes
              </a>
            </div>
          </div>

          {/* EMPRESA */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Empresa
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="https://app.agendeflow.com/login"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Entrar
              </a>
              <a
                href="https://app.agendeflow.com/cadastro"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Testar 7 dias grátis
              </a>
              <a
                href="https://www.instagram.com/webdivision_/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* CONTATO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Contato
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="https://wa.me/5562994693465"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                <MessageCircleMore className="h-4 w-4 text-emerald-600" />
                WhatsApp comercial
              </a>

              <a
                href="mailto:webdivision23@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                <Mail className="h-4 w-4 text-slate-600" />
                webdivision23@gmail.com
              </a>

              <a
                href="https://www.instagram.com/webdivision_/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                <Instagram className="h-4 w-4 text-[#E1306C]" />
                @webdivision_
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} AgendaFlow. Todos os direitos reservados.
            </p>

            <p>
              Desenvolvido para negócios que querem operar com mais organização,
              profissionalismo e crescimento.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}