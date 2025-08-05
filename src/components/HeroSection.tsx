import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Pill, Bot, Phone, Truck } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const HeroSection = () => {
  const quickActions = [
    { icon: Calendar, label: "Book Appointment", variant: "hero" as const },
    { icon: Phone, label: "Emergency", variant: "emergency" as const },
    { icon: Pill, label: "Medicine", variant: "medical" as const },
    { icon: Bot, label: "AI Assistant", variant: "appointment" as const },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Healthcare for{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Every Village
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Connecting rural India with quality healthcare through technology. 
                Book appointments, find emergency help, order medicines, and get AI-powered medical guidance.
              </p>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-muted-foreground">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-muted-foreground">Villages Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-muted-foreground">Emergency Support</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Access:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={action.label}
                    variant={action.variant}
                    size="lg"
                    className="flex-col h-auto py-4 gap-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <action.icon className="h-6 w-6" />
                    <span className="text-xs">{action.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                <Calendar className="h-5 w-5" />
                Book Doctor Appointment
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                <MapPin className="h-5 w-5" />
                Find Nearby Clinic
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hero">
              <img
                src={heroImage}
                alt="Healthcare professionals providing rural medical services"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Online Doctors</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Medicine Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;