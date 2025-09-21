import CorporateHero from "@/components/CorporateHero";
import TrainingGallery from "@/components/TrainingGallery";
import NISMSeries from "@/components/NISMSeries";
import TestimonialSection from "@/components/TestimonialSection";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CorporateHero />
      <TrainingGallery />
      <NISMSeries />
      <TestimonialSection />
      <ContactCTA />
    </div>
  );
};

export default Index;
