import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { HeroSection } from '../home/HeroSection';
import { AboutSection } from '../home/AboutSection';
import { TreatmentsSection } from '../home/TreatmentsSection';
import { DoctorsSection } from '../home/DoctorsSection';
import { ReviewsAndSocialSection } from '../home/ReviewsAndSocialSection';
import { BlogsSection } from '../home/BlogsSection';
import { ContactAndLocationSection } from '../home/ContactAndLocationSection';

export const Concept1Clinical: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-teal-500 selection:text-white">
      {/* 1. Top Navbar */}
      <Navbar />

      {/* Main Core Sections Requested by User */}
      <main className="flex-1">
        {/* 1. Landing Page / Hero with 60s Fast Booking */}
        <HeroSection />

        {/* 2. About Hospital & Credentials */}
        <AboutSection />

        {/* 3. What Services Hospital Provides */}
        <TreatmentsSection />

        {/* 4. Doctors Details & Specialities */}
        <DoctorsSection />

        {/* 5. Customer Reviews & Social Media Video Stories */}
        <ReviewsAndSocialSection />

        {/* 6. Oral Health & Dental Blogs */}
        <BlogsSection />

        {/* 7. Hospital Location, Timings & Inquiry */}
        <ContactAndLocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
