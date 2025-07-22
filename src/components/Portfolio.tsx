import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
const PROJECTS = [{
  id: 1,
  title: "E-Commerce Platform",
  description: "Modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600",
  category: "E-Commerce",
  technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 2,
  title: "Healthcare Management App",
  description: "Comprehensive healthcare management system for clinics with patient records, appointment scheduling, and billing.",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800&h=600",
  category: "Healthcare",
  technologies: ["React Native", "Firebase", "TypeScript", "Express"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 3,
  title: "Financial Dashboard",
  description: "Real-time financial analytics dashboard with advanced charting, portfolio tracking, and automated reporting.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
  category: "FinTech",
  technologies: ["Vue.js", "Python", "Django", "Redis"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 4,
  title: "Learning Management System",
  description: "Interactive learning platform with video streaming, progress tracking, and collaborative features for educators.",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=600",
  category: "Education",
  technologies: ["Next.js", "MongoDB", "AWS", "Socket.io"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 5,
  title: "Smart Home IoT Platform",
  description: "Centralized IoT platform for smart home automation with device management and energy monitoring.",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800&h=600",
  category: "IoT",
  technologies: ["Angular", "Node.js", "MongoDB", "MQTT"],
  liveUrl: "#",
  githubUrl: "#"
}, {
  id: 6,
  title: "Social Media Analytics",
  description: "Advanced social media analytics platform with sentiment analysis, trend tracking, and automated reporting.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
  category: "Analytics",
  technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
  liveUrl: "#",
  githubUrl: "#"
}];
const CATEGORIES = ["All", "E-Commerce", "Healthcare", "FinTech", "Education", "IoT", "Analytics"];
export const Portfolio = () => {
  return;
};