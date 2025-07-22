import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    badge: "Digital Transformation",
    headline: "Digitalize Your",
    highlightText: "Business",
    subline: "Transform Today",
    description: "Transform your traditional business into a digital powerhouse. We help you streamline operations, reach new customers, and stay ahead of the competition in the digital age.",
    cta: "Start Digital Journey",
    bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
  },
  {
    id: 2,
    badge: "Global Expansion",
    headline: "Expand Your",
    highlightText: "Reach",
    subline: "Go Global",
    description: "Break geographical barriers and reach customers worldwide. Our scalable solutions help you expand your market presence and grow your business beyond borders.",
    cta: "Expand Globally",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
  },
  {
    id: 3,
    badge: "Market Leadership",
    headline: "Dominate Your",
    highlightText: "Market",
    subline: "Lead Innovation",
    description: "Stay ahead of competitors with cutting-edge technology solutions. We help you innovate faster, serve customers better, and become the market leader in your industry.",
    cta: "Lead the Market",
    bgGradient: "from-orange-50 via-amber-50 to-yellow-50"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = SLIDES[currentSlide];

  return (
    <section className={`min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br ${currentSlideData.bgGradient} transition-all duration-1000`}>
      {/* Floating Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-8 py-4 text-base shadow-lg transform hover:scale-105 transition-all duration-500">
              <span className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></span>
              <span className="font-semibold">{currentSlideData.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-bold leading-tight">
                {currentSlideData.headline}
                <span className="text-gradient block transform hover:scale-105 transition-all duration-700">
                  {currentSlideData.highlightText}
                </span>
                <span className="text-5xl md:text-6xl text-gray-600 block mt-4">
                  {currentSlideData.subline}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button className="btn-gradient text-xl px-12 py-6 transform hover:scale-110 transition-all duration-500">
                {currentSlideData.cta}
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" className="btn-outline-glow text-xl px-12 py-6 transform hover:scale-110 transition-all duration-500">
                <Play className="mr-3 w-6 h-6" />
                Watch Demo
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center justify-center gap-3 pt-12">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-primary to-accent scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">500+</div>
                <div className="text-sm text-gray-500">Businesses Digitalized</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">50+</div>
                <div className="text-sm text-gray-500">Countries Reached</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">98%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">24/7</div>
                <div className="text-sm text-gray-500">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>
    </section>
  );
};