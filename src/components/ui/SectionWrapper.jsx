export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="py-28 px-8 relative">
      
      <div className="text-xs font-mono text-gray-500 uppercase mb-2">
        {id}
      </div>

      <h2 className="text-4xl font-bold mb-6">
        {title}
      </h2>

      <div className="h-[1px] bg-gradient-to-r from-[#2a3060] to-transparent mb-10"></div>

      {children}
    </section>
  );
}