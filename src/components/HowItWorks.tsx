import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, Target, Handshake, Truck } from "lucide-react";
import mobileInterface from "@/assets/mobile-interface.jpg";
import networkIllustration from "@/assets/network-illustration.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Post Your Needs",
      description: "Via WhatsApp, SMS, or our app - tell us what ingredients you need and when",
      detail: "Works on any phone, supports voice messages in local languages"
    },
    {
      icon: Target,
      title: "Suppliers Bid",
      description: "Multiple verified suppliers compete with their best prices for your order",
      detail: "Real-time bidding creates competitive pricing in your favor"
    },
    {
      icon: Handshake,
      title: "Choose & Group",
      description: "Select the best bid, and we'll group your order with nearby vendors",
      detail: "Bulk purchasing power gets you wholesale prices even for small orders"
    },
    {
      icon: Truck,
      title: "Get Delivered",
      description: "Fresh ingredients delivered to your location with quality guarantee",
      detail: "Escrow payment system ensures quality before payment release"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Simple Process
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            How <span className="text-secondary">StreetSync</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionary reverse marketplace puts vendors in control of pricing
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <Badge className="mb-3 bg-muted text-muted-foreground">
                      Step {index + 1}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {step.description}
                    </p>
                    <p className="text-xs text-accent font-medium">
                      {step.detail}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Visual Examples */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Real Example
              </Badge>
              <h3 className="text-2xl font-bold mb-4">
                From ₹50/kg to ₹35/kg for Tomatoes
              </h3>
              <p className="text-muted-foreground mb-6">
                Rajesh, a chaat vendor in Mumbai, posted a need for 20kg tomatoes. 
                Five suppliers bid, with prices ranging from ₹35-₹48 per kg. 
                He saved ₹300 compared to his usual supplier.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Order grouped with 3 nearby vendors</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">30% savings through competitive bidding</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Quality verified by vendor community</span>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Try StreetSync Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={mobileInterface} 
                  alt="Mobile interface showing bidding" 
                  className="rounded-lg shadow-lg w-full"
                />
                <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary-glow/5">
                  <CardContent className="p-0">
                    <div className="text-sm font-medium text-primary mb-1">
                      WhatsApp Integration
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Order via familiar messaging
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="p-4 bg-gradient-to-r from-secondary/5 to-secondary/10">
                  <CardContent className="p-0">
                    <div className="text-sm font-medium text-secondary mb-1">
                      Real-time Bidding
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Suppliers compete for your order
                    </div>
                  </CardContent>
                </Card>
                <img 
                  src={networkIllustration} 
                  alt="Network of connected vendors" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;