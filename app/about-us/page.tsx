"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Building2,
  Handshake,
  Star,
  ArrowRight,
  Home,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "8+", label: "Prime Estates", icon: Building2 },
  { value: "500+", label: "Happy Families", icon: Users },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "₦50B+", label: "Properties Sold", icon: TrendingUp },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Every transaction is handled with complete honesty. We provide full documentation, clear pricing, and no hidden charges — ever.",
  },
  {
    icon: Handshake,
    title: "Client-First Approach",
    description:
      "Your dream home is our mission. We listen deeply, understand your needs, and match you to the property that fits your life and budget.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "All our estates undergo rigorous quality checks. From structural integrity to finishing, we ensure every property meets premium standards.",
  },
  {
    icon: TrendingUp,
    title: "Investment Value",
    description:
      "We position properties in Abuja's fastest-growing corridors — ensuring your investment appreciates significantly over time.",
  },
];

const milestones = [
  {
    year: "2013",
    title: "Founded",
    description:
      "Samish Homes was established with a vision to make premium real estate accessible to everyday Nigerians.",
  },
  {
    year: "2016",
    title: "First Estate Launch",
    description:
      "Launched Hillcity Residence, our flagship estate — setting the standard for quality housing in Abuja.",
  },
  {
    year: "2019",
    title: "Portfolio Expansion",
    description:
      "Expanded to 5 estates across key Abuja corridors including Guzape, Lugbe, and Karsana.",
  },
  {
    year: "2023",
    title: "₦50B Milestone",
    description:
      "Crossed ₦50 billion in total property sales — a testament to the trust thousands of families have placed in us.",
  },
  {
    year: "2024",
    title: "8 Estates & Growing",
    description:
      "Today we proudly manage 8 prime estates with over 500 families calling our properties home.",
  },
];

const whyUs = [
  "Direct developer pricing — no agent commissions",
  "Flexible payment plans from 6 to 24 months",
  "Legal titles: C of O, R of O, and Deed of Assignment",
  "Abuja's fastest-appreciating locations",
  "Dedicated post-sale support and estate management",
  "Verified properties — inspect before you buy",
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">

        {/* ── Hero ── */}
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://ext.same-assets.com/2617002787/4026451409.jpeg"
              alt="Samish Homes Abuja"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/75" />
            {/* gold diagonal accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg,#eabe20,#daa30d,#eabe20)" }}
            />
          </div>

          <div className="relative z-10 text-center px-4 py-24">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 bg-gold text-navy font-semibold text-sm tracking-wider rounded-full mb-6"
            >
              OUR STORY
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              About <span className="text-gold italic">Samish Homes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg max-w-2xl mx-auto mb-8"
            >
              Building legacies across Abuja — one family, one home at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-white/70"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">›</span>
              <span className="text-gold">About Us</span>
            </motion.div>
          </div>
        </section>

        {/* ── Mission Statement ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-10 rounded-full bg-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">Who We Are</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
                  Nigeria's Most Trusted Real Estate Developer
                </h2>

                <p className="text-navy/70 leading-relaxed">
                  Samish Homes & Apartments is a premier real estate development company
                  headquartered in Abuja, Nigeria. Since 2013, we have been dedicated to
                  developing high-quality residential estates that combine modern architecture
                  with the warmth of community living.
                </p>

                <p className="text-navy/70 leading-relaxed">
                  We specialize in developing and selling landed properties, duplexes,
                  bungalows, and luxury homes across Abuja's most strategic locations —
                  giving our clients the advantage of location, quality, and value in
                  every investment.
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-1 text-navy/60 text-sm">
                    <MapPin size={14} className="text-gold" />
                    <span>FCT Abuja, Nigeria</span>
                  </div>
                  <span className="text-navy/30">•</span>
                  <div className="flex items-center gap-1 text-navy/60 text-sm">
                    <Home size={14} className="text-gold" />
                    <span>8 Active Estates</span>
                  </div>
                </div>

                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-800 transition-colors group mt-4"
                >
                  View Our Properties
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://ext.same-assets.com/2617002787/3173310862.jpeg"
                    alt="Samish Homes Estate"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                </div>

                {/* floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-gold rounded-2xl p-5 shadow-xl"
                >
                  <p className="text-navy font-bold text-3xl font-display">10+</p>
                  <p className="text-navy/80 text-sm font-semibold">Years of Excellence</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl flex items-center gap-3 border border-gray-100"
                >
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <div>
                    <p className="text-navy font-bold text-sm">Trusted Developer</p>
                    <p className="text-navy/60 text-xs">500+ Families</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={22} className="text-gold" />
                  </div>
                  <p className="font-display text-3xl sm:text-4xl font-bold text-gold mb-1">{stat.value}</p>
                  <p className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Values ── */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Our Values</span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                What Drives Us Forward
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                    <v.icon size={22} className="text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Our Journey</span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                A Decade of Building Dreams
              </h2>
            </motion.div>

            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-navy/10 hidden sm:block" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    {/* dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg">
                      <span className="font-display font-bold text-navy text-xs leading-tight text-center">{m.year}</span>
                    </div>

                    <div className="bg-navy-50 rounded-xl p-5 flex-1 border border-navy/5">
                      <h3 className="font-display font-bold text-navy text-lg mb-1">{m.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">Why Samish</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                  The Samish Homes Advantage
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  We don't just sell houses — we build long-term relationships and deliver
                  real estate experiences that exceed expectations at every step.
                </p>

                <ul className="space-y-4">
                  {whyUs.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://ext.same-assets.com/2617002787/2128637327.jpeg"
                  alt="Samish Homes Property"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/30" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gold">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
                Ready to Own Your Dream Home?
              </h2>
              <p className="text-navy/70 text-lg mb-8">
                Speak with our sales team today and take the first step towards owning a premium property in Abuja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-800 transition-colors"
                >
                  Contact Sales Team
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-colors"
                >
                  Browse Properties
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