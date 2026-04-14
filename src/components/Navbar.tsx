import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = ["Experience", "Education", "Projects", "Research", "Theses", "Skills", "Contact"];

const Navbar = () => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6 sm:py-4">
      <motion.div
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `hsla(var(--background) / ${v})`),
        }}
        className="absolute inset-0 backdrop-blur-xl"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl items-center justify-between">
        <a href="#" className="text-foreground text-lg font-semibold tracking-tight" onClick={closeMobileMenu}>
          NS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground p-1 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground p-2 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-muted-foreground hover:text-foreground p-2 transition-colors"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <motion.div
        id="mobile-nav-menu"
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -8,
          maxHeight: isMobileMenuOpen ? 260 : 0,
          marginTop: isMobileMenuOpen ? 12 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl overflow-hidden md:hidden"
      >
        <div className="rounded-2xl border border-border/70 bg-background/95 p-3 shadow-lg backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMobileMenu}
                className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-2 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
