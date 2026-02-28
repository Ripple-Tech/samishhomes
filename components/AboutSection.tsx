import Link from "next/link";
import { CheckCircle } from "lucide-react";

const features = [
  { title: "Quality Construction", desc: "Built to last with premium materials" },
  { title: "Secure Communities", desc: "24/7 security in all estates" },
  { title: "Prime Locations", desc: "Strategically located estates" },
  { title: "Luxury Finishes", desc: "High-end interior and exterior" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">
              Welcome to Samish Homes
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-4 mb-2">
              Building Dreams,
              <br />
              <span className="text-gold">Creating Legacies</span>
            </h2>
            <p className="text-navy/70 mt-6 leading-relaxed">
              Samish Homes and Apartments is Abuja's premier real estate company, dedicated to
              providing exceptional residential properties that combine luxury, comfort, and
              lasting value. With over 8 prime estates across the FCT, we offer a diverse
              portfolio of properties to suit every lifestyle and budget.
            </p>
            <p className="text-navy/70 mt-4 leading-relaxed">
              From the prestigious hills of Guzape to the vibrant communities of Lugbe, our
              developments are strategically located to give you the best of Abuja living. Each
              property is built to the highest standards with quality materials and thoughtful
              design.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{feature.title}</h4>
                    <p className="text-navy/60 text-xs">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-300 transition-colors mt-8"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://ext.same-assets.com/2617002787/2940095684.jpeg"
                alt="Luxury Property"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              {/* Stats Badges */}
              <div className="absolute -top-4 -right-4 bg-navy text-white px-6 py-4 rounded-lg shadow-lg">
                <div className="text-gold text-3xl font-bold font-display">500+</div>
                <div className="text-white/80 text-sm">Happy Families</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy px-6 py-4 rounded-lg shadow-lg">
                <div className="text-navy text-3xl font-bold font-display">15+</div>
                <div className="text-navy/80 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
