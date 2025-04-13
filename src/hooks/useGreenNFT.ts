import { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import { connectWallet, getContract } from '@/lib/web3';

export function useGreenNFT() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string>('');
  const [error, setError] = useState<string>('');

  const connect = useCallback(async () => {
    try {
      const { signer } = await connectWallet();
      const address = await signer.getAddress();
      setAccount(address);
      setIsConnected(true);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
      setIsConnected(false);
    }
  }, []);

  const mintNFT = useCallback(async (metadataURI: string) => {
    try {
      const { signer } = await connectWallet();
      const contract = await getContract(signer);
      const tx = await contract.mintNFT(metadataURI);
      await tx.wait();
      return tx.hash;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to mint NFT');
      throw err;
    }
  }, []);

  const getUserNFTs = useCallback(async () => {
    try {
      const { signer } = await connectWallet();
      const contract = await getContract(signer);
      const address = await signer.getAddress();
      const nfts = await contract.getUserNFTs(address);
      return nfts;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch NFTs');
      throw err;
    }
  }, []);

  return {
    isConnected,
    account,
    error,
    connect,
    mintNFT,
    getUserNFTs,
  };
} 