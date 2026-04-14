import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { FadeInOnScroll } from "./AnimatedSection";

const PublicationsSection = () => {
  const { publications } = siteContent;

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20">
            Research
          </h2>
        </FadeInOnScroll>

        {publications.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="border-t border-border pt-8 mt-12 first:mt-0 origin-top group"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm tracking-widest uppercase mb-4"
            >
              {pub.venue}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold tracking-tight mb-4 max-w-3xl"
            >
              {pub.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-base leading-relaxed mb-6 max-w-3xl"
            >
              {pub.authors.split(pub.highlightAuthor).map((part, j, arr) => (
                <span key={j}>
                  {part}
                  {j < arr.length - 1 && (
                    <span className="text-foreground font-medium">{pub.highlightAuthor}</span>
                  )}
                </span>
              ))}
            </motion.p>
            {pub.link && (
              <motion.a
                href={pub.link}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5"
              >
                {pub.linkLabel}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
