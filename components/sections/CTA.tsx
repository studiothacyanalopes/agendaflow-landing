"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Instagram,
  MessageCircleMore,
  Send,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "5562994693465";
const INSTAGRAM_URL = "https://www.instagram.com/webdivision_/";

export default function CTA() {
  const [companyName, setCompanyName] = useState("");
  const [segment, setSegment] = useState("");
  const [city, setCity] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [goal, setGoal] = useState("");

  const whatsappLink = useMemo(() => {
    const message =
      `Olá! Quero conhecer melhor o AgendaFlow.%0A%0A` +
      `*Empresa:* ${companyName || "-"}%0A` +
      `*Segmento:* ${segment || "-"}%0A` +
      `*Cidade:* ${city || "-"}%0A` +
      `*Equipe / profissionais:* ${teamSize || "-"}%0A` +
      `*Objetivo principal:* ${goal || "-"}%0A%0A` +
      `Quero entender como o AgendaFlow pode ajudar minha operação a crescer com mais organização e profissionalismo.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  }, [companyName, segment, city, teamSize, goal]);

  return (
    <section className="relative overflow-hidden bg-[#f4f5f2] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.24)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          {/* fundos */}
          <div className="absolute left-[-40px] top-[-20px] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-[-40px] right-[-20px] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.10),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_24%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            {/* ESQUERDA */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                Vamos crescer junto com a sua operação
              </div>

              <h2 className="mt-6 max-w-[720px] text-3xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                Seu cliente busca{" "}
                <span className="text-emerald-400">facilidade</span>, não
                burocracia.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                O AgendaFlow foi criado para transformar agenda, atendimento,
                pagamentos e rotina operacional em uma experiência mais bonita,
                organizada e profissional para salão, barbearia, estúdio ou
                clínica.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Mais profissionalismo no atendimento",
                  "Menos confusão no WhatsApp",
                  "Mais organização na agenda",
                  "Mais valor percebido para sua marca",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/85"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Próximo passo
                </p>
                <p className="mt-3 text-lg font-bold tracking-[-0.03em] text-white">
                  Preencha ao lado e receba uma proposta inicial direto no
                  WhatsApp.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  A ideia é entender seu momento e te mostrar um caminho prático
                  para vender mais, reduzir faltas e operar com mais clareza.
                </p>
              </div>
            </div>

            {/* DIREITA - FORM */}
            <div className="rounded-[32px] border border-white/10 bg-white/8 p-5 backdrop-blur-xl sm:p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
                    Diagnóstico rápido
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                    Monte seu primeiro contato com a Web Division.
                  </h3>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white sm:flex">
                  <MessageCircleMore className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Nome da empresa
                  </label>
                  <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Ex: Barbearia Prime"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-400/60 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Segmento
                  </label>
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-emerald-400/60 focus:bg-white/10"
                  >
                    <option value="" className="text-slate-900">
                      Selecione
                    </option>
                    <option value="Barbearia" className="text-slate-900">
                      Barbearia
                    </option>
                    <option value="Salão de beleza" className="text-slate-900">
                      Salão de beleza
                    </option>
                    <option value="Clínica de estética" className="text-slate-900">
                      Clínica de estética
                    </option>
                    <option value="Estúdio" className="text-slate-900">
                      Estúdio
                    </option>
                    <option value="Outro" className="text-slate-900">
                      Outro
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Cidade / região
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Goiânia - GO"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-400/60 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Quantos profissionais?
                  </label>
                  <input
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    placeholder="Ex: 3"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-400/60 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    O que você mais quer melhorar?
                  </label>
                  <input
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="Ex: reduzir faltas"
                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-400/60 focus:bg-white/10"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-6 text-sm font-bold text-white shadow-[0_14px_34px_rgba(34,197,94,0.22)] transition duration-300 hover:-translate-y-0.5 hover:from-[#16a34a] hover:to-[#15803d]"
                >
                  Enviar no WhatsApp
                  <Send className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  Ver Instagram
                  <Instagram className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 px-4 py-4">
                <p className="text-sm font-semibold text-white">
                  Atendimento direto e objetivo
                </p>
                <p className="mt-2 text-sm leading-7 text-white/68">
                  Você envia os dados, recebe contato direto e já pode entender o
                  melhor formato para sua operação crescer com o AgendaFlow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}