/**
 * Valida si un correo electrónico cumple con el formato estándar
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Valida si un texto no está vacío tras limpiar espacios
 */
export function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
}
