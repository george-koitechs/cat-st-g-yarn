function formatPrice(price?: number) {
  return price?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export const commonHelpers = { formatPrice };
