const getCurrentYear = () => new Date().getFullYear();

export default (income, gdp, capita) => ({
  [`income-${getCurrentYear()}`]: income,
  [`gdp-${getCurrentYear()}`]: gdp,
  [`capita-${getCurrentYear()}`]: capita,
});
