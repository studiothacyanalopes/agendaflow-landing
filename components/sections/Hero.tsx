"use client";

import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  MessageSquareQuote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const highlights = [
  "Agenda online 24h",
  "Pix integrado",
  "Confirmação automática",
  "Experiência premium",
];

const testimonials = [
  {
    company: "Andin Barber Shop",
    highlight: "Captação de clientes",
    quote:
      "O atendimento e suporte são maravilhosos, e o aplicativo está nos ajudando bastante na captação de novos clientes. Sem ele, às vezes perdíamos clientes por falta de retorno nosso.",
  },
  {
    company: "Studio Beatriz Castro",
    highlight: "Gestão financeira",
    quote:
      "O app trouxe mais facilidade na gestão financeira e eliminou muito trabalho manual no dia a dia.",
  },
  {
    company: "Studio Bella Moça",
    highlight: "Facilidade de uso",
    quote:
      "Foi o melhor aplicativo que já utilizei. Não tive dificuldade para usar e o suporte é ótimo.",
  },
  {
    company: "Studio Lins",
    highlight: "Comissão dos profissionais",
    quote:
      "Consigo repassar a comissão de cada profissional sem dificuldade. Elas emitem a nota e eu faço o pagamento. Ótimo aplicativo.",
  },
];

const accent = "#C8F169";
const accentDark = "#111827";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
  "https://app.agendeflow.com";

type CompanyRow = {
  id: string;
  name: string | null;
  slug: string | null;
  logo_url: string | null;
  address_name: string | null;
  address_street: string | null;
  address_number: string | null;
  address_neighborhood: string | null;
  address_city: string | null;
  address_state: string | null;
  public_booking_enabled: boolean | null;
  active: boolean | null;
  plan: string | null;
  billing_status: string | null;
  plan_status: string | null;
  billing_cycle_ends_at: string | null;
  billing_grace_ends_at: string | null;
};

type ReviewStat = {
  average: number;
  count: number;
};

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL ou NEXT_PUBLIC_SUPABASE_ANON_KEY não configurados."
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function isProActive(company: CompanyRow) {
  const plan = (company.plan || "").toLowerCase();
  const billingStatus = (company.billing_status || "").toLowerCase();
  const planStatus = (company.plan_status || "").toLowerCase();

  const now = new Date();

  const billingCycleEndsAt = company.billing_cycle_ends_at
    ? new Date(company.billing_cycle_ends_at)
    : null;

  const billingGraceEndsAt = company.billing_grace_ends_at
    ? new Date(company.billing_grace_ends_at)
    : null;

  const planLooksPro = plan === "pro";

  const activeByStatus =
    billingStatus === "active" ||
    billingStatus === "paid" ||
    billingStatus === "trialing" ||
    billingStatus === "grace" ||
    planStatus === "active" ||
    planStatus === "grace";

  const activeByDate =
    Boolean(billingCycleEndsAt && billingCycleEndsAt >= now) ||
    Boolean(billingGraceEndsAt && billingGraceEndsAt >= now);

  return planLooksPro && Boolean(activeByStatus || activeByDate);
}

function buildPublicBookingUrl(slug?: string | null) {
  if (!slug) return "#";
  return `${APP_URL}/agendar/${encodeURIComponent(slug)}`;
}

function buildAddress(company: CompanyRow) {
  const streetLine = [company.address_street, company.address_number]
    .filter(Boolean)
    .join(", ");

  const cityLine = [
    company.address_neighborhood,
    company.address_city,
    company.address_state,
  ]
    .filter(Boolean)
    .join(" • ");

  return {
    streetLine,
    cityLine,
  };
}

function formatReviewAverage(value: number) {
  return value.toFixed(1).replace(".", ",");
}

async function getFeaturedCompanies() {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from("companies")
    .select(`
      id,
      name,
      slug,
      logo_url,
      address_name,
      address_street,
      address_number,
      address_neighborhood,
      address_city,
      address_state,
      public_booking_enabled,
      active,
      plan,
      billing_status,
      plan_status,
      billing_cycle_ends_at,
      billing_grace_ends_at
    `)
    .eq("public_booking_enabled", true)
    .eq("active", true)
    .not("slug", "is", null)
    .order("name", { ascending: true });

  if (error) {
    console.error("Erro ao buscar empresas no Hero:", error);
    return [];
  }

  const companies = ((data || []) as CompanyRow[]).filter((company) => {
    if (!company.id || !company.name || !company.slug) return false;
    return isProActive(company);
  });

  return companies;
}

