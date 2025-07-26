import { Button } from "@/components/ui/button";
import { ShoppingCart, Users, Truck } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">StreetSync</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
            Impact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Users className="w-4 h-4" />
            Join as Vendor
          </Button>
          <Button variant="vendor" size="sm">
            <Truck className="w-4 h-4" />
            Supply Partners
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;