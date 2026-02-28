import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/site-locations", label: "Site Locations" },
  { href: "/properties", label: "Properties" },
  { href: "/team", label: "Our Team" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const estates = [
  "Hillcity Residence",
  "Crete Sterling Heights",
  "Samish Homesphere Karsana",
  "Sterling Heights Ridge City",
  "Stardom City Estate",
  "Starlight Estate Lugbe",
  "Sunshine Estate Lugbe",
  "Prestige Resident Aviation City",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy font-display font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm tracking-wide">SAMISH HOMES</span>
                <span className="text-xs text-white/70 tracking-widest">AND APARTMENTS</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted partner in premium real estate across Abuja. We deliver exceptional
              properties that combine luxury, comfort, and value.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Estates */}
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-wider uppercase mb-6">
              Our Estates
            </h4>
            <ul className="space-y-3">
              {estates.map((estate) => (
                <li key={estate}>
                  <Link
                    href="/site-locations"
                    className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {estate}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-wider uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Head Office, Abuja, FCT, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>+234 800 000 0000</p>
                  <p>+234 800 000 0001</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>info@samishhomes.com</p>
                  <p>sales@samishhomes.com</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>Mon - Fri: 8am - 6pm</p>
                  <p>Sat: 9am - 4pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Samish Homes and Apartments. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