async function getReviewStatsByCompany(companyIds: string[]) {
  const supabase = getSupabaseClient();

  if (companyIds.length === 0) {
    return new Map<string, ReviewStat>();
  }

  const { data, error } = await supabase
    .from("appointment_reviews")
    .select(`
      rating,
      appointments!inner(
        company_id
      )
    `)
    .in("appointments.company_id", companyIds);

  if (error) {
    console.error("Erro ao buscar avaliações no Hero:", error);
    return new Map<string, ReviewStat>();
  }

  const statsMap = new Map<string, { total: number; count: number }>();

  const rows =
    (data as Array<{
      rating: number | null;
      appointments:
        | { company_id?: string | null }
        | Array<{ company_id?: string | null }>
        | null;
    }>) || [];

  for (const row of rows) {
    const appointmentData = Array.isArray(row.appointments)
      ? row.appointments[0]
      : row.appointments;

    const companyId = appointmentData?.company_id || null;
    const rating = Number(row.rating || 0);

    if (!companyId || !rating) continue;

    const current = statsMap.get(companyId) || { total: 0, count: 0 };
    current.total += rating;
    current.count += 1;
    statsMap.set(companyId, current);
  }

  const normalized = new Map<string, ReviewStat>();

  for (const [companyId, value] of statsMap.entries()) {
    normalized.set(companyId, {
      average: value.count > 0 ? value.total / value.count : 0,
      count: value.count,
    });
  }

  return normalized;
}

