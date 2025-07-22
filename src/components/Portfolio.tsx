import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
const PROJECTS = [{
  id: 1,
  title: "E-Commerce Platform",
  description: "Modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600",
  category: "E-Commerce",
  technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 2,
  title: "Healthcare Management App",
  description: "Comprehensive healthcare management system for clinics with patient records, appointment scheduling, and billing.",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=600",
  category: "Healthcare",
  technologies: ["React Native", "Firebase", "TypeScript", "Express"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 3,
  title: "Financial Dashboard",
  description: "Real-time financial analytics dashboard with advanced charting, portfolio tracking, and automated reporting.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  category: "FinTech",
  technologies: ["Vue.js", "Python", "Django", "Redis"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 4,
  title: "Learning Management System",
  description: "Interactive learning platform with video streaming, progress tracking, and collaborative features for educators.",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=600",
  category: "Education",
  technologies: ["Next.js", "MongoDB", "AWS", "Socket.io"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 5,
  title: "Smart Home IoT Platform",
  description: "Centralized IoT platform for smart home automation with device management and energy monitoring.",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600",
  category: "IoT",
  technologies: ["Angular", "Node.js", "MongoDB", "MQTT"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 6,
  title: "Social Media Analytics",
  description: "Advanced social media analytics platform with sentiment analysis, trend tracking, and automated reporting.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
  category: "Analytics",
  technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
  liveUrl: "#",
  githubUrl: "#"
}];
const CATEGORIES = ["All", "E-Commerce", "Healthcare", "FinTech", "Education", "IoT", "Analytics"];
export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Github className="w-4 h-4" />
                    </Button>
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