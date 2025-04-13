import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            GreenTracker
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary">
              Dashboard
            </Link>
            <Link to="/activities" className="text-muted-foreground hover:text-primary">
              Activities
            </Link>
            <Link to="/nft-gallery" className="text-muted-foreground hover:text-primary">
              NFT Gallery
            </Link>
            <Link to="/marketplace" className="text-muted-foreground hover:text-primary">
              Marketplace
            </Link>
            <Button variant="outline">Connect Wallet</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
