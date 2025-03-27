// const formattedValue = Intl.NumberFormat("en", {
//   currency: "CAD",
//   style: "currency",
// }).format(magicCoinCurrentValue);
export const currencyFormatter = (value: number) => {
  return Intl.NumberFormat("en", { currency: "BDT", style: "currency" }).format(
    value
  );
};
