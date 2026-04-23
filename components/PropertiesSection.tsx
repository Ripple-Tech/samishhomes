import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Maximize, ArrowRight } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Terrace Duplex - 250 SQM",
    location: "HILLCITY RESIDENCE",
    size: "250 SQM",
    type: "Terrace Duplex",
    beds: 3,
    baths: 3,
    area: 250,
    price: "45M",
    image: "https://ext.same-assets.com/2617002787/1003212119.jpeg",
  },
  {
    id: 2,
    title: "Semi-Detached Duplex - 300 SQM",
    location: "HILLCITY RESIDENCE",
    size: "300 SQM",
    type: "Semi-Detached Duplex",
    beds: 4,
    baths: 4,
    area: 300,
    price: "54M",
    image: "https://ext.same-assets.com/2617002787/1994372926.jpeg",
  },
  {
    id: 3,
    title: "Detached Duplex - 350 SQM",
    location: "HILLCITY RESIDENCE",
    size: "350 SQM",
    type: "Detached Duplex",
    beds: 4,
    baths: 4,
    area: 350,
    price: "63M",
    image: "https://ext.same-assets.com/2617002787/4026451409.jpeg",
  },
  {
    id: 4,
    title: "Luxury Villa - 500 SQM",
    location: "HILLCITY RESIDENCE",
    size: "500 SQM",
    type: "Luxury Villa",
    beds: 5,
    baths: 5,
    area: 500,
    price: "90M",
    image: "https://ext.same-assets.com/2617002787/3904350765.jpeg",
  },
  {
    id: 5,
    title: "Mansion - 1000 SQM",
    location: "HILLCITY RESIDENCE",
    size: "1000 SQM",
    type: "Mansion",
    beds: 6,
    baths: 6,
    area: 1000,
    price: "180M",
    image: "https://ext.same-assets.com/2617002787/4001650424.jpeg",
  },
  {
    id: 6,
    title: "Terrace Duplex - 250 SQM",
    location: "CRETE STERLING HEIGHTS ESTATE GUZAPE MAI...",
    size: "250 SQM",
    type: "Terrace Duplex",
    beds: 3,
    baths: 3,
    area: 250,
    price: "65M",
    image: "https://ext.same-assets.com/2617002787/1319706308.jpeg",
  },
];

export default function PropertiesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Featured Listings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-4">
            Premium <span className="text-gold">Properties</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across all our estates
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-gold text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                    {property.size}
                  </span>
                  <span className="bg-white text-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                    {property.type}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{property.title}</h3>
                <div className="flex items-center gap-1 text-navy/60 text-xs mb-4">
                  <MapPin size={12} />
                  <span className="truncate">{property.location}</span>
                </div>
                <div className="flex items-center gap-4 text-navy/70 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize size={16} />
                    <span>{property.area} m²</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="bg-navy text-white font-bold px-4 py-2 rounded-full text-sm">
                    {/* N{property.price} */}
                  </span>
                  <Link
                    href="/properties"
                    className="text-navy font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
