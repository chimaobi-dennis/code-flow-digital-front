import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our diverse team of skilled developers, designers, and strategists brings years of experience to every project."
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "We prioritize understanding your unique needs and delivering solutions that exceed expectations."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We maintain the highest standards in code quality, design excellence, and project delivery."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              About <span className="text-gradient">IGSOFT Web Studio</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking software company dedicated to transforming businesses 
              through innovative technology solutions. Since our founding, we've helped hundreds 
              of companies achieve their digital transformation goals.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">Our Story</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Founded in 2020 by a team of passionate technologists, IGSOFT Web Studio emerged from the vision 
                to bridge the gap between cutting-edge technology and real business needs. We started 
                with a simple mission: make technology work for people, not the other way around.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, we've grown into a trusted partner for businesses of all sizes, from startups 
                to enterprise organizations, helping them navigate the digital landscape with confidence 
                and achieve measurable success.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                    <div className="text-sm text-foreground/70">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                    <div className="text-sm text-foreground/70">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                    <div className="text-sm text-foreground/70">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                    <div className="text-sm text-foreground/70">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 group hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ 
                  animationDelay: `${index * 150}ms` 
                }}
              >
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-500">
                    {value.title}
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};