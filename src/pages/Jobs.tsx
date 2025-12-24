import { useEffect, useState } from "react";
import { mockJobs, Job as MockJob } from "@/mock/jobs";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Briefcase, DollarSign, GraduationCap, Building2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Define the new "Super Job" structure
interface Job {
  id: string;
  title: string;
  job_code: string;
  location: string;
  experience: string;
  salary_range: string;
  industry: string;
  qualification: string;
  description: string;
  created_at: string;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    // Transform mock data to match the expected Job interface
    const transformedJobs: Job[] = mockJobs
      .filter((job: MockJob) => job.is_active)
      .map((job: MockJob) => ({
        id: job.id,
        title: job.title,
        job_code: `JOB-${job.id.split('-')[1]?.toUpperCase() || '001'}`,
        location: job.location,
        experience: "3-5 years", // Default experience range
        salary_range: job.salary,
        industry: job.category,
        qualification: "Bachelor's Degree", // Default qualification
        description: job.description,
        created_at: new Date().toISOString(), // Use current date as default
      }))
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    setJobs(transformedJobs);
    setLoading(false);
  };

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
          
          {loading ? (
            // Loading Skeletons
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 h-48 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.length === 0 ? (
                // Empty State
                <div className="text-center py-12">
                  <Briefcase className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-slate-700 mb-2">No Current Openings</h2>
                  <p className="text-slate-500 mb-6 max-w-md mx-auto">
                    We don't have any positions available right now, but please check back later.
                  </p>
                  <Button asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              ) : (
                // Job Cards
                jobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow border-slate-200 bg-white group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        
                        {/* Left Side: Job Details */}
                        <div className="space-y-4 flex-1">
                          
                          {/* Title & Code */}
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                {job.title}
                              </h2>
                              {job.job_code && (
                                <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200">
                                  {job.job_code}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400">
                              Posted: {new Date(job.created_at).toLocaleDateString()}
                            </p>
                          </div>

                          {/* Info Icons Grid */}
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700 font-medium">
                            {job.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-primary" />
                                {job.location}
                              </div>
                            )}
                            {job.experience && (
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-primary" />
                                {job.experience}
                              </div>
                            )}
                            {job.salary_range && (
                              <div className="flex items-center gap-1.5">
                                <DollarSign className="w-4 h-4 text-primary" />
                                {job.salary_range}
                              </div>
                            )}
                            {job.industry && (
                              <div className="flex items-center gap-1.5">
                                <Building2 className="w-4 h-4 text-primary" />
                                {job.industry}
                              </div>
                            )}
                            {job.qualification && (
                              <div className="flex items-center gap-1.5">
                                <GraduationCap className="w-4 h-4 text-primary" />
                                {job.qualification}
                              </div>
                            )}
                          </div>

                          {/* Description Preview */}
                          <div className="pt-1">
                            <p className="text-slate-600 leading-relaxed text-sm line-clamp-2">
                              {job.description}
                            </p>
                          </div>
                        </div>

                        {/* Right Side: Apply Button */}
                        <div className="w-full md:w-auto mt-2 md:mt-0 flex-shrink-0">
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
            Don't See the Right Role?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Register your interest and we'll notify you when suitable opportunities arise.
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/contact">Register Your Interest</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}