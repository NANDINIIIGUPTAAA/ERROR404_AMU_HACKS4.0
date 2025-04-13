
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <HowItWorks />
        
        {/* CTAs Section */}
        <section className="py-16 bg-gradient-eco">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-green-dark mb-6">
              Ready to Prove Your Environmental Impact?
            </h2>
            <p className="text-lg text-eco-green-dark/80 max-w-2xl mx-auto mb-8">
              Join thousands of individuals and organizations creating verifiable sustainability credentials on blockchain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/dashboard" 
                className="eco-button bg-eco-green-dark hover:bg-eco-green text-white"
              >
                Start Your Eco Journey
              </a>
              <a 
                href="/marketplace" 
                className="eco-button-outline"
              >
                Explore Marketplace
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
