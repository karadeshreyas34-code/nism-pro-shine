import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/corporate-button";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  rating: number;
  feedback: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    designation: "Senior Research Analyst",
    company: "State Bank of India",
    rating: 5,
    feedback: "Prof. Sheetal Kunder's training methodology is exceptional. The NISM XV series training was comprehensive, practical, and directly applicable to our daily work. The interactive sessions and real-world case studies made complex concepts easy to understand.",
    date: "2 months ago"
  },
  {
    id: "2", 
    name: "Priya Sharma",
    designation: "Investment Advisor",
    company: "Leading AMC",
    rating: 5,
    feedback: "Outstanding training experience! The content was well-structured, and Prof. Kunder's expertise in the field is evident. Our entire team benefited immensely from the corporate training program. Highly recommend for any financial institution.",
    date: "3 months ago"
  },
  {
    id: "3",
    name: "Vikram Patel",
    designation: "Portfolio Manager",
    company: "Financial Services Firm",
    rating: 5,
    feedback: "The training quality exceeded our expectations. Prof. Sheetal's deep knowledge and teaching approach helped our team clear NISM certifications with confidence. The practical insights shared are invaluable for our professional growth.",
    date: "1 month ago"
  },
  {
    id: "4",
    name: "Anjali Reddy",
    designation: "Compliance Officer",
    company: "SEBI Registered Entity",
    rating: 5,
    feedback: "Excellent training program with focus on both theoretical knowledge and practical applications. The regulatory compliance aspects were explained clearly. Prof. Kunder's experience in the industry shows in every session.",
    date: "4 months ago"
  },
  {
    id: "5",
    name: "Suresh Gupta",
    designation: "Research Head",
    company: "Corporate Bank",
    rating: 5,
    feedback: "Comprehensive and well-delivered training. The team's performance in NISM examinations improved significantly after attending Prof. Kunder's training sessions. Professional approach and excellent content delivery.",
    date: "2 months ago"
  },
  {
    id: "6",
    name: "Meera Krishnan",
    designation: "Financial Analyst",
    company: "Investment Banking",
    rating: 5,
    feedback: "Prof. Sheetal Kunder's training program is a game-changer for financial professionals. The detailed coverage of NISM topics, combined with practical examples, makes learning effective and engaging. Definitely worth the investment.",
    date: "3 months ago"
  }
];

const TestimonialSection = () => {
  const handleViewMoreReviews = () => {
    window.open("https://share.google/PxVZOaZDULzOKslo6", "_blank", "noopener,noreferrer");
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-corporate-gold fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-6">
            What Our Participants Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Read testimonials from financial professionals, AMCs, and SEBI registered members 
            who have successfully completed our NISM training programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-corporate-light-blue">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-corporate-light-blue mb-3" />
                  <div className="flex items-center mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground text-sm italic line-clamp-4">
                    "{testimonial.feedback}"
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-corporate-blue">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                  <p className="text-sm font-medium text-corporate-navy">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground mt-2">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="corporate-outline" 
            size="lg"
            onClick={handleViewMoreReviews}
            className="group"
          >
            <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View All Google Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;