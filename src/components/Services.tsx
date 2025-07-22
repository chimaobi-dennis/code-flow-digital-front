import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, ShoppingCart, Database, Cloud, Palette, ArrowRight } from "lucide-react";
const services = [{
  icon: Monitor,
  title: "Web Development",
  description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.",
  features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"]
}, {
  icon: Smartphone,
  title: "Mobile App Development",
  description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
}, {
  icon: ShoppingCart,
  title: "E-commerce Solutions",
  description: "Complete online stores with payment integration, inventory management, and analytics.",
  features: ["Payment Gateway", "Inventory System", "Admin Dashboard", "Analytics"]
}, {
  icon: Database,
  title: "Backend Development",
  description: "Scalable APIs and backend systems that power your applications with reliability and security.",
  features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Deployment"]
}, {
  icon: Cloud,
  title: "Cloud Solutions",
  description: "Cloud architecture and deployment solutions for scalable, reliable, and secure applications.",
  features: ["AWS/Azure", "DevOps", "CI/CD", "Monitoring"]
}, {
  icon: Palette,
  title: "UI/UX Design",
  description: "Beautiful, intuitive designs that create memorable user experiences and drive engagement.",
  features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
}];
export const Services = () => {
  return <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive software solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => <Card key={service.title} className="bg-white/90 backdrop-blur-sm border border-border/50 rounded-3xl p-8 group cursor-pointer relative transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{
          animationDelay: `${index * 200}ms`
        }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-gradient transition-all duration-500">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-foreground/70 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {service.features.map(feature => <li key={feature} className="flex items-center text-sm text-foreground/70">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-4" />
                      {feature}
                    </li>)}
                </ul>
                
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};