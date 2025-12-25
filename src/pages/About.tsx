import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            About  Dharvista
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Connecting Tamil Nadu’s talent with meaningful opportunities
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
                 Dharvista is a recruitment agency headquartered in Aruppukottai,
                Virudhunagar District, Tamil Nadu. Our journey began with a clear
                purpose: to bridge skilled talent from rural and semi-urban areas
                with the right employment opportunities.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We work closely with industries that form the backbone of the
                region, including fireworks, textile manufacturing, agriculture,
                printing, and matchbox industries, while also supporting modern
                sectors such as IT and healthcare.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining local insight with professional recruitment
                practices,  Dharvista delivers reliable, ethical, and long-term
                workforce solutions that benefit both employers and job seekers.
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
                      We operate with honesty, transparency, and fairness in
                      every interaction.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-muted-foreground text-sm">
                      We are committed to delivering high-quality recruitment
                      solutions with consistent standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Partnership</h4>
                    <p className="text-muted-foreground text-sm">
                      We build long-term relationships with employers and
                      candidates based on trust.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Community Focus</h4>
                    <p className="text-muted-foreground text-sm">
                      We are dedicated to empowering local talent and supporting
                      regional industries.
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
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                10+
              </div>
              <p className="text-muted-foreground">Years of Regional Expertise</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                300+
              </div>
              <p className="text-muted-foreground">Employers Supported</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                3000+
              </div>
              <p className="text-muted-foreground">Successful Placements</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                95%
              </div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
       <WhyChooseUsSection />
    </Layout>
  );
}
