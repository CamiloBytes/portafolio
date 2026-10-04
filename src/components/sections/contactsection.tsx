"use client";

import React from "react";
import { LuCopy, LuCheck } from "react-icons/lu";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { HeaderSection } from "../ui/headersection";
import { contactData } from "../../data/contact";
import { useContactForm } from "../../hooks/useContactForm";
import { useClipboard } from "../../hooks/useClipboard";
import { fadeInUp, staggerContainer } from "../../utils/motion";

export const ContactSection: React.FC = () => {
  const { isCopied, copy } = useClipboard();

  const {
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
  } = useContactForm({
    defaultStatus: contactData.form.defaultStatus,
  });

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl scroll-mt-24 space-y-10 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8"
    >
      <HeaderSection
        title={contactData.header.title}
        subtitle={contactData.header.subtitle}
        message={contactData.header.comment}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-12"
      >
        {/* PANEL IZQUIERDO: Información de Contacto */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-between rounded-xl border border-[#3a494b]/40 bg-[#1a1b21]/70 p-6 sm:p-8 transition-colors duration-300 hover:border-[#00f2fe]/40 lg:col-span-5"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-[#e0fdff]">
                {contactData.info.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b9cacb]">
                {contactData.info.description}
              </p>
            </div>

            {/* Email directo con botón de copiado */}
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-wider text-[#849495]">
                {contactData.info.emailLabel}
              </span>
              <div className="flex items-center justify-between rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/90 px-4 py-3 font-mono text-sm text-primary transition-colors hover:border-[#00f2fe]/30">
                <span className="truncate selection:bg-primary selection:text-[#090a0f]">
                  {contactData.info.email}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() => copy(contactData.info.email)}
                  className="ml-2 flex items-center gap-1.5 rounded p-1.5 text-[#849495] transition-colors hover:bg-[#1e1f25] hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                  title="Copiar al portapapeles"
                  aria-label="Copiar correo al portapapeles"
                >
                  {isCopied ? (
                    <>
                      <LuCheck className="h-4 w-4 text-primary" />
                      <span className="text-[10px] text-primary">Copiado</span>
                    </>
                  ) : (
                    <LuCopy className="h-4 w-4" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Llave PGP */}
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-wider text-[#849495]">
                {contactData.info.pgpLabel}
              </span>
              <div className="rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/90 p-4 font-mono text-xs">
                <p className="tracking-widest text-[#e0fdff]">
                  {contactData.info.pgpKey}
                </p>
                <p className="mt-1 text-[11px] text-[#849495]">
                  {contactData.info.pgpSubtext}
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces Sociales */}
          <div className="mt-8 flex flex-wrap gap-2.5 pt-4">
            {contactData.socials.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#3a494b]/40 bg-[#161b22]/90 px-3.5 py-2 font-mono text-xs text-[#b9cacb] transition-colors duration-200 hover:border-[#00f2fe]/50 hover:bg-[#1e1f25] hover:text-foreground hover:shadow-[0_0_12px_rgba(0,242,254,0.1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                {social.iconType === "github" && <FaGithub className="h-3.5 w-3.5" />}
                {social.iconType === "linkedin" && <FaLinkedinIn className="h-3.5 w-3.5" />}
                {social.iconType === "twitter" && <FaXTwitter className="h-3.5 w-3.5" />}
                <span>{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* PANEL DERECHO: Terminal de Envío */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col overflow-hidden rounded-xl border border-[#3a494b]/40 bg-[#1a1b21]/70 transition-colors duration-300 hover:border-[#00f2fe]/40 lg:col-span-7"
        >
          {/* Barra superior de la ventana */}
          <div className="flex items-center justify-between border-b border-[#3a494b]/30 bg-[#161b22] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#484f58]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#484f58]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#484f58]" />
              </div>
              <span className="font-mono text-xs text-[#849495]">
                {contactData.form.windowTitle}
              </span>
            </div>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-primary">
              {contactData.form.statusBadge}
            </span>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col justify-between">
            <div className="space-y-4 p-5 sm:p-6">
              {/* Campo Nombre / Origen */}
              <div className="space-y-1.5">
                <label
                  htmlFor="sender-name"
                  className="block font-mono text-[11px] text-[#849495]"
                >
                  {contactData.form.senderLabel}
                </label>
                <div className="flex items-center rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/90 px-3.5 py-2.5 font-mono text-sm transition-all focus-within:border-primary/70 focus-within:shadow-[0_0_12px_rgba(0,242,254,0.12)]">
                  <span className="mr-2 font-bold text-primary select-none" aria-hidden="true">
                    ❯
                  </span>
                  <input
                    id="sender-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={contactData.form.senderPlaceholder}
                    className="w-full bg-transparent text-[#e0fdff] placeholder:text-[#484f58] focus:outline-none"
                  />
                </div>
              </div>

              {/* Campo Correo de Respuesta */}
              <div className="space-y-1.5">
                <label
                  htmlFor="sender-email"
                  className="block font-mono text-[11px] text-[#849495]"
                >
                  {contactData.form.emailLabel}
                </label>
                <div className="flex items-center rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/90 px-3.5 py-2.5 font-mono text-sm transition-all focus-within:border-primary/70 focus-within:shadow-[0_0_12px_rgba(0,242,254,0.12)]">
                  <span className="mr-2 font-bold text-primary select-none" aria-hidden="true">
                    ❯
                  </span>
                  <input
                    id="sender-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={contactData.form.emailPlaceholder}
                    className="w-full bg-transparent text-[#e0fdff] placeholder:text-[#484f58] focus:outline-none"
                  />
                </div>
              </div>

              {/* Campo Mensaje / Carga Útil */}
              <div className="space-y-1.5">
                <label
                  htmlFor="payload-message"
                  className="block font-mono text-[11px] text-[#849495]"
                >
                  {contactData.form.messageLabel}
                </label>
                <div className="rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/90 p-3.5 font-mono text-sm transition-all focus-within:border-primary/70 focus-within:shadow-[0_0_12px_rgba(0,242,254,0.12)]">
                  <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-primary select-none">
                    <span>{contactData.form.messagePrefix}</span>
                  </div>
                  <textarea
                    id="payload-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={contactData.form.messagePlaceholder}
                    className="w-full resize-y bg-transparent text-[#e0fdff] placeholder:text-[#484f58] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Barra inferior de estado y acción de envío */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#3a494b]/30 bg-[#161b22]/70 px-5 py-4">
              <p
                className={`font-mono text-xs ${
                  statusType === "error"
                    ? "text-[#f85149]"
                    : statusType === "success"
                      ? "text-[#3fb950]"
                      : statusType === "loading"
                        ? "text-primary animate-pulse"
                        : "text-[#849495]"
                }`}
              >
                {status}
              </p>

              <motion.button
                whileHover={!isSubmitting ? { scale: 1.03, y: -1 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-mono text-xs sm:text-sm font-semibold text-[#090a0f] transition-all duration-200 hover:shadow-[0_0_16px_rgba(0,242,254,0.4)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{contactData.form.submitButton}</span>
                <span className="text-sm font-bold" aria-hidden="true">▷</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};
