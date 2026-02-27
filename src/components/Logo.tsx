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
        {/* Cardinal spokes (wider) with slight clockwise offset */}
        <rect x={-7} y={-48} width={14} height={36} transform="rotate(5)" />
        <rect x={-7} y={-48} width={14} height={36} transform="rotate(95)" />
        <rect x={-7} y={-48} width={14} height={36} transform="rotate(185)" />
        <rect x={-7} y={-48} width={14} height={36} transform="rotate(275)" />
        {/* Diagonal spokes (narrower) with slight clockwise offset */}
        <rect x={-5} y={-44} width={10} height={32} transform="rotate(50)" />
        <rect x={-5} y={-44} width={10} height={32} transform="rotate(140)" />
        <rect x={-5} y={-44} width={10} height={32} transform="rotate(230)" />
        <rect x={-5} y={-44} width={10} height={32} transform="rotate(320)" />
      </g>
    </svg>
  );
}
