"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FaCode, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "../../types/projects";
import { modalBackdropVariants, modalContentVariants } from "../../utils/motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      const previousOverflow = document.body.style.overflow;
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = previousOverflow;
      };
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          variants={modalBackdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl rounded-xl border border-[#3a494b]/60 bg-[#161b22] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del modal */}
            <div className="flex items-center justify-between border-b border-[#3a494b]/40 pb-4">
              <div>
                <span className="font-mono text-xs text-primary uppercase tracking-wider">
                  {`${project.category} // Architectural Blueprint`}
                </span>
                <h3 id="modal-title" className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                ref={closeButtonRef}
                aria-label="Cerrar modal"
                className="rounded-lg p-2 text-[#849495] transition hover:bg-[#21262d] hover:text-foreground cursor-pointer"
              >
                <FaTimes className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Contenido técnico del RFC */}
            <div className="mt-5 space-y-4 font-mono text-xs sm:text-sm">
              <div className="rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/80 p-4">
                <span className="text-primary font-semibold">{"// ARQUITECTURA DEL SISTEMA:"}</span>
                <p className="mt-1 text-[#b9cacb] leading-relaxed">
                  {project.rfc.architecture}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/80 p-3.5">
                  <span className="text-[#849495] font-semibold">PROTOCOLO / I/O:</span>
                  <p className="mt-1 text-[#e0fdff]">{project.rfc.protocol}</p>
                </div>
                <div className="rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/80 p-3.5">
                  <span className="text-[#849495] font-semibold">GARANTÍAS CAP:</span>
                  <p className="mt-1 text-[#e0fdff]">{project.rfc.guarantees}</p>
                </div>
              </div>

              <div className="rounded-lg border border-[#3a494b]/30 bg-[#0d0e13]/80 p-3.5">
                <span className="text-[#3fb950] font-semibold">BENCHMARKS VERIFICADOS:</span>
                <p className="mt-1 text-[#b9cacb]">{project.rfc.benchmarks}</p>
              </div>
            </div>

            {/* Botones de acción del modal */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#3a494b]/40 pt-5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#3a494b]/60 bg-[#21262d] px-4 py-2 font-mono text-xs text-[#f0f6fc] transition hover:border-primary hover:text-primary cursor-pointer"
              >
                <FaCode className="h-3.5 w-3.5" />
                <span>Ver Código en GitHub</span>
              </motion.a>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-mono text-xs font-semibold text-[#090a0f] transition hover:shadow-[0_0_16px_rgba(0,242,254,0.4)] cursor-pointer"
                >
                  <span>Consultar sobre este proyecto &rarr;</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
