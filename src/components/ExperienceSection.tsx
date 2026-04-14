import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { FadeInOnScroll } from "./AnimatedSection";

const ExperienceSection = () => {
  const { experience } = siteContent;

  return (
    <section className="relative py-32 md:py-48 px-6">
      <FadeInOnScroll className="max-w-4xl mx-auto mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient">
          Experience
        </h2>
      </FadeInOnScroll>

      <div className="max-w-4xl mx-auto relative">

        <div className="flex flex-col gap-12 md:gap-16">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative flex items-start gap-5 md:gap-8"
          >
            {/* Dot + segment line */}
            <div className="shrink-0 relative z-10 flex flex-col items-center self-stretch">
              <div className="mt-2.5 w-2.5 h-2.5 rounded-full bg-muted-foreground/30 shrink-0 transition-all duration-400 group-hover:bg-accent group-hover:shadow-[0_0_10px_hsl(var(--accent)/0.4)]" />
              <div className="w-px flex-1 mt-2 bg-border/40 transition-colors duration-400 group-hover:bg-accent/40" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-1">
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="shrink-0">
                    <img
                      src={exp.logoSrc}
                      alt={`${exp.company} logo`}
                      className="h-8 w-8 md:h-10 md:w-10 rounded-xl object-cover shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm md:text-base font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="text-muted-foreground text-sm font-mono shrink-0 md:mt-1">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground/60 text-sm font-mono mb-4">
                {exp.location}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="text-muted-foreground/40 mt-0.5 shrink-0">
                      –
                    </span>
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
