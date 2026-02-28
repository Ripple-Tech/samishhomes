"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "https://ext.same-assets.com/2617002787/4239176835.jpeg",
  "https://ext.same-assets.com/2617002787/2940095684.jpeg",
  "https://ext.same-assets.com/2617002787/3809266106.jpeg",
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
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gold/90 rounded-full mb-6">
          <span className="text-navy font-semibold text-xs tracking-wider uppercase">
            Premium Real Estate in Abuja
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-white font-bold italic mb-4 max-w-4xl">
          Your Dream Home
          <br />
          <span className="text-gold">Awaits You</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/90 text-base md:text-lg max-w-2xl mb-8">
          Discover premium residential properties across Abuja's finest locations. From
          terrace duplexes to luxury mansions, Samish Homes and Apartments delivers
          excellence in every square meter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-300 transition-colors"
          >
            Explore Properties
          </Link>
          <Link
            href="/site-locations"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            View Locations
          </Link>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-28 right-8 bg-navy/80 text-white text-sm px-3 py-1.5 rounded">
          {currentSlide + 1} / {heroImages.length}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-navy/60 hover:bg-navy/80 text-white rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-navy/60 hover:bg-navy/80 text-white rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${
                  index < stats.length - 1 ? "md:border-r md:border-white/20" : ""
                }`}
              >
                <div className="text-gold text-2xl md:text-3xl font-bold italic font-display">
                  {stat.value}
                </div>
                <div className="text-white/80 text-xs md:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
