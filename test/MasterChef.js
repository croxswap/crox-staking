const { assert } = require('chai');
const hre = require('hardhat')
const MasterChefArt = hre.artifacts.require("MasterChef");

const unlockAccount = async (address) => {
  await hre.network.provider.send("hardhat_impersonateAccount", [address]);
  return hre.ethers.provider.getSigner(address);
};

describe("MasterChef", function () {
  const fomo = "0x5EEF8c4320e2Bf8D1e6231A31500FD7a87D02985";
  const devaddr = "";
  const taxaddr = "";


  before("Deploy contract", async function () {
    const MasterChef = await MasterChefArt.new(fomo, devaddr, taxaddr, "10000000000000000000", "0", "9098653", 2);
    console.log("MasterChef deployed: ", MasterChef.address);
  });

  // beforeEach(async function () {
  //   this.sushi = await this.SushiToken.deploy(fomo, devaddr, taxaddr, "10000000000000000000", "0", "9098653", 2);
  //   await this.sushi.deployed();
  // });

  // it("should set correct state variables", async function () {
  //   this.chef = await this.MasterChef.deploy(this.sushi.address, this.dev.address, "1000", "0", "1000");
  //   await this.chef.deployed();

  //   await this.sushi.transferOwnership(this.chef.address);

  //   const sushi = await this.chef.sushi();
  //   const devaddr = await this.chef.devaddr();
  //   const owner = await this.sushi.owner();

  //   expect(sushi).to.equal(this.sushi.address);
  //   expect(devaddr).to.equal(this.dev.address);
  //   expect(owner).to.equal(this.chef.address);
  // });

  // context("With ERC/LP token added to the field", function () {
  //   beforeEach(async function () {
  //     this.lp = await this.ERC20Mock.deploy("LPToken", "LP", "10000000000");

  //     await this.lp.transfer(this.alice.address, "1000");

  //     await this.lp.transfer(this.bob.address, "1000");

  //     await this.lp.transfer(this.carol.address, "1000");

  //     this.lp2 = await this.ERC20Mock.deploy("LPToken2", "LP2", "10000000000");

  //     await this.lp2.transfer(this.alice.address, "1000");

  //     await this.lp2.transfer(this.bob.address, "1000");

  //     await this.lp2.transfer(this.carol.address, "1000");
  //   });

  //   it("should allow emergency withdraw", async function () {
  //     // 100 per block farming rate starting at block 100 with bonus until block 1000
  //     this.chef = await this.MasterChef.deploy(this.sushi.address, this.dev.address, "100", "100", "1000");
  //     await this.chef.deployed();

  //     await this.chef.add("100", this.lp.address, true);

  //     await this.lp.connect(this.bob).approve(this.chef.address, "1000");

  //     await this.chef.connect(this.bob).deposit(0, "100");

  //     expect(await this.lp.balanceOf(this.bob.address)).to.equal("900");

  //     await this.chef.connect(this.bob).emergencyWithdraw(0);

  //     expect(await this.lp.balanceOf(this.bob.address)).to.equal("1000");
  //   });
  // });
});
