import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { SpacesOverview } from '../components/sections/SpacesOverview';
import { EventsOverview } from '../components/sections/EventsOverview';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { FaqSection } from '../components/sections/FaqSection';

export const HomePage: React.FC = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <SpacesOverview />
      <EventsOverview />
      <GalleryPreview />
      <ReviewsSection />
      <FaqSection />

    </main>
  );
};
