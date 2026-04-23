export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  email: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "ESV. SAMSON ISHAYA IDI",
    title: "Chief Executive Officer",
    description: "FNIS, RSV, MBA, B.TECH",
    email: "ceo@samishhomes.com",
    image: "/team1.jpg",
  },
  {
    id: 2,
    name: "Mr. EKO GEORGE OHEPO",
    title: "General Manager",
    description: "LCC, ICEN, MBA", email: "md@samishhomes.com",
    image: "/team2.jpg",
  },
  {
    id: 3,
    name: "Mrs. GRACE OYIZA SOLOMON",
    title: "Head of Sales and Marketing",
    description:"HND, PGDM, MSC", email: "construction@samishhomes.com",
    image: "/team3.jpg",
  },
  
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
