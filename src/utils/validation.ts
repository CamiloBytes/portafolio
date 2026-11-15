import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido."),
  email: z.string().trim().email("El correo electrónico ingresado no es válido."),
  message: z.string().trim().min(1, "El mensaje es requerido."),
});
