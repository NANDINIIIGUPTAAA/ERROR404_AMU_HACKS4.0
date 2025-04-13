
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SustainabilityScore from '@/components/dashboard/SustainabilityScore';
import CarbonFootprint from '@/components/dashboard/CarbonFootprint';
import ActivityLog from '@/components/dashboard/ActivityLog';
import NFTGallery from '@/components/dashboard/NFTGallery';
import { Button } from '@/components/ui/button';
import { Plus, Download, Upload } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Sustainability Dashboard</h1>
              <p className="text-muted-foreground">Track, verify, and showcase your environmental impact</p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Upload className="h-4 w-4 mr-2" />
                Import Data
              </Button>
              <Button size="sm" className="bg-eco-green hover:bg-eco-green-dark text-white flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Activity
              </Button>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First column */}
            <div className="md:col-span-1 space-y-6">
              <SustainabilityScore />
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="eco-card text-center">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Carbon Offset</h3>
                  <p className="text-2xl font-bold text-eco-green">2.4 tons</p>
                  <p className="text-xs text-muted-foreground">This year</p>
                </div>
                <div className="eco-card text-center">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">NFTs Minted</h3>
                  <p className="text-2xl font-bold text-eco-teal">8</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </div>
            </div>
            
            {/* Second column */}
            <div className="md:col-span-2 space-y-6">
              <CarbonFootprint />
              <ActivityLog />
            </div>
          </div>
          
          {/* NFT Gallery Section */}
          <div className="mt-8">
            <NFTGallery />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
