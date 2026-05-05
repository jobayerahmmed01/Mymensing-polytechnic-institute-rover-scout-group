import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

const AboutCard = ({ icon: Icon, title, text }: AboutCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-smooth text-center border border-border">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
        <Icon className="w-7 h-7 text-accent-foreground" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

export default AboutCard;
