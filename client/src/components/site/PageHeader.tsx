type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, subtitle, id, className }: PageHeaderProps) {
  return (
    <div id={id} className={`mx-auto max-w-6xl px-4 pb-12 pt-10 md:pb-16 md:pt-14 ${className ?? ""}`}>
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      ) : null}
      <h2 className="font-sora text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
