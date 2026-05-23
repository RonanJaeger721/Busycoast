import { SERVICES } from '../data';
import { motion } from 'motion/react';
import {
  Hammer,
  Compass,
  Sun,
  Database,
  Grid,
  Zap,
  Boxes,
  Activity,
  ArrowUpRight
} from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  // Map our service IDs to appropriate Lucide icons
  const iconMap: Record<string, any> = {
    'borehole-drilling': Hammer,
    'borehole-survey': Compass,
    'solar-pump-installation': Sun,
    'tank-installation': Database,
    'tank-stands': Grid,
    'solar-systems': Zap,
    'pvc-poly-pipes': Boxes,
    'water-solutions': Activity,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((service, index) => {
        const IconComponent = iconMap[service.id] || Activity;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative flex flex-col justify-between p-6 rounded-2xl glass-card text-left h-full"
          >
            {/* Visual shine circle */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-300" />

            <div className="space-y-4">
              {/* Category tag & Icon */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono opacity-80 uppercase tracking-widest text-slate-500 font-medium">
                  {service.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h4 className="text-lg font-display font-semibold text-slate-900 tracking-tight leading-tight group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Tech Spec Badges inside Card */}
              <div className="pt-2 space-y-1.5 opacity-90">
                {service.specs.slice(0, 2).map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center space-x-2 text-[10px] text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-auto">
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold tracking-tight transition duration-200 bg-slate-50 group-hover:bg-cyan-600 group-hover:text-white border border-slate-100 group-hover:border-cyan-600 flex items-center justify-center space-x-2 text-slate-700 shadow-sm cursor-pointer"
              >
                <span>{service.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
