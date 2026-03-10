import Container from "@/components/ui/Container";
import { CalendarX2, MessageCircleMore, WalletCards } from "lucide-react";

const items = [
  {
    Icon: MessageCircleMore,
    title: "WhatsApp bagunçado",
    text: "Mensagens soltas, cliente mudando horário toda hora e você tentando organizar tudo manualmente.",
  },
  {
    Icon: CalendarX2,
    title: "Agenda confusa",
    text: "Horários duplicados, esquecimentos, furos no atendimento e dificuldade para ter visão do dia.",
  },
  {
    Icon: WalletCards,
    title: "Perda de dinheiro",
    text: "Sem controle de pagamentos, sem processo claro de reserva e sem uma experiência profissional para o cliente.",
  },
];

export default function PainPoints() {
  return (
    <section id="beneficios" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            O problema
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Seu estabelecimento precisa vender mais, não apagar incêndio o dia inteiro.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            O AgendaFlow tira sua operação do improviso e coloca seu atendimento em
            um padrão premium, organizado e escalável.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="soft-shadow rounded-[28px] border border-slate-200 bg-white p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}