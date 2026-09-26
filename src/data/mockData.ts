import {
  ClinicBranch,
  Vertical,
  Treatment,
  Doctor,
  Appointment,
  Invoice,
  BlogPost,
  Review,
  EmergencyGuide,
  TreatmentCostItem,
  AwardItem,
  SmileTransformation,
} from '../types';

export const HOSPITAL_INFO = {
  name: 'HOPE DENTAL HOSPITAL',
  subtitle: 'Centre for Implantology, Periodontology & Laser Dentistry',
  tagline: 'Dedicated Dental Hospital & Wellness Centre in Lucknow · Advanced Implants, Laser Dentistry & TMJ Care',
  establishedYear: 2016,
  experienceYears: 15,
  founders: 'Dr. Himangi Dubey (BDS, MDS - Periodontology & Oral Implantology, Ex-KGMU) & Senior Specialists',
  phone: '+91 79052 87870',
  altPhone: '+91 79052 69559',
  emergencyPhone: '+91 79052 87870',
  internationalPhone: '+91 79052 87870',
  whatsappPhone: '+91 79052 87870',
  email: 'contact@hopedentalhospital.com',
  intlEmail: 'contact@hopedentalhospital.com',
  address: 'No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011',
  website: 'https://hopedentalhospital.com',
  gstin: '09AAACH7890D1Z4',
  registrationNo: 'UP/MED/LKO/2018/0942',
  socialLinks: {
    facebook: 'https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/',
    youtube: 'https://youtube.com/@drhimangidubey_hopedental?si=dICNBMYUw_9KpXfp',
    google: 'https://share.google/M13VNXGp52dAKKUWl',
    justdial: 'https://jsdl.in/DT-39XTVYSNSB8',
    whatsapp: 'https://wa.me/917905287870?text=Hello%20Hope%20Dental%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment'
  },
  ratings: {
    average: 5.0,
    totalReviews: 299,
    googleScore: 5.0,
    googleReviewsCount: 151,
    justdialScore: 5.0,
    justdialRatingsCount: 148,
    gcrRank: '5.0 ★ Rated Centre for Implantology, Periodontology & Laser Dentistry',
    timesRank: 'Premier Standalone Dental Hospital in Lucknow (Sadrauna / Para Road)',
  },
  timings: {
    weekdays: '10:00 AM – 8:00 PM (Monday to Saturday)',
    sunday: '10:00 AM – 8:00 PM (Sunday Open)',
    emergency: '24/7 Dental Emergency & Acute Trauma Care Available',
  },
  stats: [
    { value: '15+', label: 'Years Clinical Experience', suffix: 'Years' },
    { value: '5.0 ★', label: 'Google Rating (151+ Reviews)', suffix: 'Stars' },
    { value: '5.0 ★', label: 'Justdial Rating (148+ Ratings)', suffix: 'Stars' },
    { value: '10,000+', label: 'Smiles Transformed', suffix: 'Patients' },
    { value: '100%', label: 'Dedicated Lucknow Centre', suffix: 'Single Hospital' },
    { value: '99.4%', label: 'Clinical Satisfaction', suffix: 'Satisfaction' },
  ],
  accreditations: [
    '5.0 Star Rated Dental Hospital on Google (151+ Reviews) & Justdial (148+ Ratings)',
    'Award of Appreciation at the 8th UP Dental Show 2026 (Dr. Himangi Dubey)',
    'Featured Dental Expert on Doordarshan UP (@DDUP) & All India Radio',
    'Alumni Specialist from King George\'s Medical University (KGMU Lucknow)',
    'Biolase Waterlase Certified Laser Periodontics & LANAP Centre',
    'Dedicated Standalone Dental Hospital & Wellness Centre with No Franchises'
  ]
};

export const VERTICALS_DATA: Vertical[] = [
  {
    id: 'hospital-flagship',
    num: '01',
    name: 'Hope Dental Hospital & Wellness Centre',
    tagline: 'Sadrauna / Para Road, Lucknow Flagship Hospital',
    description: 'Our primary medical and dental surgical center equipped with hospital-grade operatory suites, conscious sedation, CBCT diagnostics, and full-mouth implant rehabilitation.',
    badge: 'FLAGSHIP HOSPITAL',
    highlights: [
      'Full-arch All-on-4 & immediate load dental implants',
      'Advanced Biolase laser periodontics & bloodless gum surgeries',
      'Hospital-grade sterilization with Class-B vacuum autoclaves',
      '24/7 Dental emergency triage & maxillofacial trauma care'
    ],
    image: './verticals/vertical-international.webp'
  },
  {
    id: 'city-clinics',
    num: '02',
    name: 'Hope Multispecialty Dental Clinics',
    tagline: 'Accessible Specialist Care across Lucknow',
    description: 'Providing comprehensive family dental care, microscopic single-sitting root canals, pain-free extractions, and child dentistry across strategic urban corridors.',
    badge: 'NEIGHBORHOOD CARE',
    highlights: [
      'Senior MDS specialist consultation for every treatment',
      'Microscopic endodontic equipment for single-visit RCT',
      'Gentle pediatric operatory tailored for anxious children',
      'Transparent, patient-first affordable treatment packages'
    ],
    image: './verticals/vertical-clinics.webp'
  },
  {
    id: 'wellness-diabetic-wing',
    num: '03',
    name: 'Hope Oral Wellness & Diabetic Care Wing',
    tagline: 'Systemic Health & Integrative Periodontal Care',
    description: 'Pioneered by Dr. Himangi Dubey, this specialized division bridges systemic health and dental science, offering customized protocols for diabetic and cardiovascular patients.',
    badge: 'HEALTH & WELLNESS',
    highlights: [
      'Targeted diabetic periodontal evaluation and infection control',
      'LANAP minimally invasive laser therapies with rapid healing',
      'Pre-cardiac & pre-transplant oral clearance screenings',
      'Nutritional counseling & holistic saliva pH balancing'
    ],
    image: './verticals/vertical-flagship.webp'
  },
  {
    id: 'aesthetic-aligner-studio',
    num: '04',
    name: 'Hope Aesthetic & Clear Aligner Studio',
    tagline: 'Digital Smile Design & Discreet Orthodontics',
    description: 'Dedicated to cosmetic smile makeovers, ultra-thin porcelain veneers, and US-FDA approved clear aligners for teenagers and working professionals.',
    badge: 'SMILE DESIGN',
    highlights: [
      '3D Digital Smile Simulation preview before treatment',
      'Hand-crafted E.max porcelain laminates & smile transformations',
      'Custom invisible aligners without brackets or wires',
      'In-office Zoom laser whitening for instant brilliance'
    ],
    image: './verticals/vertical-sscds.webp'
  },
  {
    id: 'community-outreach',
    num: '05',
    name: 'Hope Rural Oral Outreach & Free Camps',
    tagline: 'Community Health Mission across Uttar Pradesh',
    description: 'In partnership with public health bodies, Hope Dental organizes free screening camps, oral cancer prevention drives, and subsidized dental care for rural communities.',
    badge: 'COMMUNITY MISSION',
    highlights: [
      'Over 25,000+ rural patients screened in outreach camps',
      'Early detection tobacco cessation & oral cancer screenings',
      'Free distribution of oral hygiene kits & pediatric education',
      'Subsidized emergency care for economically vulnerable families'
    ],
    image: './verticals/vertical-skin.webp'
  }
];

