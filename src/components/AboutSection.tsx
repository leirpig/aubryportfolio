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
      title: "Who am I?",
      text: "BTS SIO student with a keen interest in web development and digital technologies. Curious and motivated, I'm always looking to learn new skills.",
    },
    {
      icon: BookOpen,
      title: "My background",
      text: "After high school, I enrolled in BTS SIO. I completed an internship in Ireland in computer repair, then an internship at CNFPT where I was in charge of managing a database.",
    },
    {
      icon: Target,
      title: "My goals",
      text: "Become a full-stack developer and contribute to innovative projects. I plan to pursue a professional degree or engineering school after my BTS.",
    },
  ];

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Introduction</p>
          <h2 className="section-title">About me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover my background, motivations and ambitions in the field of IT.
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
