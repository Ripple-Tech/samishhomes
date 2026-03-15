"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, ChevronRight, Building2, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { estates } from "@/data/properties";

// ─── Ordered estate list per requirements ─────────────────────────────────────
// Map from display name → data id
const ESTATE_ORDER = [
  { displayName: "Hillcity Residence",          id: "hillcity-residence" },
  { displayName: "Sterling Heights Ridge City", id: "sterling-heights-ridge-city-guzape" },
  { displayName: "Samish Onyx Homes",           id: null }, // coming soon
  { displayName: "Hill View Residence",         id: null }, // coming soon
  { displayName: "Samish Homesphere Karsana",   id: "samish-homesphere-karsana" },
  { displayName: "Stardom City Estate",         id: "stardom-city-kurudu-jikwoyi" },
  { displayName: "Starlight Estate Lugbe",      id: "starlight-estate-lugbe" },
];

// Also include estates in data that aren't in the ordered list
const orderedIds = ESTATE_ORDER.map((e) => e.id).filter(Boolean);
const extraEstates = estates.filter((e) => !orderedIds.includes(e.id));

// Build full site-location list
const siteLocations = [
  ...ESTATE_ORDER.map((item) => {
    if (!item.id) {
      return {
        id: item.displayName.toLowerCase().replace(/\s+/g, "-"),
        displayName: item.displayName,
        location: "Abuja, FCT",
        properties: [],
        comingSoon: true,
        coverImage: null,
      };
    }
    const estate = estates.find((e) => e.id === item.id)!;
    return {
      id: estate.id,
      displayName: item.displayName,
      location: estate.location,
      properties: estate.properties,
      comingSoon: false,
      coverImage: estate.properties[0]?.image ?? null,
    };
  }),
  ...extraEstates.map((estate) => ({
    id: estate.id,
    displayName: estate.name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" "),
    location: estate.location,
    properties: estate.properties,
    comingSoon: false,
    coverImage: estate.properties[0]?.image ?? null,
  })),
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SiteLocationsPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeLocation = activeId
    ? siteLocations.find((l) => l.id === activeId) ?? null
    : null;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">

        {/* ── Hero ── */}
        <section className="relative min-h-[380px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://ext.same-assets.com/2617002787/4026451409.jpeg"
              alt="Samish Homes Site Locations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/75" />
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg,#eabe20,#daa30d,#eabe20)" }}
            />
          </div>

          <div className="relative z-10 text-center px-4 py-24">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2 bg-gold text-navy font-semibold text-sm tracking-wider rounded-full mb-6"
            >
              OUR ESTATES
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Site <span className="text-gold italic">Locations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg max-w-2xl mx-auto mb-8"
            >
              Explore our {siteLocations.filter((l) => !l.comingSoon).length} prime estate locations across Abuja's fastest-growing corridors
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-white/70"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">›</span>
              <span className="text-gold">Site Locations</span>
            </motion.div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-navy py-5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
              {[
                { value: `${siteLocations.filter((l) => !l.comingSoon).length}`, label: "Active Estates" },
                { value: `${siteLocations.reduce((a, l) => a + l.properties.length, 0)}+`, label: "Total Units" },
                { value: "Abuja", label: "FCT Nigeria" },
                { value: "2+", label: "Coming Soon" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-gold">{s.value}</p>
                  <p className="text-white/60 text-xs uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="py-14 bg-navy-50 min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-8 rounded-full bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Browse Locations</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Click an estate to explore its properties
              </h2>
            </motion.div>

            {/* ── MOBILE: accordion (hidden on lg+) ── */}
            <div className="lg:hidden space-y-3">
              {siteLocations.map((loc, i) => {
                const isOpen = activeId === loc.id;
                return (
                  <motion.div
                    key={loc.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`rounded-xl overflow-hidden border transition-all ${
                      isOpen ? "border-navy shadow-md" : "border-gray-200 bg-white"
                    }`}
                  >
                    {/* Accordion header */}
                    <button
                      type="button"
                      disabled={loc.comingSoon}
                      onClick={() => !loc.comingSoon && setActiveId(isOpen ? null : loc.id)}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${
                        isOpen
                          ? "bg-navy text-white"
                          : loc.comingSoon
                          ? "bg-white text-navy/40 cursor-not-allowed"
                          : "bg-white text-navy"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen ? "bg-gold" : loc.comingSoon ? "bg-gray-100" : "bg-navy-50"
                          }`}
                        >
                          <Building2
                            size={16}
                            className={isOpen ? "text-navy" : loc.comingSoon ? "text-navy/30" : "text-navy"}
                          />
                        </div>
                        <div>
                          <p className={`font-semibold text-sm leading-snug ${isOpen ? "text-white" : loc.comingSoon ? "text-navy/40" : "text-navy"}`}>
                            {loc.displayName}
                          </p>
                          {loc.comingSoon ? (
                            <span className="text-xs text-gold/70 font-medium">Coming Soon</span>
                          ) : (
                            <p className={`text-xs mt-0.5 ${isOpen ? "text-white/60" : "text-navy/50"}`}>
                              {loc.properties.length} unit{loc.properties.length !== 1 ? "s" : ""}
                            </p>
                          )}
                        </div>
                      </div>
                      {!loc.comingSoon && (
                        <ChevronRight
                          size={16}
                          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90 text-gold" : "text-navy/30"}`}
                        />
                      )}
                    </button>

                    {/* Accordion body — units inline */}
                    <AnimatePresence initial={false}>
                      {isOpen && !loc.comingSoon && (
                        <motion.div
                          key="mobile-units"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-white"
                        >
                          {/* Cover strip */}
                          {loc.coverImage && (
                            <div className="relative h-40 w-full">
                              <Image src={loc.coverImage} alt={loc.displayName} fill className="object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                              <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white/80 text-xs">
                                <MapPin size={11} className="text-gold" />
                                <span>{loc.location}</span>
                              </div>
                            </div>
                          )}

                          {/* Mini stats */}
                          <div className="grid grid-cols-3 gap-2 px-4 py-4 border-b border-gray-100">
                            {[
                              { label: "Units", value: loc.properties.length.toString() },
                              { label: "From", value: loc.properties.length > 0 ? `₦${loc.properties[0].price}` : "—" },
                              { label: "Types", value: [...new Set(loc.properties.map((p) => p.type))].length.toString() },
                            ].map((s) => (
                              <div key={s.label} className="text-center bg-navy-50 rounded-lg py-2 px-1">
                                <p className="font-display font-bold text-navy text-sm">{s.value}</p>
                                <p className="text-navy/50 text-xs">{s.label}</p>
                              </div>
                            ))}
                          </div>

                          {/* Unit rows */}
                          <div className="px-4 py-3 space-y-3">
                            <h4 className="font-display font-bold text-navy text-sm">Available Units</h4>
                            {loc.properties.map((prop, pi) => (
                              <motion.div
                                key={prop.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: pi * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gold transition-all"
                              >
                                <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                                  <Image src={prop.image} alt={prop.title} fill className="object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-navy text-xs leading-snug truncate">{prop.title}</p>
                                  <div className="flex items-center gap-2 mt-1 text-navy/50 text-xs flex-wrap">
                                    <span className="flex items-center gap-0.5"><BedDouble size={10} />{prop.beds}</span>
                                    <span className="flex items-center gap-0.5"><Bath size={10} />{prop.baths}</span>
                                    <span className="flex items-center gap-0.5"><Maximize2 size={10} />{prop.size}</span>
                                  </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="font-display font-bold text-navy text-sm">₦{prop.price}</p>
                                  <span className="inline-block px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">Available</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* CTA buttons */}
                          <div className="flex gap-3 px-4 pb-4">
                            <Link
                              href={`/properties?location=${loc.id}`}
                              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-navy text-sm transition-all"
                              style={{ backgroundColor: "#eabe20" }}
                            >
                              View All <ArrowRight size={14} />
                            </Link>
                            <Link
                              href="/contact"
                              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-navy text-sm border-2 border-navy hover:bg-navy hover:text-white transition-colors"
                            >
                              <Home size={14} /> Enquire
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* ── DESKTOP: sidebar + detail panel (hidden below lg) ── */}
            <div className="hidden lg:flex gap-8">

              {/* Left: Estate List */}
              <div className="lg:w-80 flex-shrink-0 space-y-2">
                {siteLocations.map((loc, i) => (
                  <motion.button
                    key={loc.id}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => !loc.comingSoon && setActiveId(activeId === loc.id ? null : loc.id)}
                    disabled={loc.comingSoon}
                    className={`w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl text-left transition-all border ${
                      activeId === loc.id
                        ? "bg-navy text-white border-navy shadow-lg"
                        : loc.comingSoon
                        ? "bg-white/50 text-navy/40 border-gray-100 cursor-not-allowed"
                        : "bg-white text-navy border-gray-100 hover:border-gold hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          activeId === loc.id ? "bg-gold" : loc.comingSoon ? "bg-gray-100" : "bg-navy-50"
                        }`}
                      >
                        <Building2
                          size={16}
                          className={activeId === loc.id ? "text-navy" : loc.comingSoon ? "text-navy/30" : "text-navy"}
                        />
                      </div>
                      <div>
                        <p className={`font-semibold text-sm leading-snug ${activeId === loc.id ? "text-white" : loc.comingSoon ? "text-navy/40" : "text-navy"}`}>
                          {loc.displayName}
                        </p>
                        {loc.comingSoon ? (
                          <span className="text-xs text-gold/70 font-medium">Coming Soon</span>
                        ) : (
                          <p className={`text-xs mt-0.5 ${activeId === loc.id ? "text-white/60" : "text-navy/50"}`}>
                            {loc.properties.length} unit{loc.properties.length !== 1 ? "s" : ""}
                          </p>
                        )}
                      </div>
                    </div>
                    {!loc.comingSoon && (
                      <ChevronRight
                        size={16}
                        className={`flex-shrink-0 transition-transform ${activeId === loc.id ? "rotate-90 text-gold" : "text-navy/30"}`}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Right: Detail Panel */}
              <div className="flex-1 min-h-[500px]">
                {!activeLocation ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 p-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center mb-4">
                      <MapPin size={28} className="text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2">Select an Estate</h3>
                    <p className="text-navy/50 text-sm max-w-xs">
                      Choose an estate from the list to view its location details, available units, and pricing.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-10 w-full max-w-2xl">
                      {siteLocations.filter((l) => !l.comingSoon).slice(0, 4).map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => setActiveId(loc.id)}
                          className="relative rounded-xl overflow-hidden h-32 group text-left"
                        >
                          {loc.coverImage && (
                            <Image src={loc.coverImage} alt={loc.displayName} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                          )}
                          <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
                          <div className="absolute inset-0 p-4 flex flex-col justify-end">
                            <p className="text-white font-bold text-sm leading-snug">{loc.displayName}</p>
                            <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1">
                              <MapPin size={10} />{loc.location.split(",")[0]}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeLocation.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                  >
                    <div className="relative h-56 sm:h-72">
                      {activeLocation.coverImage ? (
                        <Image src={activeLocation.coverImage} alt={activeLocation.displayName} fill className="object-cover" />
                      ) : (
                        <div className="h-full bg-navy-100 flex items-center justify-center">
                          <Building2 size={48} className="text-navy/20" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                          Active Estate
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                          {activeLocation.displayName}
                        </h3>
                        <div className="flex items-center gap-1.5 text-white/70 text-sm mt-1">
                          <MapPin size={13} className="text-gold" />
                          <span>{activeLocation.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {[
                          { label: "Total Units", value: activeLocation.properties.length.toString() },
                          {
                            label: "Starting From",
                            value: activeLocation.properties.length > 0 ? `₦${activeLocation.properties[0].price}` : "—",
                          },
                          {
                            label: "Property Types",
                            value: [...new Set(activeLocation.properties.map((p) => p.type))].length.toString(),
                          },
                        ].map((s) => (
                          <div key={s.label} className="text-center bg-navy-50 rounded-xl py-4 px-2">
                            <p className="font-display font-bold text-navy text-xl">{s.value}</p>
                            <p className="text-navy/50 text-xs mt-0.5">{s.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mb-6">
                        <h4 className="font-display font-bold text-navy text-lg mb-4">Available Units</h4>
                        <div className="space-y-3">
                          {activeLocation.properties.map((prop, i) => (
                            <motion.div
                              key={prop.id}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.06 }}
                              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gold hover:shadow-sm transition-all group"
                            >
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <Image src={prop.image} alt={prop.title} fill className="object-cover" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-navy text-sm truncate">{prop.title}</p>
                                <div className="flex items-center gap-3 mt-1 text-navy/50 text-xs">
                                  <span className="flex items-center gap-1"><BedDouble size={11} />{prop.beds} Beds</span>
                                  <span className="flex items-center gap-1"><Bath size={11} />{prop.baths} Baths</span>
                                  <span className="flex items-center gap-1"><Maximize2 size={11} />{prop.size}</span>
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <p className="font-display font-bold text-navy text-base">₦{prop.price}</p>
                                <span className="inline-block px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full mt-1">Available</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/properties?location=${activeLocation.id}`}
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-navy transition-all hover:shadow-md active:scale-[0.98]"
                          style={{ backgroundColor: "#eabe20" }}
                        >
                          View All Units <ArrowRight size={16} />
                        </Link>
                        <Link
                          href="/contact"
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-navy border-2 border-navy hover:bg-navy hover:text-white transition-colors"
                        >
                          <Home size={16} /> Enquire Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* ── All Locations Map Grid ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold">All Estates</span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Our Locations Across Abuja
              </h2>
              <p className="text-navy/60 text-sm mt-2 max-w-xl mx-auto">
                Strategically positioned in Abuja's highest-growth corridors — every Samish estate is chosen for accessibility, infrastructure, and long-term value.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {siteLocations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`relative rounded-2xl overflow-hidden group ${loc.comingSoon ? "opacity-60" : ""}`}
                  style={{ height: "240px" }}
                >
                  {/* background image */}
                  {loc.coverImage ? (
                    <Image
                      src={loc.coverImage}
                      alt={loc.displayName}
                      fill
                      className={`object-cover transition-transform duration-700 ${loc.comingSoon ? "" : "group-hover:scale-110"}`}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-navy-200" />
                  )}

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

                  {/* Coming soon badge */}
                  {loc.comingSoon && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-gold text-navy text-xs font-bold rounded-full">
                      Coming Soon
                    </div>
                  )}

                  {/* content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-white font-display font-bold text-base leading-tight">{loc.displayName}</p>
                        <div className="flex items-center gap-1 text-white/60 text-xs mt-1">
                          <MapPin size={10} className="text-gold" />
                          <span>{loc.location.split(",")[0]}</span>
                        </div>
                      </div>
                      {!loc.comingSoon && (
                        <span className="flex-shrink-0 px-2 py-0.5 bg-white/15 text-white text-xs rounded-full border border-white/20">
                          {loc.properties.length} units
                        </span>
                      )}
                    </div>

                    {!loc.comingSoon && (
                      <button
                        type="button"
                        onClick={() => { setActiveId(loc.id); window.scrollTo({ top: 600, behavior: "smooth" }); }}
                        className="mt-3 w-full py-2 rounded-lg text-xs font-semibold bg-gold text-navy opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      >
                        Explore Estate →
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-navy">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Can't Find Your Preferred <span className="text-gold">Location?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Our team can help you find the perfect estate that matches your budget and location preference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-300 transition-colors"
                >
                  Talk to Our Team
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white transition-colors"
                >
                  Browse All Properties
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}