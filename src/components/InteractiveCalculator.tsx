import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Sparkles, Phone, Check, RefreshCw, Layers, Zap, Info, ArrowRight } from 'lucide-react';
import { CalculatorState } from '../types';

export default function InteractiveCalculator() {
  const [state, setState] = useState<CalculatorState>({
    hasBorehole: false,
    depthEst: 60,
    pumpType: 'solar',
    hasSolarSystem: false,
    tankSize: '5000L',
    tankStandHeight: '4m',
    needsSurvey: true,
    pipingLength: 30,
  });

  const [submittedQuery, setSubmittedQuery] = useState(false);

  // Approximate cost standards in Zimbabwe USD
  const PricingMetrics = {
    survey: 250,
    drillingPerMeter: 35, // Premium casing included
    casingBase: 400, // Fixed layout
    pumps: {
      solar: 1250,
      ac: 1100,
      none: 0,
    },
    tanks: {
      'none': 0,
      '2500L': 420,
      '5000L': 680,
      '10000L': 1450,
    },
    stands: {
      'none': 0,
      '2m': 480,
      '3m': 580,
      '4m': 750,
      '6m': 1400,
    },
    solar6Kva: 3850,
    pipingPerMeter: 4,
  };

  const calculatedEstimate = useMemo(() => {
    let price = 0;
    const items: { label: string; val: number }[] = [];

    if (state.needsSurvey) {
      price += PricingMetrics.survey;
      items.push({ label: 'Hydro-Geological Survey & Aquifer Siting', val: PricingMetrics.survey });
    }

    if (!state.hasBorehole) {
      const drillCost = state.depthEst * PricingMetrics.drillingPerMeter + PricingMetrics.casingBase;
      price += drillCost;
      items.push({ label: `Drilling & Casing (Class 12 PVC) - ${state.depthEst}m`, val: drillCost });
    }

    if (state.pumpType !== 'none') {
      const pumpVal = PricingMetrics.pumps[state.pumpType];
      price += pumpVal;
      const pumpLabel = state.pumpType === 'solar' ? 'Submersible DC Solar Pump + Smart Controller' : 'Submersible AC Electric Pump';
      items.push({ label: pumpLabel, val: pumpVal });
    }

    if (state.tankSize !== 'none') {
      const tankVal = PricingMetrics.tanks[state.tankSize];
      price += tankVal;
      items.push({ label: `Premium PVC JoJo Water Tank (${state.tankSize})`, val: tankVal });
    }

    if (state.tankStandHeight !== 'none') {
      const standVal = PricingMetrics.stands[state.tankStandHeight];
      price += standVal;
      items.push({ label: `Structural Steel Tank Stand (${state.tankStandHeight})`, val: standVal });
    }

    if (state.hasSolarSystem) {
      price += PricingMetrics.solar6Kva;
      items.push({ label: '6.2KVA Hybrid Solar Panel & Lithium System', val: PricingMetrics.solar6Kva });
    }

    if (state.pipingLength > 0) {
      const pipVal = state.pipingLength * PricingMetrics.pipingPerMeter;
      price += pipVal;
      items.push({ label: `HDPE/Poly class-12 Piping - ${state.pipingLength}m`, val: pipVal });
    }

    return { total: price, items };
  }, [state]);

  const resetCalculator = () => {
    setState({
      hasBorehole: false,
      depthEst: 60,
      pumpType: 'solar',
      hasSolarSystem: false,
      tankSize: '5000L',
      tankStandHeight: '4m',
      needsSurvey: true,
      pipingLength: 30,
    });
    setSubmittedQuery(false);
  };

  // Construct absolute premium WhatsApp redirect message URL
  const whatsappUrl = useMemo(() => {
    const phoneNumber = '263775512335'; // Zimbabwe Harare Country Code prefix
    const titleText = `*Busycoast Boreholes - Water & Solar Solutions Inquiry*\n\n`;
    let body = `Hello Busycoast Boreholes team, I generated a custom configuration on your structural cost app planner:\n\n`;
    
    body += `• *Geological Siting*: ${state.needsSurvey ? 'Yes, required' : 'No, already sited'}\n`;
    body += `• *State of Borehole*: ${state.hasBorehole ? 'Borehole already drilled' : `Need Drilling of estimated *${state.depthEst} meters*`}\n`;
    body += `• *Equipped Submersible Pump*: ${state.pumpType === 'solar' ? 'Solar Pump' : state.pumpType === 'ac' ? 'AC Grid Pump' : 'None'}\n`;
    body += `• *Water Storage Tank Size*: ${state.tankSize !== 'none' ? state.tankSize : 'None'}\n`;
    body += `• *Galvanized Steel Tank Stand*: ${state.tankStandHeight !== 'none' ? `${state.tankStandHeight} height` : 'None'}\n`;
    body += `• *6.2KVA Power Solar Backup*: ${state.hasSolarSystem ? 'Yes, please include' : 'No'}\n`;
    body += `• *Piping & Fittings Length*: ${state.pipingLength} meters\n\n`;
    body += `• *Theoretical Estimate*: _$${calculatedEstimate.total.toLocaleString()} USD_ (Please review & verify this)\n\n`;
    body += `Please contact me to discuss booking a physical site survey in Hillside, Harare or nearest area as soon as possible. Thank you!`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(titleText + body)}`;
  }, [state, calculatedEstimate]);

  return (
    <div id="calculator-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
      {/* Left Input Configuration Form */}
      <div className="lg:col-span-7 space-y-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Visual glass blur dots */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="text-xl font-display font-medium text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-600" />
              Ecosystem Specification Settings
            </h4>
            <p className="text-xs text-slate-500">
              Customize each parameter; the hydraulic pricing engine adapts dynamically to standard Hararian soil coefficients.
            </p>
          </div>
          <button
            onClick={resetCalculator}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition duration-200 cursor-pointer"
            title="Reset Settings"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Siting Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 font-semibold flex items-center gap-1.5 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Aquifer Siting Support
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, needsSurvey: true }))}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold font-display tracking-tight transition duration-200 cursor-pointer ${
                    state.needsSurvey
                      ? 'bg-cyan-50 border-cyan-200 text-cyan-700 shadow-sm'
                      : 'bg-slate-50 border-slate-150 text-slate-500 hover:border-slate-300'
                  }`}
                >
                  Need Geo-Survey
                </button>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, needsSurvey: false }))}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold font-display tracking-tight transition duration-200 cursor-pointer ${
                    !state.needsSurvey
                      ? 'bg-cyan-50 border-cyan-200 text-cyan-700 shadow-sm'
                      : 'bg-slate-50 border-slate-150 text-slate-500 hover:border-slate-300'
                  }`}
                >
                  Already Sited
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 font-semibold flex items-center gap-1.5 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Borehole Drilling State
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, hasBorehole: false }))}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold font-display tracking-tight transition duration-200 cursor-pointer ${
                    !state.hasBorehole
                      ? 'bg-cyan-50 border-cyan-200 text-cyan-700 shadow-sm'
                      : 'bg-slate-50 border-slate-150 text-slate-500 hover:border-slate-300'
                  }`}
                >
                  Request Drilling
                </button>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, hasBorehole: true }))}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold font-display tracking-tight transition duration-200 cursor-pointer ${
                    state.hasBorehole
                      ? 'bg-cyan-50 border-cyan-200 text-cyan-700 shadow-sm'
                      : 'bg-slate-50 border-slate-150 text-slate-500 hover:border-slate-300'
                  }`}
                >
                  Borehole Existing
                </button>
              </div>
            </div>
          </div>

          {/* Sizing Drill Depth Meter Slider (Active only if drilling requested) */}
          <AnimatePresence mode="popLayout">
            {!state.hasBorehole && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-2 auto-height-fix"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-wide">
                    Estimated Digging Depth:
                  </span>
                  <span className="text-sm font-mono text-cyan-700 font-bold bg-cyan-50 py-1 px-3 rounded border border-cyan-150">
                    {state.depthEst} Meters
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="120"
                  step="10"
                  value={state.depthEst}
                  onChange={(e) => setState(p => ({ ...p, depthEst: parseInt(e.target.value) }))}
                  className="w-full h-2 rounded bg-slate-100 appearance-none accent-cyan-500 cursor-width cursor-pointer outline-none transition"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>40 Meters (Shallow Aquifer)</span>
                  <span>80 Meters (Marlborough/Borrowdale Std.)</span>
                  <span>120 Meters (Deep Granite)</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submersible Water Pump Config */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono text-slate-705 flex items-center gap-1.5 uppercase tracking-wide font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Submersible Booster Pump Technology
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { type: 'solar', title: 'Solar DC Pump', desc: 'Auto sunshine tracking' },
                { type: 'ac', title: 'Grid AC Pump', desc: 'Electricity model' },
                { type: 'none', title: 'No Pump Required', desc: 'Casing only' },
              ].map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setState(p => ({ ...p, pumpType: item.type as any }))}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition h-20 cursor-pointer ${
                    state.pumpType === item.type
                      ? 'bg-cyan-50 border-cyan-300 text-cyan-800 shadow-sm'
                      : 'bg-slate-50 border-slate-150 text-slate-500 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block">{item.title}</span>
                  <span className="text-[10px] opacity-80 leading-tight block font-medium">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Water Storage Tank Size Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 font-semibold flex items-center gap-1.5 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Heavy Duty JoJo Water Tank
              </label>
              <select
                value={state.tankSize}
                onChange={(e) => setState(p => ({ ...p, tankSize: e.target.value as any }))}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-205 bg-slate-50 text-xs text-slate-800 outline-none focus:border-cyan-500 focus:bg-white transition duration-200 font-sans"
              >
                <option value="none">No Storage Tank Required</option>
                <option value="2500L">2,500 Liters Food-Grade Tank</option>
                <option value="5000L">5,000 Liters Food-Grade (Recommended)</option>
                <option value="10000L">10,000 Liters Storage (Farms & Clinics)</option>
              </select>
            </div>

            {/* Structural Steel Stand Height (Active if tank size is not none) */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 font-semibold flex items-center gap-1.5 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Elevated Mild-Steel Stand Height
              </label>
              <select
                disabled={state.tankSize === 'none'}
                value={state.tankSize === 'none' ? 'none' : state.tankStandHeight}
                onChange={(e) => setState(p => ({ ...p, tankStandHeight: e.target.value as any }))}
                className={`w-full py-2.5 px-3 rounded-xl border text-xs text-slate-800 outline-none focus:border-cyan-500 transition duration-200 font-sans ${
                  state.tankSize === 'none' ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-50 border-slate-200 focus:bg-white'
                }`}
              >
                <option value="none">Concrete Ground Level Slabs (0m Height)</option>
                <option value="2m">2-Meter Mild Steel Stand</option>
                <option value="3m">3-Meter Mild Steel Stand</option>
                <option value="4m">4-Meter Welded Steel (Optimal Gravity)</option>
                <option value="6m">6-Meter Heavy High-Wind Steel Structure</option>
              </select>
            </div>
          </div>

          {/* Backup Power & Inverter Pack Toggle */}
          <div className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h5 className="text-xs font-mono text-slate-900 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <Zap className="w-4 h-4 text-amber-500 animate-pulse" />
                Add 6.2KVA Hybrid Solar Power Bundle
              </h5>
              <p className="text-xs text-slate-600 max-w-lg leading-relaxed font-sans">
                Seamless hybrid inverter, multi-panel tier-1 array, and 5.12kWh backup premium metal lithium battery. Runs household lights, fridge, Wi-Fi, and your pump and charges fully in 2 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setState(p => ({ ...p, hasSolarSystem: !p.hasSolarSystem }))}
              className={`w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs font-bold font-display tracking-tight transition shadow-sm border cursor-pointer ${
                state.hasSolarSystem
                  ? 'bg-amber-400 border-amber-500 text-slate-950 shadow-amber-450/25'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {state.hasSolarSystem ? 'Selected / Included' : '+ Add Solar System'}
            </button>
          </div>

          {/* Sizing Piping meter slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-600 flex items-center gap-1">
                Polyethylene (HDPE) high-pressure class-12 piping path length:
              </span>
              <span className="text-xs font-mono text-slate-800 font-bold bg-slate-100 px-2.5 py-1 rounded">
                {state.pipingLength}m
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="10"
              value={state.pipingLength}
              onChange={(e) => setState(p => ({ ...p, pipingLength: parseInt(e.target.value) }))}
              className="w-full h-1.5 rounded bg-slate-150 appearance-none accent-cyan-500 cursor-pointer outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* Right Pricing Summary Dashboard Card */}
      <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 relative shadow-xl overflow-hidden">
        {/* Glow vector back */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-6 relative z-10 flex-grow">
          <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Pricing Model Summary</span>
              <h4 className="text-xl font-display font-medium text-white flex items-center gap-1.5">
                <Calculator className="w-5 h-5 text-cyan-300" />
                Water & Solar Budget
              </h4>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded uppercase font-bold">
              Free Estimation
            </span>
          </div>

          {/* Billing items */}
          <div className="space-y-3 max-h-[290px] overflow-y-auto pr-2 scrollbar-thin scrollbar-white">
            {calculatedEstimate.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 transition hover:bg-white/[0.04]"
              >
                <div className="space-y-0.5 max-w-[70%]">
                  <span className="text-xs text-slate-200 font-sans block leading-tight">{item.label}</span>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase">Fully Supplied & Fitted</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">
                  +${item.val.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-2 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Estimated Project Total:</span>
              <span className="text-lg font-mono text-white pointer-events-none">
                USD
              </span>
            </div>
            <div className="text-3xl md:text-4xl font-display font-bold text-center text-cyan-400">
              ${calculatedEstimate.total.toLocaleString()}
            </div>
            <span className="text-[9px] font-mono text-slate-500 text-center block tracking-wide">
              *Approximate indicative rate including high-duty steel stands & cement anchors.
            </span>
          </div>
        </div>

        {/* WhatsApp interactive conversion */}
        <div className="mt-8 relative z-10 space-y-3.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSubmittedQuery(true)}
            className="w-full text-center py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold tracking-tight text-sm font-display flex items-center justify-center space-x-2.5 transition duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.3)] group cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />
            <span>Submit Quotation via WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="text-[10px] text-slate-450 flex items-start gap-1.5 px-1 leading-snug">
            <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>
              By wireheading, a preformatted layout is copied onto your client so our site engineer in Hillside can schedule a precise technical site survey.
            </span>
          </div>

          {submittedQuery && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-400/20 rounded-xl flex items-center space-x-2 animate-pulse">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-300">
                Opening WhatsApp! We will reply with casing layout schedules shortly.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
