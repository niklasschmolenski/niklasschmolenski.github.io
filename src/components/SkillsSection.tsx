import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/content/site";

type SkillGroup = (typeof siteContent.skillGroups)[number];

const StatusDot = ({ delay }: { delay: number }) => (
  <div className="w-1.5 h-1.5 rounded-full bg-accent">
    <motion.div
      className="w-1.5 h-1.5 rounded-full bg-accent"
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    />
  </div>
);

const SkillItem = ({
  item,
  iIndex,
  panelIndex,
}: {
  item: string;
  iIndex: number;
  panelIndex: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      delay: panelIndex * 0.1 + iIndex * 0.06,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    viewport={{ once: true, margin: "-40px" }}
    className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0 group/item"
  >
    <div className="w-1 h-1 rounded-full bg-muted-foreground/30 group-hover/item:bg-accent transition-colors duration-300" />
    <span className="text-sm md:text-base font-light tracking-wide text-foreground/80 group-hover/item:text-foreground transition-colors duration-300">
      {item}
    </span>
  </motion.div>
);

const SkillPanel = ({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.55"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="relative border border-border rounded-lg overflow-hidden group hover:border-accent/40 transition-colors duration-500 will-change-transform"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <StatusDot delay={index * 0.2} />
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
            {group.label}
          </span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Panel body */}
      <div className="px-5 py-5 space-y-0">
        {group.items.map((item, iIndex) => (
          <SkillItem
            key={item}
            item={item}
            iIndex={iIndex}
            panelIndex={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { skillGroups } = siteContent;
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.5"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <motion.h2
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 will-change-transform"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <SkillPanel key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
