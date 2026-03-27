import Image from "next/image";
import Link from "next/link";
import { Mail, Users, Lightbulb, Shield, DollarSign, TrendingUp, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { teamMembers, values, benefits } from "@/data/team"

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="https://ext.same-assets.com/2617002787/1319706308.jpeg"
              alt="Team Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/70" />
          </div>

          <div className="relative z-10 text-center px-4 py-20">
            <span className="inline-block px-6 py-2 bg-gold text-navy font-semibold text-sm tracking-wider rounded-full mb-6">
              MEET OUR TEAM
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              The People Behind <span className="text-gold italic">Samish Homes</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Our dedicated team of professionals is committed to delivering exceptional real estate
              experiences. Meet the experts who make your dream home a reality.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/50">›</span>
              <span className="text-gold">Our Team</span>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Client-Focused */}
              <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">Client-Focused</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Every decision we make is centered around delivering the best experience for our clients.
                </p>
              </div>

              {/* Innovation-Driven */}
              <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">Innovation-Driven</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  We continuously innovate to bring modern solutions to real estate challenges.
                </p>
              </div>

              {/* Trust & Integrity */}
              <div className="bg-white border border-gray-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl mb-3">Trust & Integrity</h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  We build lasting relationships based on transparency, honesty, and mutual respect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 bg-gray-50 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                OUR PROFESSIONALS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-4">
                Expert <span className="text-gold">Team Members</span>
              </h2>
            </div>

           
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2 items-center justify-center ">
             
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white overflow-hidden  shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-5 flex flex-col items-center text-center">
                    <h3 className="font-display font-bold text-navy text-lg">{member.name}</h3>
                    <p className="text-gold font-medium text-sm mb-3">{member.title}</p>
                    <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-3">
                      {member.description}
                    </p>
                    {/* <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-navy/70 text-sm hover:text-navy transition-colors"
                    >
                      <Mail size={14} />
                      <span>{member.email}</span>
                    </a> */}
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        {/* <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-gold">Growing Team</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
              We're always looking for talented, passionate individuals to join the Samish
              Homes family. If you're driven by excellence and want to make a difference in real
              estate, we'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
            
              <div className="bg-navy-800 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Competitive Pay</h3>
                <p className="text-white/60 text-sm">
                  Industry-leading compensation packages
                </p>
              </div>

              
              <div className="bg-navy-800 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Career Growth</h3>
                <p className="text-white/60 text-sm">
                  Clear paths for advancement
                </p>
              </div>

              
              <div className="bg-navy-800 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Great Culture</h3>
                <p className="text-white/60 text-sm">
                  Supportive and inclusive workplace
                </p>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-300 transition-colors"
            >
              Send Your Application
            </Link>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
