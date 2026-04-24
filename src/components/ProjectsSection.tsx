import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Site Web Portfolio",
    description: "Création d'un portfolio personnel en React avec Tailwind CSS pour présenter mes compétences et projets.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Application de Gestion",
    description: "Application CRUD pour la gestion d'un inventaire avec authentification utilisateur et base de données MySQL.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    title: "Script d'Automatisation",
    description: "Script Python pour automatiser la sauvegarde de fichiers et la génération de rapports hebdomadaires.",
    tech: ["Python", "Bash", "Linux"],
    github: "#",
  },
  {
    title: "Site E-commerce",
    description: "Prototype de boutique en ligne avec panier, paiement simulé et gestion des commandes.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Projet Fredi",
    description: "Projet de gestion des frais de déplacement et d'indemnisation pour les organisateurs d'événements.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projets" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Réalisations</p>
          <h2 className="section-title">Mes projets</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-6 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="h-1 w-16 rounded-full mb-5" style={{ background: "var(--gradient-primary)" }} />

              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Démo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
