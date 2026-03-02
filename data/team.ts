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
    name: "Mr. Samuel Adeyemi",
    title: "Chief Executive Officer",
    description: "With over 20 years of experience in real estate development, Samuel leads Samish Homes with a vision to transform Abuja's residential landscape. His expertise in property development and investment has driven the company's growth.",
    email: "ceo@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/3326719087.jpeg",
  },
  {
    id: 2,
    name: "Mrs. Amaka Okonkwo",
    title: "Managing Director",
    description: "Amaka brings 15 years of real estate management expertise to Samish Homes. She oversees all operations and ensures that every client receives exceptional service from inquiry to property handover.",
    email: "md@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/2209890906.jpeg",
  },
  {
    id: 3,
    name: "Engr. Chukwuemeka Nwosu",
    title: "Head of Construction",
    description: "A certified civil engineer with 18 years of experience, Emeka ensures all Samish Homes properties are built to the highest standards. He oversees quality control across all our estate developments.",
    email: "construction@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/922202370.jpeg",
  },
  {
    id: 4,
    name: "Ms. Fatima Al-Hassan",
    title: "Head of Sales & Marketing",
    description: "Fatima leads our dynamic sales team with passion and expertise. With a background in marketing and real estate, she has helped hundreds of families find their dream homes across our estates.",
    email: "sales@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/1465841229.jpeg",
  },
  {
    id: 5,
    name: "Barr. Oluwaseun Adebayo",
    title: "Legal Counsel",
    description: "A seasoned property lawyer with expertise in real estate law, Seun ensures all transactions are legally sound. He handles documentation, title verification, and protects the interests of both the company and clients.",
    email: "legal@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/3595672143.jpeg",
  },
  {
    id: 6,
    name: "Mrs. Grace Okafor",
    title: "Customer Relations Manager",
    description: "Grace is the heart of our customer service team. With her warm personality and deep knowledge of our properties, she ensures every client feels valued and supported throughout their property journey.",
    email: "customercare@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/2254214152.jpeg",
  },
  {
    id: 7,
    name: "Mr. Ibrahim Musa",
    title: "Estate Manager",
    description: "Ibrahim oversees the day-to-day management of all our estates, ensuring facilities are well-maintained and residents enjoy a comfortable living experience. His attention to detail is unmatched.",
    email: "estates@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/862611488.jpeg",
  },
  {
    id: 8,
    name: "Ms. Chidinma Eze",
    title: "Finance Director",
    description: "Chidinma manages the financial operations of Samish Homes with precision and integrity. She oversees payment plans, financial reporting, and ensures the company maintains its financial health.",
    email: "finance@samishhomes.com",
    image: "https://ext.same-assets.com/2617002787/2199596358.jpeg",
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
