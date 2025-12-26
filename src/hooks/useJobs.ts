// src/hooks/useJobs.ts
import { useState, useEffect } from "react";
import { Job, JobStatus, JobPriority } from "../types";
import { MOCK_JOBS } from "../mock/jobs";
import { useToast } from "./use-toast"; // Adjust path if needed

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setJobs(MOCK_JOBS);
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const createJob = async (jobData: any) => {
    setIsLoading(true);
    
    try {
      // Simulate API Call
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newJob: Job = {
        id: `job-${Date.now()}`,
        title: jobData.title,
        location: jobData.location,
        industry: jobData.industry || "General",
        
        description: jobData.description || "",
        eligibility: jobData.eligibility || "",
        
        salaryMin: Number(jobData.salaryMin) || 0,
        salaryMax: Number(jobData.salaryMax) || 0,
        salaryCurrency: "INR",
        
        experienceMin: Number(jobData.experienceMin) || 0,
        experienceMax: Number(jobData.experienceMax) || 0,
        
        type: "full-time",
        status: "published" as JobStatus,
        priority: "normal" as JobPriority,
        
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setJobs((prev) => [newJob, ...prev]);
      return true;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create job.",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteJob = async (id: string) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
    toast({
      title: "Deleted",
      description: "Job removed successfully.",
    });
  };

  return {
    jobs,
    isLoading,
    createJob,
    deleteJob,
    refreshJobs: fetchJobs,
  };
}