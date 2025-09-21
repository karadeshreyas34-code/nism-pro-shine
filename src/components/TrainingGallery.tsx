import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

// Import training images
import trainingSession1 from "@/assets/training-session-1.jpg";
import trainingSession2 from "@/assets/training-session-2.jpg";
import trainingSession3 from "@/assets/training-session-3.jpg";
import trainingSession4 from "@/assets/training-session-4.jpg";
import trainingSession5 from "@/assets/training-session-5.jpg";
import groupPhoto1 from "@/assets/group-photo-1.jpg";
import groupPhoto2 from "@/assets/group-photo-2.jpg";

interface TrainingSession {
  id: string;
  image: string;
  title: string;
  nismSeries: string;
  location: string;
  description: string;
  participants: number;
  duration: string;
  highlights: string[];
}

const trainingSessions: TrainingSession[] = [
  {
    id: "nism-xv-sbi-1",
    image: trainingSession1,
    title: "NISM Research Analyst Series XV Training",
    nismSeries: "NISM Series XV",
    location: "State Bank of India, Corporate Training Center",
    description: "Comprehensive training program covering equity research fundamentals, financial modeling, and regulatory compliance for SBI professionals.",
    participants: 45,
    duration: "3 Days",
    highlights: ["Equity Research Fundamentals", "Financial Statement Analysis", "Regulatory Guidelines", "Practical Case Studies"]
  },
  {
    id: "nism-xv-sbi-2",
    image: trainingSession2,
    title: "Advanced Research Methodologies",
    nismSeries: "NISM Series XV",
    location: "State Bank of India, Mumbai",
    description: "Advanced session focusing on research methodologies, sector analysis, and professional presentation techniques.",
    participants: 40,
    duration: "2 Days",
    highlights: ["Sector Analysis", "Research Methodologies", "Report Writing", "Professional Presentation"]
  },
  {
    id: "nism-xv-group-3",
    image: trainingSession3,
    title: "Interactive Workshop Session",
    nismSeries: "NISM Series XV",
    location: "Corporate Training Facility, Mumbai",
    description: "Interactive workshop with real-time case studies and group discussions on equity research best practices.",
    participants: 35,
    duration: "1 Day",
    highlights: ["Live Case Studies", "Group Discussions", "Best Practices", "Q&A Sessions"]
  },
  {
    id: "completion-ceremony-1",
    image: groupPhoto1,
    title: "Training Completion Ceremony",
    nismSeries: "NISM Series XV",
    location: "Training Center, Mumbai",
    description: "Successful completion ceremony with participants receiving their training certificates and networking session.",
    participants: 42,
    duration: "Half Day",
    highlights: ["Certificate Distribution", "Networking", "Success Stories", "Future Opportunities"]
  },
  {
    id: "completion-ceremony-2",
    image: groupPhoto2,
    title: "Group Achievement Celebration",
    nismSeries: "NISM Series XV",
    location: "Training Facility, Mumbai",
    description: "Celebration of successful training completion with group photos and knowledge sharing session.",
    participants: 38,
    duration: "Half Day",
    highlights: ["Group Photos", "Knowledge Sharing", "Achievement Recognition", "Feedback Session"]
  },
  {
    id: "evening-session",
    image: trainingSession4,
    title: "Evening Intensive Session",
    nismSeries: "NISM Series XV",
    location: "Corporate Training Center",
    description: "Evening intensive session covering advanced topics and exam preparation strategies.",
    participants: 30,
    duration: "3 Hours",
    highlights: ["Exam Preparation", "Advanced Topics", "Practice Tests", "Strategy Sessions"]
  },
  {
    id: "practical-workshop",
    image: trainingSession5,
    title: "Practical Application Workshop",
    nismSeries: "NISM Series XV", 
    location: "Modern Training Facility",
    description: "Hands-on workshop focusing on practical application of research analyst skills and industry tools.",
    participants: 32,
    duration: "Full Day",
    highlights: ["Industry Tools", "Practical Applications", "Hands-on Experience", "Tool Demonstrations"]
  }
];

const TrainingGallery = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  
  const nismSeries = ["all", "NISM Series XV"];
  
  const filteredSessions = selectedSeries === "all" 
    ? trainingSessions 
    : trainingSessions.filter(session => session.nismSeries === selectedSeries);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-6">
            Training Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive corporate training sessions and see the success stories 
            of financial professionals who have enhanced their careers through our programs
          </p>
        </div>

        {/* Series Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-card rounded-lg p-1 shadow-sm">
            {nismSeries.map((series) => (
              <button
                key={series}
                onClick={() => setSelectedSeries(series)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  selectedSeries === series
                    ? "bg-corporate-blue text-white shadow-md"
                    : "text-muted-foreground hover:text-corporate-blue"
                }`}
              >
                {series === "all" ? "All Series" : series}
              </button>
            ))}
          </div>
        </div>

        {/* Training Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredSessions.map((session) => (
            <Card key={session.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-corporate-blue text-white">
                    {session.nismSeries}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-corporate-blue mb-3 line-clamp-2">
                  {session.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-corporate-light-blue" />
                    {session.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-corporate-light-blue" />
                    {session.participants} Participants
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-corporate-light-blue" />
                    {session.duration}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {session.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-corporate-blue">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {session.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {session.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{session.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingGallery;