import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { CalendarClock } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <CalendarClock className="h-5 w-5" />
            </div>

            <div>
              <p className="text-base font-bold tracking-[-0.03em] text-slate-900">
                AgendaFlow
              </p>
              <p className="text-xs text-slate-500">
                Agendamento inteligente
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Benefícios
            </a>
            <a href="#recursos" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Recursos
            </a>
            <a href="#demonstracao" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Demonstração
            </a>
            <a href="#preco" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Preço
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/login" variant="secondary" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button href="/cadastro">Testar 7 dias grátis</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}