export interface SocialLink {
  label: string;
  href: string;
  iconType: "github" | "linkedin" | "twitter";
}

export interface ContactData {
  header: {
    subtitle: string;
    title: string;
    comment: string;
  };
  info: {
    title: string;
    description: string;
    emailLabel: string;
    email: string;
    pgpLabel: string;
    pgpKey: string;
    pgpSubtext: string;
  };
  socials: SocialLink[];
  form: {
    windowTitle: string;
    statusBadge: string;
    senderLabel: string;
    senderPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePrefix: string;
    messagePlaceholder: string;
    defaultStatus: string;
    submitButton: string;
  };
}

export const contactData: ContactData = {
  header: {
    subtitle: "CANAL DIRECTO SSH & MENSAJERÍA SEGURA",
    title: "Conectar / Sesión Remota",
    comment: "Handshake criptográfico disponible",
  },
  info: {
    title: "Información de Contacto",
    description:
      "Disponible para roles estratégicos de ingeniería de sistemas, consultoría de arquitectura cloud de alto volumen o colaboraciones open-source.",
    emailLabel: "CORREO ELECTRÓNICO DIRECTO",
    email: "camiloandres02222@gmail.com",
    pgpLabel: "LLAVE PGP (FINGERPRINT)",
    pgpKey: "4B92 F1A8 E422 98D0 C12E",
    pgpSubtext: "RSA 4096 / Expira 2027-12",
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/CamiloBytes",
      iconType: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      iconType: "linkedin",
    },
    {
      label: "X (Twitter)",
      href: "https://twitter.com",
      iconType: "twitter",
    },
  ],
  form: {
    windowTitle: "remote_session://send_packet.sh",
    statusBadge: "TLS 1.3 ENCRYPTED",
    senderLabel: "// IDENTIFICADOR DE ORIGEN (TU NOMBRE O ENTIDAD)",
    senderPlaceholder: "Ej. Elena Rostova / VP Engineering",
    emailLabel: "// CANAL DE RESPUESTA (CORREO)",
    emailPlaceholder: "elena@empresa.com",
    messageLabel: "// CARGA ÚTIL (MENSAJE / ALCANCE DEL PROYECTO)",
    messagePrefix: "❯ PAYLOAD:",
    messagePlaceholder:
      "Describe tu stack, desafíos de escalabilidad o agenda de reunión...",
    defaultStatus: "Listo para transmisión.",
    submitButton: "Enviar Packet",
  },
};