export const CLINIC_BRANCHES_DATA: ClinicBranch[] = [
  {
    id: 'lucknow-flagship',
    branchNumber: '01',
    name: 'Hope Dental Hospital & Wellness Centre (Main Hospital)',
    badge: 'FLAGSHIP HOSPITAL',
    city: 'Lucknow',
    type: 'flagship',
    address: 'No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011',
    landmark: 'Near Bramha Dev Mandir / Hans Khera Crossing',
    phone: '+91 79052 87870',
    altPhone: '+91 79052 69559',
    timings: '10:00 AM – 8:00 PM',
    sundayTimings: '10:00 AM – 8:00 PM',
    establishedYear: 2016,
    specialties: ['Centre for Implantology', 'Biolase Laser Periodontics', 'All-on-4 Full Arch Rehab', 'TMJ & Splint Therapy', 'Microscopic RCT'],
    facilities: ['Surgical Operatory Suite', 'Digital 3D Diagnostics & RVG', 'Wheelchair Accessible Entrance & Exit', 'Class-B Vacuum Autoclaves', '24/7 Dental Emergency Triage'],
    doctorsCount: 14,
    mapQuery: 'Hope Dental Hospital and Wellness Center Sadrauna Para Lucknow',
    isNabhAccredited: true,
  },
  {
    id: 'lucknow-implant-wing',
    branchNumber: '02',
    name: 'Centre for Advanced Implantology & Guided Surgery (Wing A)',
    badge: 'SURGICAL SUITE',
    city: 'Lucknow',
    type: 'multispecialty',
    address: 'No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011',
    landmark: '1st Floor Surgical Block, Hope Dental Hospital',
    phone: '+91 79052 87870',
    altPhone: '+91 79052 69559',
    timings: '10:00 AM – 8:00 PM',
    sundayTimings: '10:00 AM – 8:00 PM',
    establishedYear: 2016,
    specialties: ['Nobel Biocare & Straumann Implants', 'Immediate Load (Teeth in 72 Hrs)', 'Sinus Lifts & Bone Grafting', 'Basal Implants'],
    facilities: ['3D CBCT Guided Surgery Suite', 'Piezo Bone Surgery', 'Cardiac & Vitals Monitoring Workstation', 'Recovery Lounge'],
    doctorsCount: 6,
    mapQuery: 'Hope Dental Hospital and Wellness Center Sadrauna Para Lucknow',
    isNabhAccredited: true,
  },
  {
    id: 'lucknow-laser-wing',
    branchNumber: '03',
    name: 'Biolase Laser Periodontics & Gum Wellness Suite (Wing B)',
    badge: 'LASER WING',
    city: 'Lucknow',
    type: 'multispecialty',
    address: 'No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011',
    landmark: 'Ground Floor Laser Pavilion, Hope Dental Hospital',
    phone: '+91 79052 87870',
    altPhone: '+91 79052 69559',
    timings: '10:00 AM – 8:00 PM',
    sundayTimings: '10:00 AM – 8:00 PM',
    establishedYear: 2017,
    specialties: ['Biolase Waterlase LANAP Gum Care', 'Bloodless Pyorrhea Treatment', 'Laser Gum Contouring', 'Diabetic Periodontal Protocols'],
    facilities: ['Biolase Waterlase iPlus 2780nm', 'Epic X Diode Lasers', 'Sterile Irrigation Delivery', 'Ultrasonic Scalers'],
    doctorsCount: 5,
    mapQuery: 'Hope Dental Hospital and Wellness Center Sadrauna Para Lucknow',
    isNabhAccredited: true,
  },
  {
    id: 'lucknow-endodontics-wing',
    branchNumber: '04',
    name: 'Microscopic Endodontics & Conservative Operatory (Wing C)',
    badge: 'ENDODONTIC WING',
    city: 'Lucknow',
    type: 'multispecialty',
    address: 'No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011',
    landmark: 'Main Clinical Floor, Hope Dental Hospital',
    phone: '+91 79052 87870',
    altPhone: '+91 79052 69559',
    timings: '10:00 AM – 8:00 PM',
    sundayTimings: '10:00 AM – 8:00 PM',
    establishedYear: 2018,
    specialties: ['Single-Sitting Painless RCT', 'Carl Zeiss Microscopic Root Canals', 'Rotary Biomechanical Preparation', 'Crown Restorations'],
    facilities: ['Carl Zeiss Operating Microscope', 'Apex Locators', 'Warm 3D Gutta-Percha Obturation', 'Digital RVG'],
    doctorsCount: 4,
    mapQuery: 'Hope Dental Hospital and Wellness Center Sadrauna Para Lucknow',
    isNabhAccredited: true,
  },
  {
    id: 'lucknow-tmj-wing',
    branchNumber: '05',
    name: 'TMJ Pain Relief, Splint Therapy & Physiotherapy Unit (Wing D)',
    badge: 'TMJ & WELLNESS',
    city: 'Lucknow',
    type: 'multispecialty',
    address: 'No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011',
    landmark: 'Wellness Floor, Hope Dental Hospital',
    phone: '+91 79052 87870',
    altPhone: '+91 79052 69559',
    timings: '10:00 AM – 8:00 PM',
    sundayTimings: '10:00 AM – 8:00 PM',
    establishedYear: 2019,
    specialties: ['TMJ Joint Pain & Clicking Relief', 'Splint / Night Guard Therapy', 'Jaw Physiotherapy & Exercises', 'Stress & Bite Management'],
    facilities: ['T-Scan Digital Bite Analysis', 'Electromyography (EMG)', 'TENS Muscle Stimulator', 'Low Level Laser Therapy'],
    doctorsCount: 4,
    mapQuery: 'Hope Dental Hospital and Wellness Center Sadrauna Para Lucknow',
    isNabhAccredited: true,
  },
  {
    id: 'lucknow-pediatric-wing',
    branchNumber: '06',
    name: 'Pediatric Dentistry & Child Smile Lounge (Wing E)',
    badge: 'PEDIATRIC LOUNGE',
    city: 'Lucknow',
    type: 'multispecialty',
    address: 'No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011',
    landmark: 'Family Wing, Hope Dental Hospital',
    phone: '+91 79052 87870',
    altPhone: '+91 79052 69559',
    timings: '10:00 AM – 8:00 PM',
    sundayTimings: '10:00 AM – 8:00 PM',
    establishedYear: 2020,
    specialties: ['Painless Child Cavity Fillings', 'Mouth Breathing Correction', 'Pit & Fissure Sealants', 'Fluoride Protection & Habit Breaking'],
    facilities: ['Child-Friendly Dental Chairs', 'No-Shot Laser Dentistry', 'Play Zone & Interactive Stories', 'Audio-Visual Distraction Goggles'],
    doctorsCount: 4,
    mapQuery: 'Hope Dental Hospital and Wellness Center Sadrauna Para Lucknow',
    isNabhAccredited: true,
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'up-dental-show-2026',
    title: 'Award of Appreciation – 8th UP Dental Show 2026',
    year: '2026',
    organization: 'Organizing Committee & Indian Dental Forum',
    location: 'Uttar Pradesh, India',
    highlight: 'Conferred upon Dr. Himangi Dubey for outstanding contributions as Co-Chairperson, Organizing Committee and Scientific Moderator.',
    badgeColor: 'bg-amber-500'
  },
  {
    id: 'google-justdial-5star',
    title: '5.0 Star Rated Dental Hospital (Google & Justdial)',
    year: '2022 – 2026',
    organization: 'Google Reviews (151+ Reviews) & Justdial (148+ Ratings)',
    location: 'Lucknow, Uttar Pradesh',
    highlight: 'Unanimous 5.0-star patient satisfaction rating for painless laser gum therapy, dental implants, and compassionate clinical care.',
    badgeColor: 'bg-emerald-600'
  },
  {
    id: 'doordarshan-up-expert',
    title: 'Featured Healthcare Expert – "सेहत आपकी" @DDUP',
    year: '2024 – 2026',
    organization: 'Doordarshan Uttar Pradesh & All India Radio',
    location: 'Lucknow, India',
    highlight: 'Invited television dental expert guiding public awareness on women’s hormonal health, pregnancy oral care, and tobacco cessation.',
    badgeColor: 'bg-[#f5900d]'
  },
  {
    id: 'kgmu-alumni-honor',
    title: 'Excellence in Periodontics & Oral Implantology',
    year: 'Continuous',
    organization: 'King George\'s Medical University (KGMU) Alumna',
    location: 'Lucknow, India',
    highlight: 'Advanced academic and clinical surgical mastery in computer-guided implants and minimally invasive laser therapies.',
    badgeColor: 'bg-indigo-600'
  },
  {
    id: 'jansewa-ratna-honor',
    title: 'Jansewa Ratna & Oral Health Awareness Champion',
    year: '2025',
    organization: 'Community Health & Tobacco Prevention Mission',
    location: 'Lucknow, Uttar Pradesh',
    highlight: 'Honored for spearheading rural tobacco cessation drives and community screenings for early oral health detection.',
    badgeColor: 'bg-purple-600'
  }
];

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'dental-implants',
    title: 'Dental Implants & Full Arch Rehabilitation',
    titleHi: 'डेंटल इम्प्लांट और ऑल-ऑन-4 पुनर्वास',
    titleTe: 'డెంటల్ ఇంప్లాంట్స్ & ఆల్-ఆన్-4 రీహాబిలిటేషన్',
    category: 'implants',
    icon: 'ShieldCheck',
    shortDesc: 'Permanent titanium/zirconia root replacements. Over 25,000+ successful implants placed including All-on-4, All-on-6 and Zygomatic.',
    shortDescHi: 'प्राकृतिक दांतों जैसे मजबूत और स्थायी इम्प्लांट्स। ऑल-ऑन-4, ऑल-ऑन-6 एवं जाइगोमैटिक इम्प्लांट्स में अंतरराष्ट्रीय विशेषज्ञता।',
    fullDesc: 'Hope Dental Hospital is celebrated across Uttar Pradesh as a premier center of excellence for dental implants. Led by Dr. Himangi Dubey (BDS, MDS - KGMU), we perform computer-guided flapless implant surgery, immediate loading (teeth in 72 hours), basal implants for severe bone loss, and laser-assisted bone regeneration. Supported by Nobel Biocare, Straumann, and Osstem dental systems.',
    duration: '45 mins per implant (Immediate load within 72 hrs)',
    painLevel: 'Zero / Painless',
    startingPriceInr: 25000,
    startingPriceUsd: 320,
    popular: true,
    technologyUsed: ['Planmeca 3D CBCT Guided Surgery', 'NobelGuide CAD/CAM Template', 'Piezosurgery Ultrasonic Unit', 'Osstell ISQ Stability Resonance'],
    benefits: [
      'Lifetime International Warranty on Nobel Biocare & Straumann implants',
      'Eat, speak and smile with 100% natural chewing force',
      'Prevents facial sagging and jawbone deterioration',
      'No trimming or harm to adjacent healthy natural teeth',
      'Teeth in 3 days with digital CAD/CAM permanent bridges'
    ],
    procedureSteps: [
      { step: 1, title: '3D CBCT Bone Density Scan', desc: 'Precise 3D cross-sectional diagnostic scan to evaluate bone volume, nerve pathways, and sinus height.' },
      { step: 2, title: 'Digital Guided Placement', desc: 'Titanium bio-compatible fixture placed into jawbone using 3D surgical guide with zero incisions when indicated.' },
      { step: 3, title: 'CAD/CAM Prosthetic Fabrication', desc: 'In-house dental lab designs custom zirconia or porcelain crown tailored to your facial aesthetics.' },
      { step: 4, title: 'Permanent Crown Fixation', desc: 'Final precision restoration torqued to perfection with seamless bite balancing.' }
    ],
    afterCareTips: [
      'Avoid drinking through a straw or spitting vigorously for the first 24 hours.',
      'Maintain soft diet for initial 3 to 5 days.',
      'Use prescribed chlorhexidine antibacterial rinse after meals.'
    ]
  },
  {
    id: 'cosmetic-veneers',
    title: 'Cosmetic Dentistry & Porcelain Veneers',
    titleHi: 'कॉस्मेटिक डेंटिस्ट्री और पोर्सिलेन विनियर',
    titleTe: 'కాస్మెటిక్ డెంటిస్ట్రీ & పింగాణీ వెనీర్స్',
    category: 'cosmetic',
    icon: 'Sparkles',
    shortDesc: 'Digital Smile Design (DSD), ultra-thin E.max porcelain laminates, Lumineers, and Hollywood smile makeovers with master ceramists.',
    shortDescHi: 'डिजिटल स्माइल डिज़ाइन और ई.मैक्स पोर्सिलेन विनियर द्वारा आपकी मुस्कान को बनाएं मनमोहक और चमकदार।',
    fullDesc: 'Guided by senior aesthetic specialists and Dr. M. S. Bhoj, our cosmetic team uses 3D Digital Smile Design to preview your new smile on screen before touching a tooth. We craft hand-layered E.max veneers as thin as 0.3mm to fix gaps, severe discoloration, chipping, and misalignment.',
    duration: '2 to 3 appointments over 5 to 7 days',
    painLevel: 'Zero / Painless',
    startingPriceInr: 12000,
    startingPriceUsd: 160,
    popular: true,
    technologyUsed: ['3D Digital Smile Design (DSD)', 'Ivoclar Vivadent E.max Press', 'Intraoral 3D Color Scanner', 'Laser Gum Contouring'],
    benefits: [
      'Stain-resistant porcelain that retains luster for 15+ years',
      'Customized shade matching matching your skin tone and lip curvature',
      'Minimal or zero-prep options preserving natural enamel',
      'In-house lab master technician reviews tooth shape at chairside'
    ],
    procedureSteps: [
      { step: 1, title: 'Digital Smile Simulation', desc: 'Facial aesthetic photography and 3D digital preview of your final smile transformation.' },
      { step: 2, title: 'Micro-Preparation & Mockup', desc: 'Minimal surface shaping under magnification and provisional trial smile placement.' },
      { step: 3, title: 'Master Ceramist Crafting', desc: 'Handcrafted layering of ultra-translucent E.max porcelain in our in-house lab.' },
      { step: 4, title: 'Adhesive Cementation', desc: 'Permanent adhesive bonding with light curing for lifelong strength.' }
    ],
    afterCareTips: [
      'Wear a nightguard if you have a habit of clenching or grinding teeth at night.',
      'Avoid biting down on hard objects like bottle caps, ice cubes, or nails.'
    ]
  },
  {
    id: 'orthodontics-invisalign',
    title: 'Invisalign & Clear Aligners (Diamond Provider)',
    titleHi: 'इनविज़िलाइन और पारदर्शी क्लीयर एलाइनर्स',
    titleTe: 'ఇన్విసలైన్ & క్లియర్ అలైన్ర్స్',
    category: 'orthodontics',
    icon: 'Smile',
    shortDesc: 'Discreet, removable clear aligners to straighten crooked teeth without metal wires. Certified orthodontic provider in Uttar Pradesh.',
    shortDescHi: 'बिना धातु के तारों के पारदर्शी एलाइनर्स से पाएं सीधी और खूबसूरत मुस्कान। किसी को पता भी नहीं चलेगा।',
    fullDesc: 'At Hope Dental Hospital, our certified orthodontic team has treated hundreds of patients with custom clear aligners. Using the iTero 3D intraoral scanner, we map out tooth movement down to fractions of a millimeter. We also offer SmartALIGN, Damon self-ligating braces, and lingual (invisible inside) braces.',
    duration: '6 to 14 months (depending on complexity)',
    painLevel: 'Mild',
    startingPriceInr: 65000,
    startingPriceUsd: 800,
    popular: true,
    technologyUsed: ['iTero Element 5D Scanner', 'ClinCheck 3D Treatment Video', 'SmartTrack Medical Polyurethane', 'Accelerated Orthodontics'],
    benefits: [
      'Virtually 100% invisible — smile with full confidence throughout treatment',
      'Removable for meals, brushing, and special occasions',
      'No painful cuts, sores, or broken wires like traditional braces',
      'View your full teeth movement video before starting treatment'
    ],
    procedureSteps: [
      { step: 1, title: 'iTero 5D Intraoral Scan', desc: '6000 frames/second digital scan without messy silicone impression trays.' },
      { step: 2, title: 'ClinCheck 3D Plan', desc: 'Senior Orthodontist customizes every stage of tooth movement on computer.' },
      { step: 3, title: 'Custom Aligner Set Delivery', desc: 'Receive sequence of custom medical-grade aligners to switch every 7 to 10 days.' },
      { step: 4, title: 'Vivera Retainers', desc: 'Final clear retainers to preserve your perfectly aligned smile for life.' }
    ],
    afterCareTips: [
      'Wear aligners for 20 to 22 hours per day for optimal progress.',
      'Clean aligners with lukewarm water and aligner crystals.'
    ]
  },
  {
    id: 'microscopic-rct',
    title: 'Microscopic Single-Visit Root Canal (RCT)',
    titleHi: 'माइक्रोस्कोपिक सिंगल सिटिंग रूट कैनाल',
    titleTe: 'మైక్రోస్కోపిక్ సింగిల్-విజిట్ రూట్ కెనాల్',
    category: 'endodontics',
    icon: 'Activity',
    shortDesc: 'Painless single-visit root canal performed under Carl Zeiss dental operating microscopes with 99.4% clinical success rate.',
    shortDescHi: 'कार्ल ज़ीस ऑपरेटिंग माइक्रोस्कोप और रोटरी फाइल्स द्वारा दर्द-रहित सिंगल विज़िट रूट कैनाल ट्रीटमेंट।',
    fullDesc: 'At Hope Dental Hospital, root canal treatments are performed exclusively by qualified MDS Endodontists. High-powered Carl Zeiss microscopes magnify root canal anatomy up to 25x, revealing hidden accessory canals that ordinary clinics miss. Completed in a single 45-minute painless appointment using computer-controlled rotary files and warm gutta-percha 3D obturation.',
    duration: '45 to 60 mins (Single Sitting)',
    painLevel: 'Zero / Painless',
    startingPriceInr: 4500,
    startingPriceUsd: 60,
    popular: true,
    technologyUsed: ['Carl Zeiss OPMI PROergo Microscopes', 'VDW Gold Reciprocating Motors', 'Apex Locators Raypex 6', 'Thermafil 3D Warm Obturation'],
    benefits: [
      'Save your natural tooth and eliminate severe toothache permanently',
      'Single sitting convenience — no repeat anesthetic injections or visits',
      '99.4% long-term success rate backed by endodontic specialists',
      'Digital rubber dam isolation prevents any bacterial contamination'
    ],
    procedureSteps: [
      { step: 1, title: 'Microscopic Canal Location', desc: 'Magnification illuminates all main and micro-accessory root canals.' },
      { step: 2, title: 'Rotary Biomechanical Cleansing', desc: 'Titanium flexible files cleanse bacteria and infection down to the root tip.' },
      { step: 3, title: 'Ultrasonic Disinfection', desc: 'Bio-inert solutions energized by ultrasound eliminate deep microbes.' },
      { step: 4, title: '3D Hermetic Sealing', desc: 'Canals sealed with biocompatible warm gutta-percha ready for zirconia crown.' }
    ],
    afterCareTips: [
      'Avoid chewing hard foods on the treated side until the permanent crown is placed.',
      'Mild soreness is normal for 24-48 hours and easily managed with prescribed analgesics.'
    ]
  },
  {
    id: 'laser-periodontics',
    title: 'Laser Gum Treatment & Periodontics (LANAP)',
    titleHi: 'लेज़र गम सर्जरी और पायरिया उपचार',
    titleTe: 'లేజర్ గమ్ ట్రీట్మెంట్ & పెరియోడాంటిక్స్',
    category: 'periodontics',
    icon: 'Zap',
    shortDesc: 'Non-surgical laser gum treatment using Biolase Waterlase to treat pyorrhea, bleeding gums, gum recession, and bad breath without scalpel.',
    shortDescHi: 'बिना चीर-फाड़ वाटरलेस लेज़र द्वारा मसूड़ों की सूजन, पायरिया और ब्लीडिंग का सुरक्षित और स्थायी इलाज।',
    fullDesc: 'Our periodontic division utilizes US-FDA cleared Biolase Waterlase iPlus and diode lasers for LANAP (Laser Assisted New Attachment Procedure). It sterilizes deep infected gum pockets, stimulates natural bone regeneration, removes dark gum pigmentation, and treats gummy smiles with zero stitches, zero bleeding, and instant recovery.',
    duration: '30 to 45 mins per quadrant',
    painLevel: 'Zero / Painless',
    startingPriceInr: 3500,
    startingPriceUsd: 50,
    technologyUsed: ['Biolase Waterlase iPlus 2780nm', 'Epic X Diode Soft Tissue Laser', 'Piezo Ultrasonic Scalers'],
    benefits: [
      'No scalpels, incisions, or sutures required',
      'Immediate relief from gum bleeding and chronic bad breath',
      'Promotes bone regeneration around loose mobile teeth',
      'Cosmetic pink gum depigmentation in a single 20-minute session'
    ],
    procedureSteps: [
      { step: 1, title: 'Laser Pocket Sterilization', desc: 'Selective laser energy destroys pathogens while leaving healthy tissue intact.' },
      { step: 2, title: 'Ultrasonic Calculus Debridement', desc: 'Subgingival calculus deposits removed thoroughly from root surfaces.' },
      { step: 3, title: 'Fibrin Clot Formation', desc: 'Laser establishes an antimicrobial seal allowing gums to reattach to root.' }
    ],
    afterCareTips: [
      'Use soft toothbrush and warm saltwater gargles for 3 days.',
      'Follow up for preventive checkup every 6 months.'
    ]
  },
  {
    id: 'maxillofacial-surgery',
    title: 'Oral & Maxillofacial Surgery & Wisdom Teeth',
    titleHi: 'ओरल एवं मैक्सिलोफेशियल सर्जरी व अकल दाढ़',
    titleTe: 'ఓరల్ & మాక్సిల్లోఫేషియల్ సర్జరీ',
    category: 'surgery',
    icon: 'Award',
    shortDesc: 'Headed by Dr. Dushyanth Paul. Painless surgical extraction of impacted wisdom teeth, corrective jaw (orthognathic) surgeries, and facial trauma.',
    shortDescHi: 'वरिष्ठ सर्जनों द्वारा अकल दाढ़ निकालना, जबड़े की सर्जरी और फेशियल ट्रॉमा का अस्पताल-ग्रेड ऑपरेशन।',
    fullDesc: 'Hope Dental Hospital houses full hospital-grade surgical suites with conscious sedation and general anesthesia support. We treat complex impacted third molars, jaw cysts, facial trauma fractures, cleft lip/palate, and orthognathic corrective jaw surgery to correct underbites or facial asymmetry.',
    duration: '20 to 40 mins (Wisdom Tooth) / Comprehensive for Jaw Surgeries',
    painLevel: 'Local Anesthesia',
    startingPriceInr: 5000,
    startingPriceUsd: 70,
    technologyUsed: ['Piezosurgery Bone Saw', 'Full Inpatient Operation Theatre', 'Anesthesia Monitoring Workstation'],
    benefits: [
      'Atraumatic extraction technique preserves surrounding jawbone',
      'Option for conscious sedation or general anesthesia for anxious patients',
      'Inpatient recovery rooms and post-op care team',
      'Rapid healing with PRF (Platelet-Rich Fibrin) membrane placement'
    ],
    procedureSteps: [
      { step: 1, title: '3D Digital Assessment', desc: 'CBCT verifies the exact nerve proximity and root curvature.' },
      { step: 2, title: 'Painless Local Anesthesia', desc: 'Targeted nerve block ensures total numbness throughout the surgery.' },
      { step: 3, title: 'Ultrasonic Piezo Extraction', desc: 'Tooth divided gently and removed with minimal pressure or trauma.' }
    ],
    afterCareTips: [
      'Bite firmly on gauze pad for 45 minutes after procedure.',
      'Apply ice pack to exterior cheek intermittently for 24 hours.'
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry & Child Smile Care',
    titleHi: 'बच्चों की दंत चिकित्सा (पीडियाट्रिक)',
    titleTe: 'పీడియాట్రిక్ డెంటిస్ట్రీ',
    category: 'pediatric',
    icon: 'Heart',
    shortDesc: 'Child-friendly environment with gentle pedodontists. Painless cavity treatments, fluoride varnish, pit & fissure sealants, and habit correction.',
    shortDescHi: 'बच्चों के लिए विशेष खुशनुमा माहौल, बिना दर्द के कैविटी भराव और दांतों की सुरक्षा।',
    fullDesc: 'Our dedicated pediatric dentists (Pedodontists) specialize in making children feel secure, comfortable, and excited about oral health. From painless laser cavity fillings, tooth-colored crowns, to interceptive orthodontics and nitrous oxide laughing gas sedation, we ensure your child grows up with a cavity-free smile.',
    duration: '20 to 30 mins',
    painLevel: 'Zero / Painless',
    startingPriceInr: 1500,
    startingPriceUsd: 25,
    technologyUsed: ['Nitrous Oxide (Laughing Gas) Sedation', 'Waterlase Laser Cavity Prep', 'Kids Play Area & VR Goggles'],
    benefits: [
      'Gentle child psychology approach creates zero dental fear',
      'Laser cavity treatment without vibration, noise, or injections',
      'Pit and fissure sealants prevent 80% of future tooth decay',
      'Thumb sucking and tongue thrusting habit-breaking appliances'
    ],
    procedureSteps: [
      { step: 1, title: 'Fun Gentle Examination', desc: 'Child explores clinic environment with interactive storytelling.' },
      { step: 2, title: 'Preventive Fluoride Coating', desc: 'Strengthens developing enamel against sugar acid attacks.' },
      { step: 3, title: 'Painless Restorations', desc: 'Tooth-colored biocompatible fillings completed comfortably.' }
    ],
    afterCareTips: [
      'Supervise brushing twice daily with age-appropriate fluoride toothpaste.',
      'Limit sticky sugary snacks and sodas.'
    ]
  },
  {
    id: 'tmj-neuromuscular',
    title: 'Neuromuscular Dentistry & TMJ Pain Relief',
    titleHi: 'टीएमजे जबड़ा दर्द एवं न्यूरोमस्कुलर उपचार',
    titleTe: 'న్యూరోమస్కులర్ డెంటిస్ట్రీ & టిఎమ్జె థెరపీ',
    category: 'tmj',
    icon: 'Compass',
    shortDesc: 'One of the dedicated TMJ centers in Uttar Pradesh. Diagnostic T-Scan III, EMG, and jaw tracking to cure jaw clicking, facial pain, and migraine headaches.',
    shortDescHi: 'जबड़े की चटकन, दर्द और पुराने सिरदर्द का आधुनिक टी-स्कैन एवं ईएमजी तकनीक द्वारा सटीक इलाज।',
    fullDesc: 'Chronic headaches, neck stiffness, jaw clicking, and teeth grinding (bruxism) often stem from TMJ (temporomandibular joint) disorders and bite imbalance. At Hope Dental Hospital, we use computerized T-Scan digital occlusal analysis, Electromyography (EMG), and TENS muscle relaxation therapy to restore proper jaw alignment and provide lasting relief.',
    duration: '45 to 60 mins per session',
    painLevel: 'Zero / Painless',
    startingPriceInr: 5000,
    startingPriceUsd: 70,
    technologyUsed: ['Tekscan T-Scan III Digital Occlusion', 'Biopak Jaw Tracking & EMG', 'K7 Evaluation System', 'Low Level Laser Therapy (LLLT)'],
    benefits: [
      'Eliminates chronic morning headaches and facial jaw stiffness',
      'Prevents teeth from chipping, wearing down, and cracking',
      'Restores balanced bite forces across all 32 teeth',
      'Non-invasive, drug-free therapeutic orthotics'
    ],
    procedureSteps: [
      { step: 1, title: 'Digital Bite Analysis (T-Scan)', desc: 'Patient bites on micro-sensor measuring dynamic force in milliseconds.' },
      { step: 2, title: 'Muscle Relaxation (TENS)', desc: 'Ultra-low frequency neurostimulation relieves muscle spasms.' },
      { step: 3, title: 'Custom Neuromuscular Orthotic', desc: 'Precision appliance repositions jaw into its optimal resting harmony.' }
    ],
    afterCareTips: [
      'Wear the therapeutic orthotic appliance as prescribed by the TMJ specialist.',
      'Avoid hard, chewy foods and prolonged gum chewing.'
    ]
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-himangi-dubey',
    name: 'Dr. Himangi Dubey',
    nameHi: 'डॉ. हिमांगी दुबे',
    qualification: 'BDS, MDS (Periodontology & Oral Implantology - KGMU Lucknow)',
    designation: 'Founder, Medical Director & Chief Dental Surgeon',
    role: 'Chief Periodontist & Oral Implantologist',
    roleHi: 'संस्थापक एवं मेडिकल डायरेक्टर — इम्प्लांट एवं लेज़र विशेषज्ञ',
    experienceYears: 15,
    rating: 5.0,
    reviewCount: 2840,
    image: './doctors/dr-shailaja-reddy.webp',
    primaryBranch: 'Hope Dental Hospital & Wellness Centre (Sadrauna, Lucknow)',
    department: 'Implantology, Periodontics & TMJ Wellness',
    bio: 'Founder & Medical Director of Hope Dental Hospital & Wellness Centre in Sadrauna, Para Road, Lucknow. Former Senior Resident at King George\'s Medical University (KGMU), Lucknow. Head of Department of Dentistry at Ajanta Hospital & IVF Centre. Prominent television health expert on Doordarshan UP (@DDUP) and All India Radio. Honored with the Award of Appreciation at the 8th UP Dental Show 2026. Renowned expert in dental implants, Biolase laser gum surgeries, TMJ night guard therapy, and tobacco cessation counselling.',
    accolades: [
      'Former Senior Resident, King George\'s Medical University (KGMU Lucknow)',
      'Award of Appreciation – 8th UP Dental Show 2026 (Co-Chairperson & Moderator)',
      'Head of Department of Dentistry, Ajanta Hospital & IVF Centre, Lucknow',
      'Featured Television Dental Panellist on Doordarshan UP (@DDUP) & All India Radio',
      '15+ Years Clinical Mastery in Dental Implants & Laser LANAP Gum Surgery'
    ],
    languages: ['English', 'Hindi', 'Urdu'],
    specialities: ['Full-Arch Dental Implants', 'Biolase Laser LANAP Gum Surgery', 'TMJ Splint & Night Guard Therapy', 'Bone Regeneration & Sinus Lifts', 'Tobacco Cessation Counselling']
  },
  {
    id: 'dr-m-s-bhoj',
    name: 'Dr. M. S. Bhoj',
    nameHi: 'डॉ. एम. एस. भोज',
    qualification: 'BDS, MDS (Prosthodontics & Oral Rehabilitation)',
    designation: 'Senior Medical Advisor & Emeritus Prosthodontist',
    role: 'Emeritus Consultant Prosthodontist',
    roleHi: 'सीनियर मेडिकल एडवाइज़र एवं प्रोस्थोडॉन्टिक्स प्रमुख',
    experienceYears: 42,
    rating: 5.0,
    reviewCount: 3120,
    image: './doctors/dr-partha-reddy.jpg',
    primaryBranch: 'Hope Dental Hospital & Wellness Centre (Sadrauna, Lucknow)',
    department: 'Prosthodontics & Full Mouth Rehabilitation',
    bio: 'Distinguished dental academic and master clinician with over 40 years of restorative mastery. Directs complex full mouth rehabilitation, precision-attachment dentures, and CAD/CAM zirconia prosthetics at Hope Dental Hospital in Lucknow.',
    accolades: [
      '40+ Years of Distinguished Clinical Dental Mastery',
      'Former Department Chair of Prosthodontics at Prestigious Universities',
      'Mentored over 500+ MDS Post-Graduates across India',
      'Pioneer in Precision Attachment & Hybrid Fixed Prosthetics'
    ],
    languages: ['English', 'Hindi', 'Urdu'],
    specialities: ['Full Mouth Aesthetic Rehabilitation', 'Precision Attachment Dentures', 'CAD/CAM Zirconia Crowns & Bridges', 'TMJ Occlusal Therapy']
  },
  {
    id: 'dr-prabhat-tiwari',
    name: 'Dr. Prabhat Tiwari',
    nameHi: 'डॉ. प्रभात तिवारी',
    qualification: 'BDS, MDS (Conservative Dentistry & Endodontics)',
    designation: 'Chief Endodontist & Microscopic RCT Specialist',
    role: 'Senior Consultant Endodontist',
    roleHi: 'सीनियर एंडोडॉन्टिस्ट — रूट कैनाल विशेषज्ञ',
    experienceYears: 18,
    rating: 5.0,
    reviewCount: 1980,
    image: './doctors/dr-prabhat.webp',
    primaryBranch: 'Hope Dental Hospital & Wellness Centre (Sadrauna, Lucknow)',
    department: 'Endodontics & Conservative Operatory',
    bio: 'Expert in Carl Zeiss dental operating microscope root canals, single-sitting endodontics, calcified canal negotiation, and broken instrument retrieval with unmatched precision at Hope Dental Hospital Lucknow.',
    accolades: ['Carl Zeiss Microscopy Certified Clinician', 'Over 12,000+ Root Canals Saved Painlessly'],
    languages: ['English', 'Hindi'],
    specialities: ['Microscopic Root Canal', 'Single-Visit Endodontics', 'Endodontic Retreatment', 'Internal Tooth Bleaching']
  },
  {
    id: 'dr-kavya-ravuri',
    name: 'Dr. Kavya Ravuri',
    nameHi: 'डॉ. काव्या रावुरी',
    qualification: 'BDS, MDS (Orthodontics & Dentofacial Orthopaedics)',
    designation: 'Senior Consultant Orthodontist',
    role: 'Clear Aligner & Braces Specialist',
    roleHi: 'सीनियर ऑर्थोडॉन्टिस्ट — एलाइनर स्पेशलिस्ट',
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 1640,
    image: './doctors/dr-kavya.webp',
    primaryBranch: 'Hope Dental Hospital & Wellness Centre (Sadrauna, Lucknow)',
    department: 'Orthodontics & Clear Aligners',
    bio: 'Certified clear aligner specialist. Expertise in treating complex adult and teen malocclusions with invisible aligners, self-ligating systems, and interceptive pediatric habit breaking at Hope Dental Hospital.',
    accolades: ['Certified Clear Aligner Provider', 'SmartALIGN Advisory Specialist'],
    languages: ['English', 'Hindi'],
    specialities: ['Invisible Clear Aligners', 'Damon System Braces', 'Interceptive Child Orthodontics', 'Lingual Invisible Braces']
  },
  {
    id: 'dr-dushyanth-paul',
    name: 'Dr. Dushyanth Paul',
    nameHi: 'डॉ. दुष्यंत पॉल',
    qualification: 'BDS, MDS (Oral & Maxillofacial Surgery)',
    designation: 'Senior Consultant Maxillofacial Surgeon',
    role: 'Chief Maxillofacial & Trauma Surgeon',
    roleHi: 'डायरेक्टर — ओरल एवं मैक्सिलोफेशियल सर्जरी',
    experienceYears: 22,
    rating: 5.0,
    reviewCount: 2150,
    image: './doctors/dr-dushyanth-paul.jpg',
    primaryBranch: 'Hope Dental Hospital & Wellness Centre (Sadrauna, Lucknow)',
    department: 'Oral & Maxillofacial Surgery',
    bio: 'Leads complex oral and maxillofacial surgeries, orthognathic corrective jaw surgery, facial trauma reconstruction, impacted wisdom tooth extractions, and emergency dental trauma at Hope Dental Hospital.',
    accolades: [
      'Fellow of International Association of Oral & Maxillofacial Surgeons',
      'Over 8,000+ Complex Surgical Extractions and Jaw Corrections'
    ],
    languages: ['English', 'Hindi'],
    specialities: ['Impacted Wisdom Teeth Surgery', 'Orthognathic Corrective Jaw Surgery', 'Facial Trauma Reconstruction', 'Maxillofacial Cysts & Biopsies']
  },
  {
    id: 'dr-khushboo',
    name: 'Dr. Khushboo',
    nameHi: 'डॉ. खुशबू',
    qualification: 'BDS, MDS (Periodontics & Laser Dentistry)',
    designation: 'Senior Periodontist & Laser Specialist',
    role: 'Consultant Laser Gum Specialist',
    roleHi: 'कंसल्टेंट लेज़र गम एवं पेरिओडोंटिस्ट',
    experienceYears: 14,
    rating: 4.9,
    reviewCount: 1220,
    image: './doctors/dr-khushboo.jpg',
    primaryBranch: 'Hope Dental Hospital & Wellness Centre (Sadrauna, Lucknow)',
    department: 'Periodontics & Laser Surgery',
    bio: 'Specialist in minimally invasive Waterlase laser gum surgery, LANAP, cosmetic gum depigmentation, and bone grafting around compromised teeth and dental implants.',
    accolades: ['Certified Biolase Laser Clinician', 'Member of Indian Society of Periodontology'],
    languages: ['English', 'Hindi'],
    specialities: ['Laser LANAP Gum Treatment', 'Cosmetic Gum Contouring', 'Bone Regeneration Grafting', 'Peri-implantitis Therapy']
  }
];

