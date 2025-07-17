import { ArrowLeft, Code, Camera, Music, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
        
        {/* Back Button */}
        <div className="pt-4">
          <Button variant="outline" asChild className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Profile
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">About Me</h1>
          <p className="text-lg text-muted-foreground">Get to know me better</p>
        </div>

        {/* Bio Section */}
        <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hello, I'm Alex! 👋</h2>
            
            <p className="text-foreground/90 leading-relaxed">
              I'm a passionate digital creator and developer who loves building amazing experiences on the web. 
              With a background in full-stack development and a keen eye for design, I enjoy bringing ideas to life 
              through code and creativity.
            </p>
            
            <p className="text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest tech trends, creating content for my YouTube 
              channel, or sharing behind-the-scenes moments on Instagram. I believe in the power of community and 
              love connecting with fellow creators and developers.
            </p>
          </div>
        </Card>

        {/* Skills & Interests */}
        <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
          <h2 className="text-2xl font-semibold text-foreground mb-6">What I Do</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-foreground font-medium">Full-Stack Development</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Camera className="h-6 w-6 text-primary" />
                <span className="text-foreground font-medium">Content Creation</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Music className="h-6 w-6 text-primary" />
                <span className="text-foreground font-medium">Music Production</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Coffee className="h-6 w-6 text-primary" />
                <span className="text-foreground font-medium">Coffee Enthusiast</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Goals */}
        <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
          <h2 className="text-2xl font-semibold text-foreground mb-4">My Goals</h2>
          
          <ul className="space-y-3 text-foreground/90">
            <li className="flex items-start space-x-3">
              <span className="text-primary mt-1">•</span>
              <span>Build innovative web applications that make a difference</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary mt-1">•</span>
              <span>Share knowledge through tutorials and open-source projects</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary mt-1">•</span>
              <span>Connect with amazing people in the tech community</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary mt-1">•</span>
              <span>Continuously learn and adapt to new technologies</span>
            </li>
          </ul>
        </Card>

        {/* CTA */}
        <div className="text-center pt-4">
          <p className="text-muted-foreground mb-4">Let's connect and create something amazing together!</p>
          <Button asChild className="bg-gradient-primary hover:bg-primary-glow hover:scale-105 hover:shadow-glow transition-all duration-300">
            <Link to="/">
              Check out my links
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;