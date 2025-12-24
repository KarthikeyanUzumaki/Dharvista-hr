import { Link } from "react-router-dom";

import { Layout } from "@/components/Layout";

import { Button } from "@/components/ui/button";

import { useSiteSettings } from "@/hooks/useSiteSettings";

import { ArrowRight, Users, Target, Award, Briefcase } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";



export default function Index() {

  const { data: settings, isLoading } = useSiteSettings();



  return (

    <Layout>

      {/* Hero Section */}

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}

        {isLoading ? (

          <Skeleton className="absolute inset-0" />

        ) : (

          <div

            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-slow"

            style={{

              backgroundImage: `url(${settings?.hero_image || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"})`,

            }}

          >

            <div className="absolute inset-0 bg-primary/70" />

          </div>

        )}



        {/* Content */}

        <div className="relative z-10 container-wide text-center text-primary-foreground py-20">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up max-w-4xl mx-auto text-balance">

            {isLoading ? (

              <Skeleton className="h-16 w-full max-w-2xl mx-auto bg-primary-foreground/20" />

            ) : (

              settings?.hero_headline || "Connecting Tamil Nadu's Talent with Opportunities"

            )}

          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-delay">

            Excellence in Local Recruitment from Aruppukottai to All of Tamil Nadu

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">

            <Button asChild variant="hero" size="xl" className="animate-scale-in">

              <Link to="/jobs">

                View Opportunities

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

            </Button>

            <Button asChild variant="outline-primary" size="xl" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">

              <Link to="/contact">Get in Touch</Link>

            </Button>

          </div>

        </div>

      </section>



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

              Collabrate is a recruitment agency headquartered in Aruppukottai, Virudhunagar District, Tamil Nadu.

              We specialize in bridging skilled talent from rural and semi-urban areas with opportunities across local and global industries.

            </p>

          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="card-corporate text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>

              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">

                <Users className="h-7 w-7 text-primary" />

              </div>

              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>

              <p className="text-muted-foreground text-sm">

                Seasoned professionals with deep industry knowledge

              </p>

            </div>



            <div className="card-corporate text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>

              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">

                <Target className="h-7 w-7 text-primary" />

              </div>

              <h3 className="font-semibold text-lg mb-2">Precision Matching</h3>

              <p className="text-muted-foreground text-sm">

                Tailored solutions for perfect candidate-client fit

              </p>

            </div>



            <div className="card-corporate text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>

              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">

                <Award className="h-7 w-7 text-primary" />

              </div>

              <h3 className="font-semibold text-lg mb-2">Proven Results</h3>

              <p className="text-muted-foreground text-sm">

                Track record of successful placements across sectors

              </p>

            </div>



            <div className="card-corporate text-center">

              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">

                <Briefcase className="h-7 w-7 text-primary" />

              </div>

              <h3 className="font-semibold text-lg mb-2">Industry Reach</h3>

              <p className="text-muted-foreground text-sm">

                Serving Fireworks, Textile, Agriculture, Printing, Matchbox, IT, and Medical industries

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA Section */}

      <section className="section-padding bg-secondary">

        <div className="container-wide text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">

            Ready to Find Your Next Opportunity?

          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">

            Browse our current openings or get in touch with our team to discuss your career aspirations.

          </p>

          <Button asChild size="lg" className="animate-scale-in">

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