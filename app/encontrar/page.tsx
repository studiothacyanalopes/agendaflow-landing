export const dynamic = "force-dynamic";
export const revalidate = 0;

import { createClient } from "@supabase/supabase-js";
import {
  ArrowLeft,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import Container from "@/components/ui/Container";

type CompanyRow = {
  id: string;
  name: string | null;
  slug: string | null;
  logo_url: string | null;
  brand_whatsapp: string | null;
  brand_instagram: string | null;
  address_name: string | null;
  address_street: string | null;
  address_number: string | null;
  address_neighborhood: string | null;
  address_city: string | null;
  address_state: string | null;
  address_zip_code: string | null;
  address_reference: string | null;
  maps_link: string | null;
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

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
  "https://app.agendeflow.com";

function getSupabaseServer() {
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

function normalizeWhatsapp(value?: string | null) {
  if (!value) return null;
  const digits = value.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}

function normalizeInstagram(value?: string | null) {
  if (!value) return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  const username = trimmed.replace(/^@/, "");
  return `https://instagram.com/${username}`;
}

function buildAddress(company: CompanyRow) {
  const line1 = [company.address_street, company.address_number]
    .filter(Boolean)
    .join(", ");

  const line2 = [
    company.address_neighborhood,
    company.address_city,
    company.address_state,
  ]
    .filter(Boolean)
    .join(" • ");

  return {
    line1,
    line2,
  };
}

function buildPublicBookingUrl(slug?: string | null) {
  if (!slug) return "#";
  return `${APP_URL}/agendar/${encodeURIComponent(slug)}`;
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

async function getCompanies() {
  const supabase = getSupabaseServer();

  const { data, error } = await supabase
    .from("companies")
    .select(`
      id,
      name,
      slug,
      logo_url,
      brand_whatsapp,
      brand_instagram,
      address_name,
      address_street,
      address_number,
      address_neighborhood,
      address_city,
      address_state,
      address_zip_code,
      address_reference,
      maps_link,
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
    console.error("Erro ao buscar empresas para /encontrar:", error);
    return [];
  }

  const companies = (data || []) as CompanyRow[];

  return companies.filter((company) => {
    if (!company.slug || !company.name) return false;
    return isProActive(company);
  });
}

async function getReviewStatsByCompany(companyIds: string[]) {
  const supabase = getSupabaseServer();

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
    console.error("Erro ao buscar avaliações para /encontrar:", error);
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

function formatReviewAverage(value: number) {
  return value.toFixed(1).replace(".", ",");
}

function CompanyCard({
  company,
  reviewStat,
  compact = false,
}: {
  company: CompanyRow;
  reviewStat?: ReviewStat;
  compact?: boolean;
}) {
  const bookingUrl = buildPublicBookingUrl(company.slug);
  const whatsappUrl = normalizeWhatsapp(company.brand_whatsapp);
  const instagramUrl = normalizeInstagram(company.brand_instagram);
  const address = buildAddress(company);

  return (
    <article
      className={`group h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${
        compact
          ? "shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
          : "shadow-[0_14px_42px_rgba(15,23,42,0.06)]"
      }`}
    >
      <div className="relative border-b border-slate-100 bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_55%,#ecfdf5_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.10),transparent_40%)]" />

        <div className="relative flex items-center gap-4 px-5 py-5 sm:px-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-white bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:h-[72px] sm:w-[72px]">
            {company.logo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={company.logo_url}
                alt={company.name || "Empresa"}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-xl font-black uppercase tracking-[-0.05em] text-slate-950 sm:text-2xl">
                {(company.name || "A").slice(0, 1)}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Agendamento online
            </p>

            <h3 className="mt-1 line-clamp-2 text-lg font-bold tracking-[-0.03em] text-slate-950 sm:text-[1.15rem]">
              {company.name}
            </h3>

            {(company.address_city || company.address_state) && (
              <p className="mt-1 text-sm font-medium text-slate-600">
                {[company.address_city, company.address_state]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {reviewStat && reviewStat.count > 0 && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
            <Star className="h-4 w-4 fill-current" />
            {formatReviewAverage(reviewStat.average)} • {reviewStat.count}{" "}
            {reviewStat.count === 1 ? "avaliação" : "avaliações"}
          </div>
        )}

        {company.address_name && (
          <p className="text-sm font-medium text-slate-900">
            {company.address_name}
          </p>
        )}

        {(address.line1 || address.line2) && (
          <div className="mt-4 rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white">
                <MapPin className="h-4 w-4 text-slate-500" />
              </div>

              <div className="min-w-0">
                {address.line1 && (
                  <p className="break-words text-sm font-medium leading-6 text-slate-900">
                    {address.line1}
                  </p>
                )}

                {address.line2 && (
                  <p className="mt-1 break-words text-sm leading-6 text-slate-600">
                    {address.line2}
                  </p>
                )}

                {company.address_reference && (
                  <p className="mt-2 break-words text-xs leading-5 text-slate-500">
                    Ref.: {company.address_reference}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2.5">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-4 text-sm font-bold text-white shadow-[0_10px_26px_rgba(34,197,94,0.22)] transition duration-300 hover:-translate-y-0.5"
          >
            Agendar agora
          </a>

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 transition duration-300 hover:bg-slate-50"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          )}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 transition duration-300 hover:bg-slate-50"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          )}

          {company.maps_link && (
            <a
              href={company.maps_link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 transition duration-300 hover:bg-slate-50"
            >
              <ExternalLink className="h-4 w-4" />
              Ver local
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function EncontrarPage() {
  const companies = await getCompanies();
  const reviewStats = await getReviewStatsByCompany(companies.map((item) => item.id));

  const featuredCompanies = companies.slice(0, 3);
  const otherCompanies = companies.slice(3);

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <div className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl">
        <Container className="max-w-[1400px]">
          <div className="flex min-h-[76px] flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <a
                href="/"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 transition duration-300 hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao menu
              </a>

              <div className="hidden h-6 w-px bg-slate-200 sm:block" />

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  AgendaFlow Encontrar
                </p>
                <p className="truncate text-xs text-slate-500">
                  Negócios com agendamento online
                </p>
              </div>
            </div>

            <a
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-700 transition duration-300 hover:bg-emerald-100"
            >
              Ver AgendaFlow
            </a>
          </div>
        </Container>
      </div>

      <Container className="max-w-[1400px] pb-16 pt-6 sm:pt-8">
        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:px-7 sm:py-7 lg:px-10 lg:py-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-sm font-semibold text-emerald-700">
                <Sparkles className="h-4 w-4" />
                Encontrar estabelecimentos
              </div>

              <h1 className="mt-4 max-w-2xl text-[2rem] font-black leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[2.4rem] lg:text-[3rem]">
                Encontre negócios com agenda online e presença mais profissional
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Descubra salões, barbearias e estúdios que já operam com uma
                experiência mais moderna, organizada e elegante para seus
                clientes.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Estabelecimentos
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-950">
                  {companies.length}
                </p>
                <p className="mt-1 text-sm text-slate-500">nesta vitrine</p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Experiência
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-950">
                  Online
                </p>
                <p className="mt-1 text-sm text-slate-500">agendamento fácil</p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Presença
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-950">
                  Premium
                </p>
                <p className="mt-1 text-sm text-slate-500">visual mais forte</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[28px] border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Vitrine
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-[-0.03em] text-slate-950 sm:text-2xl">
                Estabelecimentos disponíveis
              </h2>
            </div>

            <div className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 lg:max-w-[340px]">
              <Search className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-500">
                Busca e filtros entram na próxima etapa
              </span>
            </div>
          </div>
        </section>

        {companies.length === 0 ? (
          <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
            <h2 className="text-xl font-bold tracking-[-0.03em] text-slate-950 sm:text-2xl">
              Nenhum estabelecimento disponível no momento
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Assim que novos estabelecimentos com agendamento público
              estiverem disponíveis, eles aparecerão aqui automaticamente.
            </p>
          </section>
        ) : (
          <>
            {featuredCompanies.length > 0 && (
              <section className="mt-8">
                <div className="mb-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Destaques
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                    Principais estabelecimentos em destaque
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {featuredCompanies.map((company) => (
                    <CompanyCard
                      key={company.id}
                      company={company}
                      reviewStat={reviewStats.get(company.id)}
                    />
                  ))}
                </div>
              </section>
            )}

            {otherCompanies.length > 0 && (
              <section className="mt-10">
                <div className="mb-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Mais opções
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-slate-950">
                    Outros estabelecimentos disponíveis
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {otherCompanies.map((company) => (
                    <CompanyCard
                      key={company.id}
                      company={company}
                      compact
                      reviewStat={reviewStats.get(company.id)}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </Container>
    </main>
  );
}