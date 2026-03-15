import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 italic">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-navy/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Contact our expert team today and let us help you find the perfect property that
          matches your lifestyle and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-800 transition-colors"
          >
            Contact Us Today
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            Browse Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
