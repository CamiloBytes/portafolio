interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({ text, onClick, variant = "primary" }: ButtonProps) => {
  const variantStyles =
    variant === "secondary"
      ? "bg-surface-layer-1 text-foreground border-surface-layer-2 hover:border-[#17e4ef] hover:shadow-[0_0_8px_#17e4ef,0_0_20px_#17e4ef]"
      : "bg-primary text-surface-layer-1 border-primary hover:shadow-[0_0_6px_#17e4ef,0_0_12px_#17e4ef]";

  return (
    <div>
      <button
        className={`
          flex items-center
          font-mono
          font-semibold
          px-10
          py-2
          border
          transition
          duration-300
          ease-in-out
          relative
          ${variantStyles}
        `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

