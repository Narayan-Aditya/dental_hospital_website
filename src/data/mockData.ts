import { Treatment, Doctor, Invoice, BlogPost, Facility, Review, EmergencyGuide, Appointment } from '../types';

export const HOSPITAL_INFO = {
  name: "Hope Dental Hospital & Wellness Centre",
  nameHi: "होप डेंटल हॉस्पिटल एवं वेलनेस सेंटर",
  tagline: "Advanced Painless Dental Care & Complete Oral Wellness",
  taglineHi: "उन्नत दर्द रहित दंत चिकित्सा एवं संपूर्ण मुख स्वास्थ्य",
  address: "Sadrauna, Near Main Market, Mohan Road, Lucknow, Uttar Pradesh 226009",
  addressHi: "सदरौना, मेन मार्केट के पास, मोहन रोड, लखनऊ, उत्तर प्रदेश २२६००९",
  phone: "+91 94500 00000",
  altPhone: "+91 522 3500000",
  emergencyPhone: "+91 98390 11111",
  whatsapp: "+91 94500 00000",
  email: "info@hopedentalhospital.com",
  timings: "Monday – Saturday: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 2:00 PM",
  timingsHi: "सोमवार - शनिवार: सुबह ९:०० से रात ८:०० | रविवार: सुबह १०:०० से दोपहर २:००",
  emergencyAvailability: "24/7 On-Call Emergency Dentist Available",
  gstin: "09AAACH7892K1Z8",
  registrationNo: "UP-LKO-MED-DEN-2022-8419",
  socialLinks: {
    youtube: "https://www.youtube.com/channel/UCqYbypATAKwiOyFhRAr4moA",
    facebook: "https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/",
    justdial: "https://www.justdial.com/Lucknow/Hope-Dental-Hospital-Wellness-Centre-Sadrauna/0522PX522-X522-220609022113-U6X9_BZDET",
    google: "https://share.google/9FWrwrNmPHz4a9B1r",
  },
  stats: {
    patientsTreated: "16,500+",
    googleRating: "4.9",
    googleReviewCount: "480+",
    justdialRating: "4.8",
    experienceYears: "14+",
    implantsPlaced: "3,200+",
  }
};

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'rct-single-sitting',
    title: 'Single-Sitting Rotary Root Canal (RCT)',
    titleHi: 'सिंगल-सिटिंग रोटरी रूट कैनाल (RCT)',
    category: 'rct',
    icon: 'Sparkles',
    shortDesc: 'State-of-the-art painless computerised nerve treatment to save infected or deeply decayed teeth in under 45 minutes.',
    shortDescHi: 'संक्रमित दांत को केवल ४५ मिनट में दर्द रहित कंप्यूटरकृत तकनीक से बचाने का उपचार।',
    fullDesc: 'At Hope Dental Hospital, we utilize modern German Rotary Endodontic motors, digital apex locators, and warm vertical obturation. This ensures maximum precision, zero discomfort, and 99.4% long-term tooth preservation without needing multiple sittings.',
    duration: '35 - 50 mins (Single Visit)',
    painLevel: 'Zero / Painless',
    startingPrice: 2499,
    popular: true,
    benefits: [
      'Preserve your natural tooth permanently',
      'Painless computerised local numbing technique',
      'Completed in a single visit with 3D digital imaging',
      'Prevents spread of infection to jawbone'
    ],
    procedureSteps: [
      { step: 1, title: 'Digital OPG X-ray & 3D Diagnosis', desc: 'Precision scan to measure canal length and locate hidden roots.' },
      { step: 2, title: 'Painless Local Numbing', desc: 'Gentle computerised anesthetic to ensure zero sensation.' },
      { step: 3, title: 'Rotary Cleaning & Disinfection', desc: 'Microscopic rotary files remove infection within minutes.' },
      { step: 4, title: 'Bio-Ceramic 3D Sealing', desc: 'Hermetic root seal to prevent any future bacterial leakage.' }
    ],
    imageBefore: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    afterCareTips: [
      'Avoid chewing hard foods on the treated side for 24 hours',
      'Place a permanent Zirconia crown within 1-2 weeks for maximum structural strength',
      'Maintain regular brushing and flossing'
    ]
  },
  {
    id: 'dental-implants',
    title: 'Permanent Titanium & Zirconia Dental Implants',
    titleHi: 'स्थायी डेंटल इम्प्लांट्स (फिक्स्ड दांत)',
    category: 'implants',
    icon: 'ShieldCheck',
    shortDesc: 'Lifetime fixed teeth replacement that looks, feels, and chews exactly like your natural original teeth.',
    shortDescHi: 'जीवनभर चलने वाले फिक्स्ड दांत जो बिल्कुल आपके असली दांतों की तरह काम करते हैं।',
    fullDesc: 'Replace single missing teeth or get full-mouth permanent teeth with world-leading Nobel Biocare & Straumann implants. Guided 3D keyhole surgery ensures swift healing with minimal downtime.',
    duration: '45 mins per implant',
    painLevel: 'Zero / Painless',
    startingPrice: 18999,
    popular: true,
    benefits: [
      'Lifetime warranty with Swiss/US certified implants',
      'Prevents facial sagging and jawbone loss',
      'No trimming needed on adjacent healthy teeth',
      'Eat solid apples, nuts, and your favorite foods easily'
    ],
    procedureSteps: [
      { step: 1, title: '3D CBCT Bone Density Mapping', desc: 'Virtual computer planning for millimetre-accurate placement.' },
      { step: 2, title: 'Keyhole Implant Fixture Placement', desc: 'Minimally invasive insertion into the jawbone.' },
      { step: 3, title: 'Osseointegration Period', desc: 'Implant fuses naturally with the bone structure.' },
      { step: 4, title: 'Custom Zirconia Crown Delivery', desc: 'CAD-CAM precision milled tooth attached securely.' }
    ],
    afterCareTips: [
      'Soft diet for the first 3 days',
      'Use prescribed antiseptic chlorhexidine mouthwash',
      'Attend 6-month checkup for preventive maintenance'
    ]
  },
  {
    id: 'clear-aligners-braces',
    title: 'Invisible Clear Aligners & Modern Braces',
    titleHi: 'अदृश्य क्लियर एलाइनर्स और आधुनिक ब्रेसेस',
    category: 'ortho',
    icon: 'Smile',
    shortDesc: 'Straighten crooked, crowded, or gapped teeth discreetly without visible metal wires or food restrictions.',
    shortDescHi: 'बिना तार के पारदर्शी एलाइनर्स से अपने दांतों को सीधा और सुंदर बनाएं।',
    fullDesc: 'Get an AI-guided customized smile alignment plan. Removable transparent aligners allow you to brush easily, enjoy your favorite meals, and achieve the confident smile you deserve.',
    duration: '6 to 14 months total duration',
    painLevel: 'Mild',
    startingPrice: 34999,
    popular: true,
    benefits: [
      '100% transparent and virtually invisible to others',
      'Removable for meals, photos, and brushing',
      '3D Smile Simulation: See your final result before starting',
      'No emergency wire pokes or ulcers'
    ],
    procedureSteps: [
      { step: 1, title: '3D Intraoral Digital Scan', desc: '5-minute digital impression without messy putty.' },
      { step: 2, title: '3D Virtual Video Simulation', desc: 'Preview your week-by-week tooth movement.' },
      { step: 3, title: 'Custom Aligners Delivery', desc: 'Receive your precision-engineered clear trays.' },
      { step: 4, title: 'Bi-monthly Progress Review', desc: 'Simple check-ins or virtual monitoring.' }
    ],
    afterCareTips: [
      'Wear aligners 20-22 hours a day',
      'Clean aligners daily with lukewarm water and soft brush',
      'Wear night retainers post-treatment to maintain perfect alignment'
    ]
  },
  {
    id: 'cosmetic-veneers-smile-makeover',
    title: 'Cosmetic Smile Makeover & E-Max Veneers',
    titleHi: 'कॉस्मेटिक स्माइल मेकओवर एवं विनियर',
    category: 'cosmetic',
    icon: 'Sparkles',
    shortDesc: 'Ultra-thin porcelain veneers, composite bonding, and Hollywood smile styling designed for your facial contours.',
    shortDescHi: 'दांतों के रंग, आकार और चमक को सुधारने के लिए हॉलीवुड स्माइल डिजाइन।',
    fullDesc: 'Transform discolored, chipped, worn, or uneven teeth into a sparkling, natural-looking celebrity smile tailored to your lip line and skin tone.',
    duration: '2 - 3 Visits',
    painLevel: 'Zero / Painless',
    startingPrice: 6999,
    popular: false,
    benefits: [
      'Stain-resistant high-lustre aesthetic porcelain',
      'Corrects chipped edges, fluorosis stains, and minor gaps',
      'Boosts personal and professional confidence',
      'Customized shade matching with natural translucency'
    ],
    procedureSteps: [
      { step: 1, title: 'Facial Aesthetic Analysis', desc: 'Digital smile design to balance symmetry.' },
      { step: 2, title: 'Minimal Enamel Preparation', desc: 'Ultra-conservative 0.3mm micro-polishing.' },
      { step: 3, title: 'CAD/CAM Ceramic Crafting', desc: 'Precision ceramic fabrication by master dental lab.' },
      { step: 4, title: 'Permanent Laser Bonding', desc: 'High-strength adhesive bonding for lifelong hold.' }
    ],
    afterCareTips: [
      'Do not bite into hard items like bottle caps or ice cubes',
      'Use a non-abrasive fluoride toothpaste'
    ]
  },
  {
    id: 'teeth-whitening-scaling',
    title: 'Laser Teeth Whitening & Ultrasonic Scaling',
    titleHi: 'लेजर टीथ व्हाइटनिंग एवं स्केलिंग (सफाई)',
    category: 'general',
    icon: 'Zap',
    shortDesc: 'Remove stubborn tea/coffee/tobacco stains, tartar, and brighten your smile up to 8 shades lighter in 45 minutes.',
    shortDescHi: 'दांतों की गहरी सफाई और लेजर से दांतों को सफेद व चमकदार बनाएं।',
    fullDesc: 'Medical ultrasonic scaling gently dislodges plaque and calculus without scratching the enamel, followed by cold blue laser whitening for instant radiance.',
    duration: '45 mins',
    painLevel: 'Zero / Painless',
    startingPrice: 1200,
    popular: true,
    benefits: [
      'Eliminates bad breath (halitosis) and bleeding gums',
      'Painless ultrasonic vibrations that protect enamel',
      'Instant whitening visible right after treatment',
      'Protects gums from periodontitis and tooth loosening'
    ],
    procedureSteps: [
      { step: 1, title: 'Plaque & Tartar Assessment', desc: 'Identify subgingival tartar and stains.' },
      { step: 2, title: 'Ultrasonic Piezo Scaling', desc: 'Gentle water-cooled micro-vibrations.' },
      { step: 3, title: 'Air-Flow Polishing', desc: 'Micro-powder spray to remove fine stains.' },
      { step: 4, title: 'Laser Activation Gel (Optional)', desc: 'Hydrogen peroxide gel activated with cold LED light.' }
    ],
    afterCareTips: [
      'Avoid colored beverages (curry, turmeric, coffee) for 48 hours ("White Diet")',
      'Rinse with warm water after every meal'
    ]
  },
  {
    id: 'wisdom-tooth-surgery',
    title: 'Painless Wisdom Tooth & Oral Surgery',
    titleHi: 'दर्द रहित विस्डम टूथ (अक्ल दाढ़) सर्जरी',
    category: 'surgery',
    icon: 'Activity',
    shortDesc: 'Safe, traumatic-free extraction of impacted or painful wisdom teeth with rapid recovery protocols.',
    shortDescHi: 'फंसी हुई अक्ल दाढ़ को बिना दर्द और कम समय में सुरक्षित निकालना।',
    fullDesc: 'Expert oral surgeons remove horizontal, angular, or deep-impacted third molars with localized computer numbing and stitchless or dissolving sutures.',
    duration: '30 - 45 mins',
    painLevel: 'Local Anesthesia',
    startingPrice: 2999,
    popular: false,
    benefits: [
      'Relieves intense ear, jaw, and throat pain immediately',
      'Protects adjacent molar teeth from cavity formation',
      'PRP / PRF healing membrane for rapid gum closure',
      'Expert post-op guidance and 24/7 doctor assistance'
    ],
    procedureSteps: [
      { step: 1, title: 'Digital X-ray Nerve Location', desc: 'Assess inferior alveolar nerve proximity.' },
      { step: 2, title: 'Profound Local Numbing', desc: 'Zero discomfort during the procedure.' },
      { step: 3, title: 'Sectional Tooth Division', desc: 'Safe micro-division without bone trauma.' },
      { step: 4, title: 'Collagen Plug & Suturing', desc: 'Promotes rapid clotting and clot stabilization.' }
    ],
    afterCareTips: [
      'Bite firmly on the sterile gauze pack for 45 minutes',
      'Apply cold ice pack on cheek intermittently for the first 12 hours',
      'Do not spit, suck with a straw, or smoke for 48 hours'
    ]
  },
  {
    id: 'pediatric-kids-dentistry',
    title: 'Pediatric (Kids) Dentistry & Cavity Prevention',
    titleHi: 'बच्चों की दंत चिकित्सा एवं कैविटी सुरक्षा',
    category: 'pediatric',
    icon: 'Heart',
    shortDesc: 'Child-friendly, fear-free gentle dental care including painless fillings, fluoride coatings, and habit corrections.',
    shortDescHi: 'बच्चों के लिए विशेष मित्रतापूर्ण और डर-मुक्त दंत उपचार।',
    fullDesc: 'Our dedicated pediatric operatory features colorful visual themes, gentle cartoon distraction techniques, and preventive pit-and-fissure sealants.',
    duration: '30 mins',
    painLevel: 'Zero / Painless',
    startingPrice: 799,
    popular: false,
    benefits: [
      '100% fear-free pediatric specialized dental team',
      'Fluoride varnish protects teeth from sweets and junk food',
      'Space maintainers ensure permanent teeth erupt straight',
      'Thumb-sucking and mouth-breathing habit interceptors'
    ],
    procedureSteps: [
      { step: 1, title: 'Playful Acclimatization', desc: 'Show-Tell-Do technique to build trust.' },
      { step: 2, title: 'Gentle Digital Examination', desc: 'Detect early micro-cavities.' },
      { step: 3, title: 'Fluoride Shield or Tooth Mousse', desc: 'Remineralizes early enamel spots.' },
      { step: 4, title: 'Reward & Bravery Certificate', desc: 'Encouraging healthy habits with fun badges.' }
    ],
    afterCareTips: [
      'Assist children with twice-daily brushing until age 8',
      'Limit sticky candies and sugary bedtime drinks'
    ]
  },
  {
    id: 'crowns-zirconia-bridges',
    title: 'CAD/CAM Zirconia Crowns & Fixed Bridges',
    titleHi: 'CAD/CAM जिरकोनिया क्राउन और फिक्स्ड ब्रिज',
    category: 'rct',
    icon: 'Award',
    shortDesc: 'Unbreakable German metal-free Zirconia and ceramic caps backed with up to 15 years replacement warranty.',
    shortDescHi: 'मजबूत और प्राकृतिक दिखने वाली जर्मन जिरकोनिया कैप्स (१५ वर्ष वारंटी)।',
    fullDesc: 'Custom milled using 5-axis computer robotic milling for a microscopic edge fit that prevents food lodgement, gum irritation, and black gum lines.',
    duration: '2 short visits (3 days turnaround)',
    painLevel: 'Zero / Painless',
    startingPrice: 3999,
    popular: true,
    benefits: [
      '10 to 15 Years Written Replacement Warranty Card',
      'Metal-free: No black margin lines over gums',
      '100% biocompatible and virtually unbreakable',
      'Exact color shade blending with your surrounding teeth'
    ],
    procedureSteps: [
      { step: 1, title: 'Tooth Preparation & Scanning', desc: 'Precision digital 3D impression.' },
      { step: 2, title: 'Robotic CAD/CAM Milling', desc: 'Automated fabrication from solid Zirconia block.' },
      { step: 3, title: 'Shade & Bite Verification', desc: 'Trial fit for natural chewing comfort.' },
      { step: 4, title: 'Resin Adhesive Cementation', desc: 'Permanent chemical bonding.' }
    ],
    afterCareTips: [
      'Floss between crowned teeth regularly',
      'Avoid opening bottle caps or breaking hard nutshells'
    ]
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-amit-verma',
    name: 'Dr. Amit Verma',
    nameHi: 'डॉ. अमित वर्मा',
    qualification: 'BDS, MDS (Oral & Maxillofacial Surgery & Implantology), FICOI (USA)',
    role: 'Chief Dental Surgeon & Head of Implantology',
    roleHi: 'मुख्य दंत शल्य चिकित्सक एवं इम्प्लांट विशेषज्ञ',
    experienceYears: 14,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    availability: 'Mon - Sat: 9:30 AM - 2:00 PM & 5:00 PM - 8:00 PM',
    bio: 'Renowned implant surgeon with over 3,200 successful dental implants. Specializes in Immediate Loading Implants, All-on-4 full arch rehabilitation, and painless bone grafting.',
    languages: ['Hindi', 'English', 'Awadhi'],
    specialities: ['Dental Implants', 'Full Mouth Rehabilitation', 'Wisdom Tooth Surgery', 'Laser Surgery']
  },
  {
    id: 'dr-neha-sharma',
    name: 'Dr. Neha Sharma',
    nameHi: 'डॉ. नेहा शर्मा',
    qualification: 'BDS, MDS (Conservative Dentistry & Endodontics)',
    role: 'Senior Micro-Endodontist & RCT Specialist',
    roleHi: 'वरिष्ठ माइक्रो-एंडोडोंटिस्ट एवं आरसीटी विशेषज्ञ',
    experienceYears: 10,
    rating: 4.9,
    reviewCount: 260,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    availability: 'Mon - Sat: 10:00 AM - 4:00 PM',
    bio: 'Expert in rotary single-sitting root canals and aesthetic restorative dentistry. Has treated over 8,000 RCT cases with near 99.5% pain-free success rate.',
    languages: ['Hindi', 'English'],
    specialities: ['Single Sitting RCT', 'Re-RCT & Periapical Surgeries', 'Cosmetic Bonding', 'Teeth Whitening']
  },
  {
    id: 'dr-rajesh-tripathi',
    name: 'Dr. Rajesh Tripathi',
    nameHi: 'डॉ. राजेश त्रिपाठी',
    qualification: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics), Certified Clear Aligner Provider',
    role: 'Senior Orthodontist & Smile Architect',
    roleHi: 'वरिष्ठ ऑर्थोडोंटिस्ट एवं क्लियर एलाइनर विशेषज्ञ',
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 195,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    availability: 'Tue, Thu, Sat: 3:00 PM - 7:30 PM',
    bio: 'Specialist in correcting irregular teeth, gaps, forward-thrust teeth, and jaw alignment using invisible aligners and Damon self-ligating braces.',
    languages: ['Hindi', 'English'],
    specialities: ['Invisible Aligners', 'Ceramic Braces', 'Jaw Orthopedics', 'Retainers & Habit Breaking']
  },
  {
    id: 'dr-pooja-singh',
    name: 'Dr. Pooja Singh',
    nameHi: 'डॉ. पूजा सिंह',
    qualification: 'BDS, MDS (Pediatric & Preventive Dentistry)',
    role: 'Pediatric Dentist & Preventive Oral Health Specialist',
    roleHi: 'बाल दंत रोग विशेषज्ञ (पीडियाट्रिक डेंटिस्ट)',
    experienceYears: 8,
    rating: 4.9,
    reviewCount: 180,
    image: 'https://images.unsplash.com/photo-1594824813501-4838e2ddb7c2?auto=format&fit=crop&w=600&q=80',
    availability: 'Mon, Wed, Fri, Sun: 10:00 AM - 2:00 PM',
    bio: 'Loves treating infants, children, and teens with friendly communication, pain-free pulpectomy, preventive sealants, and milk tooth preservation.',
    languages: ['Hindi', 'English'],
    specialities: ['Kids Dental Care', 'Fluoride Varnishing', 'Space Maintainers', 'Tongue-tie Release']
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'HDH-2026-8942',
    patientName: 'Virendra Kumar',
    patientPhone: '9839123456',
    patientEmail: 'virendra.k@gmail.com',
    patientAge: 42,
    gender: 'Male',
    doctorId: 'dr-amit-verma',
    treatmentId: 'dental-implants',
    date: '2026-09-24',
    timeSlot: '11:00 AM - 11:30 AM',
    isNewPatient: false,
    notes: 'Follow-up for lower right molar implant fixture review.',
    xRayAttached: true,
    status: 'Confirmed',
    createdAt: '2026-09-23T10:15:00Z',
    paymentStatus: 'Paid',
    amount: 18999
  },
  {
    id: 'HDH-2026-8943',
    patientName: 'Sunita Mishra',
    patientPhone: '9451876543',
    patientEmail: 'sunita.mishra@yahoo.com',
    patientAge: 35,
    gender: 'Female',
    doctorId: 'dr-neha-sharma',
    treatmentId: 'rct-single-sitting',
    date: '2026-09-24',
    timeSlot: '03:30 PM - 04:00 PM',
    isNewPatient: true,
    notes: 'Severe sharp pain on upper left tooth while drinking cold water.',
    xRayAttached: false,
    status: 'Confirmed',
    createdAt: '2026-09-23T14:30:00Z',
    paymentStatus: 'Pending',
    amount: 2499
  },
  {
    id: 'HDH-2026-8944',
    patientName: 'Aarav Gupta',
    patientPhone: '8765432109',
    patientEmail: 'rahul.gupta.aarav@gmail.com',
    patientAge: 11,
    gender: 'Male',
    doctorId: 'dr-pooja-singh',
    treatmentId: 'pediatric-kids-dentistry',
    date: '2026-09-25',
    timeSlot: '10:30 AM - 11:00 AM',
    isNewPatient: true,
    notes: 'Milk tooth cavity check and fluoride protective shield.',
    xRayAttached: false,
    status: 'Confirmed',
    createdAt: '2026-09-23T16:00:00Z',
    paymentStatus: 'Paid',
    amount: 799
  }
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'INV-001',
    invoiceNumber: 'HDH-INV-2026-0421',
    appointmentId: 'HDH-2026-8942',
    patientName: 'Virendra Kumar',
    patientPhone: '9839123456',
    patientAge: 42,
    patientGender: 'Male',
    patientAddress: 'Sadrauna, Mohan Road, Lucknow, UP',
    date: '2026-09-23',
    doctorName: 'Dr. Amit Verma (MDS Implantologist)',
    items: [
      { id: '1', description: 'Specialist Consultation & 3D Digital Scan', hsnSac: '999312', qty: 1, unitPrice: 500, total: 500 },
      { id: '2', description: 'Nobel Biocare Titanium Implant Fixture (Lower Molar)', hsnSac: '999312', qty: 1, unitPrice: 18000, total: 18000 },
      { id: '3', description: 'Digital OPG Post-Op X-Ray & Sterilization Protocol', hsnSac: '999312', qty: 1, unitPrice: 500, total: 500 }
    ],
    subtotal: 19000,
    taxGst: 0,
    discount: 500,
    totalAmount: 18500,
    paymentMode: 'UPI / QR',
    paymentStatus: 'Paid',
    paymentDate: '2026-09-23',
    qrCodeData: 'upi://pay?pa=hopedental@sbi&pn=HopeDentalHospital&am=18500&tr=HDH-INV-2026-0421',
    notes: 'Post-op medication kit provided. Next crown measurement visit scheduled after 8 weeks.'
  },
  {
    id: 'INV-002',
    invoiceNumber: 'HDH-INV-2026-0398',
    appointmentId: 'HDH-2026-8812',
    patientName: 'Priyanka Saxena',
    patientPhone: '9415667788',
    patientAge: 28,
    patientGender: 'Female',
    patientAddress: 'Alambagh, Lucknow, UP',
    date: '2026-09-21',
    doctorName: 'Dr. Neha Sharma (MDS Endodontist)',
    items: [
      { id: '1', description: 'OPD Consultation & Diagnostic Pulp Vitality Test', hsnSac: '999312', qty: 1, unitPrice: 400, total: 400 },
      { id: '2', description: 'Single-Sitting Rotary Root Canal Treatment (RCT)', hsnSac: '999312', qty: 1, unitPrice: 2499, total: 2499 },
      { id: '3', description: 'CAD/CAM Multi-Layered Zirconia Crown (15 Yr Warranty)', hsnSac: '999312', qty: 1, unitPrice: 4500, total: 4500 }
    ],
    subtotal: 7399,
    taxGst: 0,
    discount: 399,
    totalAmount: 7000,
    paymentMode: 'Credit/Debit Card',
    paymentStatus: 'Paid',
    paymentDate: '2026-09-21',
    qrCodeData: 'upi://pay?pa=hopedental@sbi&pn=HopeDentalHospital&am=7000&tr=HDH-INV-2026-0398',
    notes: 'Warranty certificate code: ZIR-LKO-2026-9081 issued.'
  },
  {
    id: 'INV-003',
    invoiceNumber: 'HDH-INV-2026-0512',
    appointmentId: 'HDH-2026-8919',
    patientName: 'Rameshwar Dayal',
    patientPhone: '9935112233',
    patientAge: 64,
    patientGender: 'Male',
    patientAddress: 'Rajajipuram, Lucknow, UP',
    date: '2026-09-22',
    doctorName: 'Dr. Amit Verma (MDS Surgeon)',
    items: [
      { id: '1', description: 'Senior Citizen Complete Oral Health Evaluation', hsnSac: '999312', qty: 1, unitPrice: 300, total: 300 },
      { id: '2', description: 'Ultrasonic Scaling & Deep Periodontal Curettage', hsnSac: '999312', qty: 1, unitPrice: 1200, total: 1200 },
      { id: '3', description: 'Lucitone Flexible Partial Denture (3 Teeth)', hsnSac: '999312', qty: 1, unitPrice: 3500, total: 3500 }
    ],
    subtotal: 5000,
    taxGst: 0,
    discount: 500,
    totalAmount: 4500,
    paymentMode: 'Cash at Counter',
    paymentStatus: 'Paid',
    paymentDate: '2026-09-22',
    qrCodeData: 'upi://pay?pa=hopedental@sbi&pn=HopeDentalHospital&am=4500&tr=HDH-INV-2026-0512',
    notes: 'Senior citizen wellness package discount applied.'
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'b1',
    slug: 'single-sitting-rct-myths-vs-facts',
    title: 'Single-Sitting Root Canal: Myths vs Clinical Facts Explained by Experts',
    titleHi: 'सिंगल-सिटिंग रूट कैनाल: भ्रम बनाम सच, विशेषज्ञों द्वारा विश्लेषण',
    summary: 'Worried that a root canal is painful? Learn how modern German rotary technology and computer numbing complete the procedure in just one 45-minute visit.',
    summaryHi: 'क्या आप रूट कैनाल के दर्द से डरते हैं? जानिए कैसे आधुनिक जर्मन रोटरी तकनीक से सिर्फ एक बार में दर्द रहित इलाज संभव है।',
    content: `For decades, patients feared Root Canal Treatment (RCT) thinking it required 3 to 4 painful sittings with long needles. At Hope Dental Hospital & Wellness Centre in Sadrauna, Lucknow, we have completely transformed this experience with advanced single-sitting rotary endodontics.

### How Does Single-Sitting Rotary RCT Work?
1. **High-Precision Digital Apex Locators:** We accurately measure the exact depth of the root canal down to a fraction of a millimetre without guesswork.
2. **Flexible Nickel-Titanium (NiTi) Rotary Files:** These ultra-flexible instruments clean the narrow, curved root channels smoothly in minutes.
3. **Computer-Controlled Numbing:** Ensures the tooth and surrounding area remain 100% numb throughout the procedure.
4. **Hermetic Bio-Ceramic Seal:** The root is sealed with biocompatible material that prevents any future reinfection.

### Why You Should Never Delay an RCT
Leaving a decayed tooth untreated allows oral bacteria to travel deep into your jawbone, forming painful abscesses, swelling, and systemic infections. Saving your natural tooth preserves your bite strength, natural smile aesthetics, and saves you from complex future procedures.

### Post-RCT Care Guidelines
- Avoid biting very hard foods (like sugarcane or ice) until the permanent Zirconia crown is cemented.
- Floss normally between teeth; a treated tooth behaves just like a healthy natural tooth.
- Visit your dentist every 6 months for routine cleaning and checkups.`,
    category: 'Root Canal & Surgery',
    readTime: '4 min read',
    authorDoctor: 'Dr. Neha Sharma',
    authorRole: 'Senior Endodontist (MDS)',
    date: 'Sep 18, 2026',
    tags: ['RCT', 'Painless Dentistry', 'Toothache', 'Oral Health'],
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    views: 1420,
    likesCount: 98
  },
  {
    id: 'b2',
    slug: 'dental-implants-vs-bridges-which-is-better',
    title: 'Dental Implants vs Traditional Bridges: Why Implants Are the Gold Standard',
    titleHi: 'डेंटल इम्प्लांट्स बनाम ब्रिज: कौन सा विकल्प आपके लिए सबसे बेहतर है?',
    summary: 'Comparing long-term durability, bone preservation, and aesthetic smile restoration between fixed dental implants and dental bridges.',
    summaryHi: 'दांत निकलने के बाद फिक्स्ड दांत लगवाने के लिए इम्प्लांट और ब्रिज में अंतर और फायदे।',
    content: `Losing a tooth due to injury or deep decay can significantly impact your chewing ability and cause the surrounding facial muscles to sag prematurely. When restoring missing teeth, two primary options exist: Dental Implants and Dental Bridges.

### 1. What is a Dental Implant?
A dental implant is an artificial titanium root surgically placed into the jawbone. Over 8 to 12 weeks, the bone fuses with the titanium surface (osseointegration), creating an unshakable foundation for a lifelike Zirconia crown.

### 2. The Critical Difference: Bone Preservation
When a tooth is lost, the underlying bone begins to resorb (shrink) over time. 
- **Dental Bridges** only sit on top of the gums and do not stimulate the jawbone. Additionally, healthy adjacent teeth must be cut down to anchor the bridge.
- **Dental Implants** stimulate the bone during chewing, preserving facial volume and jaw contour for a lifetime.

### 3. Cost vs Long-Term Value
While the initial investment in a dental implant is slightly higher, implants last 25+ years or a lifetime with proper oral hygiene. Bridges typically need replacement every 7 to 10 years, making implants far more cost-effective in the long run.`,
    category: 'Dental Implants',
    readTime: '5 min read',
    authorDoctor: 'Dr. Amit Verma',
    authorRole: 'Chief Implant Surgeon (MDS, FICOI)',
    date: 'Sep 12, 2026',
    tags: ['Implants', 'Missing Tooth', 'Smile Restoration', 'Oral Surgery'],
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    views: 2150,
    likesCount: 164
  },
  {
    id: 'b3',
    slug: 'clear-aligners-for-adults-guide',
    title: 'Invisible Clear Aligners for Adults: Straighten Teeth Without Metal Wires',
    titleHi: 'वयस्कों के लिए क्लियर एलाइनर्स: बिना तार के दांत सीधे करने की पूरी जानकारी',
    summary: 'Discover how modern 3D clear aligners offer a comfortable, removable, and completely invisible alternative to traditional braces for professionals and students.',
    summaryHi: 'जानिए कैसे पारदर्शी एलाइनर्स से बिना किसी झिझक के दांतों को सीधा किया जा सकता है।',
    content: `Many working professionals and college students in Lucknow hesitate to get traditional metal braces due to aesthetic concerns, workplace presentations, and food restrictions. Invisible Clear Aligners have revolutionized orthodontics, providing a discreet, modern way to align your teeth.

### Why Choose Clear Aligners?
- **Virtually Invisible:** Made from medical-grade transparent polymer that is unnoticeable even in close-up conversations.
- **Removable:** Take them out during meals, weddings, parties, or for thorough brushing and flossing.
- **No Food Restrictions:** Eat popcorn, apples, and your favorite foods without worrying about bracket breakage.
- **Fewer Clinic Visits:** Digital treatment plans mean check-ins can happen once every 6 to 8 weeks.

### How the Journey Unfolds at Hope Dental Hospital
We begin with a high-definition 3D intraoral scan of your teeth. Our specialized ortho software designs a step-by-step 3D video showing how your teeth will move over time. Once you approve the simulated smile, your custom aligners are 3D-printed with laser precision.`,
    category: 'Orthodontics & Braces',
    readTime: '4 min read',
    authorDoctor: 'Dr. Rajesh Tripathi',
    authorRole: 'Senior Orthodontist (MDS)',
    date: 'Sep 05, 2026',
    tags: ['Aligners', 'Straight Teeth', 'Braces', 'Smile Design'],
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    views: 1890,
    likesCount: 142
  },
  {
    id: 'b4',
    slug: 'kids-first-dental-visit-guide',
    title: 'Your Child’s First Dental Visit: A Fear-Free Guide for Parents',
    titleHi: 'बच्चों का पहला डेंटल चेकअप: माता-पिता के लिए भय-मुक्त मार्गदर्शन',
    summary: 'Tips from pediatric specialists on when to schedule your child’s first checkup, how to prevent early milk tooth cavities, and creating positive dental habits.',
    summaryHi: 'बच्चों के दांतों में कीड़े लगने से कैसे बचाएं और उन्हें डेंटिस्ट के पास खुशी-खुशी कैसे लाएं।',
    content: `The Indian Dental Association (IDA) recommends that a child should visit a dentist by their first birthday or when their first tooth emerges. Early visits establish positive associations and detect early developmental patterns.

### Preventing "Nursing Bottle Caries"
Letting infants sleep with milk bottles or sweetened juices allows sugars to pool around their upper front teeth, causing rapid tooth decay known as Early Childhood Caries. Wipe your baby's gums with a clean damp cloth after feeding and transition to a sippy cup around 12 months.

### The Power of Pit & Fissure Sealants
Children's permanent molars have deep microscopic grooves where food gets trapped easily. Applying a painless clear protective resin sealant creates a smooth barrier that prevents up to 85% of school-age cavities!`,
    category: 'Pediatric Dentistry',
    readTime: '3 min read',
    authorDoctor: 'Dr. Pooja Singh',
    authorRole: 'Pediatric Specialist (MDS)',
    date: 'Aug 29, 2026',
    tags: ['Kids Dental', 'Cavity Prevention', 'Fluoride', 'Pediatric'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    views: 1100,
    likesCount: 88
  },
  {
    id: 'b5',
    slug: 'bleeding-gums-causes-and-remedies',
    title: 'Why Do Your Gums Bleed While Brushing? Signs of Periodontal Disease',
    titleHi: 'ब्रश करते समय मसूड़ों से खून क्यों आता है? पायरिया के लक्षण व रोकथाम',
    summary: 'Bleeding gums are not normal! Understand the difference between gingivitis and periodontitis, and how ultrasonic scaling restores pink healthy gums.',
    summaryHi: 'मसूड़ों से खून आना सामान्य नहीं है। जानिए पायरिया के शुरुआती लक्षण और आधुनिक स्केलिंग के लाभ।',
    content: `Many people ignore blood on their toothbrush, assuming it is due to brushing too hard. In over 90% of cases, bleeding gums are an early sign of Gingivitis caused by bacterial plaque buildup along the gumline.

### Why Tooth Enamel Does Not Weaken During Scaling
A common myth in North India is that scaling (dental cleaning) causes teeth to become loose or damages enamel. In truth:
- Tartar and calculus calcify and harbor destructive bacteria that eat away supporting jawbone.
- Ultrasonic scaling uses high-frequency micro-vibrations with water cooling to safely wash away hardened calculus without scratching the enamel.
- Cleaning removes the bacterial load, allowing swollen red gums to heal and attach firmly back to the tooth!`,
    category: 'Gum Care & Hygiene',
    readTime: '4 min read',
    authorDoctor: 'Dr. Amit Verma',
    authorRole: 'Chief Dental Surgeon',
    date: 'Aug 19, 2026',
    tags: ['Gum Care', 'Bleeding Gums', 'Scaling', 'Bad Breath'],
    imageUrl: 'https://images.unsplash.com/photo-1594824813501-4838e2ddb7c2?auto=format&fit=crop&w=800&q=80',
    views: 1650,
    likesCount: 115
  },
  {
    id: 'b6',
    slug: 'teeth-whitening-secrets-safe-procedures',
    title: 'In-Clinic Laser Teeth Whitening vs Home Kits: What Really Works?',
    titleHi: 'लेजर टीथ व्हाइटनिंग बनाम घरेलू नुस्खे: सुरक्षित और चमकदार मुस्कान का राज़',
    summary: 'Evaluating the safety and longevity of in-clinic cold-light laser bleaching vs abrasive home remedies like baking soda and charcoal powders.',
    summaryHi: 'दांतों को सुरक्षित तरीके से सफेद करने के वैज्ञानिक तरीके और हानिकारक घरेलू नुस्खों से बचाव।',
    content: `Bright, pearly white teeth create an instant positive impression. However, viral social media trends like scrubbing teeth with lemon juice or abrasive charcoal powders strip away your protective outer enamel, exposing the yellow dentin layer underneath and worsening sensitivity.

### Why Professional Laser Whitening is Safe
In-office laser whitening uses pH-balanced medical bleaching agents paired with cold LED light. A protective gingival barrier is applied over the gums so that only the tooth surfaces are treated. In a single 45-minute appointment, teeth become 6 to 8 shades whiter without harming enamel or tooth roots.`,
    category: 'Cosmetic Dentistry',
    readTime: '3 min read',
    authorDoctor: 'Dr. Neha Sharma',
    authorRole: 'Senior Endodontist (MDS)',
    date: 'Aug 10, 2026',
    tags: ['Teeth Whitening', 'Smile Makeover', 'Aesthetics', 'Oral Hygiene'],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    views: 2400,
    likesCount: 210
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'f1',
    title: 'Class-B 4-Tier Sterilization Autoclave',
    titleHi: 'क्लास-बी ४-स्तरीय स्टरलाइजेशन ऑटोक्लेव',
    desc: '100% infection-free clinical environment adhering to European hospital hygiene standards with individual sterilized surgical pouches.',
    icon: 'Shield',
    badge: '100% Sterile Protocol',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'f2',
    title: 'Digital 3D CBCT & Low-Dose OPG Imaging',
    titleHi: 'डिजिटल ३डी सीबीसीटी एवं कम रेडिएशन ओपीजी',
    desc: 'Ultra-low radiation panoramic X-rays providing instant crystal-clear cross-sectional views of root canals, bone density, and nerves.',
    icon: 'Cpu',
    badge: '90% Less Radiation',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'f3',
    title: 'Intraoral 3D Digital Color Scanner',
    titleHi: 'इंट्राओरल ३डी डिजिटल कलर स्कैनर',
    desc: 'Say goodbye to gagging on sticky impression clay. High-speed optical scanner captures your teeth in high-definition 3D in 3 minutes.',
    icon: 'Camera',
    badge: 'No Messy Impressions',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'f4',
    title: 'Computerized Painless Local Anesthesia (The Wand)',
    titleHi: 'कंप्यूटरीकृत दर्द रहित सुन्न करने की तकनीक',
    desc: 'Microprocessor-controlled gentle numbing that eliminates stinging needle sensations for completely anxiety-free treatments.',
    icon: 'Zap',
    badge: 'Painless Injection',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'f5',
    title: 'Dedicated Pediatric Kids Play Operatory',
    titleHi: 'बच्चों के लिए विशेष प्ले व डेंटल रूम',
    desc: 'Specially designed gentle environment with cartoon themes, toys, and comforting distraction monitors to make kids love dentists.',
    icon: 'Heart',
    badge: 'Child-Friendly',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'f6',
    title: '24/7 Dental Emergency & Patient Transport Access',
    titleHi: '२४/७ आपातकालीन दंत सेवा एवं सुगम पहुंच',
    desc: 'Wheelchair accessible ground floor suites with dedicated patient parking and on-call trauma dental surgeons in Sadrauna, Lucknow.',
    icon: 'Clock',
    badge: '24/7 Rapid SOS',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'r1',
    patientName: 'Anurag Srivastava',
    rating: 5,
    text: 'Dr. Amit Verma and his team at Hope Dental Hospital in Sadrauna are phenomenal! I was terrified of dental implants due to past bad experiences elsewhere, but my implant was 100% painless and took barely 35 minutes. The clinic is spotless and modern.',
    date: '1 week ago',
    verifiedSource: 'Google',
    treatmentReceived: 'Single Tooth Nobel Implant',
    patientCity: 'Sadrauna, Lucknow',
    doctorConsulted: 'Dr. Amit Verma'
  },
  {
    id: 'r2',
    patientName: 'Shalini Tiwari',
    rating: 5,
    text: 'Got single sitting root canal done by Dr. Neha Sharma. Absolutely zero pain during or after the treatment! The digital invoice and appointment confirmation on WhatsApp made the entire process so easy. Highly recommend for families.',
    date: '2 weeks ago',
    verifiedSource: 'Google',
    treatmentReceived: 'Single-Sitting Rotary RCT + Zirconia Cap',
    patientCity: 'Mohan Road, Lucknow',
    doctorConsulted: 'Dr. Neha Sharma'
  },
  {
    id: 'r3',
    patientName: 'Mohd. Tariq',
    rating: 5,
    text: 'Best dental clinic on JustDial for Sadrauna/Lucknow area. They showed me 3D simulation of clear aligners before starting. My crooked teeth are straight in 8 months. Very transparent pricing with no hidden charges.',
    date: '1 month ago',
    verifiedSource: 'JustDial',
    treatmentReceived: 'Clear Aligners',
    patientCity: 'Alambagh, Lucknow',
    doctorConsulted: 'Dr. Rajesh Tripathi'
  },
  {
    id: 'r4',
    patientName: 'Kavita Rastogi',
    rating: 5,
    text: 'Took my 6-year-old son for cavity treatment. Dr. Pooja Singh is very sweet and handled him without any tears or fear. The play area and child reward badge made his day!',
    date: '1 month ago',
    verifiedSource: 'Facebook',
    treatmentReceived: 'Kids Fluoride Coating & Pulpectomy',
    patientCity: 'Rajajipuram, Lucknow',
    doctorConsulted: 'Dr. Pooja Singh'
  },
  {
    id: 'r5',
    patientName: 'Dinesh Chandra Yadav',
    rating: 5,
    text: 'Had deep wisdom tooth pain at night. The hospital team picked up the emergency line and treated my impaction next morning. Very clean sterilization setup and cooperative staff.',
    date: '2 months ago',
    verifiedSource: 'Google',
    treatmentReceived: 'Wisdom Tooth Surgical Extraction',
    patientCity: 'Kakori / Lucknow',
    doctorConsulted: 'Dr. Amit Verma'
  }
];

