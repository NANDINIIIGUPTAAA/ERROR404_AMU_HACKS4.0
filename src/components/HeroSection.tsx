
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-eco-green/10 text-eco-green px-4 py-2 rounded-full">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">Blockchain-Verified Sustainability</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Prove Your <span className="text-eco-green">Environmental Impact</span> with Blockchain
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Track, verify, and showcase your sustainability efforts with immutable blockchain records. 
              Turn eco-friendly actions into verifiable NFTs and build your sustainability portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark text-white">
                <Link to="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                <Link to="/marketplace">
                  Explore Marketplace
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-eco rounded-full opacity-20 animate-pulse-eco"></div>
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800"
                alt="Sustainable environment"
                className="rounded-2xl relative z-10 object-cover"
              />
              
              {/* Floating feature cards */}
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-float z-20">
                <div className="flex items-center space-x-3">
                  <div className="bg-eco-green/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-eco-green" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Verified Data</p>
                    <p className="text-xs text-muted-foreground">Immutable & Transparent</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg animate-float animation-delay-1000 z-20">
                <div className="flex items-center space-x-3">
                  <div className="bg-eco-teal/10 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-eco-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">NFT Rewards</p>
                    <p className="text-xs text-muted-foreground">For Eco Actions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
