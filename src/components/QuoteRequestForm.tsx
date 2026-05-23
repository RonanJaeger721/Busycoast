import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Phone, Calendar, User, MapPin, Loader2, ArrowRight } from 'lucide-react';

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: 'Borehole Drilling & Survey',
    depthChoice: 'Standard Auto Strike (~60m)',
    tankChoice: '5,000L UV-Stable Tank',
    solarChoice: 'DC Solar Submersible Pump',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const servicesList = [
    'Borehole Drilling & Siting',
    'Hydro-Geological Siting Survey Only',
    'Solar Pump Installation',
    'Water Tank & Elevated Tank Stand',
    '6.2KVA Inverter Solar System Pack',
    'PVC & Poly Pipe Fitting Networks',
    'Complete Integrated Water Solution'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location) {
      alert('Please fill in your Name, Phone Number, and Harare Location.');
      return;
    }

    setIsLoading(true);

    // Realistic visual simulation
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Generate unique Harare specific quote ID
      setTicketId(`BBB-HRE-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 1200);
  };

  const getWhatsAppAlternative = () => {
    const titleText = `*Busycoast Boreholes - Quote Request Form*\n\n`;
    const messageBody = `*Client Details*:\n` +
      `• *Name*: ${formData.name}\n` +
      `• *Phone/WhatsApp*: ${formData.phone}\n` +
      `• *Harare Location*: ${formData.location}\n\n` +
      `*System Request Details*:\n` +
      `• *Primary Service*: ${formData.service}\n` +
      `• *Estimated Depth*: ${formData.depthChoice}\n` +
      `• *Tank Requirement*: ${formData.tankChoice}\n` +
      `• *Solar Pumping Choice*: ${formData.solarChoice}\n` +
      `• *Message/Note*: ${formData.message || 'None'}\n\n` +
      `Please register my request under Hillside Office operations. Thank you!`;

    return `https://wa.me/263775512335?text=${encodeURIComponent(titleText + messageBody)}`;
  };

  return (
    <div className="w-full relative bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-cyan-700 font-semibold uppercase tracking-widest bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-150">
                Official Consultation Booking
              </span>
              <h4 className="text-xl md:text-2xl font-display font-medium text-slate-900 mt-2">
                Request an Engineering Quote
              </h4>
              <p className="text-xs text-slate-650">
                Fill out the secure design brief below. Our Hillside Harare dispatch team will analyze aquifer depths and reply with high strikes estimates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-700 font-medium uppercase tracking-wide flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-cyan-600" /> Full Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Kudzai Chihota"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-1 focus:ring-cyan-500 outline-none transition"
                />
              </div>

              {/* Phone WhatsApp */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-700 font-medium uppercase tracking-wide flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-cyan-600" /> Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 077 551 2335"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-700 font-medium uppercase tracking-wide flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" /> Physical Harare/Zimbabwe Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hillside or Borrowdale, Harare"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-1 focus:ring-cyan-500 outline-none transition"
                />
              </div>

              {/* Service Required */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-700 font-medium uppercase tracking-wide">
                  Required Core Solution *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Micro Custom Configurations Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-100/65 p-3.5 rounded-2xl border border-slate-200">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Borehole Depth</span>
                <select
                  value={formData.depthChoice}
                  onChange={(e) => setFormData({ ...formData, depthChoice: e.target.value })}
                  className="w-full p-2 text-[11px] rounded bg-white border border-slate-205 text-slate-800 focus:outline-none focus:border-cyan-550"
                >
                  <option value="Shallow strike (40m)">Shallow strike (40m)</option>
                  <option value="Standard Auto Strike (~60m)">Standard Auto Strike (~60m)</option>
                  <option value="Deep Granite (>90m)">Deep Granite (&gt;90m)</option>
                  <option value="None: Drilling Completed">None: Drilling Completed</option>
                </select>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Polyester Tanks</span>
                <select
                  value={formData.tankChoice}
                  onChange={(e) => setFormData({ ...formData, tankChoice: e.target.value })}
                  className="w-full p-2 text-[11px] rounded bg-white border border-slate-205 text-slate-800 focus:outline-none focus:border-cyan-550"
                >
                  <option value="No Tank Needed">No Tank Needed</option>
                  <option value="2,500L Storage Tank">2,500L Storage Tank</option>
                  <option value="5,000L UV-Stable Tank">5,000L UV-Stable Tank</option>
                  <option value="10,000L Heavy Tank">10,000L Heavy Tank</option>
                </select>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Pumping System</span>
                <select
                  value={formData.solarChoice}
                  onChange={(e) => setFormData({ ...formData, solarChoice: e.target.value })}
                  className="w-full p-2 text-[11px] rounded bg-white border border-slate-205 text-slate-800 focus:outline-none focus:border-cyan-550"
                >
                  <option value="DC Solar Submersible Pump">DC Solar Submersible Pump</option>
                  <option value="AC Grid Submersible Pump">AC Grid Submersible Pump</option>
                  <option value="AC High pressure Booster Pump">AC High pressure Booster Pump</option>
                  <option value="None">None</option>
                </select>
              </div>
            </div>

            {/* Specific Instructions */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-700 font-medium uppercase tracking-wide">
                Special Directives & Soil Properties (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Describe your site access, specific farm crops, solar backing requirements, or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-1 focus:ring-cyan-500 outline-none transition resize-none"
              />
            </div>

            {/* Submission Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white font-bold tracking-tight text-xs font-display flex items-center justify-center space-x-2 transition cursor-pointer shrink-0"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Analyzing Aquifer Strike...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request Engineering Quote</span>
                  </>
                )}
              </button>

              <div className="text-center sm:text-right">
                <span className="text-[10px] text-slate-500 block font-mono">
                  Prefer direct instant messaging?
                </span>
                <a
                  href={getWhatsAppAlternative()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" /> Submit copy directly to WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-display font-medium text-slate-900">
                Quote Request Registered!
              </h4>
              <p className="text-sm text-slate-650 max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-brand-650">{formData.name}</span>. Your design brief has been dispatched. Our site geologist has scheduled an initial satellite ground assessment.
              </p>
            </div>

            {/* Simulated Quote Ticket */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 shadow-sm font-mono text-xs text-slate-700">
              <div className="flex justify-between border-b pb-2.5 border-slate-200 font-semibold">
                <span className="text-slate-500">OPERATION_TICKET_ID:</span>
                <span className="text-cyan-600">{ticketId}</span>
              </div>
              <div className="flex justify-between">
                <span>Site Address:</span>
                <span className="font-sans font-medium text-slate-900">{formData.location}</span>
              </div>
              <div className="flex justify-between">
                <span>Core Setup:</span>
                <span className="font-sans font-medium text-slate-900 text-right max-w-[180px] truncate">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span>Technical Phase:</span>
                <span className="text-yellow-600 font-bold uppercase">Siting Assessment</span>
              </div>
              <div className="flex justify-between border-t pt-2.5 border-slate-200">
                <span>Harare Geologist Contact:</span>
                <span className="text-brand-650 font-semibold">+263 77 551 2335</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={getWhatsAppAlternative()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold leading-none cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Simulate Instant WhatsApp Delivery Now</span>
              </a>

              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="text-xs text-slate-500 hover:text-slate-700 underline block mx-auto cursor-pointer"
              >
                File Another Direct Request
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
