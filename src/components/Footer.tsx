import { useState } from "react";
import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS (you'll need to set up your service)
      await emailjs.send(
        'default_service', // Replace with your service ID
        'template_contact', // Replace with your template ID
        {
          to_email: 'igsoftwebstudio@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'your_public_key' // Replace with your public key
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Company Info & Contact Details */}
          <div className="space-y-8">
            <div className="flex items-center">
              <img 
                src="/igs logo.png" 
                alt="IGSOFT Web Studio" 
                className="w-14 h-14 object-contain"
              />
            </div>
            
            <p className="text-foreground/70 leading-relaxed text-lg">
              Transforming digital visions into reality with cutting-edge software solutions. 
              Ready to start your next project? Get in touch with us today.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">igsoftwebstudio@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">San Francisco, CA</span>
              </div>
            </div>
            
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

          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-foreground/70">Have a project in mind? Let's discuss how we can help bring your vision to life.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
              
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full btn-gradient text-lg py-6 transform hover:scale-105 transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-3 w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 mt-16 pt-10 text-center text-foreground/60">
          <p>&copy; 2024 IGSOFT Web Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};