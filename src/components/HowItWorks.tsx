
import React from 'react';
import { CheckCircle, Leaf, LineChart, Wallet, Award, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="h-10 w-10 text-eco-green" />,
      title: "Connect Wallet",
      description: "Link your digital wallet to securely store your sustainability credentials and NFTs."
    },
    {
      icon: <LineChart className="h-10 w-10 text-eco-green" />,
      title: "Track Actions",
      description: "Record your eco-friendly activities and carbon footprint through our intuitive dashboard."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-eco-green" />,
      title: "Verify Impact",
      description: "Your sustainability data is verified through our blockchain-powered verification system."
    },
    {
      icon: <Award className="h-10 w-10 text-eco-green" />,
      title: "Mint NFTs",
      description: "Transform your verified actions into unique NFTs that represent your environmental impact."
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-green-dark mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your sustainability journey in just a few simple steps
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute top-24 left-1/2 h-[calc(100%-8rem)] w-1 bg-eco-green-light hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:gap-8 mb-10`}>
                <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-eco-green/10 flex items-center justify-center z-10 relative">
                    {step.icon}
                    <div className="absolute -inset-2 border-2 border-dashed border-eco-green/30 rounded-full animate-pulse-eco"></div>
                  </div>
                </div>
                
                <div className={`md:w-1/2 text-center md:text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-card rounded-lg shadow-sm p-6 border border-border/40">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-6 z-20">
                    <ArrowRight className={`w-6 h-6 text-eco-green ${index % 2 === 0 ? 'rotate-90' : '-rotate-90'}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
