import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent } from "@/content/site";
import { FadeInOnScroll } from "./AnimatedSection";

const contactIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

const ContactSection = () => {
  const { contact } = siteContent;

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInOnScroll>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            {contact.eyebrow}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-16">
            {contact.heading}
          </h2>
        </FadeInOnScroll>

        <div className="flex flex-wrap justify-center gap-6">
          {contact.links.map((link, i) => {
            const Icon = contactIcons[link.label as keyof typeof contactIcons];

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent))" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border text-foreground hover:bg-secondary transition-colors text-lg"
              >
                {Icon ? <Icon className="h-5 w-5 shrink-0" aria-hidden="true" /> : null}
                <span>{link.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-muted-foreground text-sm">
            {contact.footer.copyright}
          </p>
          <p className="text-muted-foreground text-sm">
            {contact.footer.location}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {contact.legalLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
