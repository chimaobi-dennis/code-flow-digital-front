import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Cloud, 
  Palette,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and analytics.",
    features: ["Payment Gateway", "Inventory System", "Admin Dashboard", "Analytics"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable APIs and backend systems that power your applications with reliability and security.",
    features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Deployment"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud architecture and deployment solutions for scalable, reliable, and secure applications.",
    features: ["AWS/Azure", "DevOps", "CI/CD", "Monitoring"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that create memorable user experiences and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we provide comprehensive software solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-glow group cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms` 
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};