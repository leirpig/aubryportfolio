import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rss, Lightbulb, TrendingUp, Search } from "lucide-react";

const articles = [
  {
    title: "L'essor de l'IA générative",
    description: "Les modèles de langage transforment le développement logiciel et la productivité des équipes IT.",
    tag: "Intelligence Artificielle",
  },
  {
    title: "Cybersécurité en 2025",
    description: "Les nouvelles menaces et les bonnes pratiques pour protéger les infrastructures informatiques.",
    tag: "Cybersécurité",
  },
  {
    title: "Le low-code et no-code",
    description: "Ces plateformes démocratisent le développement et redéfinissent le rôle des développeurs.",
    tag: "Développement",
  },
];

const outils = ["Google Alerts", "Feedly", "YouTube", "Blogs spécialisés", "Reddit", "Twitter/X"];

const VeilleSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="veille" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Veille</p>
          <h2 className="section-title">Veille technologique</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Je surveille les tendances et innovations du secteur numérique pour rester à la pointe de la technologie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 mb-8 flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Lightbulb className="text-primary" size={22} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg mb-1">Thème principal : Intelligence Artificielle & Développement Web</h3>
            <p className="text-muted-foreground text-sm">
              L'intelligence artificielle révolutionne le développement web avec des outils comme les assistants de code, la génération automatique d'interfaces et l'optimisation des performances. C'est un sujet central pour tout futur développeur.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-5 hover:border-primary/30 transition-colors"
            >
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {article.tag}
              </span>
              <h4 className="font-display font-semibold mt-3 mb-2">{article.title}</h4>
              <p className="text-muted-foreground text-sm">{article.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-primary" size={20} />
              <h4 className="font-display font-semibold">Tendances</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              L'IA, le cloud computing, la cybersécurité et le DevOps continuent de transformer le paysage informatique. Les compétences en automatisation et en développement full-stack sont de plus en plus demandées par les entreprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Search className="text-primary" size={20} />
              <h4 className="font-display font-semibold">Outils de veille</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {outils.map((o) => (
                <span key={o} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                  {o}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VeilleSection;
