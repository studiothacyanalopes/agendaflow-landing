import Container from "@/components/ui/Container";
import { Check, Smartphone } from "lucide-react";

const bullets = [
  "Link público para o cliente agendar sem complicação",
  "Escolha de serviços e horários em poucos toques",
  "Visual moderno, rápido e adaptado ao mobile",
  "Resumo do agendamento e pagamento mais profissional",
];

export default function Demo() {
  return (
    <section
      id="demonstracao"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Demonstração
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
              Seu cliente agenda com facilidade. Sua equipe trabalha com mais
              controle.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              O AgendaFlow foi pensado para deixar o fluxo simples para o cliente
              e forte para o negócio. Menos atrito para agendar, mais
              profissionalismo no atendimento.
            </p>

            <div className="mt-8 space-y-4 text-left">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full justify-center">
            <div className="absolute left-1/2 top-8 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-100/80 blur-3xl sm:h-64 sm:w-64 lg:h-80 lg:w-80" />

            <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
              <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-2.5 shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:rounded-[36px] sm:p-3">
                <div className="rounded-[24px] bg-white p-3 sm:rounded-[30px] sm:p-4 md:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] text-slate-500 sm:text-xs">
                        Barbearia Prime
                      </p>
                      <p className="text-base font-bold text-slate-900 sm:text-lg">
                        Novo agendamento
                      </p>
                    </div>

                    <div className="shrink-0 rounded-2xl bg-emerald-50 p-2 text-emerald-600">
                      <Smartphone className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:rounded-3xl sm:p-4">
                      <p className="text-[11px] text-slate-500 sm:text-xs">
                        Categoria
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                        Cortes Masculinos
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:rounded-3xl sm:p-4">
                      <p className="text-[11px] text-slate-500 sm:text-xs">
                        Serviço
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                        Corte + Barba
                      </p>
                      <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        45 min • R$ 55,00
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:rounded-3xl sm:p-4">
                        <p className="text-[11px] text-slate-500 sm:text-xs">
                          Data
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                          18/03
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:rounded-3xl sm:p-4">
                        <p className="text-[11px] text-slate-500 sm:text-xs">
                          Hora
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                          14:30
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:rounded-3xl sm:p-4">
                      <p className="text-[11px] text-slate-500 sm:text-xs">
                        Pagamento
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                        Pix antecipado
                      </p>
                    </div>

                    <button className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-[#22c55e] px-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.24)] transition-transform duration-200 hover:scale-[1.02] sm:h-12">
                      Confirmar agendamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}