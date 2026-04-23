import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MARQUEE_ITEMS = [
  "GLP-1 Protocols · Clinically Proven",
  "Botox & Fillers · Natural Results",
  "Personalised Diet Plans · Science-Backed",
  "Weight Loss Support · Ongoing Care"
];

const SERVICES = [
  {
    title: "Medical Consultation",
    description: "A thorough one-on-one consultation with Dr. Nihara to understand your health goals, review bloodwork, and design your personalised treatment plan.",
    image: "/medical-consultation.png"
  },
  {
    title: "Medical Weight Loss",
    description: "Medically supervised GLP-1 protocols and personalised programmes to achieve sustainable, lasting weight loss.",
    image: "/medical-weight-loss.png"
  },
  {
    title: "Dermal Fillers & Botox",
    description: "Experience fuller, smoother skin and lips. Restore volume and erase fine lines with natural-looking results and zero downtime.",
    image: "/dermal-fillers.png"
  },
  {
    title: "Micro-needling & Acne Scars",
    description: "Precise micro-needling to stimulate collagen, resurface skin texture, and visibly reduce acne scars for a smooth, radiant complexion.",
    image: "/microneedling-acne.png"
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
  },
  {
    title: "Personalised Diet & Nutrition",
    description: "Custom meal plans and macro coaching designed around your bloodwork, metabolic rate, and lifestyle for lasting results.",
    image: "/diet-nutrition.png"
  }
];

