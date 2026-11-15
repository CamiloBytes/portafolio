import { useState, useCallback } from "react";
import { sendContactMessage } from "../services/contactService";
import { contactSchema } from "../utils/validation";

export type FormStatusType = "idle" | "loading" | "success" | "error";

interface UseContactFormOptions {
  defaultStatus: string;
}

export function useContactForm({ defaultStatus }: UseContactFormOptions) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string>(defaultStatus);
  const [statusType, setStatusType] = useState<FormStatusType>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validationResult = contactSchema.safeParse({ name, email, message });
      if (!validationResult.success) {
        const errorMessage =
          validationResult.error.issues[0]?.message ||
          "Los datos del paquete no son válidos.";
        setStatus(`Error: ${errorMessage}`);
        setStatusType("error");
        return;
      }

      setIsSubmitting(true);
      setStatus("Estableciendo conexión TLS y transmitiendo paquete...");
      setStatusType("loading");

      try {
        const response = await sendContactMessage(validationResult.data);
        setStatus(response.message || "Paquete transmitido exitosamente (ACK 200).");
        setStatusType("success");
        setName("");
        setEmail("");
        setMessage("");
      } catch (err: unknown) {
        const errorMsg =
          err instanceof Error
            ? err.message
            : "Error desconocido en el handshake criptográfico.";
        setStatus(`Error: ${errorMsg}`);
        setStatusType("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [name, email, message]
  );

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    statusType,
    isSubmitting,
    handleSubmit,
  };
}
