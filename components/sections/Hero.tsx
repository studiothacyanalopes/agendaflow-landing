import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const miniStats = [
  "Agenda online 24h",
  "Pix integrado",
  "Mobile premium",
  "7 dias grátis",
];

export default function Hero() {
  return (
    <section className="section-grid bg-radial-soft relative overflow-hidden">
      <div className="absolute left-[-80px] top-24 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-100/60 blur-3xl" />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <Sparkles className="h-4 w-4" />
              7 dias grátis para testar sem compromisso
            </div>

            <h1 className="reveal-up delay-1 mt-6 max-w-4xl text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
              Transforme sua agenda em{" "}
              <span className="text-[#16a34a]">crescimento real</span> para sua
              barbearia ou salão.
            </h1>

            <p className="reveal-up delay-2 mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              O AgendaFlow organiza seus agendamentos, profissionais, clientes e
              pagamentos em uma experiência premium. Mais controle, mais
              profissionalismo e menos confusão no WhatsApp.
            </p>

            <div className="reveal-up delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/cadastro" className="group">
                Testar 7 dias grátis
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Button>

              <Button href="#demonstracao" variant="secondary">
                Ver demonstração
              </Button>
            </div>

            <div className="reveal-up delay-4 mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="font-medium text-slate-900">R$ 49,90/mês</span>
              <span>•</span>
              <span>sem fidelidade</span>
              <span>•</span>
              <span>comece grátis</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {miniStats.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="animate-float absolute -left-6 top-6 hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <CalendarClock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Agendamento confirmado</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Corte + barba às 14:30
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-float-delay absolute -right-4 top-28 hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Pagamento</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Pix pendente
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-float-slow absolute bottom-6 left-0 hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-violet-50 p-3 text-violet-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Equipe organizada</p>
                  <p className="text-sm font-semibold text-slate-900">
                    Profissionais e horários
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border glass-card soft-shadow-lg animate-glow relative overflow-hidden rounded-[32px] p-3">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-100/70 to-transparent" />

              <div className="relative rounded-[28px] border border-slate-200 bg-white p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                      <CalendarClock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">AgendaFlow</p>
                      <p className="text-xs text-slate-500">
                        Painel do estabelecimento
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Online
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Agenda do dia</p>
                        <h3 className="text-lg font-bold tracking-[-0.03em] text-slate-900">
                          Hoje
                        </h3>
                      </div>
                      <div className="rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                        8 horários
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        ["09:00", "Corte Masculino", "Lucas"],
                        ["10:30", "Barba", "Henrique"],
                        ["14:30", "Corte + Barba", "Marcos"],
                        ["16:00", "Luzes Masculinas", "Pedro"],
                      ].map(([hour, service, client]) => (
                        <div
                          key={`${hour}-${service}`}
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"
                        >
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {service}
                            </p>
                            <p className="text-xs text-slate-500">{client}</p>
                          </div>
                          <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {hour}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Confirmações</p>
                          <p className="text-xl font-bold text-slate-900">92%</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                          <Smartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Link público</p>
                          <p className="text-base font-semibold text-slate-900">
                            Agendamento no celular
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">Plano</p>
                      <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-slate-900">
                        R$ 49,90
                      </p>
                      <p className="text-sm text-slate-500">por mês</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden">
              <div className="animate-marquee flex w-[200%] gap-4">
                {[...miniStats, ...miniStats, ...miniStats, ...miniStats].map(
                  (item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex h-11 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}