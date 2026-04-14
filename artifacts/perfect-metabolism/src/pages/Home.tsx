import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MARQUEE_ITEMS = [
  "GLP-1 Protocols · Clinically Proven",
  "Botox & Fillers · Natural Results",
  "Laser Treatments · Advanced Technology",
  "Micro-needling · Skin Revival",
  "Body Contouring · Sculpt & Define",
  "Personalised Diet Plans · Science-Backed",
  "Weight Loss Support · Ongoing Care"
];

const SERVICES = [
  {
    title: "Dermal Fillers",
    description: "Experience fuller, smoother skin and lips. Restore volume with natural-looking results and zero downtime.",
    image: "/dermal-fillers.png"
  },
  {
    title: "Medical Weight Loss",
    description: "Medically supervised GLP-1 protocols and personalised programmes to achieve sustainable, lasting weight loss.",
    image: "/medical-weight-loss.png"
  },
  {
    title: "Medical Hair Restoration",
    description: "Evidence-based treatments to restore hair density and health, tailored to your specific hair loss pattern.",
    image: "/hair-restoration.png"
  },
  {
    title: "IV Fluids",
    description: "Bespoke intravenous nutrient infusions for hydration, energy, immunity, and overall cellular wellness.",
    image: "/iv-fluids.png"
  }
];

