import Container from "@/components/ui/Container";
import { CalendarClock, ChevronDown } from "lucide-react";

const navItems = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#recursos", label: "Recursos" },
  { href: "#demonstracao", label: "Demonstração" },
  { href: "#preco", label: "Preço" },
];

export default function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#f4f5f2]/92 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#f4f5f2]/88">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_70%)]" />

        <Container className="relative max-w-[1280px]">
          <div className="flex h-[96px] items-center justify-between xl:h-[104px]">
            {/* LOGO */}
            <a href="#" className="group flex shrink-0 items-center gap-4">
              <div className="relative flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_20px_44px_rgba(15,23,42,0.22)] xl:h-[60px] xl:w-[60px]">
                <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_42%)]" />
                <div className="absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-0">
                  <div className="absolute inset-0 animate-pulse rounded-[20px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.16),transparent_58%)]" />
                </div>
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_62%)]" />
                </div>
                <CalendarClock className="relative h-[22px] w-[22px] transition duration-500 group-hover:scale-110 group-hover:rotate-6 xl:h-6 xl:w-6" />
              </div>

              <div className="leading-tight">
                <p className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-800 bg-clip-text text-[1.38rem] font-black tracking-[-0.05em] text-transparent transition duration-300 group-hover:from-emerald-700 group-hover:via-slate-900 group-hover:to-slate-950 xl:text-[1.55rem]">
                  AgendaFlow
                </p>
                <p className="text-[13px] font-medium text-slate-500 transition duration-300 group-hover:text-slate-600 xl:text-[14px]">
                  Agendamento inteligente
                </p>
              </div>
            </a>

            {/* NAV */}
            <nav className="hidden items-center gap-10 lg:flex xl:gap-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative text-[16px] font-semibold text-slate-700 transition duration-300 hover:text-slate-950 xl:text-[17px]"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-1/2 top-1/2 z-0 h-10 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 opacity-0 blur-sm transition-all duration-300 group-hover:w-[118%] group-hover:opacity-100" />
                  <span className="absolute left-0 top-[calc(100%+9px)] h-[2px] w-0 rounded-full bg-[#22c55e] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              <a
                href="#segmentos"
                className="group relative flex items-center gap-1.5 text-[16px] font-semibold text-slate-700 transition duration-300 hover:text-slate-950 xl:text-[17px]"
              >
                <span className="relative z-10">Segmentos</span>
                <ChevronDown className="relative z-10 h-4 w-4 transition duration-300 group-hover:translate-y-[1px] group-hover:rotate-180" />
                <span className="absolute left-1/2 top-1/2 z-0 h-10 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 opacity-0 blur-sm transition-all duration-300 group-hover:w-[118%] group-hover:opacity-100" />
                <span className="absolute left-0 top-[calc(100%+9px)] h-[2px] w-0 rounded-full bg-[#22c55e] transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3 xl:gap-4">
              <a
                href="https://app.agendeflow.com/login"
                className="hidden min-w-[122px] items-center justify-center rounded-full border border-slate-300/80 bg-white/40 px-7 py-3.5 text-[15px] font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white/90 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:inline-flex"
              >
                Entrar
              </a>

              <a
                href="https://app.agendeflow.com/cadastro"
                className="inline-flex min-w-[196px] items-center justify-center rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_34px_rgba(34,197,94,0.24)] transition duration-300 hover:-translate-y-0.5 hover:from-[#16a34a] hover:to-[#15803d] hover:shadow-[0_18px_42px_rgba(34,197,94,0.30)]"
              >
                Testar 7 dias grátis
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* espaçador para o header fixo não cobrir a página */}
      <div className="h-[96px] xl:h-[104px]" />
    </>
  );
}