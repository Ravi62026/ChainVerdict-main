const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SolarEnergyTrading", function () {
    let SolarEnergyTrading;
    let contract;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        SolarEnergyTrading = await ethers.getContractFactory("SolarEnergyTrading");
        [owner, addr1, addr2, _] = await ethers.getSigners();
        contract = await SolarEnergyTrading.deploy();
        // await contract.deployed();
    });

    describe("Registration", function () {
        it("Should register a user", async function () {
            await contract.connect(addr1).registerUser();
            const user = await contract.getUser(addr1.address);
            expect(user[0]).to.equal(addr1.address);
        });

        it("Should not allow double registration", async function () {
            await contract.connect(addr1).registerUser();
            await expect(contract.connect(addr1).registerUser()).to.be.revertedWith("User already registered");
        });
    });

    describe("Energy Generation", function () {
        it("Should generate energy for registered user", async function () {
            await contract.connect(addr1).registerUser();
            await contract.connect(addr1).generateEnergy(100);
            const energyBalance = await contract.getEnergyBalance();
            expect(energyBalance).to.equal(100);
        });

        it("Should not generate energy for unregistered user", async function () {
            await expect(contract.connect(addr1).generateEnergy(100)).to.be.revertedWith("User not registered");
        });
    });

    describe("Energy Purchase", function () {
        beforeEach(async function () {
            await contract.connect(addr1).registerUser();
            await contract.connect(addr2).registerUser();
            await contract.connect(addr1).generateEnergy(100);
        });

        it("Should purchase energy from another user", async function () {
            await contract.connect(addr2).purchaseEnergy(addr1.address, 50, { value: ethers.utils.parseEther("0.5") });
            const buyerEnergyBalance = await contract.connect(addr2).getEnergyBalance();
            const sellerEnergyBalance = await contract.connect(addr1).getEnergyBalance();
            expect(buyerEnergyBalance).to.equal(50);
            expect(sellerEnergyBalance).to.equal(50);
        });

        it("Should not purchase energy if seller has insufficient balance", async function () {
            await expect(contract.connect(addr2).purchaseEnergy(addr1.address, 200, { value: ethers.utils.parseEther("2") })).to.be.revertedWith("Seller does not have enough energy");
        });

        it("Should not purchase energy with insufficient funds", async function () {
            await expect(contract.connect(addr2).purchaseEnergy(addr1.address, 50, { value: ethers.utils.parseEther("0.1") })).to.be.revertedWith("Insufficient funds");
        });
    });

    describe("Token Purchase and Withdrawal", function () {
        beforeEach(async function () {
            await contract.connect(addr1).registerUser();
        });

        it("Should purchase tokens", async function () {
            await contract.connect(addr1).purchaseTokens(100, { value: ethers.utils.parseEther("1") });
            const tokenBalance = await contract.connect(addr1).getTokenBalance();
            expect(tokenBalance).to.equal(100);
        });

        it("Should not purchase tokens with insufficient funds", async function () {
            await expect(contract.connect(addr1).purchaseTokens(100, { value: ethers.utils.parseEther("0.5") })).to.be.revertedWith("Insufficient funds");
        });

        it("Should withdraw tokens", async function () {
            await contract.connect(addr1).purchaseTokens(100, { value: ethers.utils.parseEther("1") });
            await contract.connect(addr1).withdrawTokens(50);
            const tokenBalance = await contract.connect(addr1).getTokenBalance();
            const etherBalance = await ethers.provider.getBalance(addr1.address);
            expect(tokenBalance).to.equal(50);
            expect(etherBalance).to.be.above(ethers.utils.parseEther("99")); // Assuming initial balance was 100 ETH
        });

        it("Should not withdraw more tokens than balance", async function () {
            await contract.connect(addr1).purchaseTokens(100, { value: ethers.utils.parseEther("1") });
            await expect(contract.connect(addr1).withdrawTokens(200)).to.be.revertedWith("Insufficient token balance");
        });
    });

    describe("Receive Ether", function () {
        beforeEach(async function () {
            await contract.connect(addr1).registerUser();
        });

        it("Should purchase tokens on receiving Ether", async function () {
            await addr1.sendTransaction({
                to: contract.address,
                value: ethers.utils.parseEther("1")
            });
            const tokenBalance = await contract.connect(addr1).getTokenBalance();
            expect(tokenBalance).to.equal(100);
        });
    });
});
