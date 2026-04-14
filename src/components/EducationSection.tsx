import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { FadeInOnScroll } from "./AnimatedSection";

const EducationSection = () => {
  const { education } = siteContent;

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20">
            Education
          </h2>
        </FadeInOnScroll>

        <div className="space-y-0">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-border first:border-t-0"
            >
              {/* Left column - period & grade */}
              <div className="flex flex-col gap-1">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground text-sm tracking-wide"
                >
                  {edu.period}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.12, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-accent text-xs font-medium tracking-wider uppercase mt-1"
                >
                  {edu.grade}
                </motion.span>
              </div>

              {/* Right column - details */}
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 + index * 0.12, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-2 flex items-center gap-3"
                >
                  <img
                    src={edu.logoSrc}
                    alt={`${edu.institution} logo`}
                    className="h-7 w-7 shrink-0 object-contain"
                    loading="lazy"
                  />
                  <p className="text-muted-foreground text-sm tracking-widest uppercase">
                    {edu.institution}
                  </p>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold tracking-tight mb-5 group-hover:text-accent transition-colors duration-300"
                >
                  {edu.degree}
                </motion.h3>
                <ul className="space-y-2.5">
                  {edu.highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.12 + i * 0.06, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground text-sm leading-relaxed pl-4 border-l border-border group-hover:border-accent/30 transition-colors duration-300"
                    >
                      {item}
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

export default EducationSection;
