const isValidDecimalCurrency = (value: string): boolean => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(parseInt(value[value.length - 1], 10)) && !value.endsWith('.')) {
    return false;
  }
  const splited = value.split('.');

  return !(splited[1] && splited[1].length > 2);
};

export const formatAmount = (input?: string): string | undefined => {
  if (!input) {
    return;
  }
  let value = input;
  if (!isValidDecimalCurrency(value)) {
    value = input.slice(0, -1);
  }
  return value.replace(/\s/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const normalizeAmount = (val: string): string => {
  let str = val.replace(/\s/g, '');
  if (val && val[1] && val[1] !== '.' && val[0] === '0') {
    str = val.replace(/^0/, '');
  }

  if (val && val[0] && val[0] === '.') {
    str = `0${val}`;
  }
  return str;
};
