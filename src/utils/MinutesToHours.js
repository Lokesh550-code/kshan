export const minutesFunction = (num) => {
  let hours;
  if (num > 60) {
    hours = Math.floor(num / 60);
  }
  let min = num - hours * 60;
  return `${hours}h ${min}m`;
};
