import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Globe, Monitor, Terminal, Wrench } from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Développement Web",
    skills: [
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    icon: Code,
    title: "Programmation",
    skills: [
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    icon: Database,
    title: "Bases de données",
    skills: [
      { name: "SQL / MySQL", level: 80 },
    ],
  },
  {
    icon: Monitor,
    title: "Réseaux & Systèmes",
    skills: [
      { name: "Administration réseau", level: 60 },
      { name: "Linux", level: 65 },
    ],
  },
  {
    icon: Wrench,
    title: "Outils",
    skills: [
      { name: "Git / GitHub", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    icon: Terminal,
    title: "Autres",
    skills: [
      { name: "Méthodologie Agile", level: 55 },
      { name: "Documentation", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competences" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Savoir-faire</p>
          <h2 className="section-title">Mes compétences</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
