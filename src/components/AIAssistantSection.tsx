import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Mic, Languages, Shield, Clock, Heart, Brain } from "lucide-react";
import { useState } from "react";

const AIAssistantSection = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: "ai", content: "Hello! I'm your AI health assistant. How can I help you today?", time: "2 min ago" },
    { id: 2, type: "user", content: "I have a headache and fever since yesterday", time: "1 min ago" },
    { id: 3, type: "ai", content: "I understand you're experiencing headache and fever. Based on these symptoms, it could be a viral infection. However, I recommend consulting with a doctor for proper diagnosis. Would you like me to help you book an appointment or find nearby medical facilities?", time: "Just now" }
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const features = [
    { icon: Languages, title: "Multi-Language Support", description: "Available in Hindi, English, and 10+ regional languages" },
    { icon: Brain, title: "Symptom Analysis", description: "AI-powered analysis of your health symptoms" },
    { icon: Shield, title: "Privacy Protected", description: "Your health data is encrypted and secure" },
    { icon: Clock, title: "24/7 Available", description: "Get health guidance anytime, anywhere" }
  ];

  const commonQuestions = [
    "What are COVID-19 symptoms?",
    "How to manage diabetes?",
    "Child vaccination schedule",
    "Pregnancy care tips",
    "High blood pressure management",
    "First aid for burns"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { 
        id: messages.length + 1, 
        type: "user", 
        content: inputMessage, 
        time: "Just now" 
      }]);
      setInputMessage("");
    }
  };

  return (
    <section id="ai" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex p-4 bg-gradient-hero rounded-2xl mb-4">
            <Bot className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            AI Health Assistant
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant medical guidance, symptom checking, and health advice in your preferred language
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="shadow-card h-[600px] flex flex-col">
              <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI Health Assistant</CardTitle>
                      <CardDescription className="text-primary-foreground/80">
                        Online • Available in multiple languages
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-primary-foreground">
                    Secure Chat
                  </Badge>
                </div>
              </CardHeader>
              
              {/* Chat Messages */}
              <CardContent className="flex-1 p-0 overflow-hidden">
                <div className="h-full flex flex-col">
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] space-y-1`}>
                          <div className={`
                            p-4 rounded-2xl
                            ${message.type === 'user' 
                              ? 'bg-primary text-primary-foreground ml-4' 
                              : 'bg-muted text-foreground mr-4'
                            }
                          `}>
                            {message.type === 'ai' && (
                              <div className="flex items-center gap-2 mb-2">
                                <Bot className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">AI Assistant</span>
                              </div>
                            )}
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                          <p className={`text-xs text-muted-foreground ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Questions */}
                  <div className="p-4 border-t bg-muted/50">
                    <p className="text-sm text-muted-foreground mb-3">Common questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {commonQuestions.slice(0, 3).map((question) => (
                        <Button
                          key={question}
                          variant="outline"
                          size="sm"
                          className="text-xs h-auto py-2"
                          onClick={() => setInputMessage(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your health question..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button variant="outline" size="icon">
                        <Mic className="h-4 w-4" />
                      </Button>
                      <Button variant="hero" size="icon" onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      AI responses are for guidance only. Consult a doctor for medical decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features and Info */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  AI Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Language Selection */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  Language Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {["English", "Hindi", "Bengali", "Tamil", "Telugu", "Marathi"].map((language) => (
                    <Button key={language} variant="outline" size="sm" className="justify-start">
                      {language}
                    </Button>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  + More languages available
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="shadow-card border-destructive/20 bg-destructive/5">
              <CardContent className="p-4 text-center">
                <div className="space-y-3">
                  <div className="inline-flex p-2 bg-destructive/10 text-destructive rounded-full">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Medical Emergency?</h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      For urgent medical situations, contact emergency services immediately
                    </p>
                    <Button 
                      variant="emergency" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open('tel:108', '_self')}
                    >
                      Emergency Services
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Questions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {commonQuestions.slice(3).map((question) => (
                  <Button
                    key={question}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs h-auto py-2 text-left"
                    onClick={() => setInputMessage(question)}
                  >
                    {question}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;