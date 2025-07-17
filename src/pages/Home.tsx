import { LinkButton } from "@/components/LinkButton";
import { Instagram, Youtube, MessageCircle, Globe, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="relative mx-auto w-32 h-32 mb-6">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-glow animate-glow-pulse"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Alex Johnson</h1>
            <p className="text-lg text-muted-foreground">Digital Creator & Developer</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <LinkButton
            href="https://instagram.com"
            icon={Instagram}
            label="Follow me on Instagram"
            variant="social"
          />
          
          <LinkButton
            href="https://youtube.com"
            icon={Youtube}
            label="Subscribe to my YouTube"
            variant="social"
          />
          
          <LinkButton
            href="https://wa.me/1234567890"
            icon={MessageCircle}
            label="Chat on WhatsApp"
            variant="social"
          />
          
          <LinkButton
            href="https://github.com"
            icon={Github}
            label="View my GitHub"
            variant="social"
          />
          
          <LinkButton
            href="https://mywebsite.com"
            icon={Globe}
            label="Visit my Website"
            variant="social"
          />
          
          <LinkButton
            href="mailto:hello@alexjohnson.com"
            icon={Mail}
            label="Send me an Email"
            variant="social"
          />
        </div>

        {/* About Link */}
        <div className="text-center pt-4">
          <Link 
            to="/about"
            className="text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
          >
            Learn more about me →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;