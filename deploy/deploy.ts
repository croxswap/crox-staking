import { Contract, ContractFactory } from "ethers";
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function deploy() {
  const rewardAddress = "0x34d77382Ddf3D9DB19b195e5D25771BD07dcC898";
  const feeAddress = "0xabF2fc8C90E8B8975643997b78a2305243313b59";
  const devAddress = "0xb6a1efbf0f2665c10899c85ae59255fb81d903f8";

  console.log("===========1");
  const CroxToken: ContractFactory = await ethers.getContractFactory("MainToken");
  const croxToken: Contract = await CroxToken.deploy();
  console.log("CROX token deployed to: ", croxToken.address);

  console.log("===========2");
  const MasterChef: ContractFactory = await ethers.getContractFactory("MasterChef");

  const masterchef: Contract = await MasterChef.deploy(
    croxToken.address,
    devAddress,
    feeAddress,
    rewardAddress,
    0,
    "500000000000000000",
  );

  console.log("===========3");
  await masterchef.deployed();

  console.log("MasterChef deployed to: ", masterchef.address);
}

async function main(): Promise<void> {
  await deploy();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
