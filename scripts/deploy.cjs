const hre = require("hardhat");

async function main() {
  const GreenNFT = await hre.ethers.getContractFactory("GreenNFT");
  const nft = await GreenNFT.deploy();
  await nft.waitForDeployment();

  const address = await nft.getAddress();
  console.log("GreenNFT deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 