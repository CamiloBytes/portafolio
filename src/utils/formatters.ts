/**
 * Formatea una fecha a formato legible en zona horaria estándar de Bogotá
 */
export function formatTimestamp(date: Date = new Date()): string {
  return date.toLocaleString("es-ES", {
    timeZone: "America/Bogota",
    dateStyle: "medium",
    timeStyle: "short",
  });
}
