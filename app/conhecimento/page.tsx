import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CalendarDays,
  LayoutDashboard,
  MailCheck,
  PlayCircle,
  ReceiptText,
  Scissors,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Criar sua conta no AgendaFlow",
    video: "/videos/inicioagendaflow.mp4",
    icon: UserPlus,
    description:
      "O primeiro passo é criar sua conta no AgendaFlow para iniciar a configuração da sua empresa.",
    items: [
      "Acesse a página de cadastro.",
      "Informe seu nome, e-mail e senha.",
      "Clique em criar conta.",
      "Depois do cadastro, confirme seu e-mail.",
    ],
  },
  {
    number: "02",
    title: "Confirmar e-mail e voltar para o login",
    video: "/videos/confirmar-email.mp4",
    icon: MailCheck,
    description:
      "Após criar sua conta, o sistema envia um e-mail de confirmação para liberar o acesso.",
    items: [
      "Abra sua caixa de entrada.",
      "Clique no link de confirmação enviado pelo AgendaFlow.",
      "Depois da confirmação, volte para a tela de login.",
      "Acesse novamente pelo link app.agendeflow.com/login.",
    ],
  },
  {
    number: "03",
    title: "Fazer o onboarding da empresa",
    video: "/videos/onboarding-agendaflow.mp4",
    icon: Settings,
    description:
      "No primeiro acesso, o AgendaFlow guia você pela configuração inicial para deixar sua empresa pronta para usar.",
    items: [
      "Informe os dados principais da empresa.",
      "Configure nome, segmento, telefone e informações básicas.",
      "Finalize as etapas iniciais do onboarding.",
      "Depois disso, você será direcionado para o painel do sistema.",
    ],
  },
  {
    number: "04",
    title: "Configurar empresa",
    video: "/videos/configurar-empresa.mp4",
    icon: Building2,
    description:
      "A tela de Empresa concentra configurações importantes como horários, link público, endereço e preferências de agendamento.",
    items: [
      "Acesse o menu Empresa.",
      "Revise nome, telefone, endereço e informações da marca.",
      "Configure dias e horários de funcionamento.",
      "Ajuste regras da agenda online conforme a rotina do seu negócio.",
    ],
  },
  {
    number: "05",
    title: "Cadastrar profissionais",
    video: "/videos/cadastrar-profissional.mp4",
    icon: Users,
    description:
      "Cadastre os profissionais que vão aparecer na agenda e atender os clientes.",
    items: [
      "Acesse o menu Profissionais.",
      "Clique em novo profissional.",
      "Informe nome, telefone e dados do profissional.",
      "Defina se ele ficará ativo para agendamentos.",
    ],
  },
  {
    number: "06",
    title: "Cadastrar serviços",
    video: "/videos/cadastrar-servicos.mp4",
    icon: Scissors,
    description:
      "Os serviços são usados na agenda online, no financeiro e nas comandas.",
    items: [
      "Acesse o menu Serviços.",
      "Clique em novo serviço.",
      "Informe nome, duração e valor.",
      "Vincule o serviço aos profissionais corretos.",
    ],
  },
  {
    number: "07",
    title: "Visualizar agenda de todos os profissionais",
    video: "/videos/agenda-todos-profissionais.mp4",
    icon: CalendarDays,
    description:
      "A visão geral da agenda ajuda você a acompanhar todos os profissionais em um só lugar.",
    items: [
      "Acesse o menu Agenda.",
      "Use os filtros para visualizar todos os profissionais.",
      "Confira horários disponíveis, ocupados, confirmados e pendentes.",
      "Organize encaixes, remarcações e atendimentos do dia com mais controle.",
    ],
  },
  {
    number: "08",
    title: "Criar e organizar agendamentos",
    video: "/videos/criar-agendamento.mp4",
    icon: CalendarDays,
    description:
      "Depois de configurar profissionais e serviços, você já pode organizar os atendimentos.",
    items: [
      "Acesse o menu Agenda.",
      "Escolha data e horário.",
      "Selecione cliente, serviço e profissional.",
      "Salve o agendamento e acompanhe o status.",
    ],
  },
  {
    number: "09",
    title: "Imprimir guia de pagamento",
    video: "/videos/imprimir-guia-pagamento.mp4",
    icon: ReceiptText,
    description:
      "A guia ajuda a organizar o atendimento, os valores e o fechamento com o cliente.",
    items: [
      "Abra o agendamento desejado.",
      "Clique na opção de imprimir guia.",
      "Confira os dados do cliente e do serviço.",
      "Imprima ou salve em PDF.",
    ],
  },
  {
    number: "10",
    title: "Tour completo pelo sistema",
    video: "/videos/tour-sistema-agendaflow.mp4",
    icon: LayoutDashboard,
    description:
      "Veja uma visão geral do AgendaFlow e entenda os principais menus do sistema.",
    items: [
      "Conheça o Dashboard principal.",
      "Veja onde ficam agenda, clientes, profissionais e serviços.",
      "Entenda financeiro, marketing, comandas e relatórios.",
      "Use esse vídeo como guia rápido para se localizar dentro do sistema.",
    ],
  },
];

export default function ConhecimentoPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://app.agendeflow.com/login"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
            >
              Entrar
            </a>

            <a
              href="https://app.agendeflow.com/cadastro"
              className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Testar 7 dias grátis
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.13),transparent_30%),linear-gradient(135deg,#ffffff,#f8fafc)] p-6 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              <BadgeCheck className="h-4 w-4" />
              Central de Conhecimento AgendaFlow
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Aprenda a configurar e usar o AgendaFlow passo a passo.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Assista aos vídeos rápidos para criar sua conta, confirmar e-mail,
              configurar a empresa, cadastrar profissionais, serviços, visualizar
              a agenda e entender o sistema completo.
            </p>
          </div>

          <div className="grid gap-3 border-t border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <a
                key={step.number}
                href={`#video-${step.number}`}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {step.number}. {step.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                id={`video-${step.number}`}
                key={step.number}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="bg-slate-950 p-4 sm:p-6">
                    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[1.5rem] bg-black">
                      <video
                        className="h-full w-full bg-black object-contain"
                        controls
                        preload="metadata"
                      >
                        <source src={step.video} type="video/mp4" />
                        Seu navegador não suporta vídeo.
                      </video>

                      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
                        Vídeo {step.number}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
                          Passo {step.number}
                        </p>

                        <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">
                          {step.title}
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                      <p className="text-sm font-bold text-slate-900">
                        O que fazer:
                      </p>

                      <ul className="mt-4 space-y-3">
                        {step.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-6 text-slate-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={step.video}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                      >
                        <PlayCircle className="h-4 w-4" />
                        Assistir vídeo
                      </a>

                      <a
                        href="#top"
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
                      >
                        Voltar ao topo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}