import { Home } from "lucide-react";

const plotSizes = [
  {
    size: "250 SQM",
    type: "Terrace Duplex",
    bedrooms: "3 Bedrooms",
    popular: false,
  },
  {
    size: "300 SQM",
    type: "Semi-Detached",
    bedrooms: "4 Bedrooms",
    popular: false,
  },
  {
    size: "350 SQM",
    type: "Detached Duplex",
    bedrooms: "4 Bedrooms",
    popular: true,
  },
  {
    size: "400 SQM",
    type: "Spacious Detached Duplex",
    bedrooms: "4–5 Bedrooms",
    popular: false,
  },
  {
    size: "500 SQM",
    type: "Luxury Villa",
    bedrooms: "5 Bedrooms",
    popular: false,
  },
  {
    size: "800 SQM",
    type: "Mini Mansion",
    bedrooms: "5–6 Bedrooms",
    popular: false,
  },
  {
    size: "1000 SQM",
    type: "Mansion",
    bedrooms: "6 Bedrooms",
    popular: false,
  },
];
export default function PlotSizes() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Available Sizes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-4">
            Choose Your <span className="text-gold">Plot Size</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            We offer 5 different plot sizes across all our estates to suit your needs and budget
          </p>
        </div>

        {/* Plot Sizes Grid */}
        {/* Plot Sizes Layout */}
<div className="flex flex-col gap-12">
  
  {/* Top row - 5 items */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
    {plotSizes.slice(0, 5).map((plot) => (
      <div
        key={plot.size}
        className={`relative rounded-xl p-6 text-center transition-all hover:scale-105 ${
          plot.popular
            ? "bg-navy text-white shadow-xl"
            : "bg-white border border-gray-200 shadow-md"
        }`}
      >
        {plot.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </div>
        )}

        <Home
          className={`w-8 h-8 mx-auto mb-4 ${
            plot.popular ? "text-gold" : "text-navy/40"
          }`}
        />

        <div
          className={`font-display text-2xl md:text-3xl font-bold mb-2 ${
            plot.popular ? "text-gold" : "text-navy"
          }`}
        >
          {plot.size}
        </div>

        <div
          className={`font-semibold mb-1 ${
            plot.popular ? "text-white" : "text-navy"
          }`}
        >
          {plot.type}
        </div>

        <div
          className={`text-sm ${
            plot.popular ? "text-white/70" : "text-navy/60"
          }`}
        >
          {plot.bedrooms}
        </div>
      </div>
    ))}
  </div>

  {/* Bottom row - 2 items centered */}
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-xl">
      {plotSizes.slice(5, 7).map((plot) => (
        <div
          key={plot.size}
          className={`relative rounded-xl p-6 text-center transition-all hover:scale-105 ${
            plot.popular
              ? "bg-navy text-white shadow-xl"
              : "bg-white border border-gray-200 shadow-md"
          }`}
        >
          {plot.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
          )}

          <Home
            className={`w-8 h-8 mx-auto mb-4 ${
              plot.popular ? "text-gold" : "text-navy/40"
            }`}
          />

          <div
            className={`font-display text-2xl md:text-3xl font-bold mb-2 ${
              plot.popular ? "text-gold" : "text-navy"
            }`}
          >
            {plot.size}
          </div>

          <div
            className={`font-semibold mb-1 ${
              plot.popular ? "text-white" : "text-navy"
            }`}
          >
            {plot.type}
          </div>

          <div
            className={`text-sm ${
              plot.popular ? "text-white/70" : "text-navy/60"
            }`}
          >
            {plot.bedrooms}
          </div>
        </div>
      ))}
    </div>
  </div>

</div>
      </div>
    </section>
  );
}
