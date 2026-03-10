import Container from "@/components/ui/Container";
import { CalendarClock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <CalendarClock className="h-5 w-5" />
            </div>

            <div>
              <p className="font-semibold text-slate-900">AgendaFlow</p>
              <p className="text-sm text-slate-500">
                Agendamento online para barbearias, salões e estética.
              </p>
            </div>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} AgendaFlow. Todos os direitos reservados.
          </div>
        </div>
      </Container>
    </footer>
  );
}