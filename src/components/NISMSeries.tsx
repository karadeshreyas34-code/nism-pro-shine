import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/corporate-button";
import { 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  Mail
} from "lucide-react";

interface NISMSeriesInfo {
  id: string;
  series: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  modules: string[];
  targetAudience: string[];
  keyTopics: string[];
  certificationBenefits: string[];
  featured: boolean;
}

const nismSeriesData: NISMSeriesInfo[] = [
  {
    id: "nism-xv",
    series: "NISM Series XV",
    title: "Research Analyst Certification",
    description: "Comprehensive certification program for equity research analysts, covering fundamental and technical analysis, financial modeling, and regulatory compliance.",
    icon: <TrendingUp className="h-8 w-8" />,
    duration: "40-60 Hours",
    modules: [
      "Equity Research Fundamentals",
      "Financial Statement Analysis", 
      "Valuation Methodologies",
      "Sector Analysis",
      "Regulatory Framework",
      "Report Writing & Communication"
    ],
    targetAudience: [
      "Research Analysts",
      "Investment Advisors", 
      "Portfolio Managers",
      "Financial Consultants",
      "Banking Professionals"
    ],
    keyTopics: [
      "Equity Research Process",
      "Financial Ratio Analysis",
      "DCF & Relative Valuation",
      "Industry & Sector Analysis", 
      "SEBI Regulations for Research Analysts",
      "Professional Ethics & Standards"
    ],
    certificationBenefits: [
      "SEBI Registration Eligibility",
      "Career Advancement in Equity Research",
      "Enhanced Analytical Skills",
      "Professional Credibility",
      "Networking Opportunities"
    ],
    featured: true
  },
  {
    id: "nism-v-a",
    series: "NISM Series V-A",
    title: "Mutual Fund Distributors",
    description: "Essential certification for mutual fund distributors, covering fund management, investment strategies, and distribution regulations.",
    icon: <PieChart className="h-8 w-8" />,
    duration: "30-40 Hours",
    modules: [
      "Mutual Fund Basics",
      "Investment Strategies",
      "Fund Selection Criteria",
      "Risk Management",
      "Regulatory Compliance",
      "Customer Service"
    ],
    targetAudience: [
      "Mutual Fund Distributors",
      "Financial Advisors",
      "Bank Relationship Managers",
      "Insurance Agents",
      "Wealth Managers"
    ],
    keyTopics: [
      "Mutual Fund Operations",
      "Asset Classes & Portfolio Construction",
      "Tax Implications",
      "Know Your Customer (KYC)",
      "Regulatory Framework",
      "Digital Distribution"
    ],
    certificationBenefits: [
      "AMFI Registration",
      "Mutual Fund Distribution Rights",
      "Enhanced Product Knowledge",
      "Professional Recognition",
      "Business Growth Opportunities"
    ],
    featured: false
  },
  {
    id: "nism-x-a",
    series: "NISM Series X-A",
    title: "Investment Adviser (Level 1)",
    description: "Foundational certification for investment advisers, covering investment planning, portfolio management, and advisory regulations.",
    icon: <BarChart3 className="h-8 w-8" />,
    duration: "35-45 Hours",
    modules: [
      "Investment Planning Basics",
      "Portfolio Theory",
      "Asset Allocation",
      "Risk Assessment",
      "Regulatory Framework",
      "Client Advisory Process"
    ],
    targetAudience: [
      "Investment Advisers",
      "Financial Planners",
      "Wealth Managers",
      "Portfolio Managers",
      "Financial Consultants"
    ],
    keyTopics: [
      "Financial Planning Process",
      "Modern Portfolio Theory",
      "Risk-Return Analysis",
      "Investment Products",
      "SEBI IA Regulations",
      "Fiduciary Responsibilities"
    ],
    certificationBenefits: [
      "SEBI Investment Adviser Registration",
      "Fee-based Advisory Services",
      "Professional Competency",
      "Client Trust Building",
      "Regulatory Compliance"
    ],
    featured: false
  }
];

const NISMSeries = () => {
  const handleInquiry = (seriesName: string) => {
    const subject = `${seriesName} Corporate Training Inquiry`;
    const body = `Dear Prof. Sheetal Kunder,\n\nI am interested in organizing ${seriesName} corporate training for our organization.\n\nPlease provide details about:\n- Training schedule and duration\n- Group size recommendations\n- Customization options\n- Pricing for corporate batches\n- Prerequisites and certification process\n\nLooking forward to your response.\n\nBest regards,`;
    const mailtoLink = `mailto:skunder2727@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-6">
            NISM Certification Series
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training programs for various NISM certifications, designed to enhance 
            professional competency and regulatory compliance in the financial services industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {nismSeriesData.map((series) => (
            <Card 
              key={series.id} 
              className={`group hover:shadow-2xl transition-all duration-300 ${
                series.featured 
                  ? "ring-2 ring-corporate-gold shadow-lg scale-105" 
                  : "hover:scale-105"
              }`}
            >
              {series.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-corporate-gold text-corporate-blue font-semibold px-4 py-1">
                    Featured Program
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  series.featured 
                    ? "bg-corporate-gold text-corporate-blue" 
                    : "bg-corporate-blue text-white"
                }`}>
                  {series.icon}
                </div>
                <Badge variant="outline" className="mb-2 text-corporate-blue border-corporate-blue">
                  {series.series}
                </Badge>
                <CardTitle className="text-xl text-corporate-blue">{series.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {series.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-corporate-light-blue" />
                  <span>Duration: {series.duration}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-corporate-blue mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Key Modules
                  </h4>
                  <div className="space-y-1">
                    {series.modules.slice(0, 4).map((module, index) => (
                      <div key={index} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 mt-1 text-corporate-light-blue flex-shrink-0" />
                        {module}
                      </div>
                    ))}
                    {series.modules.length > 4 && (
                      <div className="text-sm text-muted-foreground ml-5">
                        +{series.modules.length - 4} more modules
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-corporate-blue mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Target Audience
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {series.targetAudience.slice(0, 3).map((audience, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {audience}
                      </Badge>
                    ))}
                    {series.targetAudience.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{series.targetAudience.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button 
                  variant={series.featured ? "corporate" : "corporate-outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => handleInquiry(series.series)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Inquire About This Program
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NISMSeries;