export const SMILE_TRANSFORMATIONS_DATA: SmileTransformation[] = [
  {
    id: 'case-1',
    title: 'Full Arch All-on-4 Dental Implants Rehabilitation',
    category: 'Dental Implants',
    patientAgeCity: '58 yrs, London (UK)',
    procedure: 'Nobel Biocare All-on-4 with Immediate CAD/CAM Zirconia Bridge',
    duration: '3 Days Total',
    doctorName: 'Dr. Himangi Dubey',
    beforeImage: './cases/ba-1.webp',
    afterImage: './cases/ba-2.webp',
    patientFeedback: '"I flew from the UK to Hope Dental Hospital in Lucknow after being quoted £32,000 for full mouth implants. Dr. Himangi Dubey gave me fixed teeth in 3 days with Nobel Biocare at a fraction of the UK cost. Life-changing and virtually painless experience!"'
  },
  {
    id: 'case-2',
    title: 'Hollywood Smile Makeover with 16 E.max Porcelain Veneers',
    category: 'Cosmetic Dentistry',
    patientAgeCity: '32 yrs, Dubai (UAE)',
    procedure: '3D Digital Smile Design + 16 Ultra-Thin E.max Veneers',
    duration: '5 Days Total',
    doctorName: 'Dr. M. S. Bhoj',
    beforeImage: './cases/ba-3.webp',
    afterImage: './cases/ba-4.webp',
    patientFeedback: '"I had severe fluoride staining and chipped front teeth. Dr. Bhoj and his team customized my veneers right down to the shade and translucency. My confidence has skyrocketed!"'
  },
  {
    id: 'case-3',
    title: 'Invisalign Clear Aligners Non-Extraction Smile Correction',
    category: 'Orthodontics',
    patientAgeCity: '24 yrs, Lucknow',
    procedure: 'Invisalign Comprehensive with SmartTrack Aligners',
    duration: '9 Months',
    doctorName: 'Dr. Kavya Ravuri',
    beforeImage: './cases/ba-1.webp',
    afterImage: './cases/ba-3.webp',
    patientFeedback: '"Nobody at my office even realized I was wearing aligners. My severe crowding was completely fixed without extracting any teeth!"'
  },
  {
    id: 'case-4',
    title: 'Severe Bone Loss Rebuilt with Laser Periodontics & Implants',
    category: 'Advanced Surgery',
    patientAgeCity: '64 yrs, Sydney (Australia)',
    procedure: 'Biolase Laser LANAP + Computer Guided Nobel Implants',
    duration: '4 Days',
    doctorName: 'Dr. Himangi Dubey & Dr. Dushyanth Paul',
    beforeImage: './cases/ba-2.webp',
    afterImage: './cases/ba-4.webp',
    patientFeedback: '"Other dentists told me I had severe bone loss from pyorrhea and could never have implants. Dr. Himangi used laser gum regeneration and guided implants to give me solid fixed teeth."'
  }
];

