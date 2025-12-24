import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash2, Plus, Briefcase, MapPin, DollarSign, GraduationCap, Clock } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [headline, setHeadline] = useState('');
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Job State
  const [jobs, setJobs] = useState<any[]>([]);
  const [newJob, setNewJob] = useState({ 
    title: '', 
    job_code: '',
    location: '', 
    experience: '',
    salary_range: '',
    industry: '',
    qualification: '',
    description: '' 
  });

  useEffect(() => {
    checkUser();
    fetchContent();
  }, []);

  const checkUser = () => {
    const token = localStorage.getItem('admin_token');
    if (!token) navigate('/login');
  };

  const fetchContent = async () => {
    setLoading(true);
    // Mock data loading - no backend calls
    setHeadline('Connecting Exceptional Talent with Leading Organizations');
    setJobs([]);
    setLoading(false);
  };

  // --- HEADLINE LOGIC ---
  const handleSaveHeadline = async () => {
    console.log('Headline update:', headline);
    toast.success("Headline updated!");
  };

  // --- IMAGE LOGIC ---
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      console.log('Image upload:', file.name, file);
      toast.success("Banner updated!");
    } catch (error) {
      toast.error("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  // --- JOB LOGIC ---
  const generateJobId = () => {
    const id = `#JOB-${new Date().getFullYear()}${Math.floor(Math.random() * 100000)}`;
    setNewJob({ ...newJob, job_code: id });
  };

  const handleAddJob = async () => {
    if (!newJob.title || !newJob.location) {
      toast.error("Please fill in Title and Location");
      return;
    }

    const jobToPost = {
      ...newJob,
      job_code: newJob.job_code || `#JOB-${Date.now()}`,
      is_active: true
    };

    console.log('Job form data:', jobToPost);
    toast.success("Job posted successfully!");
    setNewJob({ 
      title: '', job_code: '', location: '', experience: '', 
      salary_range: '', industry: '', qualification: '', description: '' 
    }); 
  };

  const handleDeleteJob = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    console.log('Delete job:', id);
    toast.success("Deleted");
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/');
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <Button variant="destructive" onClick={handleLogout}>Logout</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Site Editor */}
          <Card>
            <CardHeader><CardTitle>Edit Headline</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Input value={headline} onChange={(e) => setHeadline(e.target.value)} />
              <Button onClick={handleSaveHeadline} className="w-full bg-blue-900 text-white">Save</Button>
            </CardContent>
          </Card>
          {/* Image Uploader */}
          <Card>
            <CardHeader><CardTitle>Update Banner</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Input type="file" onChange={handleImageUpload} disabled={uploading} />
            </CardContent>
          </Card>
        </div>

        {/* JOB MANAGER */}
        <Card>
          <CardHeader><CardTitle>Job Vacancies</CardTitle></CardHeader>
          <CardContent>
            
            {/* Input Form */}
            <div className="bg-slate-100 p-6 rounded-lg mb-8 space-y-4 border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <Plus className="w-5 h-5" /> Post New Job
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500">Job Title</label>
                  <Input placeholder="e.g. Senior Developer" value={newJob.title} onChange={(e) => setNewJob({...newJob, title: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500">Job Code</label>
                  <div className="flex gap-2">
                    <Input placeholder="#JOB-..." value={newJob.job_code} onChange={(e) => setNewJob({...newJob, job_code: e.target.value})} />
                    <Button variant="outline" onClick={generateJobId} size="sm">Auto</Button>
                  </div>
                </div>
              </div>

              {/* Icon Inputs Wrapper */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input className="pl-9" placeholder="Location" value={newJob.location} onChange={(e) => setNewJob({...newJob, location: e.target.value})} />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input className="pl-9" placeholder="Experience (e.g. 3-10 Yrs)" value={newJob.experience} onChange={(e) => setNewJob({...newJob, experience: e.target.value})} />
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input className="pl-9" placeholder="Salary" value={newJob.salary_range} onChange={(e) => setNewJob({...newJob, salary_range: e.target.value})} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input className="pl-9" placeholder="Industry" value={newJob.industry} onChange={(e) => setNewJob({...newJob, industry: e.target.value})} />
                </div>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input className="pl-9" placeholder="Qualification" value={newJob.qualification} onChange={(e) => setNewJob({...newJob, qualification: e.target.value})} />
                </div>
              </div>

              <Textarea 
                placeholder="Full Job Description..." 
                className="min-h-[100px]"
                value={newJob.description} 
                onChange={(e) => setNewJob({...newJob, description: e.target.value})} 
              />
              
              <Button onClick={handleAddJob} className="w-full bg-blue-900 text-white">
                Publish Job Now
              </Button>
            </div>

            {/* List of Existing Jobs */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-700 border-b pb-2">Active Job Listings</h3>
              {jobs.map((job) => (
                <div key={job.id} className="flex justify-between items-start p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-lg">{job.title}</h4>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">{job.job_code}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {job.location}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3 h-3"/> {job.salary_range}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteJob(job.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                    <Trash2 className="w-5 h-5" />
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