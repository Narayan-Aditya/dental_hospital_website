import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { HeroSection } from '../home/HeroSection';
import { EmergencySOSBanner } from '../home/EmergencySOSBanner';
import { TreatmentsSection } from '../home/TreatmentsSection';
import { DoctorsSection } from '../home/DoctorsSection';
import { FacilitiesSection } from '../home/FacilitiesSection';
import { CostEstimatorSection } from '../home/CostEstimatorSection';
import { ReviewsAndSocialSection } from '../home/ReviewsAndSocialSection';
import { BlogsSection } from '../home/BlogsSection';
import { ContactAndLocationSection } from '../home/ContactAndLocationSection';

export const Concept1Clinical: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-teal-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* 24/7 Dental Trauma SOS Alert */}
      <EmergencySOSBanner />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection />
        <TreatmentsSection />
        <DoctorsSection />
        <FacilitiesSection />
        <CostEstimatorSection />
        <ReviewsAndSocialSection />
        <BlogsSection />
        <ContactAndLocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
