import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useGreenNFT } from '@/hooks/useGreenNFT';
import { NFTStorage } from 'nft.storage';

interface MintNFTModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NFT_STORAGE_KEY = ''; // Add your NFT.Storage API key here

const MintNFTModal: React.FC<MintNFTModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: '',
    impact: '',
    image: null as File | null,
  });
  const [isUploading, setIsUploading] = useState(false);
  
  const { mintNFT } = useGreenNFT();
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.image) {
      toast({
        title: "Error",
        description: "Please select an image for your NFT",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);
      
      // Upload to IPFS using NFT.Storage
      const client = new NFTStorage({ token: NFT_STORAGE_KEY });
      const metadata = await client.store({
        name: formData.name,
        description: formData.description,
        image: formData.image,
        properties: {
          type: formData.type,
          impact: formData.impact,
          timestamp: new Date().toISOString(),
        },
      });

      // Mint NFT with the IPFS metadata URI
      const tx = await mintNFT(metadata.url);
      
      toast({
        title: "Success",
        description: "Your NFT has been minted successfully!",
      });
      
      onClose();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to mint NFT. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl max-w-lg w-full p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Mint New NFT</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Input
              id="type"
              value={formData.type}
              onChange={e => setFormData(prev => ({ ...prev, type: e.target.value }))}
              placeholder="e.g., Carbon Offset, Energy, Water"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="impact">Impact</Label>
            <Input
              id="impact"
              value={formData.impact}
              onChange={e => setFormData(prev => ({ ...prev, impact: e.target.value }))}
              placeholder="e.g., 500 kg CO2, 1,250 kWh"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose} disabled={isUploading}>
              Cancel
            </Button>
            <Button type="submit" className="bg-eco-green hover:bg-eco-green-dark text-white" disabled={isUploading}>
              {isUploading ? 'Minting...' : 'Mint NFT'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MintNFTModal; 