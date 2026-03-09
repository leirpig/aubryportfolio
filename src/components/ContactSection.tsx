import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Mail, label: "Email", value: "anthony.aubry@email.com", href: "mailto:anthony.aubry@email.com" },
    { icon: Github, label: "GitHub", value: "github.com/anthonyaubry", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anthonyaubry", href: "https://linkedin.com" },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-2">Contact</p>
          <h2 className="section-title">Me contacter</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            N'hésitez pas à me contacter pour toute question ou opportunité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{s.label}</p>
                  <p className="text-muted-foreground text-xs">{s.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4"
          >
            <Input
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary/50 border-border/50"
            />
            <Input
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-secondary/50 border-border/50"
            />
            <Textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-secondary/50 border-border/50"
            />
            <Button variant="gradient" className="w-full" type="submit">
              <Send size={16} />
              Envoyer
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
