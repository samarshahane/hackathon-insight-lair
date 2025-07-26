import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">StreetSync</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering street food vendors through reverse marketplace technology. 
              Get better prices, build community trust, and grow your business.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* For Vendors */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Vendors</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">How to Start</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">WhatsApp Support</a></li>
            </ul>
          </div>

          {/* For Suppliers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Suppliers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Partner with Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Verification Process</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bidding Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Payment Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@streetsync.in</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Delhi, Bangalore</span>
              </div>
            </div>
            <Button variant="hero" size="sm" className="w-full">
              WhatsApp Support
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 StreetSync. Transforming street food commerce across India.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;