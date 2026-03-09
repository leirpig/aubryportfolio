import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-primary" />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-28 h-28 rounded-full gradient-border bg-secondary flex items-center justify-center text-4xl font-display font-bold text-primary">
            AA
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Welcome to my portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight">
              Anthony <span className="gradient-text">Aubry</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              BTS SIO Student
            </p>
            <p className="max-w-xl mx-auto text-muted-foreground">
              Passionate about IT, software development and new technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="gradient" size="lg" asChild>
              <a href="#projects">
                <FolderOpen size={18} />
                View my projects
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} />
                Contact me
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-float">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
