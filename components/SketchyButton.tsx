"use client";

interface SketchyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  elevation?: number;
}

export default function SketchyButton({
  children,
  onClick,
  disabled,
  className = "",
  elevation = 1,
}: SketchyButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center px-6 py-2 font-medium ${className}`}
      style={{
        boxShadow:
          elevation === 1
            ? "2px 2px 0 rgba(0,0,0,0.15)"
            : "4px 4px 0 rgba(0,0,0,0.15)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M3 4 C50 3, 150 5, 196 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.6"
        />
        <path
          d="M197 5 C198 20, 196 40, 197 56"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.6"
        />
        <path
          d="M196 57 C150 58, 50 56, 4 57"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.6"
        />
        <path
          d="M3 56 C2 40, 4 20, 3 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.6"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
