"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ChevronDown,
  CheckCircle2,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Schema ────────────────────────────────────────────────────────────────────

const ContactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactValues = z.infer<typeof ContactSchema>;

// ─── Data ──────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 7039976939",
    sub: "Mon – Sat, 8am – 6pm",
    href: "tel:+2347039976939",
  },
 
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 7039976939",
    sub: "Chat with us anytime",
    href: "https://wa.me/2347039976939",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "support@samish.ng",
    sub: "We reply within 24 hours",
    href: "mailto:support@samish.ng",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "SUITE SF 4, Hatlab Place, Plot 1952, Sokode Crescent, Zone 5, Wuse, Abuja, Nigeria.",
    sub: "Visit us by appointment",
    href: "https://maps.google.com/?q=Abuja+FCT+Nigeria",
  },
];

const faqs = [
  {
    question: "What documents do I need to buy a property from Samish Homes?",
    answer:
      "You'll need a valid government-issued ID (National ID, International Passport, or Driver's License), your TIN (Tax Identification Number), and proof of address. For mortgage/installment purchases, we may also request 3 months' bank statements. Our sales team guides you through the entire documentation process.",
  },
  {
    question: "What payment plans are available?",
    answer:
      "We offer flexible payment plans tailored to different budgets: Outright Purchase (full payment, best price), 6-Month Installment, 12-Month Installment, 24-Month Installment, and Mortgage financing. Each plan has its own pricing structure — contact our team for a detailed breakdown.",
  },
  {
    question: "What types of land titles do your properties come with?",
    answer:
      "Our properties come with various title types including Certificate of Occupancy (C of O), Right of Occupancy (R of O), Deed of Assignment, and Governor's Consent. The specific title depends on the estate — we are fully transparent about title documentation before any purchase commitment.",
  },
  {
    question: "Can I inspect a property before buying?",
    answer:
      "Absolutely. We strongly encourage site visits before any commitment. Simply contact our sales team to schedule a free inspection at a time convenient for you. For out-of-town clients, we can arrange virtual tours with our property team.",
  },
  {
    question: "Are the properties in Samish estates already built or off-plan?",
    answer:
      "We offer both options. Some estates have completed, move-in ready properties, while others are sold off-plan with clear construction timelines and milestones. Off-plan purchases often come at lower introductory prices with significant appreciation potential.",
  },
  {
    question: "Which Abuja locations do you currently have estates?",
    answer:
      "Our current estates span Guzape, Karsana, Lugbe (Airport Road), Kurudu-Jikwoyi, and Aviation City. Each location is strategically selected for infrastructure development, accessibility, and investment appreciation. View all estates on our Properties page.",
  },
  {
    question: "How long does the purchase process take?",
    answer:
      "For outright purchases, the process from agreement to allocation typically takes 2–4 weeks. Installment plans are set up within one week of initial deposit. We handle all legal documentation in-house, keeping the process smooth and efficient.",
  },
  {
    question: "Do you offer any after-sales support or estate management?",
    answer:
      "Yes. We provide post-sale support including assistance with perfection of titles, estate management for completed developments, and a dedicated customer service line for any concerns after purchase.",
  },
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────────

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-navy-50 transition-colors"
      >
        <span className="font-semibold text-navy text-sm sm:text-base leading-snug">{faq.question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-gold" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-navy/70 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactValues) => {
    setServerError(undefined);
    startTransition(async () => {
      try {
        // Save inquiry to DB
        await fetch("/api/inquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, source: "contact_form" }),
        });
        setSubmitted(true);
        form.reset();
      } catch {
        setServerError("Something went wrong. Please try again or call us directly.");
      }
    });
  };

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">

        {/* ── Hero ── */}
        <section className="relative min-h-[380px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://ext.same-assets.com/2617002787/1294819133.jpeg"
              alt="Contact Samish Homes"
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
              GET IN TOUCH
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Contact <span className="text-gold italic">Our Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg max-w-xl mx-auto mb-8"
            >
              We're ready to help you find your perfect property in Abuja.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-white/70"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">›</span>
              <span className="text-gold">Contact Us</span>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Info Cards ── */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition-all group bg-white"
                >
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <item.icon size={18} className="text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold mb-0.5">{item.label}</p>
                    <p className="text-navy font-semibold text-sm">{item.value}</p>
                    <p className="text-navy/50 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form + Map ── */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-8 rounded-full bg-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">Send a Message</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-navy">
                    We'd Love to Hear From You
                  </h2>
                  <p className="text-navy/60 text-sm mt-1">
                    Fill the form below and our team will respond within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2">Message Sent!</h3>
                    <p className="text-navy/60 text-sm max-w-xs">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-gold font-semibold text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy text-sm font-medium">Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="John Doe"
                                  disabled={isPending}
                                  className="focus-visible:ring-gold focus-visible:border-gold"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy text-sm font-medium">Email Address *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="you@example.com"
                                  disabled={isPending}
                                  className="focus-visible:ring-gold focus-visible:border-gold"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy text-sm font-medium">Phone Number *</FormLabel>
                            <FormControl>
                              <PhoneInput
                                defaultCountry="ng"
                                value={field.value}
                                onChange={(phone) => field.onChange(phone)}
                                disabled={isPending}
                                style={{ width: "100%" }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy text-sm font-medium">Subject *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="e.g. Inquiry about Hillcity Residence"
                                disabled={isPending}
                                className="focus-visible:ring-gold focus-visible:border-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy text-sm font-medium">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={5}
                                placeholder="Tell us about the property you're interested in, your budget, preferred location, or any questions you have..."
                                disabled={isPending}
                                className="resize-none focus-visible:ring-gold focus-visible:border-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {serverError && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
                          {serverError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-navy transition-all active:scale-[0.98] disabled:opacity-60"
                        style={{
                          backgroundColor: "#eabe20",
                          boxShadow: "0 2px 12px rgba(234,190,32,0.35)",
                        }}
                      >
                        {isPending ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </Form>
                )}
              </motion.div>

              {/* Right panel: hours + quick links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Office Hours */}
                <div className="bg-navy rounded-2xl p-7 text-white">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg">Office Hours</p>
                      <p className="text-white/60 text-xs">When you can reach us</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
                      { day: "Saturday (Site Inspection)", time: "10:00 AM – 3:00 PM" },
                      { day: "Sunday", time: "Closed (WhatsApp available)" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between text-sm border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <span className="text-white/70">{h.day}</span>
                        <span className="text-gold font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-1 w-6 rounded-full bg-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">Quick Links</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Browse All Properties", href: "/properties", icon: Building2 },
                      { label: "View Our Estates", href: "/properties", icon: MapPin },
                      { label: "About Samish Homes", href: "/about", icon: CheckCircle2 },
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-navy-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <link.icon size={16} className="text-gold" />
                          <span className="text-navy text-sm font-medium">{link.label}</span>
                        </div>
                        <ArrowRight size={14} className="text-navy/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/2347069233501?text=Hello%2C%20I%27m%20interested%20in%20a%20property%20from%20Samish%20Homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-lg group"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold">Chat on WhatsApp</p>
                    <p className="text-white/80 text-xs">Get instant responses from our team</p>
                  </div>
                  <ArrowRight size={18} className="text-white/60 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold">FAQ</span>
                <div className="h-px w-8 bg-gold" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-navy/60 text-sm max-w-xl mx-auto">
                Everything you need to know about buying a property with Samish Homes. Can't find your answer?{" "}
                <a href="mailto:support@samish.com" className="text-gold font-semibold hover:underline">
                  Email us directly.
                </a>
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
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
                Interested in a <span className="text-gold">Property?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Browse our available estates and find the perfect home for your family.
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-300 transition-colors"
              >
                View All Properties
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}