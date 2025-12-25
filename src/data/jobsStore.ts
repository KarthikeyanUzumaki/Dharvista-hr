export type Job = {
    id: string;
    title: string;
    location: string;
    category: string;
    salary: string;
    createdAt: number;
  };
  
  let jobs: Job[] = [
    {
      id: "1",
      title: "HR Executive",
      location: "Aruppukottai",
      category: "Human Resources",
      salary: "₹15,000 – ₹25,000",
      createdAt: Date.now() - 600000,
    },
    {
      id: "2",
      title: "Textile Supervisor",
      location: "Virudhunagar",
      category: "Textile Manufacturing",
      salary: "₹18,000 – ₹30,000",
      createdAt: Date.now() - 500000,
    },
  ];
  
  export function getJobs() {
    return jobs.sort((a, b) => b.createdAt - a.createdAt);
  }
  
  export function addJob(job: Omit<Job, "id" | "createdAt">) {
    jobs.unshift({
      ...job,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    });
  }
  