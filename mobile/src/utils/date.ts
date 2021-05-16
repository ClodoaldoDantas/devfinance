import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: Date) {
  return format(date, "dd 'de' MMMM", { locale: ptBR });
}
