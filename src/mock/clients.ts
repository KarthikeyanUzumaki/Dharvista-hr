export interface Client {
  id: string;
  name: string;
  industry: string;
  logo: string; // 🟢 New field for future images
}

export const MOCK_CLIENTS: Client[] = [
  { id: '1', name: 'Bunty', industry: 'Retail', logo: "" },
  { id: '2', name: 'Vwin Notebooks', industry: 'Manufacturing', logo: "" },
  { id: '3', name: 'Velacherry Venkateshwara', industry: 'Retail', logo: "" },
  { id: '4', name: 'Mutha Opticals', industry: 'Healthcare', logo: "" },
  { id: '5', name: 'Barbikan', industry: 'Wholesale', logo: "" },
  { id: '6', name: 'MP Enterprises', industry: 'General', logo: "" },
  { id: '7', name: 'Glitz', industry: 'Lifestyle', logo: "" },
  { id: '8', name: 'AGC', industry: 'Corporate', logo: "" },
  { id: '9', name: 'Info Solutions', industry: 'IT Services', logo: "" },
];