export const smsLimit = (limit: number): any => (value?: string) =>
  value && value.replace(/[^\d,]/g, '').substr(0, limit);

export const removeSpaces = (value?: string): string | undefined => value && value.replace(/\s+/gi, '');
