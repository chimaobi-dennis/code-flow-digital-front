import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="hero-bg rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something
              <span className="text-gradient block">Amazing Together?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and turn your ideas into a digital reality. 
              Get a free consultation and project estimate today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-gradient text-lg px-8 py-4">
                <MessageCircle className="mr-2 w-5 h-5" />
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="btn-outline-glow text-lg px-8 py-4">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};