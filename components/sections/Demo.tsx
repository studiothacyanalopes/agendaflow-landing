import Image from "next/image";
import Container from "@/components/ui/Container";
import { Check, Smartphone } from "lucide-react";

const stats = [
  { value: "+24h", label: "agenda sempre acessível" },
  { value: "+controle", label: "na rotina da equipe" },
  { value: "+credibilidade", label: "para sua marca" },
  { value: "+resultado", label: "com menos improviso" },
];

const bullets = [
  "Link público para o cliente agendar sem complicação",
  "Escolha de serviços e horários em poucos toques",
  "Experiência moderna e adaptada ao mobile",
  "Reserva e pagamento com mais profissionalismo",
];

export default function Demo() {
  return (
    <section
      id="demonstracao"
      className="relative overflow-hidden bg-[#f4f5f2] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.07),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_22%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f97316]">
            Demonstração
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Seu cliente agenda com facilidade. Seu negócio cresce com mais organização.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            O AgendaFlow foi pensado para simplificar a experiência do cliente e
            fortalecer a operação de salão, barbearia, estúdio ou clínica.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="overflow-hidden rounded-[24px] border border-white/80 bg-white/88 px-5 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur"
            >
              <div
                className={`mb-4 h-1.5 w-14 rounded-full ${
                  index % 2 === 0 ? "bg-[#C8F169]" : "bg-[#f97316]"
                }`}
              />
              <p className="text-3xl font-black tracking-[-0.05em] text-slate-950">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          {/* ESQUERDA */}
          <div className="rounded-[34px] border border-white/80 bg-white/90 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-5">
            <div className="relative overflow-hidden rounded-[28px]">
              {/* altura controlada aqui, sem sobra */}
              <div className="relative aspect-[4/5] min-h-[420px] w-full sm:min-h-[520px]">
                <Image
                  src="/images/landing/demo-growth.jpg"
                  alt="Ambiente premium de salão ou barbearia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                  Mais imagem de marca. Menos improviso.
                </div>

                <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6">
                  <div className="max-w-[520px] rounded-[28px] bg-[#f97316] px-6 py-6 text-white shadow-[0_24px_60px_rgba(249,115,22,0.30)] sm:px-7 sm:py-7">
                    <h3 className="text-3xl font-black leading-[0.95] tracking-[-0.05em] sm:text-4xl">
                      Você ganha tempo e seu negócio continua vendendo.
                    </h3>

                    <p className="mt-4 max-w-[520px] text-sm leading-7 text-white/90 sm:text-base">
                      Mais organização no agendamento, mais confiança para o cliente
                      e uma operação muito mais profissional para crescer.
                    </p>

                    <a
                      href="https://app.agendeflow.com/cadastro"
                      className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C8F169] px-7 py-3 text-sm font-black text-slate-950 shadow-[0_10px_30px_rgba(200,241,105,0.24)] transition hover:-translate-y-0.5"
                    >
                      Testar 7 dias grátis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className="rounded-[34px] border border-white/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
            <div className="mx-auto w-full max-w-[420px]">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1f9d55]">
                  Fluxo do cliente
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  Um agendamento simples para o cliente e forte para o negócio.
                </h3>
              </div>

              <div className="relative mx-auto flex justify-center">
                <div className="absolute top-10 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl" />

                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-2.5 shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:rounded-[38px] sm:p-3">
                    <div className="rounded-[26px] bg-white p-4 sm:rounded-[32px] sm:p-5">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-xs text-slate-500">
                            AgendaFlow Booking
                          </p>
                          <p className="text-base font-black text-slate-950 sm:text-lg">
                            Novo agendamento
                          </p>
                        </div>

                        <div className="rounded-2xl bg-emerald-50 p-2 text-emerald-600">
                          <Smartphone className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs text-slate-500">Categoria</p>
                          <p className="mt-1 text-sm font-semibold text-slate-950 sm:text-base">
                            Cortes, beleza e estética
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs text-slate-500">Serviço</p>
                          <p className="mt-1 text-sm font-semibold text-slate-950 sm:text-base">
                            Atendimento premium
                          </p>
                          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                            45 min • confirmação rápida
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs text-slate-500">Data</p>
                            <p className="mt-1 text-sm font-semibold text-slate-950 sm:text-base">
                              18/03
                            </p>
                          </div>

                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-xs text-slate-500">Hora</p>
                            <p className="mt-1 text-sm font-semibold text-slate-950 sm:text-base">
                              14:30
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs text-slate-500">Pagamento</p>
                          <p className="mt-1 text-sm font-semibold text-slate-950 sm:text-base">
                            Pix antecipado
                          </p>
                        </div>

                        <button className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#22c55e] px-4 text-sm font-black text-white shadow-[0_10px_30px_rgba(34,197,94,0.22)] transition duration-200 hover:scale-[1.02] hover:bg-[#16a34a]">
                          Confirmar agendamento
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
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
          </div>
        </div>
      </Container>
    </section>
  );
}