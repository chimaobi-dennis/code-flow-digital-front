import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

export const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="cta-section rounded-3xl p-16 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Build Something
              <span className="text-gradient block">Amazing Together?</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
              Let's discuss your project and turn your ideas into a digital reality. 
              Get a free consultation and project estimate today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                className="btn-gradient text-xl px-12 py-6 transform hover:scale-110 transition-all duration-500"
                onClick={() => setIsModalOpen(true)}
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                Start a Project
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-glow text-xl px-12 py-6 transform hover:scale-110 transition-all duration-500"
                onClick={() => navigate('/portfolio')}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};