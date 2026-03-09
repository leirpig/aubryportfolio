import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase my skills and projects.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Management Application",
    description: "A CRUD application for inventory management with user authentication and MySQL database.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    title: "Automation Script",
    description: "A Python script to automate file backups and generate weekly reports.",
    tech: ["Python", "Bash", "Linux"],
    github: "#",
  },
  {
    title: "E-commerce Website",
    description: "An online store prototype with shopping cart, simulated payment and order management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Work</p>
          <h2 className="section-title">My Projects</h2>
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
                      Demo
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
