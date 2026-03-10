import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16">
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Chegou a hora de profissionalizar sua agenda
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              Pare de perder tempo com marcações soltas e comece a operar com padrão premium.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Teste o AgendaFlow por 7 dias grátis e descubra como é ter sua agenda,
              seus clientes e seu atendimento organizados de verdade.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/cadastro" className="group">
                Testar 7 dias grátis
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Button>

              <Button
                href="/login"
                variant="secondary"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                Já tenho conta
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}