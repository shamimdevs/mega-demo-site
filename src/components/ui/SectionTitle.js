export default function SectionTitle({ children, action }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="flex items-center gap-2.5 text-lg font-medium tracking-[0.12em] text-white">
        <span className="h-5 w-1 rounded-full bg-gold-500" aria-hidden="true" />
        {children}
      </h2>
      {action}
    </div>
  );
}
