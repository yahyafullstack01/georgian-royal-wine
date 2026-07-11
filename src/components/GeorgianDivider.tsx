export default function GeorgianDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/70 sm:w-24" />
      <span className="text-xs text-gold-500">◆</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/70 sm:w-24" />
    </div>
  );
}
