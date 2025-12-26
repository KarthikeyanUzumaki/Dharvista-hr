import { Link, useNavigate, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useJobs } from "@/hooks/useJobs";
import { ArrowLeft, MapPin, Building2, Clock, DollarSign, CheckCircle2, Calendar } from "lucide-react";

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, isLoading } = useJobs();

  const job = jobs.find((j) => j.id === id);

  const relatedJobs = jobs
    .filter((j) => j.industry === job?.industry && j.id !== job?.id)
    .slice(0, 2);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex h-screen items-center justify-center">
          <p className="text-muted-foreground">Loading job details...</p>
        </div>
      </Layout>
    );
  }

  if (!job) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
          <p className="text-muted-foreground mb-6">The position you are looking for may have been closed.</p>
          <Button onClick={() => navigate("/jobs")}>Browse All Jobs</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen pb-20">
        
        {/* 🟢 HEADER: Using Primary Theme Color */}
        <div className="bg-primary py-12 text-primary-foreground">
          <div className="container mx-auto px-4 max-w-5xl">
            <Link to="/jobs" className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 mb-6 transition-colors w-fit">
              <ArrowLeft className="w-4 h-4" /> Back to Jobs
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">{job.title}</h1>
                  {job.priority === 'urgent' && (
                    <Badge variant="destructive" className="border-white/20">Urgent</Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-primary-foreground/80 mt-2">
                  <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {job.industry}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Apply Button: Contrast against Primary Header */}
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-bold shadow-lg">
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-5xl -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="md:col-span-2 space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="whitespace-pre-line">{job.description}</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Using Primary/10 for soft background */}
                  <div className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg text-primary-foreground/90">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <p className="whitespace-pre-line text-foreground">{job.eligibility}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Job Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <HighlightRow 
                    icon={<DollarSign className="w-5 h-5 text-green-600" />} 
                    label="Salary" 
                    value={`₹${job.salaryMin.toLocaleString()} - ₹${job.salaryMax.toLocaleString()}`} 
                  />
                  <HighlightRow 
                    icon={<Clock className="w-5 h-5 text-primary" />} 
                    label="Experience" 
                    value={`${job.experienceMin} - ${job.experienceMax} Years`} 
                  />
                  <HighlightRow 
                    icon={<Building2 className="w-5 h-5 text-purple-600" />} 
                    label="Job Type" 
                    value={job.type.replace('-', ' ').toUpperCase()} 
                  />
                </CardContent>
              </Card>

              {relatedJobs.length > 0 && (
                <div className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Similar Jobs</h3>
                  <div className="space-y-3">
                    {relatedJobs.map((rJob) => (
                      <Link key={rJob.id} to={`/jobs/${rJob.id}`} className="block">
                        <div className="bg-white p-3 rounded-lg border hover:border-primary/50 transition cursor-pointer shadow-sm group">
                          <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{rJob.title}</div>
                          <div className="text-xs text-gray-500 mt-1">{rJob.location}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function HighlightRow({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="bg-gray-50 p-2 rounded-full">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}