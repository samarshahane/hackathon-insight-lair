import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Leaf, 
  Globe, 
  IndianRupee,
  Truck,
  ShieldCheck,
  Target
} from "lucide-react";

const Impact = () => {
  const metrics = [
    {
      icon: IndianRupee,
      value: "₹2.5M+",
      label: "Saved by Vendors",
      description: "Total cost savings across our platform",
      color: "primary"
    },
    {
      icon: Users,
      value: "500+",
      label: "Active Vendors",
      description: "Growing community of street food entrepreneurs",
      color: "secondary"
    },
    {
      icon: Truck,
      value: "150+",
      label: "Verified Suppliers",
      description: "Quality-checked ingredient suppliers",
      color: "accent"
    },
    {
      icon: Leaf,
      value: "40%",
      label: "Waste Reduction",
      description: "Food waste decreased through better planning",
      color: "secondary"
    }
  ];

  const achievements = [
    {
      icon: Target,
      title: "30% Average Savings",
      description: "Vendors report consistent cost reductions through competitive bidding"
    },
    {
      icon: ShieldCheck,
      title: "99.8% Quality Rate",
      description: "Community-verified suppliers maintain exceptional standards"
    },
    {
      icon: Globe,
      title: "12 Cities Live",
      description: "Expanding across India's major metropolitan areas"
    },
    {
      icon: TrendingUp,
      title: "250% Growth",
      description: "Monthly active vendors growing rapidly"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10';
      case 'secondary':
        return 'text-secondary bg-secondary/10';
      case 'accent':
        return 'text-accent bg-accent/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-muted/30 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Real Impact
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Transforming <span className="text-primary">Street Food Economy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable results that matter to vendors, suppliers, and communities
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const colorClass = getColorClasses(metric.color);
            
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClass}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Impact Story */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Success Story
              </Badge>
              <h3 className="text-2xl font-bold mb-4">
                "StreetSync helped me increase my profit by 40%"
              </h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-muted-foreground italic">
                  "Before StreetSync, I was spending ₹8,000 weekly on ingredients from a single supplier. 
                  Now I post my needs and suppliers compete for my business. Last month, I saved ₹3,200 
                  and the quality is even better because of the community verification system."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">Pani Puri Vendor, Delhi</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="hero" size="lg" className="w-full">
                  Join 500+ Vendors
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Free to join • No setup fees
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Impact;