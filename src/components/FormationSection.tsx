import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";

const skills = [
  "Web and mobile application development",
  "Database management and administration",
  "Network configuration and maintenance",
  "IT service support and deployment",
  "Cybersecurity and data protection",
];

const FormationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Background</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl">BTS SIO</h3>
              <p className="text-muted-foreground">IT Services for Organizations</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              [School Name]
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              2024 – 2026
            </span>
          </div>

          <div className="border-t border-border/50 pt-6">
            <h4 className="font-display font-semibold mb-4">Skills acquired</h4>
            <ul className="space-y-3">
              {skills.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-2.5 text-sm text-secondary-foreground"
                >
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationSection;
