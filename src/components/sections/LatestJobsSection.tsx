import { MapPin, Briefcase, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useJobs } from "@/hooks/useJobs";

export default function LatestJobsSection() {
  const { jobs } = useJobs();

  // Take latest 6 jobs (already sorted by createdAt in store)
  const latestJobs = jobs.slice(0, 6);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Job Openings
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the most recent job opportunities across Tamil Nadu and take
            the next step in your career with Dharvista.
          </p>
        </div>

        {/* Jobs Grid */}
        {latestJobs.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No job openings available right now.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {latestJobs.map((job) => (
              <div
                key={job.id}
                className="
                  group relative rounded-2xl border border-border bg-card
                  p-8
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:scale-[1.03]
                  hover:shadow-xl hover:border-primary/30
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {job.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {job.category}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <IndianRupee className="h-4 w-4 text-primary" />
                      {job.salary}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/jobs">View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Jobs CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/jobs">View All Job Openings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
