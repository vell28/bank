export const setPickerDate = (age: number) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getUTCDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return new Date(year + age, month, day, hour, minutes);
};
