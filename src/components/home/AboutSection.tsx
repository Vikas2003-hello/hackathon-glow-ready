import { GlassCard } from "@/components/GlassCard";
import { Target, Lightbulb, Users } from "lucide-react";

export const AboutSection = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To create a platform where innovation thrives and ideas transform into reality through collaboration.",
      delay: 0,
    },
    {
      icon: Lightbulb,
      title: "Our Mission",
      description: "Empowering developers and creators with tools and opportunities to build groundbreaking solutions.",
      delay: 0.2,
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "Fostering a community-driven environment that celebrates creativity, teamwork, and technological excellence.",
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="py-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover what drives our passion for innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <GlassCard key={index} delay={card.delay}>
            <card.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-center">{card.title}</h3>
            <p className="text-muted-foreground text-center">{card.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
