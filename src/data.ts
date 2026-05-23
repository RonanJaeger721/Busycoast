import { Service, Testimonial, FAQItem, GalleryItem } from './types';

// Let's reference the exact generated asset URLs
export const BESPOKE_IMAGES = {
  heroBg: "/src/assets/images/busycoast_hero_bg_1779533214323.png",
  solarWater: "/src/assets/images/busycoast_solar_water_1779533234624.png",
  freshWater: "/src/assets/images/busycoast_clear_water_1779533252780.png"
};

export const SERVICES: Service[] = [
  {
    id: 'borehole-drilling',
    title: 'Borehole Drilling',
    category: 'drilling',
    description: 'Precision drilling using state-of-the-art hydraulic rigs for clean, dependable, and high-yield water access.',
    longDescription: 'We offer full-service borehole drilling solutions utilizing advanced heavy-duty drilling rigs. From residential properties in Hillside and Borrowdale to agricultural fields across Zimbabwe, we drill to optimal water strikes with fully certified standards.',
    specs: ['Domestic, commercial & agricultural installations', 'Standard 40m - 120m depths', 'SABS approved double casing where required', 'Flushing, cleaning, and testing included'],
    ctaText: 'Book Drilling'
  },
  {
    id: 'borehole-survey',
    title: 'Borehole Siting & Survey',
    category: 'drilling',
    description: 'Scientific hydro-geological siting with high strike success rate, mapping out the best aquifers prior to drilling.',
    longDescription: 'Our certified mineral/water divining and hydro-geological survey teams map deep underground aquifers. Siting is crucial in Harare to avoid dry holes, ensure longevity, and comply with ZINWA statutory requirements.',
    specs: ['Strike success rate over 95%', 'Full geological report', 'ZINWA permit advisory support', 'Geophysical resistivity testing'],
    ctaText: 'Schedule Survey'
  },
  {
    id: 'solar-pump-installation',
    title: 'Submersible Solar Pumps',
    category: 'solar',
    description: 'High-efficiency solar water pumps that run entirely on sunshine, bypassing ZESA grid outages completely.',
    longDescription: 'Specialised solar-powered submersible pumps that deliver rich, pressurized flow from your borehole straight into your water tanks. Equipped with advanced smart controller drives for dry-run protection and automatic solar tracking.',
    specs: ['Brushless DC high-yield motors', 'Pre-wired smart controllers', 'Automatic run & shutdown triggers', 'Maintenance-free 3+ year lifespans'],
    ctaText: 'Get Pump Quote'
  },
  {
    id: 'tank-installation',
    title: 'Water Tank Installation',
    category: 'water',
    description: 'Premium heavy-duty JoJo and Busycoast water tanks from 2,500L up to 10,000L with automatic float systems.',
    longDescription: 'Clean and durable PVC plastic storage solutions. We supply, deliver, and connect industrial UV-stabilised food-grade tanks. Connected with automated water level sensors to ensure your household always has pressurized water.',
    specs: ['2,500L, 5,000L and 10,000L tank capacities', 'Food-grade premium lining prevents algae', 'Automatic float shut-off valves', 'Strong leaf-catcher inlet screens'],
    ctaText: 'Order Tanks'
  },
  {
    id: 'tank-stands',
    title: 'Heavy Structural Tank Stands',
    category: 'water',
    description: 'Reinforced mild steel structural stands engineered for safely supporting up to 10,000kg loads.',
    longDescription: 'Our certified welders build custom, ultra-reliable structural steel tank stands starting from 2m, 3m, 4m, to 6m heights. Designed dynamically to generate natural gravitation pressure or hold booster pumps safely.',
    specs: ['Engineered mild steel beams', 'Sturdy 4-leg concrete anchor pad structures', 'Rust-resistant double coat painting', 'Integrated safety ladder design'],
    ctaText: 'Request Stand'
  },
  {
    id: 'solar-systems',
    title: '6.2KVA Solar Systems',
    category: 'solar',
    description: 'Turnkey Hybrid Solar Power packs to run your entire home, lighting, Wi-Fi, and borehole pumps simultaneously.',
    longDescription: 'A premium corporate hybrid solar system equipped with high-yield tier-1 mono panels, 6.2KVA smart inverter chargers, and heavy lithium LiFePO4 battery banks. Designed to provide 100% independence from load shedding.',
    specs: ['6.2KVA Pure Sine Wave Hybrid Inverter', 'High-generation solar panel array', '5.12kWh premium lithium back-up battery', 'Professional surge-protected DB boards'],
    ctaText: 'Get Solar Quote'
  },
  {
    id: 'pvc-poly-pipes',
    title: 'PVC & Poly Pipes & Fittings',
    category: 'piping',
    description: 'High-pressure Class 12 & Class 16 pipes, compression poly-piping, and heavy industrial PVC water routes.',
    longDescription: 'We supply and lay premium grade underground HDPE poly pipe lines and high-pressure PVC conduit pathways. Engineered to withstand high Zimbabwean soil temperatures, high structural pressures, and ensure zero leakages.',
    specs: ['Class 10, 12 and 16 high pressure rating', 'Corrosion-proof lifetime durability', 'Professional excavation and clean soil burial', 'Full suite of premium brass and poly fittings'],
    ctaText: 'Inquire Fitting'
  },
  {
    id: 'water-solutions',
    title: 'Complete Water Solutions',
    category: 'water',
    description: 'End-to-end water piping systems, pressure-vessel boosters, sand filters, and water recycling setups.',
    longDescription: 'Integrated water engineering. We link the borehole, solar pumps, storage tanks, booster systems, active charcoal filtration, and household mains. Enjoy fully self-sufficient utility water with beautiful high pressure.',
    specs: ['Automatic booster pump integration', 'Multi-stage active charcoal & sand filtration', 'Seamless bypass valves for municipal water', 'Commercial & farm water reticulation design'],
    ctaText: 'Custom Solution'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mr. Kudzai Chihota',
    location: 'Borrowdale, Harare',
    role: 'Homeowner',
    rating: 5,
    text: 'Busycoast Boreholes transformed our household. Harare water can be non-existent for months, but their team completed the geological survey, drilled 65m, and installed a 5,000L tank on a 4m stand in 3 days. Pristine clean water is flowing. Exceptional professionalism!',
    date: '2026-03-12'
  },
  {
    id: 'test-2',
    name: 'Mrs. Farai Mutandwa',
    location: 'Marlborough, Harare',
    role: 'Plot Owner & Farmer',
    rating: 5,
    text: 'I highly recommend Busycoast for farm borehole setups. The solar pump system they recommended runs directly on solar panels they installed. I now irrigate my tomato crops for free. We also purchased their PVC pipes and poly fittings—everything is high caliber.',
    date: '2026-04-05'
  },
  {
    id: 'test-3',
    name: 'Dr. Tnashe Sibanda',
    location: 'Hillside, Harare',
    role: 'Medical Practice Director',
    rating: 5,
    text: 'For our clinic, uninterrupted clean water is vital. Busycoast did a flawless survey and drilled a high strike. We also installed their 6.2KVA backup solar system. Now, even when ZESA goes out, our solar pump keeps the water tanks and clinic running smoothly.',
    date: '2026-05-18'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much does it cost to drill a borehole in Harare?',
    answer: 'The overall cost depends on factors like siting, depth required to strike a stable aquifer (typically 40m - 80m in Harare), and the soil formation. Busycoast Boreholes provides incredibly competitive custom quote bundles including survey, drilling, casing, pump installation, and tank connection.'
  },
  {
    id: 'faq-2',
    question: 'Do you install solar-powered borehole pumps?',
    answer: 'Yes, we specialize in high-efficiency DC solar pumps that operate directly from solar panels. This eliminates electricity bills and ensures constant water flow during load shedding or ZESA power cuts.'
  },
  {
    id: 'faq-3',
    question: 'What is included in your 6.2KVA solar systems?',
    answer: 'Our premium 6.2KVA package includes a 6.2KVA Pure-Sine Hybrid Inverter, Tier-1 Mono Solar Panels, a 5.12kWh grade-A Lithium Iron Phosphate (LiFePO4) battery, surge protection, a customized distribution board, and full professional installation. It easily powers lights, Wi-Fi, fridge, TVs, and your solar water pump simultaneously!'
  },
  {
    id: 'faq-4',
    question: 'Which areas do you offer your water services in?',
    answer: 'We are based in Hillside, Harare, and we service all neighborhoods in greater Harare (such as Borrowdale, Glen Lorne, Marlborough, Mt Pleasant, Ruwa, Chitungwiza) and surrounding commercial/farming districts across Zimbabwe.'
  },
  {
    id: 'faq-5',
    question: 'Do you install water tanks and metal tank stands?',
    answer: 'Absolutely! We supply and install premium plastic tanks (2,500L, 5,000L, 10,000L) and fabricate structural mild-steel tank stands (ranging from 2m, 3m, 4m up to 6m in height) to maximize gravity water pressure.'
  },
  {
    id: 'faq-6',
    question: 'How do I request a borehole geological survey?',
    answer: 'Simply tap the "Request a Quote" button, use our interactive cost planner, or click on the "Chat on WhatsApp" button to connect directly with our site surveyor at 077 551 2335. Siting is scheduled quickly, followed by immediate drilling rig allocation.'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Drilling Rig in Action',
    category: 'Drilling',
    imageUrl: BESPOKE_IMAGES.heroBg,
    description: 'Advanced heavy hydraulic rotary rig drilling a 70m high-yield borehole in Harare.'
  },
  {
    id: 'gal-2',
    title: 'Solar Water Storage',
    category: 'Solar & Storage',
    imageUrl: BESPOKE_IMAGES.solarWater,
    description: 'Complete 5,000L water tank set up on a 4-meter structural steel stand with solar panels in Hillside.'
  },
  {
    id: 'gal-3',
    title: 'Pure Aquifer Testing',
    category: 'Water Strike',
    imageUrl: BESPOKE_IMAGES.freshWater,
    description: 'Flushing and yield monitoring for a newly completed borehole, delivering clean drinking water.'
  },
  {
    id: 'gal-4',
    title: 'Primary 10,000L Commercial Tanks',
    category: 'Storage Sets',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    description: 'Dual 5,000L tanks interconnected for commercial water storage, equipped with high-yield automatic booster pumps.'
  },
  {
    id: 'gal-5',
    title: '6.2KVA Backup Solar System',
    category: 'Solar Power',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    description: 'Professional setup with dynamic hybrid smart inverter and lithium-ion battery modules to guarantee continuous power.'
  },
  {
    id: 'gal-6',
    title: 'HDPE Water Distribution lines',
    category: 'Pipes & Fittings',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
    description: 'High-density polyethylene compression plumbing installation and industrial PVC manifold pipes.'
  }
];
