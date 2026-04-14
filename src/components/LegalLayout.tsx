import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children: ReactNode;
}

const legalLinks = [
  { label: "Impressum", href: "/impressum.html" },
  { label: "Datenschutz", href: "/datenschutz.html" },
];

const LegalLayout = ({ title, subtitle, eyebrow = "Legal", children }: LegalLayoutProps) => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <motion.nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <motion.div
          style={{
            backgroundColor: useTransform(
              bgOpacity,
              (v) => `hsla(var(--background) / ${v})`,
            ),
          }}
          className="absolute inset-0 backdrop-blur-xl"
        />
        <div className="relative z-10 max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-foreground font-semibold text-lg tracking-tight">
            NS
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Home
            </Link>
            {legalLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={
                    isActive
                      ? "text-foreground text-sm"
                      : "text-muted-foreground hover:text-foreground text-sm transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <main className="mx-auto max-w-5xl px-6 pb-16 pt-32 md:pt-40">
        <p className="text-accent text-sm font-medium uppercase tracking-[0.3em] mb-4">{eyebrow}</p>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">{title}</h1>
        <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>

        <section className="mt-10 rounded-3xl border border-border bg-card/70 p-8 md:p-10">
          {children}
        </section>
      </main>
    </div>
  );
};

export default LegalLayout;
