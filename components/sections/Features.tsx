import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
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
    text: "Visualize horários, disponibilidade e fluxo do dia em uma interface rápida, clara e profissional.",
  },
  {
    icon: Users,
    title: "Clientes e profissionais",
    text: "Organize sua equipe, acompanhe atendimentos e tenha mais controle sobre a operação.",
  },
  {
    icon: CreditCard,
    title: "Pix antes do atendimento",
    text: "Receba sinal ou pagamento antecipado para reduzir faltas e profissionalizar sua reserva.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel premium",
    text: "Dashboard bonito, intuitivo e pensado para uso real no celular e no computador.",
  },
  {
    icon: BellRing,
    title: "Fluxo mais organizado",
    text: "Confirmações, visualização e controle dos agendamentos em um processo muito mais limpo.",
  },
  {
    icon: ShieldCheck,
    title: "Mais credibilidade",
    text: "Passe uma imagem mais forte para o cliente com um sistema próprio de agendamento.",
  },
];

export default function Features() {
  return (
    <section
      id="recursos"
      className="relative overflow-hidden bg-[#f4f5f2] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_24%)]" />

      <Container className="relative z-10">
        {/* TOPO */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1f9d55]">
            Recursos
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Tudo que você precisa para profissionalizar seu agendamento.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Mais organização, mais percepção de valor e uma operação muito mais
            bonita para salão, barbearia, estúdio ou clínica.
          </p>
        </div>

        {/* SHOWCASE GRANDE */}
        <div className="mt-14 overflow-hidden rounded-[34px] border border-white/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[340px] overflow-hidden lg:min-h-[430px]">
              <Image
                src="/images/landing/feature-showcase.jpg"
                alt="Profissional usando tecnologia no salão"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/10 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                Gestão mais bonita, rápida e profissional
              </div>

              <div className="absolute bottom-6 left-6 max-w-[500px]">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">
                  AgendaFlow Experience
                </p>
                <h3 className="mt-3 text-3xl font-black leading-[1] tracking-[-0.05em] text-white sm:text-4xl">
                  Um sistema que melhora sua operação e a forma como o cliente enxerga sua marca.
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1f9d55]">
                Destaque
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Muito além de uma agenda online.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-600">
                O AgendaFlow ajuda seu negócio a operar com mais clareza, mais
                organização e mais confiança, sem depender de processos
                improvisados e mensagens soltas no WhatsApp.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Mais controle sobre horários e equipe",
                  "Mais previsibilidade no atendimento",
                  "Mais credibilidade e valor percebido",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-[10px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f9d55]" />
                    <span className="text-[1rem] leading-7 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#demonstracao"
                className="mt-8 inline-flex items-center gap-2 text-[1rem] font-bold text-[#1f9d55] transition hover:gap-3 hover:text-[#15803d]"
              >
                Ver demonstração
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* GRID DE FEATURES */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#1f9d55]/8 blur-2xl transition duration-300 group-hover:bg-[#1f9d55]/15" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8ef] text-[#1f9d55] shadow-sm transition duration-300 group-hover:scale-[1.04]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-5 text-xl font-black tracking-[-0.03em] text-slate-950">
                  {feature.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
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