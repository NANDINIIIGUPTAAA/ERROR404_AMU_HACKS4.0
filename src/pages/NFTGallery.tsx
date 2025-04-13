import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useGreenNFT } from '@/hooks/useGreenNFT';
import { useToast } from '@/components/ui/use-toast';
import { MintNFTModal } from '@/components/MintNFTModal';
import { 
  Filter, 
  Plus, 
  ShoppingBag,
  Wallet,
  BarChart,
  Eye,
  Share2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NFTAttribute {
  trait: string;
  value: string;
}

interface NFT {
  id: string;
  name: string;
  image: string;
  type: string;
  impact: string;
  rarity: string;
  issuedDate: string;
  description: string;
  attributes: NFTAttribute[];
}

// Sample NFT data
const myNfts = [
  {
    id: 1,
    name: "Tree Planter",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400",
    type: "Carbon Offset",
    impact: "500 kg CO2",
    rarity: "Uncommon",
    issuedDate: "Mar 15, 2023",
    description: "This NFT represents 5 trees planted at Woodland Park, sequestering approximately 500kg of CO2 over their lifetime.",
    attributes: [
      { trait: "Project Type", value: "Reforestation" },
      { trait: "Location", value: "Woodland Park" },
      { trait: "Trees Planted", value: "5" },
      { trait: "Species", value: "Mixed Deciduous" }
    ]
  },
  {
    id: 2,
    name: "Energy Saver",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400",
    type: "Renewable Energy",
    impact: "1,250 kWh",
    rarity: "Rare",
    issuedDate: "Jan 28, 2023",
    description: "This NFT represents a commitment to renewable energy, with 1,250 kWh sourced from solar and wind power.",
    attributes: [
      { trait: "Project Type", value: "Renewable Energy" },
      { trait: "Energy Source", value: "Solar & Wind" },
      { trait: "Energy Amount", value: "1,250 kWh" },
      { trait: "CO2 Reduction", value: "875 kg" }
    ]
  },
  {
    id: 3,
    name: "Water Guardian",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400",
    type: "Water Conservation",
    impact: "15,000 gallons",
    rarity: "Uncommon",
    issuedDate: "Feb 10, 2023",
    description: "This NFT represents water conservation efforts through installation of water-efficient fixtures, saving approximately 15,000 gallons yearly.",
    attributes: [
      { trait: "Project Type", value: "Water Conservation" },
      { trait: "Method", value: "Efficient Fixtures" },
      { trait: "Water Saved", value: "15,000 gallons" },
      { trait: "Energy Saved", value: "450 kWh" }
    ]
  },
  {
    id: 4,
    name: "Carbon Reducer",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400",
    type: "Transport",
    impact: "120 kg CO2",
    rarity: "Common",
    issuedDate: "Apr 5, 2023",
    description: "This NFT represents sustainable transportation choices, reducing carbon emissions through cycling and public transit.",
    attributes: [
      { trait: "Project Type", value: "Transport" },
      { trait: "Method", value: "Cycling & Transit" },
      { trait: "Distance", value: "500 km" },
      { trait: "CO2 Avoided", value: "120 kg" }
    ]
  },
];

const NFTGalleryPage = () => {
  const [activeTab, setActiveTab] = useState("my-nfts");
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const { connect: connectWallet, mintNFT, loadNFTs, isConnected, address, nfts: userNfts, isLoading: isNFTLoading } = useGreenNFT();
  const [isMintModalOpen, setIsMintModalOpen] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const { toast } = useToast();
  
  const loadUserNFTs = useCallback(async () => {
    if (!isConnected) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    try {
      await loadNFTs();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to load NFTs",
        variant: "destructive",
      });
    }
  }, [isConnected, loadNFTs, toast]);

  const handleConnectWallet = useCallback(async () => {
    try {
      await connectWallet();
      toast({
        title: "Success",
        description: "Wallet connected successfully!",
      });
      await loadUserNFTs();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to connect wallet",
        variant: "destructive",
      });
    }
  }, [connectWallet, loadUserNFTs, toast]);
  
  const handleNFTClick = (nft: NFT) => {
    setSelectedNFT(nft);
  };
  
  const closeDetails = () => {
    setSelectedNFT(null);
  };

  const handleOpenMintModal = () => {
    if (!isConnected || !address) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }
    setIsMintModalOpen(true);
  };

  const handleCloseMintModal = () => {
    setIsMintModalOpen(false);
  };

  const handleMintNFT = async (data: { name: string; description: string; image: File }) => {
    if (!isConnected) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsMinting(true);
      await mintNFT(data.name, data.description, data.image);
      await loadUserNFTs();
      toast({
        title: "Success",
        description: "NFT minted successfully!",
      });
      setIsMintModalOpen(false);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to mint NFT",
        variant: "destructive",
      });
      console.error(err);
    } finally {
      setIsMinting(false);
    }
  };

  useEffect(() => {
    if (isConnected) {
      loadUserNFTs();
    }
  }, [isConnected, loadUserNFTs]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">NFT Gallery</h1>
              <p className="text-muted-foreground">Your collection of sustainability NFTs</p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              {!isConnected ? (
                <Button 
                  variant="outline" 
                  className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white"
                  onClick={handleConnectWallet}
                >
                  <Wallet className="h-4 w-4 mr-2" />
                  Connect Wallet
                </Button>
              ) : (
                <>
                  <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Marketplace
                  </Button>
                  <Button 
                    className="bg-eco-green hover:bg-eco-green-dark text-white"
                    onClick={handleOpenMintModal}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Mint New NFT
                  </Button>
                </>
              )}
            </div>
          </div>
          
          {/* Gallery Tabs */}
          <Tabs defaultValue="my-nfts" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="bg-muted grid grid-cols-3 w-full max-w-md mb-6">
              <TabsTrigger 
                value="my-nfts" 
                className={activeTab === 'my-nfts' ? "bg-eco-green text-white" : ""}
              >
                My NFTs
              </TabsTrigger>
              <TabsTrigger 
                value="favorite" 
                className={activeTab === 'favorite' ? "bg-eco-green text-white" : ""}
              >
                Favorites
              </TabsTrigger>
              <TabsTrigger 
                value="activity" 
                className={activeTab === 'activity' ? "bg-eco-green text-white" : ""}
              >
                Activity
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="my-nfts">
              {!isConnected ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">Connect your wallet to view your NFTs</p>
                  <Button 
                    variant="outline" 
                    className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white"
                    onClick={handleConnectWallet}
                  >
                    <Wallet className="h-4 w-4 mr-2" />
                    Connect Wallet
                  </Button>
                </div>
              ) : (
                <>
                  {/* Filter and Sort */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="text-eco-green border-eco-green">All</Button>
                      <Button variant="ghost" size="sm">Carbon Offset</Button>
                      <Button variant="ghost" size="sm">Energy</Button>
                      <Button variant="ghost" size="sm">Water</Button>
                      <Button variant="ghost" size="sm">Transport</Button>
                    </div>
                  </div>
                  
                  {/* NFT Gallery Grid */}
                  {isNFTLoading ? (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground">Loading your NFTs...</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {userNfts.map((nft) => (
                        <div 
                          key={nft.id} 
                          className="nft-card cursor-pointer"
                          onClick={() => handleNFTClick(nft)}
                        >
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
                                {nft.issuedDate}
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
                  )}
                </>
              )}
            </TabsContent>
            
            <TabsContent value="favorite">
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">You haven't added any NFTs to your favorites yet.</p>
                <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Browse Marketplace
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="activity">
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No recent activity to display.</p>
                <Button className="bg-eco-green hover:bg-eco-green-dark text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Mint New NFT
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
      
      {/* NFT Details Modal */}
      {selectedNFT && (
        <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-xl max-w-4xl w-full max-h-screen overflow-auto p-6 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">{selectedNFT.name}</h2>
              <Button variant="ghost" size="sm" onClick={closeDetails}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-border">
                  <img
                    src={selectedNFT.image}
                    alt={selectedNFT.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-between mb-4">
                  <div className="verified-badge">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Blockchain Verified</span>
                  </div>
                  
                  <span className="text-xs bg-eco-teal-light/30 text-eco-teal-dark px-2 py-1 rounded-full">
                    {selectedNFT.rarity}
                  </span>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View on Chain
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedNFT.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Environmental Impact</h3>
                  <div className="bg-eco-green/10 p-4 rounded-lg flex items-center">
                    <BarChart className="h-8 w-8 text-eco-green mr-3" />
                    <div>
                      <p className="font-medium">{selectedNFT.impact}</p>
                      <p className="text-sm text-muted-foreground">Verified Positive Impact</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Attributes</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedNFT.attributes.map((attr: any, index: number) => (
                      <div key={index} className="bg-muted rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">{attr.trait}</p>
                        <p className="font-medium">{attr.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Token Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Token ID</span>
                      <span>#{selectedNFT.id}0591</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contract</span>
                      <span className="truncate max-w-[200px]">0x71...8A2f</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issued Date</span>
                      <span>{selectedNFT.issuedDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button className="bg-eco-green hover:bg-eco-green-dark text-white">
                    <Wallet className="h-4 w-4 mr-2" />
                    Transfer NFT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mint NFT Modal */}
      <MintNFTModal 
        isOpen={isMintModalOpen} 
        onClose={() => setIsMintModalOpen(false)}
        onMint={handleMintNFT}
      />
    </div>
  );
};

export default NFTGalleryPage;
