import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  "Agenda online 24h",
  "Pix integrado",
  "Confirmação automática",
  "Experiência premium",
];

const accent = "#C8F169";
const accentDark = "#111827";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f5f2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,241,105,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_28%)]" />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24 xl:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.76fr_1.24fr] xl:gap-14">
          {/* ESQUERDA */}
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-sm"
              style={{ backgroundColor: accent, color: accentDark }}
            >
              <Sparkles className="h-4 w-4" />
              AgendaFlow para negócios de beleza que querem crescer com mais valor
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[0.94] tracking-[-0.065em] text-slate-950 sm:text-5xl lg:text-[4.1rem] xl:text-[4.5rem]">
              Seu salão, barbearia ou estúdio pode transmitir{" "}
              <span style={{ color: "#1f9d55" }}>muito mais valor</span>.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg">
              Organize agenda, clientes, pagamentos e equipe com uma experiência
              mais moderna, bonita e profissional para o seu negócio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                href="https://app.agendeflow.com/login"
                className="group"
              >
                Testar 7 dias grátis
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Button>

              <Button
                href="https://wa.me/5562994693465?text=Olá!%20Quero%20solicitar%20uma%20demonstração%20do%20AgendaFlow."
                variant="secondary"
              >
                Solicite uma demonstração
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 lg:justify-start">
              <span className="font-semibold text-slate-950">R$ 49,90/mês</span>
              <span>•</span>
              <span>sem fidelidade</span>
              <span>•</span>
              <span>comece grátis</span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Mais percepção de valor para sua marca
            </div>
          </div>

          {/* DIREITA */}
          <div className="relative mx-auto w-full max-w-[980px]">
            {/* DESKTOP */}
            <div className="relative hidden h-[660px] lg:block">
              {/* shape base */}
              <div
                className="absolute right-[22px] top-[16px] h-[610px] w-[620px] bg-[#e7ebe6]"
                style={{
                  borderRadius: "28% 28% 24% 24% / 24% 24% 18% 18%",
                }}
              />

              {/* accent blob */}
              <div
                className="absolute right-[150px] top-[82px] h-[445px] w-[245px]"
                style={{
                  backgroundColor: accent,
                  borderRadius: "999px",
                }}
              />

              {/* imagem com máscara custom */}
              <div
                className="absolute right-0 top-0 z-10 h-[620px] w-[660px] overflow-hidden shadow-[0_50px_140px_rgba(15,23,42,0.16)]"
                style={{
                  clipPath:
                    "polygon(18% 0%, 74% 0%, 88% 4%, 97% 10%, 100% 22%, 100% 48%, 92% 57%, 100% 67%, 100% 82%, 93% 92%, 80% 100%, 18% 100%, 8% 95%, 0% 84%, 0% 66%, 11% 54%, 0% 41%, 0% 20%, 6% 8%)",
                }}
              >
                <Image
                  src="/images/landing/hero-brand.jpg"
                  alt="Profissional sorrindo em ambiente premium"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/10" />
              </div>

              {/* badge superior */}
              <div className="absolute left-[10px] top-[142px] z-20 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                Marca mais forte e operação mais organizada
              </div>

              {/* card inferior esquerdo */}
              <div className="absolute left-[0px] bottom-[82px] z-20 w-[285px] rounded-[28px] bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur">
                <p className="text-sm text-slate-500">Resultado</p>
                <p className="mt-1 text-[1.35rem] font-black leading-tight tracking-[-0.04em] text-slate-950">
                  Atendimento mais premium
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mais organização, mais confiança e mais valor percebido para
                  salão, barbearia ou estúdio.
                </p>
              </div>

              {/* micro badge */}
              <div className="absolute right-[38px] top-[195px] z-20 rounded-[24px] bg-white/95 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                <p className="text-sm font-semibold text-slate-900">
                  Visual que vende melhor
                </p>
              </div>

              {/* barrinha tipo carrossel */}
              <div className="absolute left-[150px] bottom-[18px] z-20 flex items-center gap-3">
                <div className="h-4 w-20 rounded-full bg-[#f97316]" />
                <div className="h-4 w-4 rounded-full bg-slate-300" />
              </div>
            </div>

            {/* MOBILE */}
            <div className="relative mx-auto h-[470px] w-full max-w-[430px] lg:hidden">
              <div
                className="absolute right-[4px] top-[28px] h-[360px] w-[320px] bg-[#e7ebe6]"
                style={{
                  borderRadius: "28% 28% 24% 24% / 24% 24% 18% 18%",
                }}
              />

              <div
                className="absolute right-[86px] top-[88px] h-[240px] w-[138px] rounded-[999px]"
                style={{ backgroundColor: accent }}
              />

              <div
                className="absolute right-0 top-0 z-10 h-[390px] w-[350px] overflow-hidden shadow-2xl"
                style={{
                  clipPath:
                    "polygon(18% 0%, 74% 0%, 88% 4%, 97% 10%, 100% 22%, 100% 48%, 92% 57%, 100% 67%, 100% 82%, 93% 92%, 80% 100%, 18% 100%, 8% 95%, 0% 84%, 0% 66%, 11% 54%, 0% 41%, 0% 20%, 6% 8%)",
                }}
              >
                <Image
                  src="/images/landing/hero-brand.jpg"
                  alt="Profissional sorrindo em ambiente premium"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/10" />
              </div>

              <div className="absolute left-0 bottom-6 z-20 w-[235px] rounded-[24px] bg-white/95 p-4 shadow-xl">
                <p className="text-xs text-slate-500">Resultado</p>
                <p className="mt-1 text-base font-black text-slate-950">
                  Atendimento mais premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}