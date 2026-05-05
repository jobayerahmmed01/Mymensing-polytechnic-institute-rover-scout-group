import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

const AboutCard = ({ icon: Icon, title, text }: AboutCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-border/50 hover:border-primary/50 group relative overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-14 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center shadow-lg relative z-10"
      >
        <Icon className="w-7 h-7 text-accent-foreground" />
      </motion.div>
      
      <h3 className="text-xl font-bold mb-2 text-foreground relative z-10">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{text}</p>
    </motion.div>
  );
};

export default AboutCard;
