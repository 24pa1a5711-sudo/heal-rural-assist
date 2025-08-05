import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, User, Phone, Video, Building } from "lucide-react";
import { useState } from "react";

const AppointmentSection = () => {
  const [appointmentType, setAppointmentType] = useState("");

  const doctors = [
    { id: 1, name: "Dr. Priya Sharma", specialty: "General Medicine", experience: "10 years", rating: 4.8, location: "District Hospital", available: "Today" },
    { id: 2, name: "Dr. Rajesh Kumar", specialty: "Pediatrics", experience: "8 years", rating: 4.9, location: "Community Health Center", available: "Tomorrow" },
    { id: 3, name: "Dr. Sunita Patel", specialty: "Gynecology", experience: "12 years", rating: 4.7, location: "Primary Health Center", available: "Today" },
    { id: 4, name: "Dr. Amit Singh", specialty: "Cardiology", experience: "15 years", rating: 4.9, location: "District Hospital", available: "2 days" }
  ];

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

  return (
    <section id="appointment" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Book Your Appointment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from online consultations or in-person visits with qualified doctors
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Appointment Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Schedule Appointment
              </CardTitle>
              <CardDescription>
                Fill in your details to book an appointment with our qualified doctors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Appointment Type */}
              <div className="space-y-3">
                <Label>Consultation Type</Label>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={appointmentType === "video" ? "hero" : "outline"}
                    onClick={() => setAppointmentType("video")}
                    className="flex-col h-auto py-4 gap-2"
                  >
                    <Video className="h-5 w-5" />
                    <span className="text-xs">Video Call</span>
                  </Button>
                  <Button
                    variant={appointmentType === "phone" ? "hero" : "outline"}
                    onClick={() => setAppointmentType("phone")}
                    className="flex-col h-auto py-4 gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-xs">Phone Call</span>
                  </Button>
                  <Button
                    variant={appointmentType === "visit" ? "hero" : "outline"}
                    onClick={() => setAppointmentType("visit")}
                    className="flex-col h-auto py-4 gap-2"
                  >
                    <Building className="h-5 w-5" />
                    <span className="text-xs">In-Person</span>
                  </Button>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Enter age" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Medical Details */}
              <div className="space-y-2">
                <Label htmlFor="specialty">Required Specialty</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select medical specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Medicine</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="gynecology">Gynecology</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Symptoms/Reason for Visit</Label>
                <Textarea 
                  id="symptoms" 
                  placeholder="Describe your symptoms or reason for consultation..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => alert('Appointment booking submitted! You will receive a confirmation call within 30 minutes.')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Available Doctors */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Available Doctors</h3>
              <p className="text-muted-foreground">Choose from our qualified medical professionals</p>
            </div>

            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="shadow-card hover:shadow-hero transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{doctor.name}</h4>
                          <p className="text-sm text-primary">{doctor.specialty}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                            <span>{doctor.experience}</span>
                            <span>⭐ {doctor.rating}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {doctor.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Available: </span>
                          <span className="text-secondary font-medium">{doctor.available}</span>
                        </div>
                        <Button 
                          variant="appointment" 
                          size="sm"
                          onClick={() => alert(`Dr. ${doctor.name} selected! Please fill the form above to continue.`)}
                        >
                          Select Doctor
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Booking Banner */}
            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Need Immediate Consultation?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with available doctors for emergency consultations
                    </p>
                    <Button 
                      variant="emergency" 
                      size="lg" 
                      className="gap-2"
                      onClick={() => alert('Connecting you to an available doctor... Please wait.')}
                    >
                      <Phone className="h-4 w-4" />
                      Instant Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;