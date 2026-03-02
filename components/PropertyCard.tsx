import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath } from "lucide-react";

export interface Property {
  id: number;
  title: string;
  location: string;
  locationShort?: string;
  size: string;
  type: string;
  beds: number;
  baths: number;
  area: number;
  price: string;
  image: string;
  description?: string;
}

interface PropertyCardProps {
  property: Property;
  variant?: "default" | "compact";
}

export default function PropertyCard({ property, variant = "default" }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow group">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
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

      {/* Content Section */}
      <div className="p-5">
        <h3 className="font-display font-bold text-navy text-lg mb-1">{property.title}</h3>
        <div className="flex items-center gap-1 text-navy/60 text-xs mb-3">
          <MapPin size={12} />
          <span className="truncate uppercase">{property.locationShort || property.location}</span>
        </div>

        <div className="flex items-center gap-4 text-navy/70 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Bed size={14} />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={14} />
            <span>{property.baths} Baths</span>
          </div>
        </div>

        {property.description && (
          <p className="text-navy/60 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-100 text-navy/70 text-xs px-3 py-1 rounded-full">
            {property.beds} Bedrooms
          </span>
          <span className="bg-gray-100 text-navy/70 text-xs px-3 py-1 rounded-full">
            {property.baths} Bathrooms
          </span>
          <span className="bg-gray-100 text-navy/70 text-xs px-3 py-1 rounded-full">
            Living Room
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="bg-gold text-navy font-bold px-4 py-2 rounded-full text-sm">
            N{property.price}
          </span>
          <Link
            href="/contact"
            className="text-navy font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            Enquire <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
