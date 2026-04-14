import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { siteContent } from "@/content/site";
import { FadeInOnScroll } from "./AnimatedSection";

type Project = (typeof siteContent.projects)[number];

const ProjectRow = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const hasGithub = Boolean(project.github);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
      className="group border-t border-border"
    >
      <div className="py-8 md:py-10 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-start">
        {/* Left: number + subtitle */}
        <div className="flex items-baseline gap-4">
          <span className="text-muted-foreground/30 text-sm font-mono tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-muted-foreground text-sm tracking-widest uppercase">
            {project.subtitle}
          </span>
        </div>

        {/* Right: content */}
        <div>
          {/* Title row with link */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener"
                  aria-label={project.linkLabel}
                  className="underline-offset-4 hover:underline"
                >
                  {project.anchorText}
                </a>
              ) : (
                project.title
              )}
            </h3>

            {hasGithub && (
              <div className="flex items-center gap-3 shrink-0 pt-1">
                <a
                  href={project.github!}
                  target="_blank"
                  rel="noopener"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            )}
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-lg">
            {project.description}
          </p>

          {project.contextSentence && (
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-lg">
              {project.contextSentence}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300"
              >
                {tag}
                {tag !== project.tags[project.tags.length - 1] && (
                  <span className="ml-2 text-border">·</span>
                )}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { projects } = siteContent;

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20">
            Projects
          </h2>
        </FadeInOnScroll>

        <div className="border-b border-border">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
