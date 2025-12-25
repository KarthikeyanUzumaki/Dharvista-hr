import { useState } from "react";
import { getJobs, addJob, Job } from "@/data/jobsStore";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(getJobs());

  function refreshJobs() {
    setJobs(getJobs());
  }

  function createJob(job: Omit<Job, "id" | "createdAt">) {
    addJob(job);
    refreshJobs();
  }

  return {
    jobs,
    createJob,
  };
}
