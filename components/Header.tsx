"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/site-locations", label: "Site Locations" },
  { href: "/properties", label: "Properties" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://ext.same-assets.com/2617002787/3511556923.svg"
              alt="Samish Homes Logo"
              width={40}
              height={40}
              className="w-40 h-30"
            />
            <div className="text-white hidden md:block">
              <span className="font-bold text-sm tracking-wide">SAMISH HOMES</span>
              <br />
              <span className="text-xs tracking-widest text-white/80">AND APARTMENTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-navy font-semibold text-sm rounded-full hover:bg-gold hover:text-navy transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white py-3 text-sm font-medium border-b border-white/10 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center px-6 py-2.5 bg-white text-navy font-semibold text-sm rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
