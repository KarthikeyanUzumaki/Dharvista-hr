import { useQuery } from "@tanstack/react-query";
import { mockJobs, Job as MockJob } from "@/mock/jobs";

export interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  is_active: boolean;
  created_at: string;
}

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      // Transform mock data to match the Job interface
      const jobs: Job[] = mockJobs
        .filter((job: MockJob) => job.is_active)
        .map((job: MockJob, index: number) => ({
          id: job.id,
          title: job.title,
          location: job.location,
          description: job.description,
          is_active: job.is_active,
          created_at: new Date(Date.now() - index * 86400000).toISOString(), // Stagger dates for sorting
        }))
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      return jobs;
    },
  });
}
