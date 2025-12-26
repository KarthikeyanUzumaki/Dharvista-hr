// src/services/jobService.ts
import { Job } from "@/types";

// 1. Simulate a network delay (so you can see your loading spinners working)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 2. Define the "Key" we use in LocalStorage
const STORAGE_KEY = "dharvista_jobs";

export const jobService = {
  
  // GET ALL JOBS
  getAll: async (): Promise<Job[]> => {
    await delay(500); // Fake delay
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // GET ONE JOB BY ID
  getById: async (id: string): Promise<Job | undefined> => {
    await delay(500);
    const data = localStorage.getItem(STORAGE_KEY);
    const jobs: Job[] = data ? JSON.parse(data) : [];
    return jobs.find((j) => j.id === id);
  },

  // CREATE JOB (Admin)
  create: async (job: Omit<Job, "id" | "createdAt" | "status">): Promise<boolean> => {
    await delay(800);
    const newJob: Job = {
      ...job,
      id: crypto.randomUUID(), // Generates a unique ID
      createdAt: new Date().toISOString(),
      status: "published"
    };

    const existingData = localStorage.getItem(STORAGE_KEY);
    const jobs: Job[] = existingData ? JSON.parse(existingData) : [];
    
    // Add new job to the top of the list
    localStorage.setItem(STORAGE_KEY, JSON.stringify([newJob, ...jobs]));
    return true;
  },

  // DELETE JOB (Admin)
  delete: async (id: string): Promise<boolean> => {
    await delay(500);
    const existingData = localStorage.getItem(STORAGE_KEY);
    if (!existingData) return false;

    const jobs: Job[] = JSON.parse(existingData);
    const filteredJobs = jobs.filter((j) => j.id !== id);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredJobs));
    return true;
  }
};