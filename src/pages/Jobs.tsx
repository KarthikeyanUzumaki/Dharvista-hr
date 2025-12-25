import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, DollarSign, GraduationCap, Building2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useJobs } from "@/hooks/useJobs";

export default function Jobs() {
  const { jobs } = useJobs();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground section-padding py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Current Opportunities
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Explore exciting career opportunities with leading organizations
          </p>
        </div>
      </section>

      {/* Jobs List Section */}
      <section className="section-padding py-12 bg-slate-50 min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            {jobs.length === 0 ? (
              /* Empty State */
              <div className="text-center py-12">
                <Briefcase className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-slate-700 mb-2">
                  No Current Openings
                </h2>
                <p className="text-slate-500 mb-6 max-w-md mx-auto">
                  We don't have any positions available right now, but please
                  check back later.
                </p>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            ) : (
              /* Job Cards */
              jobs.map((job) => (
                <Card
                  key={job.id}
                  className="hover:shadow-lg transition-shadow border-slate-200 bg-white group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      {/* Left Side */}
                      <div className="space-y-4 flex-1">
                        {/* Title */}
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                            {job.title}
                          </h2>
                          <p className="text-xs text-slate-400">
                            Posted recently
                          </p>
                        </div>

                        {/* Info Row */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700 font-medium">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-primary" />
                            {job.location}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-primary" />
                            Experience Required
                          </div>

                          <div className="flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4 text-primary" />
                            {job.salary}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-primary" />
                            {job.category}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            Any Qualification
                          </div>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="w-full md:w-auto mt-2 md:mt-0">
                        <Button asChild className="w-full md:w-auto font-semibold px-8">
                          <Link to="/contact">Apply Now</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
            Don't See the Right Role?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Register your interest and we'll notify you when suitable
            opportunities arise.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link to="/contact">Register Your Interest</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
