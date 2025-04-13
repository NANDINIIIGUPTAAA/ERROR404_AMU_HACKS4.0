const hre = require("hardhat");

async function main() {
  const GreenNFT = await hre.ethers.getContractFactory("GreenNFT");
  const nft = await GreenNFT.deploy();
  await nft.deployed();

  console.log("GreenNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 