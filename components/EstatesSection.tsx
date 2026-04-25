import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const estates = [
  {
    id: "hillcity-residence",
    name: "Hillcity Residence",
    plots: 45,
    description: "A prestigious hilltop community offering panoramic views and serene living. Hillcity Residence is de...",
    image: "/hillcity1.jpg",
  },
   {
    id: "sterling-heights-ridge-city-guzape",
    name: "Sterling Heights Ridge City Guzape",
    plots: 55,
    description: "Ridge City at Sterling Heights Estate in Guzape offers elevated living with stunning ridge views. Th...",
    image: "/bana1.png",
  },
  {
    id: "samish-homesphere-karsana",
    name: "Samish Homesphere Karsana",
    plots: 88,
    description: "Our flagship development in Karsana, Samish Homesphere is a master-planned community that redefines ...",
    image: "/bana2.png",
  },
  {
    id: "crete-sterling-heights-guzape",
    name: "Crete Sterling Heights Guzape",
    plots: 62,
    description: "Located in the heart of Guzape, one of Abuja's most sought-after districts. Crete Sterling Heights E...",
    image: "/bana3.png",
  },
 
];

export default function EstatesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Our Estates
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-4">
            Prime <span className="text-gold">Site Locations</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Explore our carefully selected estates across Abuja&apos;s most desirable neighborhoods
          </p>
        </div>

        {/* Estates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {estates.map((estate) => (
            <div
              key={estate.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={estate.image}
                  alt={estate.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {estate.plots} Plots Available
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{estate.name}</h3>
                <p className="text-navy/60 text-sm mb-4 line-clamp-2">{estate.description}</p>
                <Link
                  href={`/site-locations/${estate.id}`}
                  className="text-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/site-locations"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-800 transition-colors"
          >
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
}
