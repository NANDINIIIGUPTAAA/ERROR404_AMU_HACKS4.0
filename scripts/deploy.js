const hre = require("hardhat");

async function main() {
  const GreenNFT = await hre.ethers.getContractFactory("GreenNFT");
  const greenNFT = await GreenNFT.deploy();

  console.log("Deploying contract...");
  await greenNFT.waitForDeployment();

  const address = await greenNFT.getAddress();
  console.log("GreenNFT deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
