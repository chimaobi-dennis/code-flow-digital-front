import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onGetStartedClick={openModal} />
      <Hero onCtaClick={openModal} />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
      <ProjectModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
