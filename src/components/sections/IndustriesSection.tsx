import {
    Factory,
    Shirt,
    Wheat,
    HeartPulse,
    Hotel,
    Car,
    GraduationCap,
    Building2,
    Headset,
    Briefcase,
  } from "lucide-react";
  
  const industries = [
    { name: "Fireworks Industry", icon: Factory },
    { name: "Textile Manufacturing", icon: Shirt },
    { name: "Agriculture & Agribusiness", icon: Wheat },
    { name: "Medical & Healthcare", icon: HeartPulse },
    { name: "Hotels & Restaurants", icon: Hotel },
    { name: "Automobile", icon: Car },
    { name: "Education & Training", icon: GraduationCap },
    { name: "Construction & Real Estate", icon: Building2 },
    { name: "BPO & Customer Services", icon: Headset },
    { name: "Sales & Marketing", icon: Briefcase },
  ];
  
  export default function IndustriesSection() {
    return (
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve Across Tamil Nadu
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dharvista works closely with a wide range of industries, delivering
              reliable recruitment solutions backed by strong local workforce
              knowledge and sector-specific expertise.
            </p>
          </div>
  
          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="
                    group relative rounded-2xl border border-border bg-card
                    p-10 text-center
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.03]
                    hover:shadow-xl hover:border-primary/30
                  "
                >
                  {/* Glow effect */}
                  <div
                    className="
                      absolute inset-0 rounded-2xl
                      bg-primary/5 opacity-0 blur-xl
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
  
                  {/* Icon */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div
                      className="
                        w-20 h-20 rounded-full
                        bg-primary/10 flex items-center justify-center
                        transition-all duration-300
                        group-hover:bg-primary group-hover:scale-110
                      "
                    >
                      <Icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>
  
                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-semibold text-foreground">
                    {industry.name}
                  </h3>
                </div>
              );
            })}
          </div>
  
          {/* Industry Expertise Statement */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              From traditional industries unique to Tamil Nadu to modern service
              sectors, Dharvista understands the workforce challenges faced by
              each domain. Our cross-industry experience enables us to deliver
              recruitment solutions that support sustainable growth and long-term
              success.
            </p>
          </div>
        </div>
      </section>
    );
  }
  