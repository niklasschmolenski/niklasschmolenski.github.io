import { motion } from "framer-motion";
import { siteContent } from "@/content/site";

const HeroSection = () => {
  const { hero } = siteContent;

  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-4xl px-6 py-28 md:py-36">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-accent"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-accent text-sm font-medium uppercase tracking-[0.3em]"
          >
            {hero.role}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-foreground">{hero.firstName}</span>{" "}
            <span className="text-gradient">{hero.lastName}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-lg"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {hero.educationLabel}{" "}
              <span className="font-medium text-foreground">{hero.institution}</span>.
              {" "}{hero.previousLabel}{" "}
              {hero.previousCompanies.map((company, index) => (
                <span key={company}>
                  <span className="font-medium text-foreground">{company}</span>
                  {index < hero.previousCompanies.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-4 flex items-center gap-4"
          >
            <a
              href={hero.ctaHref}
              className="flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {hero.ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
