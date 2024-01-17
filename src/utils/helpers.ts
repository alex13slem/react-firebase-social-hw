export const cn = (...cNames: unknown[]): string =>
  cNames.filter(Boolean).join(' ');