export const TREATMENT_COST_DATA: TreatmentCostItem[] = [
  {
    id: 'single-implant-nobel',
    treatmentName: 'Single Tooth Dental Implant (Nobel Biocare / Straumann)',
    category: 'implants',
    variant: 'Premium Swiss/Swedish Titanium + Zirconia Crown',
    brandOrMaterial: 'Nobel Biocare Active / Straumann SLA',
    priceInr: 38000,
    priceUsd: 450,
    priceGbp: 360,
    priceEur: 420,
    priceAed: 1650,
    usAvgUsd: 2800,
    ukAvgGbp: 2200,
    durationDays: 3,
    visitsCount: 2,
    warranty: 'Lifetime Global International Warranty',
    description: 'Gold-standard dental implant fixture with custom CAD/CAM abutment and monolithic zirconia crown.'
  },
  {
    id: 'all-on-4-full-arch',
    treatmentName: 'All-on-4 Full Arch Fixed Teeth (Per Jaw)',
    category: 'fullmouth',
    variant: '4 Premium Implants + Full Fixed 12-Tooth Hybrid Zirconia Bridge',
    brandOrMaterial: 'Nobel Biocare All-on-4 System',
    priceInr: 220000,
    priceUsd: 2650,
    priceGbp: 2100,
    priceEur: 2450,
    priceAed: 9700,
    usAvgUsd: 15000,
    ukAvgGbp: 12000,
    durationDays: 4,
    visitsCount: 2,
    warranty: '15 Years Warranty on Bridge + Lifetime on Implants',
    description: 'Immediate fixed teeth in 72 hours for completely edentulous arch. Includes 3D CBCT, temporary bridge, and final precision bridge.'
  },
  {
    id: 'all-on-6-full-arch',
    treatmentName: 'All-on-6 Full Arch Fixed Teeth (Per Jaw)',
    category: 'fullmouth',
    variant: '6 Implants + 14-Tooth High Strength Zirconia Bridge',
    brandOrMaterial: 'Straumann / Nobel Biocare 6 Fixtures',
    priceInr: 280000,
    priceUsd: 3350,
    priceGbp: 2650,
    priceEur: 3100,
    priceAed: 12300,
    usAvgUsd: 22000,
    ukAvgGbp: 16000,
    durationDays: 4,
    visitsCount: 2,
    warranty: 'Lifetime Warranty on Implants',
    description: 'Maximum masticatory stability with 6 load-distributing implants for upper or lower jaw.'
  },
  {
    id: 'porcelain-veneer-emax',
    treatmentName: 'Hand-Layered E.max Porcelain Veneer (Per Tooth)',
    category: 'cosmetic',
    variant: '0.3mm Ultra-Thin High Translucency Laminate',
    brandOrMaterial: 'Ivoclar Vivadent IPS E.max Press',
    priceInr: 12500,
    priceUsd: 150,
    priceGbp: 120,
    priceEur: 140,
    priceAed: 550,
    usAvgUsd: 1200,
    ukAvgGbp: 850,
    durationDays: 5,
    visitsCount: 2,
    warranty: '10 Years Warranty against chipping/discoloration',
    description: 'Custom handcrafted cosmetic veneer by master ceramists at our in-house lab.'
  },
  {
    id: 'invisalign-comprehensive',
    treatmentName: 'Invisalign Comprehensive Clear Aligners',
    category: 'ortho',
    variant: 'Unlimited Aligners Set + 3 Sets of Vivera Retainers',
    brandOrMaterial: 'Invisalign Align Technology (USA)',
    priceInr: 180000,
    priceUsd: 2150,
    priceGbp: 1700,
    priceEur: 1980,
    priceAed: 7900,
    usAvgUsd: 6500,
    ukAvgGbp: 4500,
    durationDays: 365,
    visitsCount: 6,
    warranty: '5 Years Aligner Refinement Guarantee',
    description: 'Full orthodontic correction supervised by Diamond Invisalign Orthodontists.'
  },
  {
    id: 'microscopic-rct-single',
    treatmentName: 'Carl Zeiss Microscopic Single-Visit RCT',
    category: 'endodontics',
    variant: 'Magnification Endodontics + Biocompatible Warm Seal',
    brandOrMaterial: 'Carl Zeiss OPMI + VDW Rotary',
    priceInr: 5500,
    priceUsd: 65,
    priceGbp: 52,
    priceEur: 60,
    priceAed: 240,
    usAvgUsd: 1100,
    ukAvgGbp: 650,
    durationDays: 1,
    visitsCount: 1,
    warranty: 'Clinical Success Guarantee with MDS Endodontist',
    description: 'Single-sitting painless root canal saving severely infected or broken tooth.'
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'tobacco-cessation-how-to-quit-dr-himangi-dubey-lucknow',
    title: 'तंबाकू कैसे छोड़ें | How to Quit Tobacco by Dr. Himangi Dubey',
    titleHi: 'तंबाकू कैसे छोड़ें: डॉ. हिमांगी दुबे द्वारा ओरल वेलनेस एवं नशा मुक्ति गाइड',
    summary: 'Clinical guidance on overcoming tobacco dependency, reversing early oral submucous fibrosis (OSMF), and protecting your gums from pre-cancerous lesions.',
    summaryHi: 'तंबाकू और गुटखा छोड़ने के वैज्ञानिक तरीके और मुंह के छालों व पायरिया से बचाव।',
    content: 'Tobacco consumption and areca nut chewing are among the primary causes of oral cancer and severe periodontal deterioration across Uttar Pradesh. In this clinical guide and accompanying video from our YouTube channel (@drhimangidubey_hopedental), Dr. Himangi Dubey outlines behavioral modification techniques, nicotine replacement therapy (NRT), and in-clinic mucosal healing protocols practiced at Hope Dental Hospital, Sadrauna, Lucknow.',
    category: 'Oral Health Awareness',
    readTime: '4 min read',
    authorDoctor: 'Dr. Himangi Dubey',
    authorRole: 'Medical Director, Hope Dental Hospital',
    date: '15 Sept 2026',
    tags: ['Tobacco Cessation', 'Dr. Himangi Dubey', 'Oral Cancer Prevention', 'YouTube Video'],
    imageUrl: './cases/ba-1.webp',
    views: 4520,
    likesCount: 380
  },
  {
    id: 'blog-2',
    slug: 'tmj-disorder-jaw-clicking-night-guard-splint-therapy',
    title: 'Jaw Pain or Clicking? It May Be TMJ Disorder: Night Guard & Splint Therapy',
    titleHi: 'जबड़े में दर्द या चटकन की आवाज? जानिए टीएमजे विकार और नाइट गार्ड थेरेपी',
    summary: 'Why jaw clicking, chronic morning headaches, and teeth grinding require customized splint therapy, jaw physiotherapy, and stress management.',
    summaryHi: 'जबड़े के दर्द और दांत पीसने की आदत का फिजियोथेरेपी और स्प्लिंट द्वारा आधुनिक इलाज।',
    content: 'Many patients in Lucknow visit doctors for chronic migraines and neck pain without realizing that the root cause lies in their temporomandibular joint (TMJ). At Hope Dental Hospital & Wellness Centre, our TMJ therapy unit provides digital occlusal evaluation, customized night guard splints, low-level laser therapy, and targeted jaw physiotherapy exercises to decompress the joint and provide permanent relief.',
    category: 'TMJ & Wellness',
    readTime: '5 min read',
    authorDoctor: 'Dr. Himangi Dubey',
    authorRole: 'Chief Specialist, Hope Dental Hospital',
    date: '10 Sept 2026',
    tags: ['TMJ Disorder', 'Jaw Pain', 'Night Guard', 'Splint Therapy'],
    imageUrl: './cases/ba-2.webp',
    views: 5820,
    likesCount: 462
  },
  {
    id: 'blog-3',
    slug: 'women-hormonal-changes-oral-health-ddup-feature',
    title: 'महिलाओं के हार्मोनल बदलाव और मौखिक स्वास्थ्य: डॉ. हिमांगी दुबे की डीडी यूपी विशेषज्ञ चर्चा',
    titleHi: 'महिला स्वास्थ्य एवं ओरल हाइजीन: डीडी यूपी पर डॉ. हिमांगी दुबे की विशेष चर्चा',
    summary: 'Insights from Dr. Himangi Dubey’s special expert broadcast on Doordarshan Uttar Pradesh ("सेहत आपकी" @DDUP) regarding pregnancy gingivitis and hormonal balance.',
    summaryHi: 'गर्भावस्था, प्यूबर्टी और मेनोपॉज के दौरान मसूड़ों की सूजन और पायरिया से कैसे बचें।',
    content: 'During puberty, pregnancy, and menopause, fluctuating estrogen and progesterone levels amplify the gums’ sensitivity to plaque bacteria. Featured on Doordarshan Uttar Pradesh’s flagship medical show "सेहत आपकी", Dr. Himangi Dubey explains the critical preventive steps every woman should take to prevent pregnancy tumors, gum bleeding, and bone loss.',
    category: 'Women\'s Oral Health',
    readTime: '6 min read',
    authorDoctor: 'Dr. Himangi Dubey',
    authorRole: 'Founder & Medical Director',
    date: '05 Sept 2026',
    tags: ['Doordarshan UP', 'Pregnancy Dental Care', 'Hormonal Health', 'Dr. Himangi Dubey'],
    imageUrl: './cases/ba-3.webp',
    views: 6420,
    likesCount: 520
  },
  {
    id: 'blog-4',
    slug: 'mouth-breathing-destroying-child-facial-growth-lucknow',
    title: 'Is Mouth Breathing Affecting Your Child\'s Facial Development?',
    titleHi: 'क्या आपका बच्चा मुंह से सांस लेता है? जानिए चेहरे के विकास पर असर',
    summary: 'How chronic mouth breathing, enlarged adenoids, and tongue thrusting alter jaw growth, causing crowded teeth and long face syndrome in children.',
    summaryHi: 'बच्चों में मुंह से सांस लेने की आदत और दांतों के टेढ़ेपन का समय रहते उपचार।',
    content: 'Children who breathe through their mouth rather than their nose during sleep develop narrowed upper dental arches, recessed chins, and severe dental crowding. At Hope Dental Hospital\'s Pediatric Lounge in Lucknow, we perform early myofunctional evaluation, habit-breaking oral screens, and airway assessments to ensure natural, healthy facial development.',
    category: 'Pediatric Dentistry',
    readTime: '4 min read',
    authorDoctor: 'Dr. Kavya Ravuri',
    authorRole: 'Senior Consultant Orthodontist',
    date: '28 Aug 2026',
    tags: ['Mouth Breathing', 'Child Dental Care', 'Pediatric Orthodontics', 'YouTube Shorts'],
    imageUrl: './cases/ba-4.webp',
    views: 3750,
    likesCount: 285
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    patientName: 'Mohd. Tariq',
    country: 'India',
    patientCity: 'Para Road, Lucknow',
    rating: 5,
    text: '"The best dental hospital in Lucknow hard working doctor and excellent services. Dr. Himangi Dubey is extremely polite and skilled. My dental implant procedure was completely painless and smooth."',
    date: '18 Sept 2026',
    verifiedSource: 'Google',
    treatmentReceived: 'Dental Implants & Zirconia Crown',
    doctorConsulted: 'Dr. Himangi Dubey',
    branch: 'Sadrauna / Para Road Hospital'
  },
  {
    id: 'rev-2',
    patientName: 'Ritu Verma',
    country: 'India',
    patientCity: 'Hans Khera, Lucknow',
    rating: 5,
    text: '"Very nice behavior and experience of management doctors and staff. Treatment is very gentle and the hospital is equipped with latest laser machines and very clean hygiene standards."',
    date: '12 Sept 2026',
    verifiedSource: 'Google',
    treatmentReceived: 'Biolase Laser Gum Treatment',
    doctorConsulted: 'Dr. Himangi Dubey',
    branch: 'Sadrauna / Para Road Hospital'
  },
  {
    id: 'rev-3',
    patientName: 'Sunil Kumar Gupta',
    country: 'India',
    patientCity: 'Sadrauna, Lucknow',
    rating: 5,
    text: '"Nice dental clinic with good facilities and service. Wheelchair accessible ramp at entrance made it very comfortable for my elderly father. 5 stars to the entire team!"',
    date: '05 Sept 2026',
    verifiedSource: 'Google',
    treatmentReceived: 'Full Mouth Prosthetic Rehabilitation',
    doctorConsulted: 'Dr. M. S. Bhoj',
    branch: 'Sadrauna / Para Road Hospital'
  },
  {
    id: 'rev-4',
    patientName: 'Pooja Srivastava',
    country: 'India',
    patientCity: 'Mohan Road, Lucknow',
    rating: 5,
    text: '"Visited for unbearable toothache. Dr. Prabhat performed single-sitting root canal under microscope. Completed in 45 minutes with zero pain. Very reasonable rates on Justdial and fully transparent."',
    date: '28 Aug 2026',
    verifiedSource: 'Justdial',
    treatmentReceived: 'Microscopic Single-Sitting RCT',
    doctorConsulted: 'Dr. Prabhat Tiwari',
    branch: 'Sadrauna / Para Road Hospital'
  },
  {
    id: 'rev-5',
    patientName: 'Deepak Mishra',
    country: 'India',
    patientCity: 'Lucknow',
    rating: 5,
    text: '"Suffering from severe jaw pain and clicking for months. Dr. Himangi provided a custom night guard splint and jaw physiotherapy exercises. Within 2 weeks, my jaw headache vanished. Highly recommended!"',
    date: '15 Aug 2026',
    verifiedSource: 'Facebook',
    treatmentReceived: 'TMJ Splint & Night Guard Therapy',
    doctorConsulted: 'Dr. Himangi Dubey',
    branch: 'Sadrauna / Para Road Hospital'
  }
];

