function addOneMonth(date) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + 1);
  // Ajustar o ano se passar de dezembro
  if (result.getMonth() === 0) {
    result.setFullYear(result.getFullYear() + 1);
  }
  return result;
}
