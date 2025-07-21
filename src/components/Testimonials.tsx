import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "Outstanding work! They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and technical expertise is unmatched."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, DataFlow Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "Their team transformed our complex data visualization requirements into an intuitive, powerful dashboard. The collaboration throughout the project was seamless."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, HealthTech Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "From concept to deployment, they handled everything with professionalism. Our healthcare app now serves thousands of patients with zero downtime. Incredible work!"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "VP Product, FinanceFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "They built our financial analytics platform with security and scalability in mind. The performance improvements have directly impacted our bottom line. Highly recommended!"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Director, EduTech Solutions",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "The learning management system they developed has revolutionized how we deliver education. Student engagement increased by 40% since launch. Amazing results!"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Founder, SmartHome Innovations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "Their IoT platform solution exceeded our technical requirements and was delivered on time and within budget. The team's expertise in emerging technologies is impressive."
  }
];

export const Testimonials = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients
            <span className="text-gradient block">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                {renderStars(testimonial.rating)}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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