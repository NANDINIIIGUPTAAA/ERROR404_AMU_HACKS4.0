
import React from 'react';
import { Leaf, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-eco-green" />
              <span className="text-xl font-bold text-eco-green-dark">EcoProof</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Verifying sustainability, one blockchain transaction at a time. Making eco-friendly actions transparent and immutable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-eco-green transition-colors">Dashboard</Link></li>
              <li><Link to="/activities" className="text-muted-foreground hover:text-eco-green transition-colors">Activity Log</Link></li>
              <li><Link to="/nft-gallery" className="text-muted-foreground hover:text-eco-green transition-colors">NFT Gallery</Link></li>
              <li><Link to="/marketplace" className="text-muted-foreground hover:text-eco-green transition-colors">Marketplace</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} EcoProof. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
