type PageHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
};

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative py-24 md:py-32 flex items-center justify-center text-center overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#0a0a0a]" />
      )}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5] mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-[#a0a0a0] max-w-xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
