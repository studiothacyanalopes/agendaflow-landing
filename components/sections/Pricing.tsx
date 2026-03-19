"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Check,
  MessageCircleMore,
  Sparkles,
  Star,
  Plus,
  Minus,
  Megaphone,
  BarChart3,
  Building2,
  Gem,
  BadgePercent,
} from "lucide-react";

const BASE_PRICE = 49.9;
const EXTRA_UNIT_PRICE = 29.9;
const WHATSAPP_NUMBER = "5562994693465";

const coreItems = [
  "7 dias grátis para testar",
  "Agendamento online para clientes",
  "Gestão de serviços, profissionais e horários",
  "Página pública de reserva",
  "Experiência mobile premium",
  "Painel administrativo moderno",
];

const whatsappItems = [
  "Até 100 mensagens automáticas/mês",
  "Confirmação automática de agendamento",
  "Lembretes de atendimento",
  "Mais profissionalismo no relacionamento",
];

const optionalModules = [
  {
    id: "whatsapp",
    title: "Automação WhatsApp",
    price: 40,
    icon: MessageCircleMore,
    badge: "Mais vendido",
    description:
      "Confirmações, lembretes e comunicação automática para reduzir faltas.",
  },
  {
    id: "campaigns",
    title: "Campanhas",
    price: 49.9,
    icon: Megaphone,
    badge: "Opcional",
    description:
      "Campanhas, ações promocionais e mais força comercial para gerar movimento.",
  },
  {
    id: "reports",
    title: "Relatórios premium",
    price: 59.9,
    icon: BarChart3,
    badge: "Gestão",
    description:
      "Indicadores e visão mais estratégica para acompanhar crescimento e operação.",
  },
  {
    id: "multiunit",
    title: "Multiunidade avançada",
    price: 89.9,
    icon: Building2,
    badge: "Escala",
    description:
      "Gestão de mais de uma unidade com mais controle, organização e escala.",
  },
  {
    id: "fidelizacao",
    title: "Fidelização premium",
    price: 39.9,
    icon: Gem,
    badge: "Retenção",
    description:
      "Recursos para retenção de clientes, recorrência e aumento do valor percebido.",
  },
];

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function Pricing() {
  const [units, setUnits] = useState(1);
  const [selectedModules, setSelectedModules] = useState<string[]>(["whatsapp"]);

  const extraUnits = Math.max(0, units - 1);
  const rawExtraUnitsValue = extraUnits * EXTRA_UNIT_PRICE;

  const discountCycles = Math.floor(extraUnits / 2);
  const discountPercent = discountCycles * 8;
  const discountValue =
    rawExtraUnitsValue * (discountPercent > 0 ? discountPercent / 100 : 0);

  const modulesSelectedData = optionalModules.filter((module) =>
    selectedModules.includes(module.id)
  );

  const modulesValue = modulesSelectedData.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const total = BASE_PRICE + rawExtraUnitsValue - discountValue + modulesValue;

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleUnitsChange = (nextValue: number) => {
    if (nextValue < 1) return;
    setUnits(nextValue);
  };

  const whatsappMessage = useMemo(() => {
    const modulesText =
      modulesSelectedData.length > 0
        ? modulesSelectedData
            .map((item) => `- ${item.title}: ${formatBRL(item.price)}/mês`)
            .join("\n")
        : "- Nenhum adicional selecionado";

    return `Olá! Quero montar meu plano no AgendaFlow.%0A%0A` +
      `Plano base: AgendaFlow Pro - ${formatBRL(BASE_PRICE)}/mês%0A` +
      `Unidades/profissionais: ${units}%0A` +
      `Valor por unidades extras: ${formatBRL(rawExtraUnitsValue)}%0A` +
      `Desconto aplicado: ${discountPercent}%25 (${formatBRL(discountValue)})%0A%0A` +
      `Adicionais selecionados:%0A${modulesText}%0A%0A` +
      `Valor mensal estimado: ${formatBRL(total)}%0A%0A` +
      `Quero seguir com esse pacote.`;
  }, [
    units,
    rawExtraUnitsValue,
    discountPercent,
    discountValue,
    modulesSelectedData,
    total,
  ]);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section
      id="preco"
      className="relative overflow-hidden bg-[#f4f5f2] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.07),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.06),transparent_22%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1f9d55]">
            Preço e pacotes
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Mais clientes, menos faltas e uma agenda realmente profissional.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Comece com o plano principal do AgendaFlow e monte um pacote ideal
            para sua operação com adicionais que aumentam ticket e valor
            percebido.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          {/* PLANO PRINCIPAL */}
          <div className="overflow-hidden rounded-[36px] border border-white/80 bg-white/92 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="border-b border-slate-200/80 px-6 py-6 sm:px-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#eaf8ef] px-4 py-2 text-sm font-bold text-[#1f9d55]">
                    <Sparkles className="h-4 w-4" />
                    Plano principal
                  </div>

                  <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">
                    AgendaFlow Pro
                  </h3>

                  <p className="mt-3 max-w-[560px] text-base leading-8 text-slate-600">
                    Ideal para salão, barbearia, estúdio ou clínica que quer
                    profissionalizar o agendamento e operar com mais organização.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[#f7faf8] px-6 py-5 text-left lg:min-w-[260px]">
                  <p className="text-sm font-semibold text-slate-500">
                    Comece por
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-5xl font-black tracking-[-0.06em] text-slate-950">
                      {formatBRL(BASE_PRICE)}
                    </span>
                    <span className="pb-2 text-slate-500">/mês</span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-[#1f9d55]">
                    7 dias grátis para testar
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {coreItems.map((item) => (
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

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href="https://app.agendeflow.com/cadastro"
                  className="group"
                >
                  Começar agora
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                </Button>

                <p className="text-sm text-slate-500">
                  Ative, teste e veja funcionando no seu dia a dia.
                </p>
              </div>
            </div>
          </div>

          {/* ADD-ON WHATSAPP */}
          <div className="overflow-hidden rounded-[36px] border border-white/80 bg-white/92 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="bg-[#f97316] px-6 py-6 text-white sm:px-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
                <MessageCircleMore className="h-4 w-4" />
                Add-on opcional
              </div>

              <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Automação WhatsApp
              </h3>

              <p className="mt-3 text-base leading-8 text-white/90">
                Automatize confirmações e lembretes para reduzir faltas e deixar
                sua comunicação muito mais profissional.
              </p>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="rounded-[28px] bg-[#fff7f2] px-6 py-5">
                <p className="text-sm font-semibold text-slate-500">
                  Valor do módulo
                </p>

                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-[-0.06em] text-slate-950">
                    + {formatBRL(40)}
                  </span>
                  <span className="pb-2 text-slate-500">/mês</span>
                </div>

                <p className="mt-2 text-sm font-medium text-[#f97316]">
                  Até 100 mensagens automáticas por mês
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {whatsappItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#f97316]">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] bg-slate-50 px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  Ideal para quem quer:
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  reduzir faltas, confirmar atendimentos com mais consistência e
                  elevar o nível do relacionamento com o cliente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MONTADOR DE PLANO */}
        <div className="mt-10 overflow-hidden rounded-[34px] border border-white/80 bg-white/92 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur">
          <div className="border-b border-slate-200/80 px-6 py-6 sm:px-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700">
              <BadgePercent className="h-4 w-4" />
              Simulador do seu pacote
            </div>

            <h4 className="mt-4 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
              Monte o plano ideal para sua operação.
            </h4>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Escolha a base, adicione unidades/profissionais e selecione
              módulos opcionais. O resumo vai pronto para o WhatsApp.
            </p>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] sm:p-8">
            {/* CONTROLES */}
            <div className="space-y-6">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-900">
                  1. Quantas unidades/profissionais?
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  O plano base inclui 1 unidade. Cada unidade extra custa{" "}
                  <span className="font-semibold text-slate-900">
                    {formatBRL(EXTRA_UNIT_PRICE)}
                  </span>
                  . A cada 2 unidades extras, aplicamos{" "}
                  <span className="font-semibold text-[#1f9d55]">
                    8% de desconto
                  </span>{" "}
                  sobre o valor adicional.
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleUnitsChange(units - 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-900 transition hover:bg-slate-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>

                  <div className="min-w-[120px] rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Unidades
                    </p>
                    <p className="mt-1 text-2xl font-black text-slate-950">
                      {units}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleUnitsChange(units + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-900 transition hover:bg-slate-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {extraUnits > 0 && (
                  <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
                    {discountPercent > 0 ? (
                      <>
                        Você já desbloqueou{" "}
                        <span className="font-bold text-[#1f9d55]">
                          {discountPercent}% de desconto
                        </span>{" "}
                        sobre as unidades extras.
                      </>
                    ) : (
                      <>
                        Adicione mais 1 unidade extra para ativar o primeiro
                        desconto progressivo.
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold text-slate-900">
                  2. Adicionais opcionais
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {optionalModules.map((module) => {
                    const Icon = module.icon;
                    const active = selectedModules.includes(module.id);

                    return (
                      <button
                        key={module.id}
                        type="button"
                        onClick={() => toggleModule(module.id)}
                        className={`rounded-[24px] border p-4 text-left transition ${
                          active
                            ? "border-[#1f9d55] bg-[#ecfdf3] shadow-[0_10px_30px_rgba(31,157,85,0.10)]"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                            <Icon className="h-5 w-5" />
                          </div>

                          <span
                            className={`rounded-full px-3 py-1 text-[11px] font-bold ${
                              active
                                ? "bg-[#1f9d55] text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {module.badge}
                          </span>
                        </div>

                        <h5 className="mt-4 text-lg font-black tracking-[-0.03em] text-slate-950">
                          {module.title}
                        </h5>

                        <p className="mt-1 text-sm font-semibold text-[#1f9d55]">
                          {formatBRL(module.price)}/mês
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {module.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RESUMO */}
            <div className="rounded-[28px] border border-[#d8c7ff] bg-[#f7f1ff] p-5 shadow-[0_18px_50px_rgba(124,58,237,0.06)]">
              <div className="inline-flex rounded-full bg-[#7c3aed] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                Resumo estimado
              </div>

              <h5 className="mt-4 text-2xl font-black tracking-[-0.04em] text-slate-950">
                Seu pacote AgendaFlow
              </h5>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">Plano base</span>
                  <span className="font-semibold text-slate-950">
                    {formatBRL(BASE_PRICE)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">
                    Unidades extras ({extraUnits})
                  </span>
                  <span className="font-semibold text-slate-950">
                    {formatBRL(rawExtraUnitsValue)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-600">Desconto aplicado</span>
                  <span className="font-semibold text-[#1f9d55]">
                    - {formatBRL(discountValue)}
                  </span>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <p className="text-sm font-semibold text-slate-900">
                    Adicionais selecionados
                  </p>

                  <div className="mt-3 space-y-2">
                    {modulesSelectedData.length > 0 ? (
                      modulesSelectedData.map((module) => (
                        <div
                          key={module.id}
                          className="flex items-center justify-between gap-4"
                        >
                          <span className="text-slate-600">{module.title}</span>
                          <span className="font-semibold text-slate-950">
                            {formatBRL(module.price)}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500">Nenhum adicional selecionado.</p>
                    )}
                  </div>
                </div>

                <div className="mt-5 rounded-[20px] border border-emerald-300 bg-[#ecfdf3] px-4 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1f9d55]">
                    Valor mensal estimado
                  </p>
                  <p className="mt-2 text-4xl font-black tracking-[-0.05em] text-slate-950">
                    {formatBRL(total)}
                  </p>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#7c3aed] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(124,58,237,0.22)] transition hover:-translate-y-0.5 hover:bg-[#6d28d9]"
              >
                Enviar plano no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <p className="mt-3 text-xs leading-6 text-slate-500">
                O valor estimado pode variar conforme a configuração final do
                pacote e os módulos contratados.
              </p>
            </div>
          </div>
        </div>

{/* OUTROS ADD-ONS */}
<div className="mt-10 overflow-hidden rounded-[34px] border border-white/80 bg-white/88 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur">
  <div className="border-b border-slate-200/80 px-6 py-6 sm:px-8">
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
      <Star className="h-4 w-4" />
      Outros add-ons e recursos
    </div>

    <h4 className="mt-4 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
      Monte um pacote que faz sentido para o seu negócio.
    </h4>

    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
      Além do plano principal, você poderá contratar recursos extras para
      ampliar automação, gestão e visão do negócio.
    </p>
  </div>

  <div className="grid gap-0 md:grid-cols-3">
    {optionalModules.map((item, index) => (
      <div
        key={item.id}
        className={`p-6 sm:p-7 ${
          index !== optionalModules.length - 1
            ? "border-b border-slate-200 md:border-b-0 md:border-r"
            : ""
        } border-slate-200`}
      >
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
          Recurso extra
        </p>

        <h5 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950">
          {item.title}
        </h5>

        <p className="mt-2 text-sm font-semibold text-[#1f9d55]">
          {formatBRL(item.price)}/mês
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* FAIXA INFERIOR */}
        <div className="mt-10 overflow-hidden rounded-[34px] border border-white/80 bg-white/88 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-3">
            <div className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1f9d55]">
                Free trial
              </p>
              <h4 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950">
                7 dias grátis
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Teste o sistema antes de tomar a decisão e valide no seu negócio
                real.
              </p>
            </div>

            <div className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f97316]">
                Crescimento
              </p>
              <h4 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950">
                Começa simples
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Entre com o plano principal e adicione módulos quando fizer
                sentido para sua operação.
              </p>
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
                Posicionamento
              </p>
              <h4 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950">
                Mais valor percebido
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                O cliente não compra só agenda — ele compra organização,
                confiança e uma experiência melhor.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}