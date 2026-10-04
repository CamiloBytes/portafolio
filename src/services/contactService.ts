import type { ContactPayload, ContactApiResponse } from "../types/contact";

/**
 * Servicio para transmitir un paquete de contacto hacia el backend
 */
export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactApiResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data: ContactApiResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Fallo en la transmisión del paquete de contacto.");
  }

  return data;
}
