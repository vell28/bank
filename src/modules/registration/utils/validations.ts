export const phoneMask = (value: string, previousValue: string) => {
  if (!value) {
    return value;
  }
  const num = value.replace(/[^\d]/g, '');
  if (!previousValue || value.length > previousValue.length) {
    if (num.length === 3) {
      return `${num} `;
    }
    if (num.length === 7) {
      return `${num.slice(0, 3)}  ${num.slice(3)} - `;
    }
  }
  if (num.length <= 3) {
    return num;
  }
  if (num.length <= 7) {
    return `${num.slice(0, 3)}  ${num.slice(3)}`;
  }
  return `${num.slice(0, 3)}  ${num.slice(3, 7)} - ${num.slice(7, 12)}`;
};

export const spacesRemove = (value: string) => value && value.replace(/^\s+/g, '').replace(/\s*\s/g, ' ');

export const codeValidation = (value: string) => value && value.replace(/[a-z, A-Z]/gi, '');

export const nameValidation = (value: string) => value && value.replace(/[^ a-z\s]/gi, '');
