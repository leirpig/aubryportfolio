import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rss, Lightbulb, TrendingUp, Search } from "lucide-react";

const articles = [
  {
    title: "The Rise of Generative AI",
    description: "Language models are transforming software development and IT team productivity.",
    tag: "Artificial Intelligence",
  },
  {
    title: "Cybersecurity in 2025",
    description: "New threats and best practices to protect IT infrastructure.",
    tag: "Cybersecurity",
  },
  {
    title: "Low-Code & No-Code",
    description: "These platforms are democratizing development and redefining the role of developers.",
    tag: "Development",
  },
];

const tools = ["Google Alerts", "Feedly", "YouTube", "Tech Blogs", "Reddit", "Twitter/X"];

const VeilleSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techwatch" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Tech Watch</p>
          <h2 className="section-title">Technology Watch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I monitor trends and innovations in the digital sector to stay at the cutting edge of technology.
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
            <h3 className="font-display font-semibold text-lg mb-1">Main Topic: Artificial Intelligence & Web Development</h3>
            <p className="text-muted-foreground text-sm">
              Artificial intelligence is revolutionizing web development with tools like code assistants, automatic UI generation and performance optimization. It's a key topic for any aspiring developer.
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
              <h4 className="font-display font-semibold">Trends</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI, cloud computing, cybersecurity and DevOps continue to reshape the IT landscape. Skills in automation and full-stack development are increasingly in demand by companies.
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
              <h4 className="font-display font-semibold">Monitoring Tools</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((o) => (
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
