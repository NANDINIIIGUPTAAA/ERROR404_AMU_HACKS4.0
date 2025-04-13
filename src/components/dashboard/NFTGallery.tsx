
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight } from 'lucide-react';

// Sample NFT data
const nfts = [
  {
    id: 1,
    name: "Tree Planter",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400",
    type: "Carbon Offset",
    impact: "500 kg CO2",
    rarity: "Uncommon",
    issuedDate: "Mar 15, 2023"
  },
  {
    id: 2,
    name: "Energy Saver",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400",
    type: "Renewable Energy",
    impact: "1,250 kWh",
    rarity: "Rare",
    issuedDate: "Jan 28, 2023"
  },
  {
    id: 3,
    name: "Water Guardian",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400",
    type: "Water Conservation",
    impact: "15,000 gallons",
    rarity: "Uncommon",
    issuedDate: "Feb 10, 2023"
  }
];

const NFTGallery = () => {
  return (
    <div className="eco-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">Sustainability NFTs</h2>
        <Button variant="outline" size="sm" className="text-eco-green border-eco-green">
          <Eye className="h-4 w-4 mr-1" />
          View All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <div className="nft-card-inner">
              <div className="aspect-square rounded-md overflow-hidden mb-3">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-medium text-foreground mb-1">{nft.name}</h3>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  {nft.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  Issued: {nft.issuedDate}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-eco-green font-medium">
                  Impact: {nft.impact}
                </span>
                <span className="text-xs bg-eco-teal-light/30 text-eco-teal-dark px-2 py-1 rounded-full">
                  {nft.rarity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button variant="outline" className="text-eco-green border-eco-green hover:bg-eco-green hover:text-white">
          Mint New NFT
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default NFTGallery;
