export const prepareImg = (imgBase64: string): string | null => {
  return imgBase64 ? imgBase64.split(',')[1] : null;
};
