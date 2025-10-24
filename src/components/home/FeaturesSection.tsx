import { GlassCard } from "@/components/GlassCard";
import { Code, Zap, Globe, Shield, Cpu, Rocket } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Built with cutting-edge technologies for optimal performance",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and efficiency at every level",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Designed to reach and impact users worldwide",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Enterprise-grade security built into every feature",
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Leveraging artificial intelligence for smarter solutions",
    },
    {
      icon: Rocket,
      title: "Rapid Development",
      description: "From concept to deployment in record time",
    },
  ];

  return (
    <section id="features" className="py-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Feature Highlights</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful capabilities that set us apart
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <GlassCard key={index} delay={index * 0.1}>
            <feature.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
