import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Phone, 
  Pill, 
  Bot, 
  Truck, 
  Shield, 
  Users, 
  MapPin,
  Clock,
  Heart,
  FileText,
  Search
} from "lucide-react";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Calendar,
      title: "Doctor Appointments",
      description: "Book online & offline consultations with qualified doctors near you",
      features: ["Video consultations", "In-person visits", "Specialist booking", "Follow-up appointments"],
      color: "primary",
      buttonText: "Book Now"
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "24/7 emergency medical assistance and doctor locator using GPS",
      features: ["Real-time doctor location", "Emergency ambulance", "Hospital finder", "Crisis support"],
      color: "destructive",
      buttonText: "Emergency Help"
    },
    {
      icon: Pill,
      title: "Medicine Delivery",
      description: "Affordable medicines delivered to your doorstep from trusted pharmacies",
      features: ["Generic medicines", "Prescription upload", "Same-day delivery", "Medicine reminders"],
      color: "secondary",
      buttonText: "Order Medicine"
    },
    {
      icon: Bot,
      title: "AI Health Assistant",
      description: "Get instant medical guidance and symptom checking in your language",
      features: ["Multi-language support", "Symptom checker", "Health tips", "Medicine information"],
      color: "accent",
      buttonText: "Chat with AI"
    },
    {
      icon: Truck,
      title: "Mobile Clinics",
      description: "Track and book mobile medical units visiting your area",
      features: ["Schedule tracking", "Vaccination camps", "Health checkups", "Rural outreach"],
      color: "primary",
      buttonText: "Find Clinic"
    },
    {
      icon: Shield,
      title: "Health Insurance",
      description: "Access government schemes and health insurance benefits easily",
      features: ["Scheme eligibility", "Claim processing", "Documentation help", "Benefit tracking"],
      color: "secondary",
      buttonText: "Check Benefits"
    }
  ];

  const additionalFeatures = [
    { icon: FileText, title: "Digital Health Records", description: "Secure medical history storage" },
    { icon: Search, title: "Lab Test Booking", description: "Home sample collection available" },
    { icon: Heart, title: "Health Monitoring", description: "Track vitals and health metrics" },
    { icon: Users, title: "Family Profiles", description: "Manage health for entire family" }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Complete Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for quality healthcare, designed specifically for rural and small-city communities
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`
                  inline-flex p-4 rounded-2xl mx-auto mb-4
                  ${service.color === 'primary' ? 'bg-primary/10 text-primary' :
                    service.color === 'destructive' ? 'bg-destructive/10 text-destructive' :
                    service.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'}
                `}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={service.color === 'destructive' ? 'emergency' : 'hero'} 
                  className="w-full"
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Additional Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex p-3 bg-primary/10 text-primary rounded-xl">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-gradient-emergency rounded-2xl p-8 text-center shadow-emergency">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex p-3 bg-white/20 rounded-full mb-4">
              <Phone className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Medical Emergency?
            </h3>
            <p className="text-lg text-white/90">
              Get immediate help from nearby doctors and hospitals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-destructive hover:bg-white/90">
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency: 108
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                <MapPin className="h-5 w-5 mr-2" />
                Find Nearest Hospital
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;