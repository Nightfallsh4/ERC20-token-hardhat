const { assert, expect } = require("chai")
const { network, getNamedAccounts, deployments, ethers } = require("hardhat")

const { initialAmount } = require("../helper-hardhat-config")
const { log } = deployments
require("@nomiclabs/hardhat-waffle")

describe("OurToken Unit tests", function () {
	let Token, deployer
	beforeEach(async function () {
		const accounts = await getNamedAccounts()
        deployer = accounts.deployer
        console.log(deployer)
		// const transactionResponse = await deployments.fixture(["all"])
		// console.log(transactionResponse.OurToken)
		const tokenContract = await ethers.getContractFactory("OurToken")
		Token = await tokenContract.deploy(initialAmount)
		// log(ourToken)
		console.log(Token)
	})

	describe("Contructor parameters", function () {
        it("Checks if initial supply is correct", async function () {
			const currentBalance = await Token.balanceOf(deployer)
			assert.equal(currentBalance.toString(), initialAmount.toString())
		})
	})
})
