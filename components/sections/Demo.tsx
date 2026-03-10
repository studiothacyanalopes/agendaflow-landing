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
    <section id="demonstracao" className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Demonstração
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              Seu cliente agenda com facilidade. Sua equipe trabalha com mais controle.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              O AgendaFlow foi pensado para deixar o fluxo simples para o cliente e
              forte para o negócio. Menos atrito para agendar, mais profissionalismo
              no atendimento.
            </p>

            <div className="mt-8 space-y-4">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-4 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100 blur-3xl" />

            <div className="relative mx-auto max-w-sm rounded-[40px] border border-slate-200 bg-slate-950 p-3 shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
              <div className="rounded-[32px] bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Barbearia Prime</p>
                    <p className="text-lg font-bold text-slate-900">
                      Novo agendamento
                    </p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-2 text-emerald-600">
                    <Smartphone className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Categoria</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Cortes Masculinos
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Serviço</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Corte + Barba
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      45 min • R$ 55,00
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">Data</p>
                      <p className="mt-1 font-semibold text-slate-900">
                        18/03
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">Hora</p>
                      <p className="mt-1 font-semibold text-slate-900">
                        14:30
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Pagamento</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Pix antecipado
                    </p>
                  </div>

                  <button className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#22c55e] text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.24)]">
                    Confirmar agendamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}