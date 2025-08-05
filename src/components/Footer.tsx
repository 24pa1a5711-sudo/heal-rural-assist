import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Calendar,
  Pill,
  Bot,
  Shield,
  Clock,
  Users
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Book Appointment", href: "#appointment", icon: Calendar },
    { name: "Emergency Services", href: "#emergency", icon: Phone },
    { name: "Medicine Delivery", href: "#medicine", icon: Pill },
    { name: "AI Assistant", href: "#ai", icon: Bot },
  ];

  const services = [
    "Doctor Consultations",
    "Emergency Care",
    "Medicine Delivery", 
    "Health Insurance",
    "Mobile Clinics",
    "Lab Tests"
  ];

  const resources = [
    "Health Articles",
    "Disease Information",
    "First Aid Guide",
    "Vaccination Schedule",
    "Medicine Guide",
    "Health Calculator"
  ];

  const supportLinks = [
    "Help Center",
    "Contact Support", 
    "Privacy Policy",
    "Terms of Service",
    "Feedback",
    "Report Issue"
  ];

  return (
    <footer className="bg-card border-t">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Health Tips</h3>
              <p className="text-primary-foreground/80">
                Get the latest health news, tips, and updates delivered to your inbox
              </p>
            </div>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white text-foreground border-0"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-hero p-2 rounded-lg">
                  <Activity className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-lg text-foreground">MediCare+</h1>
                  <p className="text-xs text-muted-foreground">Rural Healthcare</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm">
                Connecting rural and small-city communities with quality healthcare through technology. 
                Making healthcare accessible, affordable, and available to everyone.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-xl font-bold text-primary">10,000+</div>
                  <div className="text-muted-foreground">Doctors</div>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-xl font-bold text-secondary">500+</div>
                  <div className="text-muted-foreground">Villages</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Quick Access</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-foreground mb-4">Our Services</h4>
                <div className="space-y-2">
                  {services.map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Health Resources</h3>
              <div className="space-y-2">
                {resources.map((resource) => (
                  <a
                    key={resource}
                    href="#"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-foreground mb-4">Support</h4>
                <div className="space-y-2">
                  {supportLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm">
                    <p className="text-foreground font-medium">Head Office</p>
                    <p className="text-muted-foreground">
                      123 Healthcare Street, Medical District,<br />
                      New Delhi, India - 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <p className="text-foreground font-medium">Emergency: 108</p>
                    <p className="text-muted-foreground">Support: +91 1800-MEDICARE</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <p className="text-foreground">support@medicare-plus.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <p className="text-foreground font-medium">24/7 Available</p>
                    <p className="text-muted-foreground">Emergency services always open</p>
                  </div>
                </div>
              </div>

              {/* App Download */}
              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Mobile App
                </h4>
                <p className="text-xs text-muted-foreground mb-4">
                  Download our mobile app for easier access to healthcare services
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    📱 Download for Android
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    🍎 Download for iOS
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="mt-12 p-6 bg-gradient-emergency rounded-2xl text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-2">Medical Emergency?</h3>
              <p className="text-white/90 mb-4">Get immediate medical assistance 24/7</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline" 
                  className="bg-white text-destructive hover:bg-white/90"
                  onClick={() => window.open('tel:108', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call 108 - Emergency
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                  onClick={() => alert('Hospital locator feature coming soon!')}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Nearest Hospital
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 MediCare+ Rural Healthcare. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;