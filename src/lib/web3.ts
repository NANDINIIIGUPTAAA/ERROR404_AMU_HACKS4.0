import { ethers } from 'ethers';
import GreenNFTArtifact from '../../artifacts/contracts/GreenNFT.sol/GreenNFT.json';

export const CONTRACT_ADDRESS = ''; // Will be filled after deployment

export async function connectWallet() {
  if (typeof window.ethereum === 'undefined') {
    throw new Error('Please install MetaMask to use this application');
  }

  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return { provider, signer };
  } catch (error) {
    console.error('Error connecting to wallet:', error);
    throw error;
  }
}

export async function getContract(signer: ethers.Signer | null = null) {
  if (!CONTRACT_ADDRESS) {
    throw new Error('Contract address not set');
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  return new ethers.Contract(
    CONTRACT_ADDRESS,
    GreenNFTArtifact.abi,
    signer || provider
  );
}

// Add type declarations for window.ethereum
declare global {
  interface Window {
    ethereum: any;
  }
} 