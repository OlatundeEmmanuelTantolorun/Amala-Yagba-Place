// Placeholder "photograph". Replace with <img> per dish when real photography exists.
export default function Plate({
  seed = 0,
  className = "",
}: {
  seed?: number;
  className?: string;
}) {
  const h = [18, 28, 12, 350, 24, 8, 34, 16][seed % 8];
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 54%,#f3eee6 0 30%,transparent 30.5%),radial-gradient(circle at 50% 52%,hsl(${h} 55% ${34 + (seed % 3) * 6}%) 0 17%,transparent 17.5%),radial-gradient(70% 60% at 50% 60%,hsl(${h} 70% 48% / .55),transparent 75%),linear-gradient(160deg,#2a211b,#14100d)`,
      }}
    />
  );
}
