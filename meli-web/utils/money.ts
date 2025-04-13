export function formatPrice(amount: number, currency: string = "$"): string {
  return `${currency} ${amount.toLocaleString("es-AR")}`;
}

export function extractVisualDecimals(
  amount: number,
  decimals: number
): string {
  const fullPrice = amount + decimals / 100;
  const decimalPart = (fullPrice % 1).toFixed(2).split(".")[1]; // '00', '50', '99', etc.
  return decimalPart;
}
