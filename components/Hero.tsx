"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";

const heroData = [
  {
    id: 1,
    heading: "HOME IS NOT JUST A PLACE,",
    headingAccent: "IT'S A FEELING....",
    subText:
      "Find your happy place with Samish Homes and Apartments; We deliver timely with commitment and your rest of mind in every square meter.",
    img: "/bana1.png",
  },
  {
    id: 2,
    heading: "WE UNLOCK YOUR",
    headingAccent: "DREAM HOME...",
    subText:
      "Your trusted partner providing luxury and affordable housing opportunities in a fast growing and changing environment, regardless of class or status.",
    img: "/bana2.png",
  },
  {
    id: 3,
    heading: "YOUR DREAM HOME,",
    headingAccent: "YOUR HAPPY PLACE....",
    subText:
      "Your dream home, crafted with excellence and Elegance in mind specially for your comfort.",
    img: "/bana3.png",
  },
  {
    id: 4,
    heading: "START YOUR PROPERTY JOURNEY TODAY WITH",
    headingAccent: "SAMISH HOMES AND APARTMENTS....",
    subText:
      "Where every door opens to a new possibility for everyone, regardless of your class or status.",
    img: "/bana4.png",
  },
  {
    id: 5,
    heading: "EXPERIENCE LUXURY,",
    headingAccent: "EXPERIENCE LIFE WITH PEACE OF MIND...",
    subText:
      "Home is not just a place, it's a feeling. Elevate your desired lifestyle with Samish Homes and Apartments today.",
    img: "/bana5.png",
  },
];

const stats = [
  { value: "8+", label: "Prime Estates" },
  { value: "1,595+", label: "Total Plots" },
  { value: "5", label: "Property Sizes" },
  { value: "100%", label: "Satisfaction" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = heroData[activeIndex % heroData.length];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* ── Swiper Background ── */}
      <div className="absolute inset-0 top-20">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          speed={1500}
          fadeEffect={{ crossFade: true }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {heroData.map((item) => (
            <SwiperSlide key={item.id} className="h-full w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src={item.img}
                alt={`Samish Homes slide ${item.id}`}
                fill
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/65 z-10" />
      </div>

      {/* ── Overlay Content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 min-h-[calc(100vh-5rem)] flex flex-col justify-center">

        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2 bg-gold/90 text-navy font-semibold text-sm tracking-wider rounded-full">
            PREMIUM REAL ESTATE IN ABUJA
          </span>
        </div>

        {/* Text — key re-mounts on slide change to retrigger animation */}
        <div
          key={activeIndex}
          className="text-center max-w-4xl mx-auto animate-fade-in-up"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white italic block">{current.heading}</span>
            <span className="text-gold italic block">{current.headingAccent}</span>
          </h1>

          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            {current.subText}
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

        {/* Slide dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {heroData.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex % heroData.length
                  ? "w-8 bg-gold"
                  : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center py-6 px-4 rounded-lg ${
                index === 1 ? "bg-gold/90" : "bg-navy/60 backdrop-blur-sm"
              }`}
            >
              <div
                className={`font-display text-3xl md:text-4xl font-bold italic mb-1 ${
                  index === 1 ? "text-navy" : "text-gold"
                }`}
              >
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