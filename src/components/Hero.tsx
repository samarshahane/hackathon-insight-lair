import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-vendors.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                🚀 Reverse Marketplace Revolution
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Street Vendors
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {" "}Set The Price
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                First platform where vendors post their needs and suppliers compete with bids. 
                Get better prices through community buying power and transparent bidding.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Start Saving Money
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Active Vendors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-2 mx-auto">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">30%</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-2 mx-auto">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Verified Suppliers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Street food vendors with fresh ingredients" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;