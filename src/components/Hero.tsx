import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 text-sm shadow-lg">
              <span className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></span>
              <span>Innovative Software Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Transform Your
              <span className="text-gradient block">Digital Vision</span>
              Into Reality
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We craft cutting-edge web applications, mobile apps, and digital experiences 
              that drive your business forward in the modern world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
              <Button className="btn-gradient text-xl px-10 py-5 transform hover:scale-110 transition-all duration-500">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="btn-outline-glow text-xl px-10 py-5 transform hover:scale-110 transition-all duration-500">
                <Play className="mr-2 w-5 h-5" />
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-3xl mx-auto">
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl font-bold text-gradient mb-2">150+</div>
                <div className="text-sm text-foreground/60">Projects Delivered</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-foreground/60">Happy Clients</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-sm text-foreground/60">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};