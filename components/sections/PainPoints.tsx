import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const segments = [
  {
    title: "Salão de beleza",
    image: "/images/landing/segmento-salao.jpg",
    description:
      "Tenha mais controle dos agendamentos, organize sua equipe, fidelize suas clientes e profissionalize sua rotina com uma experiência mais premium.",
    bullets: [
      "Agenda online e confirmação",
      "Comissões e gestão da equipe",
      "Fluxo mais organizado no atendimento",
    ],
    cta: "Soluções para salões de beleza",
  },
  {
    title: "Barbearia",
    image: "/images/landing/segmento-barbearia.jpg",
    description:
      "Ganhe tempo, reduza o caos no WhatsApp e deixe sua barbearia com um fluxo mais moderno, bonito e profissional para vender mais.",
    bullets: [
      "Controle de agenda online",
      "App para profissionais",
      "Experiência premium para o cliente",
    ],
    cta: "Soluções para barbearias",
  },
  {
    title: "Clínica de estética",
    image: "/images/landing/segmento-estetica.jpg",
    description:
      "Organize profissionais, atendimentos e relacionamento com clientes em uma operação mais séria, elegante e preparada para crescer.",
    bullets: [
      "Gestão de pacotes",
      "Controle de clientes e agenda",
      "Operação mais profissional",
    ],
    cta: "Soluções para clínicas de estética",
  },
];

export default function PainPoints() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-[#f5f6f4] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.06),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f97316]">
            AgendaFlow para diferentes segmentos
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Feito para salão de beleza, barbearia, clínica de estética e muito mais.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Escolha uma experiência de gestão mais bonita, mais organizada e mais
            profissional para o tipo de operação que você quer escalar.
          </p>

          {/* botões decorativos estilo referência */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f97316] text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ea580c]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f97316] text-white shadow-[0_12px_30px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:bg-[#ea580c]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {segments.map((segment) => (
            <article
              key={segment.title}
              className="group rounded-[30px] border border-white/80 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.10)]"
            >
              <div className="relative h-[250px] overflow-hidden rounded-[28px]">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
              </div>

              <div className="px-1 pb-2 pt-6">
                <h3 className="text-[2rem] font-black tracking-[-0.045em] text-slate-950">
                  {segment.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {segment.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {segment.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[1rem] text-slate-700"
                    >
                      <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-[1.05rem] font-bold text-[#f97316] transition group-hover:gap-3 group-hover:text-[#ea580c]"
                >
                  {segment.cta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}