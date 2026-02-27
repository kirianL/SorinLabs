interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col gap-4 ${alignmentClasses[align]} mb-16`}>
      {badge && (
        <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
          {badge}
        </span>
      )}
      <h2
        className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="max-w-[700px] text-pretty text-white/60 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
