export function formatCurrency(value: number) {
  const currency = value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return `R$ ${currency}`;
}
