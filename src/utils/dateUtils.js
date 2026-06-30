export const getCurrentMonthRange = () => {

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const startDate = `01`;
  const lastDate = String(new Date(year, month + 1, 0).getDate()).padStart(2, "0");

  const currentMonthRange = {
    start: `${year}-${month}-${startDate}`,
    end: `${year}-${month}-${lastDate}`,
    year: year
  }

  return currentMonthRange;
};