import { Button } from "@/components/ui/corporate-button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Award,
  TrendingUp,
  Target
} from "lucide-react";

const ContactCTA = () => {
  const handleInquiry = () => {
    const subject = "Corporate NISM Training Program Inquiry";
    const body = `Dear Prof. Sheetal Kunder,

I am writing to inquire about corporate NISM training programs for our organization.

Organization Details:
- Company Name: [Your Company Name]
- Industry: [Your Industry]
- Number of Participants: [Expected Number]
- Preferred NISM Series: [e.g., Series XV, Series V-A, Series X-A]

Training Requirements:
- Preferred Training Format: [In-person/Virtual/Hybrid]
- Timeline: [Your Preferred Timeline]
- Location: [Your Preferred Location]
- Specific Customization Needs: [Any specific requirements]

Please provide information about:
✓ Available training schedules
✓ Curriculum customization options
✓ Group pricing and discounts
✓ Certification process and timeline
✓ Post-training support

We look forward to partnering with Prof Sheetal Kunder Academy for our team's professional development.

Best regards,
[Your Name]
[Your Designation]
[Your Contact Information]`;

    const mailtoLink = `mailto:skunder2727@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Group Training",
      description: "Customized programs for teams of all sizes"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Faculty",
      description: "Industry veterans with practical experience"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "High Success Rate",
      description: "Proven track record of certification success"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Customized Content",
      description: "Tailored to your organization's needs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-corporate-blue via-corporate-navy to-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4">
                  Ready to Elevate Your Team's Expertise?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join leading financial institutions that trust Prof. Sheetal Kunder Academy 
                  for their NISM certification training needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-corporate-light-blue/10 rounded-lg flex items-center justify-center">
                      <div className="text-corporate-blue">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-corporate-blue mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-secondary/50 to-accent/20 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-corporate-blue mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Why Choose Our Corporate Training?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <p>✓ Flexible scheduling to suit your organization</p>
                    <p>✓ On-site or virtual training options</p>
                    <p>✓ Customized curriculum based on your needs</p>
                  </div>
                  <div className="space-y-2">
                    <p>✓ Post-training support and guidance</p>
                    <p>✓ Group discounts for bulk enrollments</p>
                    <p>✓ Certificate of completion for all participants</p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button 
                  variant="corporate" 
                  size="xl"
                  onClick={handleInquiry}
                  className="text-lg px-8 py-4"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Inquire Now for Corporate Training
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Get a customized proposal within 24 hours
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-corporate-light-blue" />
                    <span>skunder2727@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-corporate-light-blue" />
                    <span>Mumbai & Pan India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-corporate-light-blue" />
                    <span>Quick Response Guaranteed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;