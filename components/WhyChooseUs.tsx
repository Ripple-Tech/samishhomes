import { Award, CreditCard, FileCheck, TreePine, Zap, HeadphonesIcon } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Award-Winning Developer",
    description: "The most reliable Real Estate services company of the year 2023.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Plans",
    description: "We offer convenient payment plans to make your dream home accessible. Spread payments over 12-36 months.",
  },
  {
    icon: FileCheck,
    title: "Legal Documentation",
    description: "All properties come with proper documentation including C of O, Survey Plans, and Deed of Assignment.",
  },
  {
    icon: TreePine,
    title: "Green Environments",
    description: "Our estates feature beautifully landscaped gardens, parks, and green spaces for a healthy lifestyle.",
  },
  {
    icon: Zap,
    title: "Modern Infrastructure",
    description: "Enjoy reliable electricity, clean water supply, paved roads, and high-speed internet connectivity.",
  },
  {
    icon: HeadphonesIcon,
    title: "After-Sales Support",
    description: "Our dedicated team provides comprehensive after-sales support to ensure your complete satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            The Samish Homes <span className="text-gold">Advantage</span>
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="bg-navy-800 rounded-xl p-8 border border-white/10 hover:border-gold/30 transition-colors"
            >
              <advantage.icon className="w-8 h-8 text-gold mb-6" />
              <h3 className="font-display font-bold text-white text-xl mb-3">{advantage.title}</h3>
              <p className="text-white/70 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

