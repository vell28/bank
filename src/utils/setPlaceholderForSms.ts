export const setPlaceholder = (codeLength: number) => {
  let placeholder = '';
  let i = 0;
  while (i < codeLength) {
    placeholder += '•';
    i++;
  }
  return placeholder;
};
