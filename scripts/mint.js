const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  // 👇 Replace with your deployed contract address
  const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

  // 👇 Replace with your metadata IPFS URL (after uploading the JSON)
  const metadataURI = "ipfs://bafyYourMetadataCID";

  const GreenNFT = await ethers.getContractAt("GreenNFT", contractAddress);

  console.log("Minting NFT to:", deployer.address);
  const tx = await GreenNFT.mintNFT(deployer.address, metadataURI);
  await tx.wait();

  console.log("✅ NFT Minted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
