
import React from 'react';
import { Award, BarChart3, Leaf, ShieldCheck, Stamp, TreeDeciduous } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-eco-green" />,
      title: "Blockchain Verification",
      description: "Every sustainability claim is verified and recorded on blockchain for complete transparency and trust."
    },
    {
      icon: <Award className="h-10 w-10 text-eco-teal" />,
      title: "Sustainability NFTs",
      description: "Mint NFTs as proof of your eco-friendly actions that can be displayed, shared or traded."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-eco-blue" />,
      title: "Carbon Footprint Tracker",
      description: "Monitor and reduce your environmental impact with our advanced carbon tracking tools."
    },
    {
      icon: <Stamp className="h-10 w-10 text-eco-brown" />,
      title: "Green Certifications",
      description: "Earn verifiable certifications and badges for your sustainability achievements."
    },
    {
      icon: <TreeDeciduous className="h-10 w-10 text-eco-green-dark" />,
      title: "Eco-Projects Marketplace",
      description: "Discover and participate in verified sustainability projects around the world."
    },
    {
      icon: <Leaf className="h-10 w-10 text-eco-teal-dark" />,
      title: "Sustainability Score",
      description: "Build your comprehensive sustainability profile with our unique scoring system."
    },
  ];

  return (
    <div className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-eco-green-dark mb-4">
            Tracking Sustainability with Blockchain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge blockchain technology with environmental action to create a new paradigm for sustainability verification.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="eco-card flex flex-col items-start">
              <div className="mb-4 p-3 bg-gradient-eco/30 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
