import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Check } from "lucide-react";

const items = [
  "7 dias grátis para testar",
  "Agendamento online para clientes",
  "Gestão de serviços, profissionais e horários",
  "Página pública de reserva",
  "Experiência mobile premium",
  "Painel administrativo moderno",
];

export default function Pricing() {
  return (
    <section id="preco" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Preço simples
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Um valor acessível para elevar o nível do seu negócio.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Sem complicação, sem enrolação e com teste grátis para você validar na prática.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="gradient-border soft-shadow-lg rounded-[36px] bg-white p-3">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 sm:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Plano AgendaFlow
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-black tracking-[-0.06em] text-slate-900 sm:text-6xl">
                      R$ 49,90
                    </span>
                    <span className="pb-2 text-slate-500">/mês</span>
                  </div>

                  <p className="mt-3 text-base font-medium text-slate-700">
                    Teste grátis por 7 dias antes de decidir.
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Ideal para barbearias, salões, estética e negócios que querem
                    profissionalizar o agendamento.
                  </p>
                </div>

                <div className="w-full max-w-xs">
                  <Button
                    href="https://app.agendeflow.com/cadastro"
                    className="w-full"
                  >
                    Começar agora
                  </Button>

                  <p className="mt-3 text-center text-sm text-slate-500">
                    Ative, teste e veja funcionando no seu dia a dia.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{item}</p>
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