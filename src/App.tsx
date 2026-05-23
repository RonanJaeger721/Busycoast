import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  MapPin,
  Star,
  Check,
  ChevronDown,
  Menu,
  X,
  Droplets,
  Sun,
  Activity,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Hammer,
  FileText,
  BadgeAlert
} from 'lucide-react';

import { SERVICES, FAQS, GALLERY, TESTIMONIALS, BESPOKE_IMAGES } from './data';
import ServicesGrid from './components/ServicesGrid';
import WaterSolutionsDiagram from './components/WaterSolutionsDiagram';
import InteractiveCalculator from './components/InteractiveCalculator';
import QuoteRequestForm from './components/QuoteRequestForm';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [scrolled, setScrolled] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | null>(null);

  // Monitor header scrolling for sticky background blur effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft trigger callback to focus calculator/form and auto-select a specific item
  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    
    // Smooth scroll down to the quote request form or calculator
    const element = document.getElementById('consultation-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const defaultWhatsAppMsg = encodeURIComponent(
    "Hello Busycoast Boreholes team, I visited your website and would like to schedule a site survey in Harare regarding your borehole and water solutions."
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      {/* Sticky Top Corporate Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Corporate Brand Identity */}
          <a href="#hero" className="flex items-center space-x-2.5 group">
            <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-500 text-white shadow-[0_4px_15px_rgba(2,132,199,0.15)] duration-300 group-hover:scale-105">
              <Droplets className="w-5 h-5 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <span className="text-lg font-display font-medium text-slate-900 tracking-tight block">
                BUSYCOAST
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyan-600 block -mt-1 uppercase">
                BOREHOLES & WATER
              </span>
            </div>
          </a>

          {/* Desktop Core Anchors */}
          <nav className="hidden lg:flex items-center space-x-8 font-display text-sm font-semibold">
            <a href="#hero" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">Home</a>
            <a href="#about" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">About</a>
            <a href="#services" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">Services</a>
            <a href="#education" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">Water Flow</a>
            <a href="#solar" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">Solar Power</a>
            <a href="#calculator" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">Cost Estimator</a>
            <a href="#testimonials" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">Reviews</a>
            <a href="#faq" className="text-slate-600 hover:text-cyan-600 transition-colors duration-200">FAQs</a>
          </nav>

          {/* Core Call Direct to Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0775512335"
              className="flex items-center space-x-1.5 text-xs font-mono text-cyan-600 hover:text-cyan-500 transition font-bold"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce" />
              <span>077 551 2335</span>
            </a>
            <a
              href="#consultation-form-section"
              className="py-2.5 px-4 rounded-xl bg-cyan-650 hover:bg-cyan-600 text-white font-bold text-xs tracking-tight shadow-md select-none transition cursor-pointer"
            >
              Request Siting Quote
            </a>
          </div>

          {/* Interactive Responsive Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 font-display shadow-lg"
            >
              <div className="px-5 pt-3 pb-6 space-y-4 text-left flex flex-col">
                <a
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 border-b border-slate-100"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 border-b border-slate-100"
                >
                  About Busycoast
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 border-b border-slate-100"
                >
                  Services
                </a>
                <a
                  href="#education"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 border-b border-slate-100"
                >
                  Water Cycles
                </a>
                <a
                  href="#solar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 border-b border-slate-100"
                >
                  6.2KVA Solar
                </a>
                <a
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 border-b border-slate-100"
                >
                  Interactive Planner
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 font-semibold py-2.5 border-b border-slate-100"
                >
                  FAQs
                </a>
                <div className="pt-2 flex flex-col space-y-3.5">
                  <a
                    href="https://wa.me/263775512335?text=Hello%20Busycoast%20Boreholes..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="#consultation-form-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-550 text-white font-bold text-xs"
                  >
                    Request Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Watery WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href={`https://wa.me/263775512335?text=${defaultWhatsAppMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/20"
        >
          {/* Ambient fluid echo ring ripples */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 group-hover:animate-ping pointer-events-none" />
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M12.004 2c-5.51 0-9.993 4.483-9.993 9.993 0 1.763.461 3.483 1.332 5.01l-1.423 5.19 5.341-1.398c1.472.793 3.125 1.21 4.747 1.21 5.51 0 9.993-4.483 9.993-9.993C22 6.483 17.514 2 12.004 2zm5.82 14.167c-.24.675-1.196 1.233-1.637 1.282-.41.045-.824.085-2.035-.386-1.57-.611-2.571-2.213-2.651-2.319-.079-.105-.658-.87-1.127-1.503-.356-.475-.544-.813-.679-1.096-.135-.282-.132-.497-.066-.63.067-.132.224-.197.33-.33.105-.132.139-.232.211-.383.072-.15.033-.284-.016-.381-.05-.098-.445-1.103-.61-1.502-.162-.394-.326-.34-.445-.34-.116-.002-.248-.002-.38-.002-.132 0-.346.049-.527.247-.181.198-.692.677-.692 1.65 0 .973.71 1.913.809 2.046.099.132 1.398 2.135 3.387 2.992.473.204.843.326 1.13.418.475.15.91.13 1.25.079.38-.057 1.169-.478 1.334-.94.165-.461.165-.857.116-.94-.05-.083-.181-.132-.38-.231z" />
          </svg>
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-slate-50 border-b border-slate-205">
        {/* Dynamic Glass Particle Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10" />
          <img
            src={BESPOKE_IMAGES.heroBg}
            alt="Busycoast Corporate Borehole Drilling Rig in Harare"
            className="w-full h-full object-cover object-center transform scale-102 hover:scale-100 transition-transform duration-1000 opacity-55"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Glowing Decorative Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Headline and Copy */}
            <div className="lg:col-span-15 md:lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-155 text-xs font-mono text-cyan-705 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                <span>Harare Hillside Operations & Countrywide Service</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 leading-tight">
                  Reliable Water & <br />
                  <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                    Borehole Solutions
                  </span> <br />
                  Across Zimbabwe
                </h1>

                <p className="text-base md:text-lg text-slate-650 leading-relaxed font-sans max-w-xl font-medium">
                  Professional borehole drilling, high-yield hydro surveys, solar-powered pumps, storage tank systems, and complete backup water solutions for homes, productive farms, and corporations.
                </p>
              </div>

              {/* Action Button Links */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in">
                <a
                  href="#consultation-form-section"
                  className="py-4 px-8 rounded-2xl bg-cyan-650 hover:bg-cyan-600 text-white font-bold text-sm tracking-tight text-center duration-300 shadow-[0_4px_15px_rgba(2,132,199,0.2)] hover:shadow-[0_8px_20px_rgba(2,132,199,0.3)] cursor-pointer"
                >
                  Request a Free Quote
                </a>
                <a
                  href={`https://wa.me/263775512335?text=${defaultWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm tracking-tight border border-slate-250 text-center transition duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Corporate trust badging metrics */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { metric: '95%+', label: 'Geo Siting Success' },
                  { metric: '100%', label: 'ZESA Independent' },
                  { metric: '3-Year', label: 'Installation Warranty' },
                  { metric: 'Harare', label: 'Local Support Center' },
                ].map((item, idx) => (
                  <div key={idx} className="p-1 text-left">
                    <span className="text-xl md:text-2xl font-mono font-bold text-cyan-650 block tracking-tight">
                      {item.metric}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-slate-500 font-semibold block tracking-wide">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Floating Glass Blueprint Status Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-6 relative shadow-md overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-cyan-600 tracking-wider font-semibold">
                  REALTIME_STRIKE_PRO_X1
                </div>

                <div className="flex items-center space-x-3 text-slate-900 border-b border-slate-100 pb-4">
                  <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900">Target Aquifer Strike</h3>
                    <p className="text-[10px] font-mono text-cyan-600 uppercase font-semibold">Operational Status: Ready</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Selected Rig:</span>
                    <span className="font-mono text-slate-800 font-semibold">Busycoast Hydraulic Pro-2</span>
                  </div>
                  {/* Item 2 */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Siting Team:</span>
                    <span className="font-mono text-slate-800 font-semibold">Hillside Geological Unit</span>
                  </div>
                  {/* Item 3 */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Class Type Casing:</span>
                    <span className="font-mono text-cyan-700 font-semibold">Class 12 Heavy Double Duty</span>
                  </div>
                  {/* Item 4 */}
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Water Strike Zone:</span>
                    <span className="font-mono text-emerald-700 font-semibold">60m - 100m Aquifer</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                  <span className="text-[10px] text-slate-600 leading-normal font-sans font-medium">
                    Hydraulic casing rigs are currently stationed in Hillside and Borrowdale. Fast dispatch times!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badging Layout */}
      <section className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">
            Authorized Water & Power Solutions Provider
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-85">
            {['Professional Borehole Siting-Drilling', 'Solar Water Solutions', 'Reliable Installations & Tanks', 'Harare-Based Structural Engineering'].map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs font-mono font-bold tracking-wide text-slate-650">
                <Check className="w-4 h-4 text-cyan-600" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Asset */}
            <div className="lg:col-span-15 md:lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-205 group">
                <img
                  src={BESPOKE_IMAGES.solarWater}
                  alt="Busycoast Solar-powered Storage and Tanks stand"
                  className="w-full object-cover h-[450px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl text-left border border-slate-200 shadow-sm">
                  <h4 className="font-display font-bold text-slate-900 text-sm">Solar Integrated Tank Stand</h4>
                  <p className="text-slate-600 text-xs font-sans mt-1 leading-normal font-medium">Installed recently at a residential development in Hillside, Harare.</p>
                </div>
              </div>
            </div>

            {/* Right About core copy */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div>
                <span className="text-xs font-mono text-cyan-700 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
                  Reliably Serving Zimbabwe
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-4 tracking-tight">
                  Water Independence Surcharged <br />
                  With Modern Solutions
                </h2>
              </div>

              <div className="space-y-4 text-sm text-slate-650 leading-relaxed font-sans font-medium">
                <p>
                  At <span className="font-bold text-slate-900">Busycoast Boreholes</span>, we are driven by a singular mandate: to bridge Harare’s municipal water limits by engineering state-of-the-art borehole and off-grid solar infrastructure.
                </p>
                <p>
                  Whether you are seeking custom water systems to keep a domestic garden lush, high-pressure PVC pipeline installations for commercial centers, or large solar pumping systems to irrigate agricultural farms, we map, drill, and configure every project to bulletproof standards.
                </p>
                <p>
                  We coordinate custom structural steel fabricators, geological surveyors, and Tier-1 solar engineers under one roof in Hillside, Harare. Partner with Busycoast and gain access to continuous water and clean hybrid energy.
                </p>
              </div>

              {/* Grid indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Submersible Solar Experts', desc: 'Auto tracking brushless pumps bypassing power cuts.' },
                  { title: 'Water Reticulation SABS', desc: 'Double PVC casing structure ensuring lifespan purity.' },
                  { title: 'Steel Tank Stand Fabricators', desc: 'Secure concrete anchor foundations for up to 10 ton load.' },
                  { title: '6.2KVA Inverter Packs', desc: 'Complete backup power systems config.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-sm duration-300 space-y-1">
                    <h4 className="text-sm font-display font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-550" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-sans leading-normal font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
              Our Professional Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              A Complete Suite Of Water & Solar Solutions
            </h2>
            <p className="text-xs md:text-sm text-slate-650 font-sans font-medium">
              From site geological mapping to heavy mechanical rotary drilling, high-quality Class-12 casing, solar pumps, and backup inverter systems. Selected and configured by specialists.
            </p>
          </div>

          <ServicesGrid onSelectService={handleServiceSelect} />
        </div>
      </section>

      {/* 4. WATER SOLUTIONS SCHEMATIC (EDUCATIONAL) */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
              Educational Model
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              How the Self-Reliant Water Loop Works
            </h2>
            <p className="text-xs md:text-sm text-slate-650 font-sans font-medium">
              Toggle the diagram states to view of geological survey, casing, pump lift mechanics, JoJo gravity tower, and distribution pipelines in Harare.
            </p>
          </div>

          <WaterSolutionsDiagram />
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
              Excellence Engineered
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Why Turn To Busycoast Boreholes?
            </h2>
            <p className="text-xs md:text-sm text-slate-650 font-medium leading-relaxed">
              We focus on delivering structural integrity, high water yield, double casing filtration, and transparent pricing across Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Scientific Geo Siting', desc: 'We do not drill sites randomly. Geophysical resistivity scanners detect aquifers to prevent dry boreholes.', bg: 'bg-cyan-100 text-cyan-800' },
              { title: 'Double Class 12 Casing', desc: 'Superior PVC casing lining prevents soil contamination or silt clogging for clean tasting water.', bg: 'bg-blue-100 text-blue-800' },
              { title: 'Brushless Solar Pumps', desc: 'Zero electrical bills. Smart motor drives run on automatic intervals direct from sun panel rays.', bg: 'bg-amber-100 text-amber-800' },
              { title: 'Certificated Welders', desc: 'All structural metal stands (2m - 6m) are fabricated from load-stressed mild steel with concrete bases.', bg: 'bg-indigo-100 text-indigo-800' },
              { title: '6.2KVA Power Integration', desc: 'Complete backup solar panel packages designed to keep your pumps and entire facility powered.', bg: 'bg-yellow-105 text-amber-900' },
              { title: 'Harare Response Center', desc: 'Prompt onsite support, satellite surveys, pressure valve replacements, and support from Hillside.', bg: 'bg-teal-100 text-teal-800' },
            ].map((reason, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-3 transition hover:border-cyan-300 hover:bg-white hover:shadow-sm duration-300"
              >
                <div className={`w-8 h-8 rounded-lg ${reason.bg} flex items-center justify-center text-xs font-bold font-mono`}>
                  {idx + 1}
                </div>
                <h4 className="text-lg font-display font-bold text-slate-900 tracking-tight">{reason.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-155">
              Fluid Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Our Simple 4-Step Process
            </h2>
            <p className="text-xs md:text-sm text-slate-655 font-medium leading-relaxed">
              From geological survey scheduling to high-speed drilling and tank pressurization, we take care of everything.
            </p>
          </div>

          <div className="relative mt-8">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-left">
              {[
                { step: 'Step 1', title: 'Site Sighting Survey', desc: 'Our geologist maps aquifer resistance lines at your Harare property.' },
                { step: 'Step 2', title: 'Hydraulic Rig Drilling', desc: 'We drill to water strikes and install double casing grids.' },
                { step: 'Step 3', title: 'Pumps & Tank Stand Setup', desc: 'We configure solar submersibles, tanks, and structural mild steel stands.' },
                { step: 'Step 4', title: 'Reliable Water Delivery', desc: 'Your piping network is pressurized, tested, and handed over.' },
              ].map((proc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-205 space-y-3 hover:translate-y-[-4px] transition duration-300"
                >
                  <span className="text-xs font-mono text-cyan-600 font-bold tracking-widest uppercase block">
                    {proc.step}
                  </span>
                  <h4 className="text-base font-display font-bold text-slate-900 leading-tight">{proc.title}</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-semibold">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROJECT GALLERY SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
              Our Concrete Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Recent Work Accomplishments
            </h2>
            <p className="text-xs md:text-sm text-slate-655 font-semibold">
              A view into our borehole drilling rigs, elevated tanks, poly fittings, and hybrid 6.2KVA solar systems active in Hillside, Borrowdale, and broader Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md flex flex-col justify-end min-h-[300px]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent z-10" />

                <div className="relative z-20 p-5 space-y-1 text-left">
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest bg-cyan-955/40 px-2 py-0.5 rounded border border-cyan-500/30 inline-block mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-base font-display font-bold text-white leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-slate-200 leading-relaxed font-sans font-medium opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SOLAR SYSTEMS SECTION */}
      <section id="solar" className="py-20 relative overflow-hidden bg-white">
        {/* Glow point */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/[0.02] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="p-8 md:p-12 rounded-3xl border border-slate-200 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-5 font-mono text-[9px] text-amber-600 tracking-wider font-semibold">
              HYBRID_POWER_GRID_ACTIVE
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-15 md:lg:col-span-7 space-y-6 text-left">
                <span className="text-xs font-mono text-amber-700 font-bold tracking-widest uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Load-Shedding Independent
                </span>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                  Turnkey 6.2KVA Hybrid Solar Systems
                </h2>

                <p className="text-sm text-slate-650 leading-relaxed font-sans max-w-xl font-medium">
                  Harare experiences heavy electricity grid blackouts. Our premium standalone 6.2KVA solar systems run your borehole pump, deep-freezers, home lighting, security electric fences, and Wi-Fi networks effortlessly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    '6.2KVA Pure Sine Wave Hybrid Inverter',
                    'Tier-1 Mono-Crystalline High Output Panels',
                    '5.12kWh grade-A Lithium Iron Battery',
                    'Automatic dynamic transfer (no router power-cuts)',
                    'Surge-stabilised dual distribution board',
                    'Certified professional mounting & setup'
                  ].map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 text-xs text-slate-705 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#consultation-form-section"
                    className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-450 text-slate-950 font-bold text-xs tracking-tight text-center duration-300"
                  >
                    Get 6.2KVA Solar Quote
                  </a>
                  <a
                    href="tel:0775512335"
                    className="py-3 px-6 rounded-xl bg-white border border-slate-250 text-slate-800 hover:bg-slate-100 text-xs tracking-tight text-center duration-300 font-bold"
                  >
                    Quick Phone Connect
                  </a>
                </div>
              </div>

              {/* Right Abstract Inverter Diagram Representation */}
              <div className="lg:col-span-5 relative">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 text-left shadow-lg scale-98 hover:scale-100 transition duration-300">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                      <h4 className="font-display font-bold text-xs text-white">SYSTEM BUSYCOAST Inverter Status</h4>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Model: Hybrid Smart-charge 6.2K</p>
                    </div>
                    <div className="p-2 rounded bg-yellow-400/10 text-yellow-400">
                      <Zap className="w-4.5 h-4.5 animate-bounce" />
                    </div>
                  </div>

                  {/* Flow chart elements */}
                  <div className="space-y-3.5 font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Solar Array Input:</span>
                      <span className="text-yellow-400 font-bold">~4,200W (Active Generation)</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Battery SOC charge:</span>
                      <span className="text-emerald-400 font-bold">98% (LiFePO4 Safe Line)</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Borehole Pump Submersion:</span>
                      <span className="text-cyan-400 font-bold">Equipped & Powered (1.5 HP)</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Grid Source Override:</span>
                      <span className="text-red-400 font-bold">0% (Bypassed entirely)</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white/[0.04] rounded-xl border border-white/[0.04] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] text-slate-300 leading-normal">Provides automatic backup switching in under 10 milliseconds.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALCULATOR SECTION */}
      <section id="calculator" className="py-20 bg-slate-50 border-t border-slate-205 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
              Pricing Rig Simulator
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Construct Your Siting & Drilling Estimate
            </h2>
            <p className="text-xs md:text-sm text-slate-655 font-semibold">
              Drag parameters to combine casing strike, solar pumps, structural metal steel tank stands, and backup power to observe budget totals instantly.
            </p>
          </div>

          <InteractiveCalculator />
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
              Client Confidant Testimony
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Trusted By Zimbabweans
            </h2>
            <p className="text-xs md:text-sm text-slate-655 font-semibold">
              Read transparent recommendations from local homeowners, medical clinics, and plot farmers in Harare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((col) => (
              <div
                key={col.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-6 relative hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-1.5 text-amber-500">
                    {[...Array(col.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-650 leading-relaxed font-sans italic font-medium">
                    "{col.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h5 className="font-display font-bold text-sm text-slate-900">{col.name}</h5>
                    <p className="text-[10px] font-mono text-slate-500 font-semibold">{col.role} · {col.location}</p>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-600 font-bold uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FORM SECTION (DIRECT DESKTOP SECTOR PREFERRING AT LEAST ONE COMPONENT) */}
      <section id="consultation-form-section" className="py-20 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            {selectedServiceForQuote && (
              <div className="mb-6 p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-left flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">Selected Specification:</span>
                  <p className="text-sm font-bold text-cyan-805 font-display mt-0.5">{selectedServiceForQuote}</p>
                </div>
                <button
                  onClick={() => setSelectedServiceForQuote(null)}
                  className="text-xs font-mono text-slate-600 hover:text-slate-900 underline cursor-pointer font-bold"
                >
                  Change Selection
                </button>
              </div>
            )}
            <QuoteRequestForm />
          </div>
        </div>
      </section>

      {/* 12. CTA SECTION */}
      <section className="py-20 relative bg-slate-900 text-slate-100 overflow-hidden shadow-lg border-t border-slate-800">
        {/* Glow point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-8 relative z-10">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Reliable Water Starts Here
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              From high-yield hydro-geological sited drilling rigs to automated solar-powered pumping systems. Tap into continuous municipal-bypass water today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href="#consultation-form-section"
              className="py-4 px-8 rounded-2xl bg-cyan-600 hover:bg-cyan-550 text-white font-bold tracking-tight text-sm text-center transition cursor-pointer"
            >
              Get Siting Consultation
            </a>
            <a
              href={`https://wa.me/263775512335?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/15 font-bold tracking-tight text-sm text-center transition flex justify-center items-center space-x-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section id="faq" className="py-20 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10 text-left">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs md:text-sm text-slate-655 font-semibold">
              Clear technical responses regarding our drilling, solar pumps, pricing models, and services in Greater Harare.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((item) => {
              const isOpen = activeFaq === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition duration-300 hover:border-slate-300/80"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : item.id)}
                    className="w-full text-left py-4.5 px-6 flex items-center justify-between text-slate-900 font-display font-bold text-sm md:text-base focus:outline-none transition-colors duration-200 cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-cyan-500' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-200 bg-white"
                      >
                        <p className="py-4 px-6 text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-semibold">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Contact details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-705 font-bold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-150">
                    Locate Siting Office
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mt-4 tracking-tight">
                    Connect With Our Geologist
                  </h3>
                  <p className="text-xs text-slate-655 mt-2 font-sans leading-relaxed font-semibold">
                    Have soil questions or need immediate pressure-valve repairs? Connect directly with our dispatch specialists in Harare.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600 mt-0.5 shrink-0">
                      <Phone className="w-4 h-4 animate-bounce" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">Phone & WhatsApp Channels</h4>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">077 551 2335</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">International lines: +263 77 551 2335</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600 mt-0.5 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">Physical Siting Hub</h4>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">Hillside, Harare, Zimbabwe</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Open Monday - Saturday: 7:30 AM - 5:30 PM</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="p-2 bg-cyan-50 rounded-lg text-cyan-600 mt-0.5 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 font-bold uppercase">Corporate Licensing</h4>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">ZINWA Compliance Approved</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Full environmental conservation certification.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-150 text-left shadow-sm">
                <p className="text-[11px] text-cyan-800 font-sans leading-relaxed font-semibold">
                  *Our modern drilling rigs are fully operational with high strikes capabilities across the country. Our team handles ZINWA Siting approvals directly on behalf of commercial operations.
                </p>
              </div>
            </div>

            {/* Right Map Placeholder (Fully styled premium geographic grid representation) */}
            <div className="lg:col-span-7 relative h-full min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
                {/* Tech blueprint matrix background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                <div className="relative z-10 space-y-6 max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(2,132,199,0.2)]">
                    <MapPin className="w-6 h-6 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-display font-bold text-white">Hillside, Harare Location Depot</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                      Our operational depot is based in Hillside, Harare, Zimbabwe. From here, our heavy-duty rotary rigs can be dispatched to any Harare address or agricultural sector nationwide.
                    </p>
                  </div>

                  <div className="p-3 bg-white/10 rounded-2xl border border-white/10 text-xs text-slate-200 inline-flex items-center gap-2 font-mono">
                    <Clock className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                    <span>Avg Harare Survey Dispatch: &lt; 24 Hours</span>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/263775512335?text=${defaultWhatsAppMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition duration-300 cursor-pointer shadow-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Request Siting Assessment Via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-500 text-white">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-base font-display font-bold text-white block tracking-tight">
                    BUSYCOAST
                  </span>
                  <span className="text-[8px] font-mono tracking-widest text-cyan-400 block -mt-1 uppercase font-bold">
                    BOREHOLES & WATER
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                Zimbabwe's premier, technical water solution and solar infrastructure provider. Drilling, siting, pumps, and structural steel stands under one standard.
              </p>
              <p className="text-xs text-slate-400 font-mono font-semibold">
                ZINWA Permit Compliance Assured
              </p>
            </div>

            {/* Column 2: Quick navigation */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Solutions</h4>
              <ul className="space-y-2 text-xs text-slate-300 font-sans font-medium">
                <li><a href="#services" className="hover:text-cyan-400 transition">Borehole Drilling</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">Siting & Geo-Surveys</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">Submersible Solar Pumps</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">JoJo Tanks & Metal Stands</a></li>
                <li><a href="#solar" className="hover:text-cyan-400 transition">6.2KVA Power Integration</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">HDPE Pipe Networks</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Hillside Depot</h4>
              <ul className="space-y-2.5 text-xs text-slate-300 font-sans font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400">Loc:</span>
                  <span>Hillside, Harare, Zimbabwe</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400">Tel:</span>
                  <span>077 551 2335</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400">Intl:</span>
                  <span>+263 77 551 2335</span>
                </li>
                <li className="font-mono text-[10px] text-slate-400 font-semibold">
                  Open Saturdays & Holidays
                </li>
              </ul>
            </div>

            {/* Column 4: Trust Badge Summary */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">Ecosystem Standard</h4>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-xs text-slate-100 font-bold font-display">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Certified Operations</span>
                </div>
                <p className="text-[10px] text-slate-300 font-sans leading-normal font-medium">
                  All metal stands are load-stress audited, and pump setups come with physical dry-run sensor triggers.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-mono gap-4 font-semibold">
            <span>
              &copy; {new Date().getFullYear()} Busycoast Boreholes. All Rights Reserved. Water Solutions Zimbabwe.
            </span>
            <div className="flex space-x-6">
              <a href="#privacy" className="hover:text-slate-200">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-200">Terms of Licensing</a>
              <span className="text-slate-500">v3.54-Secure</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
