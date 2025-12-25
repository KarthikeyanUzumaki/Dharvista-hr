export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  message: string;
  photo_url: string;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: "testimonial-001",
    name: "Rajesh Kumar",
    company: "Coimbatore Textiles Ltd.",
    rating: 5,
    message: " Dharvista HR transformed our recruitment process. They found us exceptional talent from across Tamil Nadu, especially skilled workers for our textile manufacturing unit. Their understanding of local talent pools is unmatched. Highly recommended!",
    photo_url: ""
  },
  {
    id: "testimonial-002",
    name: "Priya Venkatesh",
    company: "Chennai Tech Solutions",
    rating: 5,
    message: "As a growing IT company, we needed quality software engineers quickly.  Dharvista HR not only delivered but exceeded our expectations. They sourced candidates from Chennai, Coimbatore, and Madurai, helping us build a strong technical team. Excellent service!",
    photo_url: ""
  },
  {
    id: "testimonial-003",
    name: "Senthil Murugan",
    company: "Tamil Nadu Agro Industries",
    rating: 4,
    message: "Working with  Dharvista HR has been a game-changer for our agricultural operations. They connected us with experienced farm managers and agricultural engineers from rural Tamil Nadu. Their local expertise and network are truly valuable.",
    photo_url: ""
  }
];

