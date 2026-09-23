import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Smile, 
  Activity, 
  Zap, 
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SymptomCheckerModal: React.FC = () => {
  const { 
    isSymptomCheckerOpen, 
    setIsSymptomCheckerOpen, 
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking 
  } = useApp();

  const [step, setStep] = useState<number>(1);
  const [location, setLocation] = useState<string>('Back Molar Tooth');
  const [trigger, setTrigger] = useState<string>('Sharp pain on Cold / Sweets');
  const [signs, setSigns] = useState<string>('Visible dark hole or cavity');
  const [duration, setDuration] = useState<string>('More than 3 days');

  if (!isSymptomCheckerOpen) return null;

  const handleDiagnose = () => {
    setStep(5); // Result Screen
  };

  const getDiagnosis = () => {
    if (location.includes('Molar') && (trigger.includes('Cold') || trigger.includes('throbbing'))) {
      return {
        condition: 'Deep Dental Pulpitis / Root Infection',
        conditionHi: 'दांत की नस में गहरा संक्रमण (पल्पाइटिस)',
        recommendedTreatment: 'Single-Sitting Rotary Root Canal (RCT)',
        treatmentId: 'rct-single-sitting',
        doctorId: 'dr-neha-sharma',
        urgency: 'High (Prevent jaw abscess)',
        startingCost: '₹2,499',
        explanation: 'The infection has reached the nerve canal of your tooth. A modern rotary RCT will eliminate the pain in a single sitting while preserving your natural tooth.'
      };
    } else if (location.includes('Gums') || signs.includes('Bleeding')) {
      return {
        condition: 'Gingivitis / Periodontal Tartar Buildup',
        conditionHi: 'मसूड़ों में सूजन व पायरिया के लक्षण',
        recommendedTreatment: 'Laser Teeth Whitening & Ultrasonic Scaling',
        treatmentId: 'teeth-whitening-scaling',
        doctorId: 'dr-amit-verma',
        urgency: 'Moderate (Recommended within 1 week)',
        startingCost: '₹1,200',
        explanation: 'Bacterial calculus along your gumline is causing inflammation. Ultrasonic cleaning gently removes hardened tartar without harming your enamel.'
      };
    } else if (location.includes('Wisdom') || location.includes('Jaw')) {
      return {
        condition: 'Impacted Wisdom Tooth (Pericoronitis)',
        conditionHi: 'फंसी हुई अक्ल दाढ़ में संक्रमण',
        recommendedTreatment: 'Painless Wisdom Tooth & Oral Surgery',
        treatmentId: 'wisdom-tooth-surgery',
        doctorId: 'dr-amit-verma',
        urgency: 'High (Relieve jaw stiffness)',
        startingCost: '₹2,999',
        explanation: 'Your third molar may be tilting against adjacent teeth or partially trapped under the gum, causing local swelling and throbbing.'
      };
    } else {
      return {
        condition: 'Smile Aesthetics & Structural Wear',
        conditionHi: 'दांतों का टेढ़ापन या रंग में बदलाव',
        recommendedTreatment: 'Invisible Clear Aligners & Modern Braces',
        treatmentId: 'clear-aligners-braces',
        doctorId: 'dr-rajesh-tripathi',
        urgency: 'Elective / Lifestyle',
        startingCost: '₹34,999',
        explanation: 'Modern clear aligners offer a discreet, wire-free way to achieve ideal tooth alignment and confident smile symmetry.'
      };
    }
  };

  const diagnosis = getDiagnosis();

  const handleBookDiagnosis = () => {
    setSelectedTreatmentIdForBooking(diagnosis.treatmentId);
    setSelectedDoctorIdForBooking(diagnosis.doctorId);
    setIsSymptomCheckerOpen(false);
    setIsBookingOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col justify-between">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-teal-50/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-teal-800 uppercase tracking-wider">
                Interactive Clinical AI Assistant
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Dental Symptom & Pain Checker
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsSymptomCheckerOpen(false)}
            className="p-2 rounded-full hover:bg-white text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress */}
        {step < 5 && (
          <div className="px-6 pt-4">
            <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1.5">
              <span>Step {step} of 4</span>
              <span>{Math.round((step / 4) * 100)}% Complete</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Body Steps */}
        <div className="p-6 space-y-4 flex-1">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-display font-bold text-base text-slate-900">
                1. Where is the dental pain or concern located?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Back Molar Tooth (Upper/Lower)',
                  'Front Teeth (Smile zone)',
                  'Gums (Redness/Bleeding)',
                  'Back Jaw / Wisdom Tooth',
                  'Missing Tooth / Gap',
                  'Full Mouth Crooked Teeth'
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setLocation(opt)}
                    className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all ${
                      location === opt
                        ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-display font-bold text-base text-slate-900">
                2. What triggers or describes the discomfort?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Sharp pain on Cold / Sweets',
                  'Constant throbbing (keeping awake)',
                  'Pain while chewing food',
                  'Gums bleed during brushing',
                  'Loose or wobbling tooth',
                  'No pain, aesthetic concern only'
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setTrigger(opt)}
                    className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all ${
                      trigger === opt
                        ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-display font-bold text-base text-slate-900">
                3. Are there any visible physical signs?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Visible dark hole or cavity',
                  'Swollen bump on gums (boil/pus)',
                  'Chipped or broken tooth edge',
                  'Yellow/brown tartar deposits',
                  'Facial or cheek swelling',
                  'None of the above'
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSigns(opt)}
                    className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all ${
                      signs === opt
                        ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-display font-bold text-base text-slate-900">
                4. How long have you experienced this issue?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Started today (Sudden emergency)',
                  'Past 2 to 5 days',
                  'More than 2 weeks',
                  'Long-standing chronic issue (> 3 months)'
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setDuration(opt)}
                    className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all ${
                      duration === opt
                        ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-sm'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: RESULTS */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn text-left">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-5 rounded-2xl border border-teal-200 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="bg-teal-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                    Clinical Evaluation
                  </span>
                  <span className="text-xs font-bold text-rose-600">Urgency: {diagnosis.urgency}</span>
                </div>

                <h4 className="font-display font-extrabold text-xl text-slate-900">
                  {diagnosis.condition}
                </h4>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {diagnosis.explanation}
                </p>
              </div>

              {/* Recommended Action Card */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Recommended Treatment:</span>
                  <span className="font-bold text-teal-800">{diagnosis.recommendedTreatment}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Estimated Starting Fee:</span>
                  <span className="font-bold text-slate-900">{diagnosis.startingCost}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Hospital Clinic:</span>
                  <span className="font-bold text-slate-900">Sadrauna, Mohan Rd, Lucknow</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleBookDiagnosis}
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Slot for {diagnosis.recommendedTreatment}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          {step > 1 && step < 5 ? (
            <button
              onClick={() => setStep(prev => prev - 1)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-white flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={() => setStep(prev => prev + 1)}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : step === 4 ? (
            <button
              onClick={handleDiagnose}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5"
            >
              <span>Get AI Diagnosis</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => setIsSymptomCheckerOpen(false)}
              className="w-full py-2 bg-slate-900 text-white font-bold text-xs rounded-xl"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
