import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Shield, 
  Smartphone, 
  TrendingDown, 
  Network,
  MessageSquare,
  BarChart3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Reverse Bidding",
      description: "Post your needs, let suppliers compete with their best prices",
      badge: "Unique",
      color: "primary"
    },
    {
      icon: Users,
      title: "Group Buying Power",
      description: "Aggregate orders with nearby vendors for wholesale pricing",
      badge: "Smart",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Community Trust",
      description: "Vendor-verified supplier ratings and quality assurance",
      badge: "Reliable",
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "WhatsApp Integration",
      description: "Order via familiar messaging, works on any phone",
      badge: "Accessible",
      color: "primary"
    },
    {
      icon: TrendingDown,
      title: "Price Transparency",
      description: "Real-time market rates and price comparison tools",
      badge: "Fair",
      color: "secondary"
    },
    {
      icon: Network,
      title: "Vendor Network",
      description: "Connect with successful vendors for supplier recommendations",
      badge: "Connected",
      color: "accent"
    },
    {
      icon: MessageSquare,
      title: "Multi-Language",
      description: "Voice and text ordering in local languages",
      badge: "Inclusive",
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Impact Analytics",
      description: "Track your savings and business growth over time",
      badge: "Data-Driven",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary bg-primary/10',
          badge: 'bg-primary/10 text-primary border-primary/20'
        };
      case 'secondary':
        return {
          icon: 'text-secondary bg-secondary/10',
          badge: 'bg-secondary/10 text-secondary border-secondary/20'
        };
      case 'accent':
        return {
          icon: 'text-accent bg-accent/10',
          badge: 'bg-accent/10 text-accent border-accent/20'
        };
      default:
        return {
          icon: 'text-primary bg-primary/10',
          badge: 'bg-primary/10 text-primary border-primary/20'
        };
    }
  };

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Revolutionary Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Why StreetSync is <span className="text-primary">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built specifically for street food vendors with features that put you in control
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses.icon}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className={`text-xs ${colorClasses.badge}`}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;