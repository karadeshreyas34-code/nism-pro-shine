import { Button } from "@/components/ui/corporate-button";
import { Mail, Users, Award, TrendingUp } from "lucide-react";

const CorporateHero = () => {
  const handleInquiry = () => {
    const subject = "Corporate NISM Training Inquiry";
    const body = "Dear Prof. Sheetal Kunder,\n\nI am interested in learning more about your corporate NISM training programs for our organization.\n\nPlease provide details about:\n- Available NISM series\n- Training schedules\n- Group discounts\n- Customization options\n\nLooking forward to your response.\n\nBest regards,";
    const mailtoLink = `mailto:skunder2727@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-corporate-blue via-corporate-navy to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Corporate{" "}
              <span className="bg-gradient-to-r from-corporate-gold to-accent bg-clip-text text-transparent">
                NISM Training
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Empowering financial professionals, AMCs, and SEBI registered members with 
              comprehensive NISM certification training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-corporate-gold" />
              <span className="text-lg font-semibold">Corporate Groups</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="h-8 w-8 text-corporate-gold" />
              <span className="text-lg font-semibold">SEBI Registered</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <TrendingUp className="h-8 w-8 text-corporate-gold" />
              <span className="text-lg font-semibold">Finance Professionals</span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Button 
              variant="corporate-gold" 
              size="xl"
              onClick={handleInquiry}
              className="w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Inquire Now
            </Button>
            <Button 
              variant="corporate-outline" 
              size="xl"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-corporate-blue"
            >
              View Training Programs
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-corporate-gold/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default CorporateHero;