export const EMERGENCY_GUIDES: EmergencyGuide[] = [
  {
    id: 'em1',
    title: 'Severe Throbbing Toothache',
    titleHi: 'दांत में असहनीय तेज दर्द',
    icon: 'AlertCircle',
    symptom: 'Continuous sharp or throbbing pain, radiating to ear/temple, unable to sleep.',
    quickSteps: [
      'Rinse mouth gently with lukewarm salt water to clear trapped food particles.',
      'Apply a cold compress on the outside cheek (do NOT place aspirin directly on gums).',
      'Take an over-the-counter pain reliever like Paracetamol if medically safe for you.',
      'Call our 24/7 Dental SOS Hotline immediately for same-day emergency appointment.'
    ],
    urgency: 'Immediate (within 1 hour)'
  },
  {
    id: 'em2',
    title: 'Knocked-Out (Avulsed) Tooth',
    titleHi: 'चोट से पूरा दांत बाहर निकल जाना',
    icon: 'Activity',
    symptom: 'Permanent tooth completely dislodged from socket due to sports injury or fall.',
    quickSteps: [
      'Pick up the tooth by the CROWN (white part) only. Never touch the root.',
      'Rinse gently in cold water for 10 seconds if dirty. Do NOT scrub or wipe with tissue.',
      'Place tooth into a cup of fresh COLD MILK or natural saliva.',
      'Reach Hope Dental Hospital within 45 to 60 minutes for highest chance of saving the tooth!'
    ],
    urgency: 'Immediate (within 1 hour)'
  },
  {
    id: 'em3',
    title: 'Broken Tooth or Lost Filling / Cap',
    titleHi: 'दांत का टूटना या कैप/फिलिंग निकल जाना',
    icon: 'ShieldAlert',
    symptom: 'Sharp jagged edge cutting tongue/cheek, or exposed sensitive inner pulp.',
    quickSteps: [
      'Keep any broken tooth pieces in a clean container with milk or saline.',
      'Apply orthodontic wax or sugarless chewing gum over sharp edges to protect tongue.',
      'Avoid drinking very hot, icy cold, or sweet beverages.',
      'Book a priority morning slot for painless restorative bonding or crown re-cementation.'
    ],
    urgency: 'Urgent (same day)'
  },
  {
    id: 'em4',
    title: 'Facial Swelling or Gum Abscess',
    titleHi: 'चेहरे या मसूड़े में सूजन व मवाद',
    icon: 'AlertTriangle',
    symptom: 'Visible swelling in jaw, cheek, or pimple-like bump on gums with foul taste.',
    quickSteps: [
      'Do NOT apply hot water bags on the swelling as it can spread bacterial infection.',
      'Rinse with warm salt water or antiseptic mouthwash.',
      'Do NOT attempt to pop or squeeze the gum bump at home.',
      'Visit Hope Dental Hospital immediately for antibiotic drainage and root treatment.'
    ],
    urgency: 'Immediate (within 1 hour)'
  }
];
