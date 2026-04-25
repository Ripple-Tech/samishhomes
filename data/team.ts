export interface TeamMember {
  id: number;
  name: string;
  title: string;
  qualifications: string;
  description: string;
  email: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "ESV. SAMSON ISHAYA IDI",
    title: "Chief Executive Officer",
    description: "With over 15 years of experience in the real Estate Management and a fellow in Nigeria Institution of Estate Surveyors and Values, ESV. Samson leads Samish Homes and Apartment Limited with visions for actualizing dreams",
    qualifications: "FNIS, RSV, MBA, B.TECH",
    email: "ceo@samishhomes.com",
    image: "/team1.jpg",
  },
  {
    id: 2,
    name: "Mr. EKO GEORGE OHEPO",
    title: "General Manager",
    qualifications: "LCC, ICEN, MBA",
    description: "With over 9 years of management and operations experience in Banking and 8 years of sales and marketing expertise within the FMCG industry, George leads operations at Samish Homes and Apartment Limited. He is known for his pragmatic leadership, results-driven approach and commitment to operational excellence.",
    email: "md@samishhomes.com",
    image: "/team2.jpg",
  },
  {
    id: 3,
    name: "Mrs. GRACE OYIZA SOLOMON",
    title: "Head of Sales and Marketing",
    description:"Grace, heads Sales and marketing at Samish Homes and Apartment Limited. She leverages over her versed experience to deliver market growth and strengthen brand positioning, by driving strategy, customer engagement and revenue growth.", 
    email: "construction@samishhomes.com",
    qualifications: "HND, PGDM, MSC",
    image: "/team3.jpg",
  },
  {
    id: 4,
    name: "Ezekiel Okwor",
    title: "Head Administrative Department",
    description: "Ezekiel, leads the administrative department at Samish Homes and Apartment Limited, ensuring smooth day-to-day operations, policy, implementation and organizational efficiency of the company. He drives operational excellence by streamlining processes, coordinating support functions, and upholding company standards.",
    email: "admin@samishhomes.com",
    qualifications: "B.A, M.A",
    image: "/okwo.png",
  }
  
];

export const values = [
  {
    id: 1,
    title: "Client-Focused",
    description: "Every decision we make is centered around delivering the best experience for our clients.",
    icon: "users",
  },
  {
    id: 2,
    title: "Innovation-Driven",
    description: "We continuously innovate to bring modern solutions to real estate challenges.",
    icon: "lightbulb",
  },
  {
    id: 3,
    title: "Trust & Integrity",
    description: "We build lasting relationships based on transparency, honesty, and mutual respect.",
    icon: "shield",
  },
];

export const benefits = [
  {
    id: 1,
    title: "Competitive Pay",
    description: "Industry-leading compensation packages",
  },
  {
    id: 2,
    title: "Career Growth",
    description: "Clear paths for advancement",
  },
  {
    id: 3,
    title: "Great Culture",
    description: "Supportive and inclusive workplace",
  },
];
