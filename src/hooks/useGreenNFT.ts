import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { NFTStorage } from 'nft.storage';

const NFT_STORAGE_KEY = process.env.REACT_APP_NFT_STORAGE_KEY || '';
const CONTRACT_ADDRESS = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

const contractABI = [
  "function mint(string memory tokenURI) public returns (uint256)",
  "function tokenURI(uint256 tokenId) public view returns (string memory)",
  "function balanceOf(address owner) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"
];

export function useGreenNFT() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [address, setAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [nfts, setNfts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);

      const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);
      setContract(contract);

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', () => window.location.reload());

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length === 0) {
      setIsConnected(false);
      setAddress('');
      setSigner(null);
    } else {
      setAddress(accounts[0]);
      setIsConnected(true);
    }
  };

  const connect = async () => {
    if (!provider) return;

    try {
      const accounts = await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      setSigner(signer);
      setAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const mintNFT = async (name: string, description: string, image: File) => {
    if (!signer || !contract) throw new Error('Wallet not connected');

    setIsLoading(true);
    try {
      // Upload to IPFS
      const nftStorage = new NFTStorage({ token: NFT_STORAGE_KEY });
      const metadata = await nftStorage.store({
        name,
        description,
        image,
      });

      // Mint NFT
      const connectedContract = contract.connect(signer);
      const tx = await connectedContract.mint(metadata.url);
      await tx.wait();

      // Refresh NFTs
      await loadNFTs();

      return tx;
    } finally {
      setIsLoading(false);
    }
  };

  const loadNFTs = async () => {
    if (!contract || !address) return;

    setIsLoading(true);
    try {
      const balance = await contract.balanceOf(address);
      const nfts = [];

      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(address, i);
        const tokenURI = await contract.tokenURI(tokenId);
        const metadata = await fetch(tokenURI).then(res => res.json());
        nfts.push({
          id: tokenId.toString(),
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        });
      }

      setNfts(nfts);
    } catch (error) {
      console.error('Error loading NFTs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    connect,
    mintNFT,
    loadNFTs,
    isConnected,
    address,
    nfts,
    isLoading,
  };
} 