export const EMERGENCY_GUIDES: EmergencyGuide[] = [
  {
    id: 'knocked-out-tooth',
    title: 'Knocked-Out Tooth (Avulsion)',
    titleHi: 'दांत टूट कर गिर जाना',
    icon: 'AlertTriangle',
    symptom: 'Tooth completely knocked out of socket due to sports injury, fall, or vehicular impact.',
    urgency: 'Immediate (within 1 hour)',
    quickSteps: [
      'Locate the tooth immediately. Handle it ONLY by the crown (white top), NEVER touch the root surface.',
      'If dirty, rinse very gently with cold milk or saline for 5 seconds. Do not scrub or use soap.',
      'Place tooth in a small cup of cold fresh milk or inside patient\'s cheek pouch if conscious.',
      'Rush to Hope Dental Hospital 24/7 Emergency Helpline (+91 94520 89898) within 60 minutes for replantation.'
    ]
  },
  {
    id: 'severe-toothache-swelling',
    title: 'Severe Throbbing Toothache & Facial Swelling',
    titleHi: 'गंभीर असहनीय दांत दर्द व चेहरे पर सूजन',
    icon: 'Flame',
    symptom: 'Unbearable pulsating pain radiating to ear/temple, gum boil, facial swelling, or fever.',
    urgency: 'Urgent (same day)',
    quickSteps: [
      'Rinse mouth thoroughly with lukewarm saltwater to flush trapped debris.',
      'Do NOT place an aspirin tablet or raw clove directly against the gum tissue as it causes chemical burns.',
      'Apply an ice pack to the outside of the cheek for 15 minutes at a time to reduce swelling.',
      'Call Hope Dental Helpline (+91 79052 87870) for same-day emergency pulp extirpation and pain relief.'
    ]
  },
  {
    id: 'broken-orthodontic-wire',
    title: 'Broken Orthodontic Wire or Poking Bracket',
    titleHi: 'ब्रेसेस का तार टूटना या चुभना',
    icon: 'ShieldAlert',
    symptom: 'Sharp wire poking into inner cheek, tongue, or loose bracket sliding along the archwire.',
    urgency: 'Prompt (within 24h)',
    quickSteps: [
      'Use the eraser end of a clean pencil to gently push the poking wire flat against the tooth.',
      'Roll a small pea-sized ball of orthodontic relief wax and press it firmly over the sharp end.',
      'Rinse with warm saltwater if cheek ulcer has formed.',
      'Visit Hope Dental Hospital in Sadrauna, Lucknow for prompt clipping and adjustment.'
    ]
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'HDH-APT-2026-8841',
    patientName: 'Ananya Sharma',
    patientPhone: '7905112345',
    patientEmail: 'ananya.s@gmail.com',
    patientAge: 29,
    gender: 'Female',
    clinicBranchId: 'lucknow-flagship',
    doctorId: 'dr-himangi-dubey',
    treatmentId: 'cosmetic-veneers',
    consultationType: 'in-person',
    date: '2026-09-28',
    timeSlot: '11:00 AM – 11:30 AM',
    country: 'India',
    isNewPatient: true,
    notes: 'Inquiring for 3D Digital Smile Design and laser cosmetic gum contouring.',
    status: 'Confirmed',
    createdAt: '2026-09-25T10:15:00Z',
    paymentStatus: 'Paid',
    amount: 1000
  },
  {
    id: 'HDH-APT-2026-8842',
    patientName: 'Robert Vance',
    patientPhone: '7891234567',
    patientEmail: 'rvance@healthmail.com',
    patientAge: 62,
    gender: 'Male',
    clinicBranchId: 'lucknow-flagship',
    doctorId: 'dr-himangi-dubey',
    treatmentId: 'dental-implants',
    consultationType: 'virtual',
    date: '2026-09-29',
    timeSlot: '04:00 PM – 04:30 PM',
    country: 'United Kingdom',
    isNewPatient: true,
    notes: 'Virtual video consultation for upper jaw All-on-4 implants. OPG X-ray attached.',
    xRayAttached: true,
    status: 'Confirmed',
    createdAt: '2026-09-25T14:30:00Z',
    paymentStatus: 'Paid',
    amount: 1500
  }
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'INV-HDH-9901',
    invoiceNumber: 'HDH/2026/09/9901',
    appointmentId: 'HDH-APT-2026-8841',
    patientName: 'Ananya Sharma',
    patientPhone: '7905112345',
    patientAge: 29,
    patientGender: 'Female',
    patientAddress: 'Sadrauna, Para Road, Lucknow, Uttar Pradesh',
    date: '2026-09-28',
    doctorName: 'Dr. Himangi Dubey',
    branchName: 'Hope Dental Hospital & Wellness Centre (Main Hospital)',
    items: [
      {
        id: 'item-1',
        description: 'Comprehensive Specialist Consultation & 3D Diagnostic Assessment',
        hsnSac: '999312',
        qty: 1,
        unitPrice: 1000,
        total: 1000
      }
    ],
    subtotal: 1000,
    taxGst: 0,
    discount: 0,
    totalAmount: 1000,
    paymentMode: 'UPI / QR',
    paymentStatus: 'Paid',
    paymentDate: '2026-09-25',
    notes: 'Advance booking confirmation fee. Credited towards final treatment plan.'
  }
];
