import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">TechFlow</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Transforming digital visions into reality with cutting-edge software solutions.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-foreground/60 hover:text-primary transition-all duration-300 transform hover:scale-125">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-all duration-300 transform hover:scale-125">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-all duration-300 transform hover:scale-125">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-3 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">E-commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-4 text-foreground/70">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@techflow.dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-16 pt-10 text-center text-foreground/60">
          <p>&copy; 2024 TechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};