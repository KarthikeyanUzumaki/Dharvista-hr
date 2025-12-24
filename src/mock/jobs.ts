export interface Job {
  id: string;
  title: string;
  location: string;
  salary: string;
  category: string;
  description: string;
  is_active: boolean;
  application_form_url: string;
}

export const mockJobs: Job[] = [
  {
    id: "job-001",
    title: "Senior Software Engineer",
    location: "Chennai, Tamil Nadu",
    salary: "₹8,00,000 - ₹12,00,000 per annum",
    category: "Information Technology",
    description: "We are seeking an experienced Senior Software Engineer to join our dynamic team in Chennai. The ideal candidate will have 5+ years of experience in full-stack development, proficiency in React, Node.js, and cloud technologies. You will be responsible for designing and developing scalable web applications, collaborating with cross-functional teams, and mentoring junior developers.",
    is_active: true,
    application_form_url: "https://example.com/apply/job-001"
  },
  {
    id: "job-002",
    title: "Textile Production Manager",
    location: "Coimbatore, Tamil Nadu",
    salary: "₹6,00,000 - ₹9,00,000 per annum",
    category: "Manufacturing",
    description: "Join our leading textile manufacturing company in Coimbatore as a Production Manager. You will oversee daily production operations, ensure quality standards, manage production schedules, and lead a team of production staff. The role requires 4+ years of experience in textile manufacturing, strong leadership skills, and knowledge of modern textile machinery and processes.",
    is_active: true,
    application_form_url: "https://example.com/apply/job-002"
  },
  {
    id: "job-003",
    title: "Automotive Quality Assurance Engineer",
    location: "Chennai, Tamil Nadu",
    salary: "₹7,00,000 - ₹10,00,000 per annum",
    category: "Automotive",
    description: "We are looking for a Quality Assurance Engineer to join our automotive manufacturing facility in Chennai. The candidate should have 3+ years of experience in automotive quality control, knowledge of ISO/TS standards, and expertise in quality testing procedures. Responsibilities include conducting quality inspections, maintaining quality documentation, and implementing continuous improvement initiatives.",
    is_active: true,
    application_form_url: "https://example.com/apply/job-003"
  }
];

