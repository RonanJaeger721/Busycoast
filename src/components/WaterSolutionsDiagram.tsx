import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Sun, Landmark, ArrowRight, Activity, Hammer, ShieldCheck } from 'lucide-react';

interface StageInfo {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  bulletColor: string;
  description: string;
  technicalSpecs: string[];
}

export default function WaterSolutionsDiagram() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: StageInfo[] = [
    {
      id: 0,
      title: '1. Siting & Survey',
      subtitle: 'Aquifer Identification',
      icon: SearchIcon,
      bulletColor: 'bg-cyan-500',
      description: 'Using high-tech geophysical resistivity testing, our geologists analyze soil resistance signatures to map underground water aquifers. This scientific approach ensures a maximum water strike rate.',
      technicalSpecs: ['95%+ strike rate in Harare soils', 'Depth profiling up to 150m', 'Water table thickness reporting', 'ZINWA regulatory assistance']
    },
    {
      id: 1,
      title: '2. Drilling & Casing',
      subtitle: 'Path to Clean Water',
      icon: Hammer,
      bulletColor: 'bg-blue-600',
      description: 'Our heavy-duty hydraulic rotary rigs penetrate hard granite strata safely. We line the channel with SABS-approved Class 12 PVC casings to prevent soil collapse and guarantee pristine mud-free water.',
      technicalSpecs: ['152mm standard inner diameter', 'Full double mud-sealed casing', 'High-speed rock air-drilling', 'Professional gravel pack filtering']
    },
    {
      id: 2,
      title: '3. Solar Pump Lift',
      subtitle: 'Zero-Emission Power',
      icon: Sun,
      bulletColor: 'bg-amber-500',
      description: 'We lower a high-pressure brushless DC submersible pump into the borehole. Connected directly to an intelligent solar array, the pump lifts water silently and automatically whenever the sun shines.',
      technicalSpecs: ['Zero ZESA power dependent', 'Dry-run sensor protection', 'Smart solar peak-power algorithm', 'Flow rate up to 5,000L per hour']
    },
    {
      id: 3,
      title: '4. Storage & Gravity',
      subtitle: 'Pressure & Backup',
      icon: Droplets,
      bulletColor: 'bg-emerald-500',
      description: 'Water is pumped straight into an elevated heavy-duty plastic tank mounted on a precision-welded structural steel stand. This elevation provides reliable, high-pressure gravitational flow even when pumps are idle.',
      technicalSpecs: ['Steel stand height: 2m to 6m', 'Heavy structural concrete anchors', 'Food-grade UV protection tanks', 'Automatic mechanical float switches']
    },
    {
      id: 4,
      title: '5. Home Reticulation',
      subtitle: 'Filtration & Delivery',
      icon: ShieldCheck,
      bulletColor: 'bg-sky-505',
      description: 'Finally, water passes through active multi-stage charcoal & sand filters before reaching household faucets, irrigation sprinklers, or troughs, ensuring constant pressurized water delivery.',
      technicalSpecs: ['1-inch high-pressure poly-pipes', 'Activated charcoal sand filters', 'Automated booster pressure systems', 'Municipal bypass switchboards']
    }
  ];

  return (
    <div className="w-full relative py-8 px-4 md:px-8 border border-slate-200 rounded-3xl bg-white shadow-md">
      <div className="absolute top-0 right-0 p-5 font-mono text-[10px] text-slate-400 tracking-wider">
        SYSTEM_SCHEMATIC_v3.5
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive Panel */}
        <div className="lg:col-span-15 md:lg:col-span-5 flex flex-col justify-center space-y-6">
          <div>
            <span className="text-xs font-mono text-cyan-700 font-semibold tracking-widest uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              Interactive Blueprint
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mt-3 tracking-tight">
              Our Sealed Water Ecosystem
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Tap each milestone along our engineering cycle to observe how water is safely extracted, processed, and pumped using zero-grid energy.
            </p>
          </div>

          <div className="space-y-2.5">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left transition-all duration-300 py-3.5 px-4 rounded-xl flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-cyan-50 border-cyan-300 text-cyan-900 shadow-sm'
                      : 'bg-slate-50 border-slate-100 hover:border-slate-300 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-500'}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-sm tracking-tight">{stage.title}</h4>
                      <p className="text-xs opacity-80 font-sans">{stage.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${stage.bulletColor} ${isActive ? 'animate-ping' : ''}`} />
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'translate-x-1' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Fluid Visual Diagram */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full bg-slate-50 rounded-2xl border border-slate-200/80 p-6 md:p-8 relative overflow-hidden min-h-[460px]">
          {/* Animated Water Mesh Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" className="absolute inset-0">
              <path d="M0,100 C150,150 350,50 500,100 C650,150 850,50 1000,100 L1000,500 L0,500 Z" fill="rgba(6, 182, 212, 0.4)" className="animate-pulse" />
            </svg>
          </div>

          <div className="relative z-10 flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-600">Phase 0{activeStage + 1} Equipment Specification</span>
                    <h4 className="text-xl font-display font-semibold text-slate-900 mt-1">
                      {stages[activeStage].title.split('.')[1].trim()}
                    </h4>
                  </div>
                  <div className="bg-cyan-50 text-cyan-700 p-2.5 rounded-xl border border-cyan-100">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                {/* Body paragraph */}
                <p className="text-slate-650 text-sm leading-relaxed font-normal">
                  {stages[activeStage].description}
                </p>

                {/* List of high-tech details */}
                <div>
                  <h5 className="text-xs font-mono text-slate-705 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Technical Deliverables
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {stages[activeStage].technicalSpecs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-white border border-slate-200/60 shadow-sm flex items-center space-x-2.5"
                      >
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-100 font-semiboldSmall">
                          {sIdx + 1}
                        </span>
                        <span className="text-xs text-slate-650 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Flow Indicator / Liquid Visualizer */}
          <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-slate-500">
              <span className="text-[10px] uppercase font-mono tracking-wider">Flow Control:</span>
              <div className="flex space-x-1.5 bg-slate-100 px-2.5 py-1.5 rounded-full border border-slate-200">
                {[0, 1, 2, 3, 4].map((num) => (
                  <span
                    key={num}
                    className={`h-2 w-4 rounded-full transition-all duration-300 ${
                      num <= activeStage ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-mono text-emerald-600 font-medium">
                {activeStage === 4 ? 'Ecosystem Fully Pressurized' : 'Simulating Fluid Reticulation...'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple Sighting Search Compass Icon SVG
function SearchIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}
