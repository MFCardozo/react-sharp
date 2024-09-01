export const formatDate = (dateString) => {
  // dateString debe ser yyyy-MM-dd
  const [year, month, day] = dateString.split("-").map(Number);
  // Crea una fecha UTC usando Date.UTC porque new Date resta 1 dia a la fecha
  // Asegúrate de que los valores de mes y día sean válidos
  const formattedDay = String(day).padStart(2, "0");
  const formattedMonth = String(month).padStart(2, "0");
  const formattedYear = String(year);

  // Retorna la fecha en el formato dd/MM/yyyy
  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
};
