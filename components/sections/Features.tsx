import Container from "@/components/ui/Container";
import {
  BellRing,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Agenda inteligente",
    text: "Visualize horários, disponibilidade e fluxo do dia em uma interface rápida e profissional.",
  },
  {
    icon: Users,
    title: "Clientes e profissionais",
    text: "Organize sua equipe e acompanhe quem atende, quando atende e como está sua operação.",
  },
  {
    icon: CreditCard,
    title: "Pix antes do atendimento",
    text: "Receba sinal ou pagamento antecipado para reduzir faltas e profissionalizar sua reserva.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel premium",
    text: "Dashboard bonito, claro e pensado para uso real no celular e no computador.",
  },
  {
    icon: BellRing,
    title: "Fluxo mais organizado",
    text: "Tenha um processo muito mais limpo para confirmação, visualização e controle dos agendamentos.",
  },
  {
    icon: ShieldCheck,
    title: "Mais credibilidade",
    text: "Passe uma imagem mais forte para o cliente com um sistema próprio de agendamento.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Recursos
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Tudo que você precisa para profissionalizar seu agendamento.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}