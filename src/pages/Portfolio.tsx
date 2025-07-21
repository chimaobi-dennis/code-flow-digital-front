import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Healthcare Management App",
    description: "Comprehensive healthcare management system for clinics with patient records, appointment scheduling, and billing.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=600",
    category: "Healthcare",
    technologies: ["React Native", "Firebase", "TypeScript", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Real-time financial analytics dashboard with advanced charting, portfolio tracking, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    category: "FinTech",
    technologies: ["Vue.js", "Python", "Django", "Redis"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Learning Management System",
    description: "Interactive learning platform with video streaming, progress tracking, and collaborative features for educators.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=600",
    category: "Education",
    technologies: ["Next.js", "MongoDB", "AWS", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Smart Home IoT Platform",
    description: "Centralized IoT platform for smart home automation with device management and energy monitoring.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600",
    category: "IoT",
    technologies: ["Angular", "Node.js", "MongoDB", "MQTT"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Advanced social media analytics platform with sentiment analysis, trend tracking, and automated reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    category: "Analytics",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const CATEGORIES = ["All", "E-Commerce", "Healthcare", "FinTech", "Education", "IoT", "Analytics"];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Work &amp; 
              <span className="text-gradient block">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our portfolio of innovative solutions that have helped businesses 
              transform their digital presence and achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-gradient" : "btn-outline-glow"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Card key={project.id} className="group bg-card/50 border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" className="btn-gradient">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="btn-outline-glow">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="hero-bg rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your
                <span className="text-gradient block">Success Story?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help you build innovative solutions 
                that drive real business results.
              </p>
              <Button className="btn-gradient text-lg px-8 py-4">
                Start Your Project Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;