
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, LayoutDashboard, LineChart, Wallet, Menu, X, Globe, Award, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const connectWallet = () => {
    // This would be replaced with actual wallet connect logic
    setIsConnected(true);
    console.log("Connecting to wallet...");
  };

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border/40 fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-eco-green" />
            <Link to="/" className="text-xl font-bold text-eco-green-dark">EcoProof</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-eco-green transition-colors">Home</Link>
            <Link to="/dashboard" className="text-foreground/80 hover:text-eco-green transition-colors">Dashboard</Link>
            <Link to="/activities" className="text-foreground/80 hover:text-eco-green transition-colors">Activities</Link>
            <Link to="/nft-gallery" className="text-foreground/80 hover:text-eco-green transition-colors">NFT Gallery</Link>
            <Link to="/marketplace" className="text-foreground/80 hover:text-eco-green transition-colors">Marketplace</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {isConnected ? (
              <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                <Wallet className="h-4 w-4 mr-2" />
                0x71...8A2f
              </Button>
            ) : (
              <Button onClick={connectWallet} variant="default" className="bg-eco-green hover:bg-eco-green-dark text-white">
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block py-2 text-foreground/80 hover:text-eco-green transition-colors" onClick={toggleMenu}>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/dashboard" className="block py-2 text-foreground/80 hover:text-eco-green transition-colors" onClick={toggleMenu}>
              <div className="flex items-center space-x-2">
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link to="/activities" className="block py-2 text-foreground/80 hover:text-eco-green transition-colors" onClick={toggleMenu}>
              <div className="flex items-center space-x-2">
                <LineChart className="h-5 w-5" />
                <span>Activities</span>
              </div>
            </Link>
            <Link to="/nft-gallery" className="block py-2 text-foreground/80 hover:text-eco-green transition-colors" onClick={toggleMenu}>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>NFT Gallery</span>
              </div>
            </Link>
            <Link to="/marketplace" className="block py-2 text-foreground/80 hover:text-eco-green transition-colors" onClick={toggleMenu}>
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Marketplace</span>
              </div>
            </Link>
            {!isConnected && (
              <Button onClick={connectWallet} className="w-full mt-2 bg-eco-green hover:bg-eco-green-dark text-white">
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
