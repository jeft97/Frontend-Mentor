function formatCurreny(
   value,
   locale = navigator.languages.at(0),
   curreny = 'EUR'
) {
   return Intl.NumberFormat(locale, {
      style: 'currency',
      currency: curreny,
   }).format(value);
}

export { formatCurreny };
