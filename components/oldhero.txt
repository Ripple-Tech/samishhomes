"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "https://ext.same-assets.com/2617002787/1319706308.jpeg",
  "https://ext.same-assets.com/2617002787/4026451409.jpeg",
  "https://ext.same-assets.com/2617002787/3904350765.jpeg",
  "https://ext.same-assets.com/2617002787/4001650424.jpeg",
];

const stats = [
  { value: "8+", label: "Prime Estates" },
  { value: "1,595+", label: "Total Plots" },
  { value: "5", label: "Property Sizes" },
  { value: "100%", label: "Satisfaction" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen pt-20">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 pt-20">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Luxury property ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-navy/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/60 hover:bg-navy/80 text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-6 py-2 bg-gold/90 text-navy font-semibold text-sm tracking-wider rounded-full mb-8">
            PREMIUM REAL ESTATE IN ABUJA
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="italic">Your Dream Home</span>
            <br />
            <span className="text-gold italic">Awaits You</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover premium residential properties across Abuja&apos;s finest locations. From
            terrace duplexes to luxury mansions, Samish Homes and Apartments delivers
            excellence in every square meter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-300 transition-colors"
            >
              Explore Properties
            </Link>
            <Link
              href="/site-locations"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              View Locations
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center py-6 px-4 rounded-lg ${
                index === 1 ? "bg-gold/90" : "bg-navy/60 backdrop-blur-sm"
              }`}
            >
              <div className={`font-display text-3xl md:text-4xl font-bold ${
                index === 1 ? "text-navy" : "text-gold"
              } italic mb-1`}>
                {stat.value}
              </div>
              <div className={`text-sm ${index === 1 ? "text-navy/80" : "text-white/80"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
