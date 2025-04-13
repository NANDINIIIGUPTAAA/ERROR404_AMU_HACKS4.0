import { ethers } from 'ethers';

export const CONTRACT_ADDRESS = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

const abi = [
  "function mint(string memory tokenURI) public returns (uint256)",
  "function tokenURI(uint256 tokenId) public view returns (string memory)",
  "function tokensOfOwner(address owner) public view returns (uint256[] memory)",
  "function ownerOf(uint256 tokenId) public view returns (address)"
];

export const getContract = (provider: ethers.Provider) => {
  return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
};

export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return { provider, signer };
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      throw error;
    }
  } else {
    throw new Error('Please install MetaMask or another Web3 wallet');
  }
};

// Add TypeScript declarations for window.ethereum
declare global {
  interface Window {
    ethereum: any;
  }
} 