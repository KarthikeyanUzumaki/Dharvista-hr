import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Building lasting partnerships through exceptional talent solutions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in London, Model Corp has grown to become one of the UK's most trusted 
                HR consultancies. Our journey began with a simple belief: that the right talent, 
                in the right role, can transform organizations.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over the years, we've built deep relationships across industries, from financial 
                services to technology, healthcare to manufacturing. Our consultants bring not 
                just expertise, but genuine passion for connecting people with opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to evolve, embracing innovation while staying true to our 
                core values of integrity, excellence, and personal service.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Integrity</h4>
                    <p className="text-muted-foreground text-sm">
                      We operate with honesty and transparency in every interaction
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-muted-foreground text-sm">
                      We strive for the highest standards in everything we do
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Partnership</h4>
                    <p className="text-muted-foreground text-sm">
                      We build long-term relationships, not just transactions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      We embrace new approaches to deliver better outcomes
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Clients Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">Placements Made</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
