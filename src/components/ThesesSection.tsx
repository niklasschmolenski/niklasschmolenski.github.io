import { motion, useMotionValue, useTransform } from "framer-motion";
import { FadeInOnScroll } from "./AnimatedSection";
import { useState } from "react";
import { siteContent } from "@/content/site";

type Thesis = (typeof siteContent.theses)[number];

const ThesisCard = ({ thesis, index }: { thesis: Thesis; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 800,
      }}
      className="relative rounded-lg border border-border bg-card/50 p-8 md:p-10 transition-colors hover:border-accent/30"
    >
      {/* Degree badge */}
      <div className="flex items-center justify-between mb-6">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-accent/30 text-accent"
        >
          {thesis.degree} Thesis
        </motion.span>
        <span className="text-muted-foreground text-sm">{thesis.year}</span>
      </div>

      {/* Institutions */}
      <div className="mb-4 flex flex-wrap gap-2">
        {thesis.institutions.map((institution) => (
          <div
            key={institution.label}
            className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <img
                src={institution.src}
                alt={institution.alt}
                className="h-3.5 w-3.5 object-contain"
                loading="lazy"
              />
            </span>
            <span>{institution.label}</span>
          </div>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 leading-snug">
        {thesis.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {thesis.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {thesis.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Subtle glow on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--accent) / 0.06), transparent 40%)",
        }}
      />
    </motion.div>
  );
};

const ThesesSection = () => {
  const { theses } = siteContent;

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20">
            Theses
          </h2>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {theses.map((thesis, i) => (
            <ThesisCard key={thesis.degree} thesis={thesis} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThesesSection;
