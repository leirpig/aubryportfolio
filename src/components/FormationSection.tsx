import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";

const competences = [
  "Développement d'applications web et mobiles",
  "Gestion et administration de bases de données",
  "Configuration et maintenance de réseaux",
  "Support et mise à disposition de services informatiques",
  "Cybersécurité et protection des données",
];

const FormationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formation" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Parcours</p>
          <h2 className="section-title">Formation</h2>
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
              <p className="text-muted-foreground">Services Informatiques aux Organisations</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              [Nom de l'établissement]
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              2024 – 2026
            </span>
          </div>

          <div className="border-t border-border/50 pt-6">
            <h4 className="font-display font-semibold mb-4">Compétences acquises</h4>
            <ul className="space-y-3">
              {competences.map((c, i) => (
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