export default function Home() {
  const getAssetUrl = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, "") + path;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif italic text-2xl text-brand-gold tracking-wide">
            Perfect Metabolism
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-[0.1em] uppercase text-brand-nav">
            <Link href="#about" className="hover:text-brand-gold transition-colors">About</Link>
            <Link href="#services" className="hover:text-brand-gold transition-colors">Services</Link>
            <Link href="#process" className="hover:text-brand-gold transition-colors">Process</Link>
            <Link href="#results" className="hover:text-brand-gold transition-colors">Results</Link>
          </div>
          
          <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-6 font-medium tracking-wide">
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/70 z-10" />
          <img 
            src={getAssetUrl("/hero-bg.png")} 
            alt="Clinic interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm md:text-base tracking-[0.2em] uppercase text-brand-gold mb-6 font-medium">
                American Board Certified · Science-Backed · Results-Driven
              </p>
              <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8">
                Transform Your Metabolism.<br />
                <span className="italic text-brand-gold">Transform Your Life.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                India's most advanced medical weight loss and aesthetics clinic. GLP-1 protocols, personalised nutrition, and full-body aesthetic treatments — all under one roof.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {["GLP-1 Treatments", "Customised Diet Plans", "Aesthetic Medicine", "Laser Treatments"].map((pill) => (
                  <span key={pill} className="px-5 py-2.5 rounded-full bg-brand-badge text-white text-sm font-medium tracking-wide">
                    {pill}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-6 text-lg">
                  Free Consultation
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all">
                  View Packages
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-primary text-white py-4 overflow-hidden border-y border-brand-gold/30">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mx-8 text-sm tracking-[0.15em] uppercase text-brand-gold/80 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">About Dr. Nihara</p>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Medicine Meets <span className="italic text-brand-gold">Precision.</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Dr. Nihara Sudarshan is an American Board Certified physician with an MBBS and MD, bringing world-class medical expertise to metabolic health and aesthetic medicine. With over 8 years of clinical experience, she has helped hundreds of patients achieve lasting transformations.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "American Board Certified Physician", desc: "Internationally recognised medical certification ensuring the highest clinical standards." },
                  { title: "MBBS & MD", desc: "Dual medical degrees with specialisation in metabolic disorders and body composition." },
                  { title: "GLP-1 Specialist", desc: "Trained in the latest semaglutide and tirzepatide protocols for sustainable weight loss." },
                  { title: "Aesthetic Medicine Expert", desc: "Advanced training in botox, dermal fillers, laser therapies, and non-surgical body contouring." },
                  { title: "Nutrition & Metabolic Coach", desc: "Personalised diet protocols designed around bloodwork, hormones, and lifestyle." }
                ].map((cred, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">{cred.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{cred.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={getAssetUrl("/doctor.jpeg")} 
                  alt="Dr. Nihara Sudarshan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs">
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-serif text-brand-gold">500+</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Patients Transformed</p>
                  </div>
                  <div className="h-px w-full bg-border" />
                  <div>
                    <p className="text-3xl font-serif text-brand-gold">98%</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Patient Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">All Your Goals, One Clinic.</h2>
            <p className="text-lg text-muted-foreground">From medically supervised weight loss to cutting-edge aesthetic treatments — everything is designed and administered by Dr. Nihara personally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "GLP-1 Weight Loss Program",
                desc: "Medically supervised semaglutide and tirzepatide treatments proven to reduce body weight by 15-22%.",
                tags: ["Semaglutide", "Tirzepatide", "Ozempic Protocol"]
              },
              {
                title: "Personalised Diet & Nutrition",
                desc: "Custom meal plans built around your metabolic rate, food preferences, and lifestyle.",
                tags: ["Custom Meal Plans", "Macro Coaching", "Supplement Guidance"]
              },
              {
                title: "Botox & Anti-Ageing",
                desc: "Precision botulinum toxin treatments for forehead lines, crow's feet, jawline slimming, and preventive anti-ageing.",
                tags: ["Botox", "Masseter Slim", "Brow Lift"]
              }
            ].map((service, i) => (
              <Card key={i} className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-primary mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-white rounded-full text-brand-nav border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Services Grid */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={getAssetUrl(service.image)} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-serif text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-6 text-lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">The Process</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Your Journey to <span className="italic text-brand-gold">Perfect.</span></h2>
            <p className="text-lg text-white/70">A structured, medically supervised approach that delivers lasting results — not quick fixes.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-brand-gold/20" />
            
            {[
              { num: "01", title: "Free Consultation", desc: "A 30-minute virtual or in-person session with Dr. Nihara to understand your goals, health history, and current metabolic state." },
              { num: "02", title: "Comprehensive Testing", desc: "Full bloodwork, hormonal panels, body composition analysis, and metabolic rate testing. We find the root cause." },
              { num: "03", title: "Your Personalised Plan", desc: "A bespoke protocol combining GLP-1 medication, nutrition plan, lifestyle adjustments, and aesthetic treatments." },
              { num: "04", title: "Ongoing Support", desc: "Regular check-ins, plan adjustments based on progress, and direct access to Dr. Nihara throughout your program." }
            ].map((step, i) => (
              <div key={i} className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-8 mx-auto md:mx-0 border-4 border-primary shadow-xl">
                  <span className="text-2xl font-serif text-brand-gold">{step.num}</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="results" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">Real Results</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">What Our Patients Say.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "I lost 14 kg in 4 months with the Complete package. Dr. Nihara's approach is nothing like a regular diet clinic — she actually understands your body at a cellular level.", author: "Priya Ramesh", detail: "Lost 14 kg · 4 months" },
              { quote: "The botox and lip filler results are so natural. I've been to other clinics and always looked overdone. Dr. Nihara has a real eye for aesthetics. I trust no one else.", author: "Sakshi Mehta", detail: "Aesthetics patient · 1 year" },
              { quote: "The Concierge package was worth every rupee. My PCOS was the root cause of my weight gain and Dr. Nihara figured it out in week one. I feel like a completely new person.", author: "Ananya Krishnan", detail: "Lost 19 kg · PCOS management" }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white border-none shadow-sm flex flex-col justify-between">
                <CardContent className="pt-8">
                  <div className="text-brand-gold mb-6 text-4xl font-serif">"</div>
                  <p className="text-lg text-primary italic leading-relaxed mb-8">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground mt-1">{testimonial.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">Start Today</p>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Ready to Meet <span className="italic text-brand-gold">Perfect?</span></h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Book your free 30-minute consultation with Dr. Nihara Sudarshan. No pressure, no commitment — just clarity on how to reach your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {[
              "Free initial consultation — no hidden fees",
              "Speak directly with Dr. Nihara",
              "Get a personalised action plan in your first session"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary">{point}</span>
              </div>
            ))}
          </div>

          <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-10 py-8 text-xl w-full sm:w-auto shadow-xl shadow-brand-gold/20">
            Book Your Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/60 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif italic text-2xl text-brand-gold tracking-wide">
            Perfect Metabolism
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Perfect Metabolism. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}