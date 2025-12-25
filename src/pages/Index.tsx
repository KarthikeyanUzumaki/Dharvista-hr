import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { ArrowRight, Users, Target, Award, Briefcase } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import IndustriesSection from "@/components/sections/IndustriesSection";
import LatestJobsSection from "@/components/sections/LatestJobsSection";

export default function Index() {
  const { data: settings, isLoading } = useSiteSettings();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {isLoading ? (
          <Skeleton className="absolute inset-0" />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-slow"
            style={{
              backgroundImage: `url(${
                settings?.hero_image ||
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
              })`,
            }}
          >
            <div className="absolute inset-0 bg-primary/70" />
          </div>
        )}

        <div className="relative z-10 container-wide text-center text-primary-foreground py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up max-w-4xl mx-auto text-balance">
            {isLoading ? (
              <Skeleton className="h-16 w-full max-w-2xl mx-auto bg-primary-foreground/20" />
            ) : (
              settings?.hero_headline ||
              "Connecting Tamil Nadu's Talent with Opportunities"
            )}
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Excellence in Local Recruitment from Aruppukottai to All of Tamil Nadu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <Button asChild variant="hero" size="xl">
              <Link to="/jobs">
                View Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline-primary"
              size="xl"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
  
      <LatestJobsSection />
      
      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dharvista is a recruitment agency headquartered in Aruppukottai,
              Virudhunagar District, Tamil Nadu. We specialize in bridging skilled
              talent from rural and semi-urban areas with opportunities across
              local and global industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Expert Team",
                desc: "Seasoned professionals with deep industry knowledge",
                icon: Users,
              },
              {
                title: "Precision Matching",
                desc: "Tailored solutions for perfect candidate-client fit",
                icon: Target,
              },
              {
                title: "Proven Results",
                desc: "Track record of successful placements across sectors",
                icon: Award,
              },
              {
                title: "Industry Reach",
                desc: "Serving Fireworks, Textile, Agriculture, Printing, Matchbox, IT, and Medical industries",
                icon: Briefcase,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                    group relative rounded-2xl border border-border bg-card
                    p-10 text-center
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.04]
                    hover:shadow-xl hover:border-primary/30
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className="w-18 h-18 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <Icon className="h-9 w-9 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="relative z-10 font-semibold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-muted-foreground text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Find Your Next Opportunity?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our current openings or get in touch with our team to discuss
            your career aspirations.
          </p>
          <Button asChild size="lg">
            <Link to="/jobs">
              Explore Careers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
