export function Logo({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-label="Inertia Labs logo"
    >
      <g transform="translate(50, 50)">
        {/* 8 rectangular spokes radiating from center, matching the starburst logo */}
        <rect x={-6} y={-46} width={12} height={32} transform="rotate(0)" />
        <rect x={-4} y={-44} width={8} height={30} transform="rotate(45)" />
        <rect x={-6} y={-46} width={12} height={32} transform="rotate(90)" />
        <rect x={-4} y={-44} width={8} height={30} transform="rotate(135)" />
        <rect x={-6} y={-46} width={12} height={32} transform="rotate(180)" />
        <rect x={-4} y={-44} width={8} height={30} transform="rotate(225)" />
        <rect x={-6} y={-46} width={12} height={32} transform="rotate(270)" />
        <rect x={-4} y={-44} width={8} height={30} transform="rotate(315)" />
      </g>
    </svg>
  );
}
