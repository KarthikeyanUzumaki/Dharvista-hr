import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Trash2,
  Plus,
  Briefcase,
  MapPin,
  DollarSign,
  GraduationCap,
  Clock,
} from "lucide-react";
import { useJobs } from "@/hooks/useJobs";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { jobs, createJob } = useJobs();

  const [headline, setHeadline] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    category: "",
    salary: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) navigate("/login");

    setHeadline("Connecting Exceptional Talent with Leading Organizations");
    setLoading(false);
  }, [navigate]);

  const handleSaveHeadline = () => {
    toast.success("Headline updated!");
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      toast.success("Banner updated!");
    } catch {
      toast.error("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleAddJob = () => {
    if (!newJob.title || !newJob.location) {
      toast.error("Please fill in Job Title and Location");
      return;
    }

    createJob({
      title: newJob.title,
      location: newJob.location,
      category: newJob.category || "General",
      salary: newJob.salary || "As per company norms",
    });

    toast.success("Job posted successfully!");

    setNewJob({
      title: "",
      location: "",
      category: "",
      salary: "",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/");
  };

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Admin Dashboard
          </h1>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        {/* Site Settings */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Edit Headline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
              <Button className="w-full" onClick={handleSaveHeadline}>
                Save
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Update Banner</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                type="file"
                onChange={handleImageUpload}
                disabled={uploading}
              />
            </CardContent>
          </Card>
        </div>

        {/* Job Manager */}
        <Card>
          <CardHeader>
            <CardTitle>Job Vacancies</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add Job Form */}
            <div className="bg-slate-100 p-6 rounded-lg mb-8 space-y-4 border">
              <h3 className="font-semibold flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Post New Job
              </h3>

              <Input
                placeholder="Job Title"
                value={newJob.title}
                onChange={(e) =>
                  setNewJob({ ...newJob, title: e.target.value })
                }
              />

              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    className="pl-9"
                    placeholder="Location"
                    value={newJob.location}
                    onChange={(e) =>
                      setNewJob({ ...newJob, location: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    className="pl-9"
                    placeholder="Category / Industry"
                    value={newJob.category}
                    onChange={(e) =>
                      setNewJob({ ...newJob, category: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    className="pl-9"
                    placeholder="Salary Range"
                    value={newJob.salary}
                    onChange={(e) =>
                      setNewJob({ ...newJob, salary: e.target.value })
                    }
                  />
                </div>
              </div>

              <Button onClick={handleAddJob} className="w-full">
                Publish Job
              </Button>
            </div>

            {/* Job List */}
            <div className="space-y-3">
              <h3 className="font-semibold border-b pb-2">
                Active Job Listings
              </h3>

              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex justify-between items-start p-4 border rounded-lg bg-white hover:shadow-md"
                >
                  <div>
                    <h4 className="font-bold">{job.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {job.location} · {job.category}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" disabled>
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
