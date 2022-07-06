const { network, ethers, getNamedAccounts, deployments } = require("hardhat")
const {initialAmount} = require("../helper-hardhat-config")


module.exports = async function () {
	const { deploy, log } = deployments
	const { deployer } = await getNamedAccounts()
	// const chainId = network.config.chainId
	

	log("Starting contract deploy.....")
	const token = await deploy("OurToken", {
		from: deployer,
		log: true,
		args: [initialAmount],
        waitConfirmations: network.config.blockConfirmations || 1
	})
}

module.exports.tags = ["all","OurToken"]