
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Filter, Search, Map, CreditCard, ShoppingBag, Leaf, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Sample marketplace projects
const projects = [
  {
    id: 1,
    name: "Amazon Rainforest Conservation",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400",
    type: "Reforestation",
    impact: "500 tons CO2 yearly",
    location: "Brazil",
    price: "0.05 ETH",
    rating: 4.8,
    verified: true
  },
  {
    id: 2,
    name: "Solar Energy Cooperative",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400",
    type: "Renewable Energy",
    impact: "250 MWh green energy",
    location: "Morocco",
    price: "0.03 ETH",
    rating: 4.5,
    verified: true
  },
  {
    id: 3,
    name: "Ocean Plastic Collection",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400",
    type: "Ocean Cleanup",
    impact: "15 tons plastic removed",
    location: "Indonesia",
    price: "0.02 ETH",
    rating: 4.7,
    verified: true
  },
  {
    id: 4,
    name: "Urban Gardens Initiative",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400", 
    type: "Urban Greening",
    impact: "20 community gardens",
    location: "Canada",
    price: "0.01 ETH",
    rating: 4.6,
    verified: true
  },
  {
    id: 5,
    name: "Sustainable Farming Cooperative",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400",
    type: "Sustainable Agriculture",
    impact: "100 hectares regenerative farming",
    location: "Kenya",
    price: "0.04 ETH",
    rating: 4.9,
    verified: true
  },
  {
    id: 6,
    name: "Wind Energy Expansion",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400",
    type: "Renewable Energy",
    impact: "500 MWh clean energy yearly",
    location: "Denmark",
    price: "0.06 ETH",
    rating: 4.7,
    verified: true
  }
];

// Sample NFT marketplace items
const nftItems = [
  {
    id: 1,
    name: "Rainforest Guardian",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400",
    type: "Carbon Offset",
    impact: "2 tons CO2",
    price: "0.15 ETH",
    rarity: "Rare",
    verified: true
  },
  {
    id: 2,
    name: "Solar Pioneer",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400",
    type: "Renewable Energy",
    impact: "5,000 kWh",
    price: "0.08 ETH",
    rarity: "Uncommon",
    verified: true
  },
  {
    id: 3,
    name: "Ocean Protector",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400",
    type: "Ocean Cleanup",
    impact: "500 kg plastic",
    price: "0.12 ETH",
    rarity: "Rare",
    verified: true
  },
  {
    id: 4,
    name: "Urban Gardener",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400", 
    type: "Urban Greening",
    impact: "5 community plots",
    price: "0.05 ETH",
    rarity: "Common",
    verified: true
  }
];

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Sustainability Marketplace</h1>
              <p className="text-muted-foreground">Discover and support verified eco-friendly projects</p>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="bg-card rounded-lg border border-border/40 p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search projects, NFTs, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 eco-input"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 border-eco-green text-eco-green">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                <span>Map View</span>
              </Button>
            </div>
          </div>
          
          {/* Marketplace Tabs */}
          <Tabs defaultValue="projects" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="bg-muted grid grid-cols-3 w-full max-w-md mb-6">
              <TabsTrigger 
                value="projects" 
                className={activeTab === 'projects' ? "bg-eco-green text-white" : ""}
              >
                Projects
              </TabsTrigger>
              <TabsTrigger 
                value="nfts" 
                className={activeTab === 'nfts' ? "bg-eco-green text-white" : ""}
              >
                NFTs
              </TabsTrigger>
              <TabsTrigger 
                value="products" 
                className={activeTab === 'products' ? "bg-eco-green text-white" : ""}
              >
                Products
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Button variant="outline" size="sm" className="text-eco-green border-eco-green">All Projects</Button>
                <Button variant="ghost" size="sm">Reforestation</Button>
                <Button variant="ghost" size="sm">Renewable Energy</Button>
                <Button variant="ghost" size="sm">Ocean Cleanup</Button>
                <Button variant="ghost" size="sm">Sustainable Agriculture</Button>
                <Button variant="ghost" size="sm">Urban Greening</Button>
              </div>
              
              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="eco-card">
                    <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                        {project.location}
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{project.name}</h3>
                      
                      {project.verified && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-eco-green/10 p-1 rounded-full">
                                <Leaf className="h-4 w-4 text-eco-green" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Verified Sustainable Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {project.type}
                      </span>
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                        <span className="text-sm font-medium ml-1">{project.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{project.impact}</p>
                    
                    <div className="flex justify-between items-center">
                      <p className="font-medium">{project.price}</p>
                      <Button className="bg-eco-green hover:bg-eco-green-dark text-white">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Support
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nfts">
              {/* NFT Marketplace */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nftItems.map((nft) => (
                  <div key={nft.id} className="nft-card">
                    <div className="nft-card-inner">
                      <div className="aspect-square rounded-md overflow-hidden mb-3 relative">
                        <img
                          src={nft.image}
                          alt={nft.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-eco-teal-light/30 text-eco-teal-dark px-2 py-1 rounded-full text-xs">
                          {nft.rarity}
                        </div>
                      </div>
                      
                      <h3 className="font-medium text-foreground mb-1">{nft.name}</h3>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">
                          {nft.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Impact: {nft.impact}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {nft.price}
                        </span>
                        <Button variant="outline" size="sm" className="text-eco-green border-eco-green hover:bg-eco-green hover:text-white">
                          <ShoppingBag className="h-3 w-3 mr-1" />
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="products">
              <div className="flex flex-col items-center justify-center py-16">
                <Info className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Coming Soon!</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Our sustainable products marketplace is under development. 
                  Check back soon to discover eco-friendly products with verified sustainability credentials.
                </p>
                <Button className="bg-eco-green hover:bg-eco-green-dark text-white">
                  Notify Me When Available
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
