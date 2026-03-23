import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, BookOpen } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      icon: User,
      title: "Qui suis-je ?",
      text: "Étudiant en BTS SIO avec un vif intérêt pour le développement web et les technologies numériques. Curieux et motivé, je cherche toujours à apprendre de nouvelles compétences.",
    },
    {
      icon: BookOpen,
      title: "Mon parcours",
      text: "Après un baccalauréat, j'ai intégré un BTS SIO. J'ai effectué un stage en Irlande dans la réparation informatique, puis un stage au CNFPT où j'étais en charge de la gestion d'une base de données.",
    },
    {
      icon: Target,
      title: "Mes objectifs",
      text: "Devenir chef de pièce d'artillerie dans l'armée. Je suis passionné par le domaine militaire et je souhaite m'engager pour servir mon pays.",
    },
  ];

  return (
    <section id="apropos" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Présentation</p>
          <h2 className="section-title">À propos de moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes motivations et mes ambitions dans le domaine de l'informatique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