export default function Hero() {
  const [companies, setCompanies] = useState<CompanyRow[]>([]);
  const [reviewStats, setReviewStats] = useState<Map<string, ReviewStat>>(new Map());
  const [loadingRecommendations, setLoadingRecommendations] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoadingRecommendations(true);
        const companyRows = await getFeaturedCompanies();
        const stats = await getReviewStatsByCompany(
          companyRows.map((item) => item.id)
        );

        if (!isMounted) return;

        setCompanies(companyRows);
        setReviewStats(stats);
      } catch (error) {
        console.error("Erro ao carregar destaques do Hero:", error);
      } finally {
        if (isMounted) {
          setLoadingRecommendations(false);
        }
      }
    }

    void loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedCompanies = useMemo(() => {
    return [...companies].sort((a, b) => {
      const aReview = reviewStats.get(a.id);
      const bReview = reviewStats.get(b.id);

      const aScore = (aReview?.average || 0) * 100 + (aReview?.count || 0);
      const bScore = (bReview?.average || 0) * 100 + (bReview?.count || 0);

      return bScore - aScore;
    });
  }, [companies, reviewStats]);

  const filteredRecommendedCompanies = useMemo(() => {
    const safeQuery = searchTerm.trim().toLowerCase();

    if (!safeQuery) {
      return sortedCompanies.slice(0, 8);
    }

    return sortedCompanies.filter((company) => {
      const address = buildAddress(company);

      const haystack = [
        company.name || "",
        company.address_name || "",
        address.streetLine,
        address.cityLine,
        company.address_city || "",
        company.address_state || "",
        company.address_neighborhood || "",
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(safeQuery);
    });
  }, [sortedCompanies, searchTerm]);

  function handleExploreSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const safeQuery = searchTerm.trim();

    if (typeof window === "undefined") return;

    if (!safeQuery) {
      window.location.href = "/encontrar";
      return;
    }

    window.location.href = `/encontrar?q=${encodeURIComponent(safeQuery)}`;
  }

  return (
    <section className="relative overflow-hidden bg-[#f4f5f2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,241,105,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_28%)]" />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24 xl:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.76fr_1.24fr] xl:gap-14">
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
              <Button href="https://app.agendeflow.com/login" className="group">
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

          <div className="relative mx-auto w-full max-w-[980px]">
            <div className="relative hidden h-[660px] lg:block">
              <div
                className="absolute right-[22px] top-[16px] h-[610px] w-[620px] bg-[#e7ebe6]"
                style={{
                  borderRadius: "28% 28% 24% 24% / 24% 24% 18% 18%",
                }}
              />

              <div
                className="absolute right-[150px] top-[82px] h-[445px] w-[245px]"
                style={{
                  backgroundColor: accent,
                  borderRadius: "999px",
                }}
              />

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

              <div className="absolute left-[10px] top-[142px] z-20 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                Marca mais forte e operação mais organizada
              </div>

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

              <div className="absolute right-[38px] top-[195px] z-20 rounded-[24px] bg-white/95 px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                <p className="text-sm font-semibold text-slate-900">
                  Visual que vende melhor
                </p>
              </div>

              <div className="absolute left-[150px] bottom-[18px] z-20 flex items-center gap-3">
                <div className="h-4 w-20 rounded-full bg-[#f97316]" />
                <div className="h-4 w-4 rounded-full bg-slate-300" />
              </div>
            </div>

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

        <div className="mt-16 rounded-[34px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
          <div className="relative overflow-hidden rounded-t-[34px] bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,0.78)),url('/images/landing/hero-brand.jpg')] bg-cover bg-center px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Estabelecimentos do AgendaFlow
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                Encontre e agende com negócios que já usam o AgendaFlow
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg">
                Descubra estabelecimentos com atendimento mais profissional,
                presença mais forte e agendamento online em poucos toques.
              </p>

              <form
                onSubmit={handleExploreSearch}
                className="mx-auto mt-7 flex w-full max-w-[680px] items-center gap-3 rounded-[22px] border border-white/15 bg-white px-4 py-3 text-left text-slate-500 shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.22)]"
              >
                <Search className="h-5 w-5 shrink-0 text-slate-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Pesquise serviços ou estabelecimentos do AgendaFlow"
                  className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 sm:text-base"
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  Explorar
                </button>
              </form>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
                <span>Cabeleireiro</span>
                <span>•</span>
                <span>Barbearia</span>
                <span>•</span>
                <span>Estética</span>
                <span>•</span>
                <span>Bem-estar</span>
              </div>
            </div>
          </div>

          <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Recomendado
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                  {searchTerm.trim()
                    ? "Resultados encontrados"
                    : "Negócios em destaque"}
                </h3>
              </div>

              <a
                href={
                  searchTerm.trim()
                    ? `/encontrar?q=${encodeURIComponent(searchTerm.trim())}`
                    : "/encontrar"
                }
                className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:inline-flex"
              >
                Ver todos
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {loadingRecommendations ? (
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-10 text-center">
                <p className="text-lg font-semibold text-slate-900">
                  Carregando estabelecimentos...
                </p>
              </div>
            ) : filteredRecommendedCompanies.length === 0 ? (
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-6 py-10 text-center">
                <p className="text-lg font-semibold text-slate-900">
                  Nenhum estabelecimento encontrado
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tente pesquisar por nome, bairro, cidade ou tipo de negócio.
                </p>
              </div>
            ) : (
              <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {filteredRecommendedCompanies.map((company) => {
                  const review = reviewStats.get(company.id);
                  const address = buildAddress(company);
                  const bookingUrl = buildPublicBookingUrl(company.slug);

                  return (
                    <a
                      key={company.id}
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group block w-[280px] min-w-[280px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_14px_42px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
                    >
                      <div className="relative h-[190px] overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)]">
                        {company.logo_url ? (
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <img
                              src={company.logo_url}
                              alt={company.name || "Empresa"}
                              className="h-full w-full rounded-[22px] object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <span className="text-4xl font-black uppercase tracking-[-0.05em] text-slate-900">
                              {(company.name || "A").slice(0, 1)}
                            </span>
                          </div>
                        )}

                        {review && review.count > 0 && (
                          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold text-slate-900 shadow-sm">
                            <Star className="h-4 w-4 fill-current text-amber-500" />
                            {formatReviewAverage(review.average)}
                            <span className="font-medium text-slate-500">
                              ({review.count})
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-4">
                        <h4 className="line-clamp-1 text-lg font-bold tracking-[-0.03em] text-slate-950">
                          {company.name}
                        </h4>

                        <div className="mt-2 flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                          <div className="min-w-0">
                            {address.streetLine && (
                              <p className="line-clamp-1 text-sm font-medium text-slate-700">
                                {address.streetLine}
                              </p>
                            )}
                            {address.cityLine && (
                              <p className="line-clamp-2 text-sm leading-6 text-slate-500">
                                {address.cityLine}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition group-hover:bg-slate-100">
                          Agendar agora
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}

            <div className="mt-6 flex justify-center md:hidden">
              <a
                href={
                  searchTerm.trim()
                    ? `/encontrar?q=${encodeURIComponent(searchTerm.trim())}`
                    : "/encontrar"
                }
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Ver todos os estabelecimentos
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8 sm:pt-10">
              <div className="mb-6 max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Feedbacks reais
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  Quem já usa o AgendaFlow sente a diferença no dia a dia
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  Mais organização, menos trabalho manual, melhor gestão e mais
                  captação de clientes. Esses são alguns dos retornos reais de
                  quem já opera com o AgendaFlow.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {testimonials.map((item) => (
                  <article
                    key={item.company}
                    className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                  >
                    <div className="absolute right-4 top-4 opacity-10">
                      <MessageSquareQuote className="h-10 w-10 text-slate-900" />
                    </div>

                    <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {item.highlight}
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      “{item.quote}”
                    </p>

                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-sm font-bold text-slate-950">
                        {item.company}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                        Cliente AgendaFlow
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}