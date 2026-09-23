import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ExternalLink, 
  CheckCircle2, 
  Play, 
  MessageSquare,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const ReviewsAndSocialSection: React.FC = () => {
  const { language, reviews } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoTestimonials = [
    {
      id: 'v1',
      title: 'Painless Single-Sitting RCT Patient Experience',
      titleHi: 'सिंगल-सिटिंग आरसीटी का दर्द रहित अनुभव',
      patient: 'Mrs. S. Mishra (Lucknow)',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      duration: '2:15 min',
    },
    {
      id: 'v2',
      title: 'Full Mouth Fixed Dental Implants Transformation',
      titleHi: 'फुल माउथ फिक्स्ड डेंटल इम्प्लांट्स का परिणाम',
      patient: 'Mr. V. Kumar (Sadrauna)',
      thumbnail: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      duration: '3:40 min',
    },
    {
      id: 'v3',
      title: 'Invisible Clear Aligners Smile Journey',
      titleHi: 'क्लियर एलाइनर्स से सीधी और खूबसूरत मुस्कान',
      patient: 'A. Tripathi (Alambagh)',
      thumbnail: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      duration: '1:50 min',
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-current" />
            <span>Verified Patient Testimonials</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {language === 'hi' 
              ? 'मरीजों का विश्वास एवं वास्तविक अनुभव' 
              : 'Real Smiles, Real Patient Stories'
            }
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {language === 'hi'
              ? 'सदरौना व पूरे लखनऊ से हजारों मरीजों द्वारा दिए गए प्रामाणिक गूगल, जस्टडायल और यूट्यूब रिव्यूज।'
              : 'Read genuine verified reviews across Google, JustDial, Facebook, and watch video success stories.'
            }
          </p>
        </div>

        {/* Aggregate Ratings Hub Banner */}
        <div className="mb-14 bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
            {/* Google Rating */}
            <div className="space-y-1 border-r border-slate-700/60 pr-4">
              <div className="text-amber-400 font-extrabold text-2xl sm:text-3xl flex items-center justify-center space-x-1">
                <span>4.9</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="text-xs font-bold text-white">Google Reviews</div>
              <div className="text-[11px] text-slate-400">480+ Verified Ratings</div>
              <a
                href={HOSPITAL_INFO.socialLinks.google}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[10px] text-teal-400 hover:text-teal-300 font-semibold mt-1 space-x-1"
              >
                <span>View Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* JustDial Rating */}
            <div className="space-y-1 lg:border-r border-slate-700/60 pr-4">
              <div className="text-orange-400 font-extrabold text-2xl sm:text-3xl flex items-center justify-center space-x-1">
                <span>4.8</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="text-xs font-bold text-white">JustDial Lucknow</div>
              <div className="text-[11px] text-slate-400">Top Rated in Sadrauna</div>
              <a
                href={HOSPITAL_INFO.socialLinks.justdial}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[10px] text-orange-400 hover:text-orange-300 font-semibold mt-1 space-x-1"
              >
                <span>View JustDial Profile</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* YouTube Community */}
            <div className="space-y-1 border-r border-slate-700/60 pr-4">
              <div className="text-red-500 font-extrabold text-2xl sm:text-3xl flex items-center justify-center space-x-1">
                <YoutubeIcon className="w-8 h-8 text-red-500 mx-auto" />
              </div>
              <div className="text-xs font-bold text-white">YouTube Videos</div>
              <div className="text-[11px] text-slate-400">Patient Education & Tips</div>
              <a
                href={HOSPITAL_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[10px] text-red-400 hover:text-red-300 font-semibold mt-1 space-x-1"
              >
                <span>Visit YT Channel</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            {/* Facebook Community */}
            <div className="space-y-1">
              <div className="text-blue-400 font-extrabold text-2xl sm:text-3xl flex items-center justify-center space-x-1">
                <FacebookIcon className="w-8 h-8 text-blue-400 mx-auto" />
              </div>
              <div className="text-xs font-bold text-white">Facebook Page</div>
              <div className="text-[11px] text-slate-400">Community Updates</div>
              <a
                href={HOSPITAL_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[10px] text-blue-400 hover:text-blue-300 font-semibold mt-1 space-x-1"
              >
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Written Patient Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header: Rating & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    review.verifiedSource === 'Google'
                      ? 'bg-emerald-100 text-emerald-800'
                      : review.verifiedSource === 'JustDial'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {review.verifiedSource} Verified
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Patient info */}
              <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{review.patientName}</div>
                  <div className="text-[11px] text-slate-500">{review.patientCity}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold text-teal-700">{review.treatmentReceived}</div>
                  <div className="text-[10px] text-slate-400">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Featured Video Stories from YouTube Channel
              </h3>
              <p className="text-xs text-slate-500">
                Watch our patient transformations and clinic walk-throughs.
              </p>
            </div>
            <a
              href={HOSPITAL_INFO.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow transition-all space-x-1.5 self-start sm:self-auto"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((v) => (
              <div
                key={v.id}
                className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 group relative flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                  />
                  <a
                    href={HOSPITAL_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </a>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {v.duration}
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white">
                  <h4 className="font-bold text-sm line-clamp-1 group-hover:text-teal-400 transition-colors">
                    {language === 'hi' ? v.titleHi : v.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                    <span>{v.patient}</span>
                    <span className="text-red-400 font-semibold flex items-center space-x-1">
                      <YoutubeIcon className="w-3 h-3 text-red-500" />
                      <span>Hope Dental YT</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
