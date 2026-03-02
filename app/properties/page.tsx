"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { estates, locations, sizes, allProperties } from "@/data/properties";

export default function PropertiesPage() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const filteredEstates = useMemo(() => {
    let result = estates;

    if (selectedLocation !== "all") {
      result = result.filter((estate) => estate.id === selectedLocation);
    }

    if (selectedSize) {
      result = result.map((estate) => ({
        ...estate,
        properties: estate.properties.filter((prop) => prop.size === selectedSize),
      })).filter((estate) => estate.properties.length > 0);
    }

    return result;
  }, [selectedLocation, selectedSize]);

  const totalProperties = useMemo(() => {
    return filteredEstates.reduce((acc, estate) => acc + estate.properties.length, 0);
  }, [filteredEstates]);

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[350px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://ext.same-assets.com/2617002787/4026451409.jpeg"
              alt="Properties Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/70" />
          </div>

          <div className="relative z-10 text-center px-4 py-20">
            <span className="inline-block px-6 py-2 bg-gold text-navy font-semibold text-sm tracking-wider rounded-full mb-6">
              AVAILABLE PROPERTIES
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gold italic">Properties</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Browse all available properties across our 8 prime estates in Abuja
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">›</span>
              <span className="text-gold">Properties</span>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Location Filters */}
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setSelectedLocation(location.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedLocation === location.id
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-navy/70 hover:bg-gray-200"
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>

              {/* Properties Count */}
              <div className="text-navy/60 text-sm">
                <span className="font-bold text-navy">{totalProperties}</span> Properties Found
              </div>
            </div>

            {/* Size Filters */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-navy/60 text-sm">Filter by Size:</span>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-navy/70 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Properties by Estate */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEstates.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-navy/60 text-lg">No properties found matching your criteria.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLocation("all");
                    setSelectedSize(null);
                  }}
                  className="mt-4 text-gold font-semibold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredEstates.map((estate) => (
                <div key={estate.id} className="mb-16 last:mb-0">
                  {/* Estate Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
                    <div>
                      <h2 className="font-display font-bold text-navy text-2xl uppercase">
                        {estate.name}
                      </h2>
                      <div className="flex items-center gap-1 text-navy/60 text-sm mt-1">
                        <MapPin size={14} />
                        <span>{estate.location}</span>
                      </div>
                    </div>
                    <Link
                      href={`/properties?location=${estate.id}`}
                      className="text-gold font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      View All <span>→</span>
                    </Link>
                  </div>

                  {/* Properties Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {estate.properties.slice(0, selectedLocation === "all" ? 5 : undefined).map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Interested in a <span className="text-gold">Property?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Contact our sales team for pricing, availability, and payment plans.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-300 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
