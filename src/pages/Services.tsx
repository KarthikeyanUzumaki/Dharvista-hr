import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Search, FileText, TrendingUp, Headphones, Building } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Identifying and attracting C-suite and senior leadership talent for organizations seeking transformational leaders.",
  },
  {
    icon: Users,
    title: "Permanent Recruitment",
    description: "End-to-end recruitment solutions for permanent positions across all levels and industries.",
  },
  {
    icon: FileText,
    title: "Contract Staffing",
    description: "Flexible workforce solutions providing skilled professionals for project-based and interim requirements.",
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    description: "Strategic HR advisory services to optimize your people processes and organizational effectiveness.",
  },
  {
    icon: Headphones,
    title: "Talent Assessment",
    description: "Comprehensive evaluation tools and methodologies to identify top performers and future leaders.",
  },
  {
    icon: Building,
    title: "Outplacement Services",
    description: "Professional career transition support for employees during organizational restructuring.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive HR solutions tailored to your organizational needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-corporate">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Understand</h3>
              <p className="text-muted-foreground text-sm">
                Deep dive into your requirements and culture
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Search</h3>
              <p className="text-muted-foreground text-sm">
                Identify and engage top candidates
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Assess</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous evaluation and shortlisting
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Deliver</h3>
              <p className="text-muted-foreground text-sm">
                Seamless onboarding and follow-up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your talent acquisition goals.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
