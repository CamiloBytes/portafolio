import { useCallback, useEffect, useRef, useState } from "react";

export function useClipboard(timeoutMs: number = 2500) {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    []
  );

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        if (resetTimer.current) clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => setIsCopied(false), timeoutMs);
        return true;
      } catch (err) {
        console.error("Error al copiar al portapapeles:", err);
        return false;
      }
    },
    [timeoutMs]
  );

  return { isCopied, copy };
}