function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            className="relative bg-background rounded-3xl shadow-2xl w-full max-w-md p-8 z-10"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-border/40 transition-colors"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-primary mb-3">Request Received</h3>
                <p className="text-muted-foreground mb-6">Thank you, {form.name}. Dr. Nihara's team will be in touch within 24 hours to confirm your consultation.</p>
                <Button onClick={handleClose} className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-3">
                  Done
                </Button>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-[0.2em] uppercase text-brand-gold mb-2 font-medium">Free Consultation</p>
                <h3 className="text-2xl font-serif text-primary mb-1">Book Your Session</h3>
                <p className="text-sm text-muted-foreground mb-6">Speak directly with Dr. Nihara Sudarshan — no commitment, just clarity.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-1.5">Full Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-1.5">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-1.5">Your Goals</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell us what you'd like to achieve..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 text-sm resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full py-6 text-base font-medium tracking-wide mt-2">
                    Request My Consultation
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const getAssetUrl = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, "") + path;
  const [bookingOpen, setBookingOpen] = useState(false);
  const [serviceOffset, setServiceOffset] = useState(0);
  const VISIBLE = 4;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-gold selection:text-white">
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-serif italic text-2xl text-brand-gold tracking-wide">
            Perfect Metabolism
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-[0.1em] uppercase text-muted-foreground">
            <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
            <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
            <a href="#packages" className="hover:text-brand-gold transition-colors">Packages</a>
            <a href="#process" className="hover:text-brand-gold transition-colors">Process</a>
            <a href="#results" className="hover:text-brand-gold transition-colors">Results</a>
            <a href="#before-after" className="hover:text-brand-gold transition-colors">Before & After</a>
          </div>
          
          <Button
            onClick={() => setBookingOpen(true)}
            className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-6 font-medium tracking-wide"
          >
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
              <h1 className="text-5xl md:text-7xl text-primary leading-tight mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}>
                India's Most Advanced<br />
                <span className="italic text-brand-gold">Medical Weight Loss</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                India's most advanced medical weight loss and aesthetics clinic. GLP-1 protocols, personalised nutrition, and full-body aesthetic treatments — all under one roof.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {["GLP-1 Treatments", "Customised Diet Plans", "Aesthetic Medicine"].map((pill) => (
                  <span key={pill} className="px-5 py-2.5 rounded-full bg-brand-badge text-white text-sm font-medium tracking-wide">
                    {pill}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-6 text-lg"
                >
                  Free Consultation
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo("packages")}
                  className="rounded-full px-8 py-6 text-lg border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all"
                >
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
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">About Dr. Nihara</p>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Medicine Meets <span className="italic text-brand-gold">Precision.</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dr. Nihara Sudarshan is an American Board Certified physician with an MBBS and MD, bringing U.S. based medical expertise to metabolic health and aesthetic medicine. Her approach combines evidence-based medicine with personalised care, ensuring every patient receives a treatment protocol tailored specifically to their body, goals, and lifestyle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                With over 8 years of clinical experience and more than 500 successful patient transformations, Dr. Nihara has established Perfect Metabolism as the premier destination for medical weight loss and aesthetic treatments in India.
              </p>

              <p className="text-xs tracking-[0.2em] uppercase text-brand-gold mb-5 font-medium">Credentials &amp; Expertise</p>
              <div className="space-y-5 mb-12">
                {[
                  { title: "American Board Certified Physician", desc: "Internationally recognised medical certification ensuring the highest clinical standards. Dr. Nihara's board certification from the United States reflects rigorous training and examination in metabolic and aesthetic medicine." },
                  { title: "MBBS & MD (Dual Medical Degrees)", desc: "Dual medical degrees with specialisation in metabolic disorders and body composition. Her MD programme focused specifically on endocrinology and metabolic health, providing deep expertise in weight management." },
                  { title: "GLP-1 & Weight Loss Specialist", desc: "Extensively trained in the latest semaglutide and tirzepatide protocols for sustainable weight loss. Dr. Nihara stays current with the latest clinical trials and FDA guidance on GLP-1 receptor agonists." },
                  { title: "Aesthetic Medicine Fellowship", desc: "Completed a dedicated fellowship in aesthetic medicine covering advanced injectables, laser therapies, RF micro-needling, and non-surgical body contouring — combining clinical science with an eye for natural, refined results." },
                  { title: "Continuous Medical Education", desc: "Actively participates in international medical conferences, workshops, and training programmes to stay at the forefront of metabolic medicine and aesthetic technology advancements." }
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

              <p className="text-xs tracking-[0.2em] uppercase text-brand-gold mb-5 font-medium">Our Approach</p>
              <div className="space-y-5 mb-10">
                {[
                  { title: "Evidence-Based Medicine", desc: "Every treatment protocol at Perfect Metabolism is grounded in peer-reviewed clinical research. We do not follow trends — we follow evidence. From GLP-1 dosing to laser parameters, every decision is data-driven." },
                  { title: "Personalised Protocols", desc: "No two patients are alike. Dr. Nihara builds every programme from comprehensive bloodwork, hormonal profiling, and metabolic testing. Your plan is uniquely yours — designed for your body, your goals, and your life." },
                  { title: "Holistic Patient Care", desc: "Weight loss and aesthetics are not just physical — they are deeply personal. Our programmes address nutrition, exercise, mindset, hormonal health, and emotional wellbeing for truly lasting results." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setBookingOpen(true)}
                className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-5 text-base"
              >
                Book a Free Consultation
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={getAssetUrl("/doctor.jpeg")} 
                  alt="Dr. Nihara Sudarshan" 
                  className="w-full h-auto object-contain object-top"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                <div className="space-y-3">
                  {[
                    { stat: "500+", label: "Patients Transformed" },
                    { stat: "8+", label: "Years Clinical Experience" },
                    { stat: "98%", label: "Patient Satisfaction Rate" },
                    { stat: "100%", label: "Board Certified & Insured" },
                  ].map((s, i, arr) => (
                    <div key={i}>
                      <p className="text-2xl font-serif text-brand-gold">{s.stat}</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{s.label}</p>
                      {i < arr.length - 1 && <div className="h-px w-full bg-border mt-3" />}
                    </div>
                  ))}
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
                tags: ["Semaglutide", "Tirzepatide", "Ozempic Protocol", "Mounjaro"]
              },
              {
                title: "Personalised Diet & Nutrition",
                desc: "Custom meal plans built around your metabolic rate, food preferences, and lifestyle.",
                tags: ["Custom Meal Plans", "Macro Coaching", "Supplement Guidance"]
              },
              {
                title: "Botox & Anti-Ageing",
                desc: "Precision botulinum toxin treatments for forehead lines, crow's feet, jawline slimming, and preventive anti-ageing.",
                tags: ["Botox", "Masseter Slim", "Brow Lift", "Dermal Fillers"]
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
          <div className="relative">
            {/* Arrow buttons */}
            <button
              onClick={() => setServiceOffset(o => Math.max(0, o - 1))}
              disabled={serviceOffset === 0}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-border bg-white shadow-md flex items-center justify-center text-primary disabled:opacity-30 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => setServiceOffset(o => Math.min(SERVICES.length - VISIBLE, o + 1))}
              disabled={serviceOffset >= SERVICES.length - VISIBLE}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-border bg-white shadow-md flex items-center justify-center text-primary disabled:opacity-30 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
              aria-label="Next"
            >
              →
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
              {SERVICES.slice(serviceOffset, serviceOffset + VISIBLE).map((service, i) => (
                <motion.div
                  key={serviceOffset + i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group cursor-pointer"
                  onClick={() => setBookingOpen(true)}
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

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: SERVICES.length - VISIBLE + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setServiceOffset(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === serviceOffset ? "bg-brand-gold w-5" : "bg-border"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button
              onClick={() => setBookingOpen(true)}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-8 py-6 text-lg"
            >
              Book a Service
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">Investment in You</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Choose Your <span className="italic text-brand-gold">Programme.</span></h2>
            <p className="text-lg text-muted-foreground">Every package includes direct access to Dr. Nihara and a fully personalised treatment plan. No shortcuts — only results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Elite — Most Popular, First */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border-2 border-brand-gold p-8 bg-primary text-white flex flex-col relative shadow-2xl shadow-brand-gold/20"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-bold tracking-[0.15em] uppercase px-5 py-1.5 rounded-full">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Elite</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">₹26,911</span>
                <span className="text-white/60 mb-1">/month</span>
              </div>
              <div className="mb-8" />
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Everything in Transform, plus:",
                  "Unlimited access to Dr. Nihara directly",
                  "Advanced GLP-1 dual-agonist protocol",
                  "2 premium aesthetic consultations/month",
                  "Blood testing every 6 weeks",
                  "VIP priority clinic appointments",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-brand-gold mt-0.5 shrink-0">✓</span>
                    <span className={i === 0 ? "font-bold" : ""}>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setBookingOpen(true)}
                className="w-full rounded-full py-6 bg-brand-gold hover:bg-brand-gold/90 text-white font-medium"
              >
                Go Elite
              </Button>
            </motion.div>

            {/* Starter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-border p-8 bg-background flex flex-col"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">Starter</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-primary">₹14,911</span>
                <span className="text-muted-foreground mb-1">/month</span>
              </div>
              <div className="mb-8" />
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Initial consultation with Dr. Nihara",
                  "Personalised diet chart & meal plan",
                  "4 GLP-1 injections",
                  "Monthly progress review",
                  "WhatsApp support (business hours)",
                  "Basic supplement recommendations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-brand-gold mt-0.5 shrink-0">✓</span>
                    <span className={i === 2 ? "font-bold text-primary" : ""}>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setBookingOpen(true)}
                variant="outline"
                className="w-full rounded-full py-6 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all font-medium"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Transform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-border p-8 bg-background flex flex-col"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">Transform</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-primary">₹21,911</span>
                <span className="text-muted-foreground mb-1">/month</span>
              </div>
              <div className="mb-8" />
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Everything in Starter, plus:",
                  "Full hormonal & metabolic deep-dive panel",
                  "Weekly GLP-1 injection protocol",
                  "Bi-weekly video calls with Dr. Nihara",
                  "Customised exercise & lifestyle plan",
                  "24/7 WhatsApp priority support",
                  "2 body aesthetic consultations/month (botox, micro-needling, or laser)",
                  "Body composition analysis monthly",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-brand-gold mt-0.5 shrink-0">✓</span>
                    <span className={i === 0 || i === 2 ? "font-bold text-primary" : ""}>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setBookingOpen(true)}
                variant="outline"
                className="w-full rounded-full py-6 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all font-medium"
              >
                Transform Now
              </Button>
            </motion.div>
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

          <div className="mt-16 text-center">
            <Button
              onClick={() => setBookingOpen(true)}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-10 py-6 text-lg"
            >
              Start with a Free Consultation
            </Button>
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
              { quote: "I lost 14 kg in 4 months with the Complete package. Dr. Nihara's approach is nothing like a regular diet clinic — she actually understands your body at a cellular level.", author: "Usha Ramesh", detail: "Lost 14 kg · 4 months" },
              { quote: "I started the GLP-1 programme not knowing what to expect. Within 6 weeks I had already lost 6 kg and my energy levels were completely transformed.", author: "Veda Nidamarthi", detail: "Lost 11 kg · GLP-1 Protocol" },
              { quote: "I had been dealing with hair thinning for years and tried everything. After just 3 months of Dr. Nihara's hair restoration programme, the regrowth has been incredible. My confidence is back completely.", author: "Dhruv Gupta", detail: "Hair Restoration patient · 3 months" }
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

      {/* Before & After Section */}
      <section id="before-after" className="py-24 md:py-32 bg-[hsl(60,9%,97%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4 font-medium">Patient Transformations</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Real People. <span className="italic text-brand-gold">Real Results.</span></h2>
            <p className="text-lg text-muted-foreground">Every transformation is achieved through personalised medical protocols under Dr. Nihara's direct supervision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                image: "/ba-weight.png",
                treatment: "Medical Weight Loss",
                stat: "−18 kg",
                duration: "5 months · GLP-1 Protocol",
                patient: "Female, 34"
              },
              {
                image: "/ba-skin.png",
                treatment: "Micro-needling & Acne Scars",
                stat: "90% clearer",
                duration: "3 months · Micro-needling",
                patient: "Female, 26"
              },
              {
                image: "/ba-hair.png",
                treatment: "Medical Hair Restoration",
                stat: "Full regrowth",
                duration: "4 months · Hair Restoration",
                patient: "Male, 41"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-5 shadow-lg">
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.treatment}
                    className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Before / After labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex">
                    <div className="flex-1 bg-primary/70 text-white text-xs font-bold tracking-widest uppercase text-center py-2">Before</div>
                    <div className="flex-1 bg-brand-gold/80 text-white text-xs font-bold tracking-widest uppercase text-center py-2">After</div>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-serif text-primary mb-0.5">{item.treatment}</h3>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.patient}</p>
                  </div>
                  <span className="text-2xl font-bold text-brand-gold shrink-0 ml-4 mt-1">{item.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-12 max-w-xl mx-auto">
            Results shown are representative of actual patient outcomes. Individual results may vary based on health profile, adherence, and treatment plan.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
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

          <Button
            onClick={() => setBookingOpen(true)}
            className="bg-brand-gold hover:bg-brand-gold/90 text-white rounded-full px-10 py-8 text-xl w-full sm:w-auto shadow-xl shadow-brand-gold/20"
          >
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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <button onClick={() => setBookingOpen(true)} className="hover:text-white transition-colors">Contact</button>
          </div>
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Perfect Metabolism. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
