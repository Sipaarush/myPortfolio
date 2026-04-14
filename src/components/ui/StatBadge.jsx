export default function StatBadge({ value, label }) {
  return (
    <div className="text-right">
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs font-mono text-gray-500 uppercase">
        {label}
      </div>
    </div>
  );
}