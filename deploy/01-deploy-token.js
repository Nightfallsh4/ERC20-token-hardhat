const { network, ethers } = require("hardhat")

module.exports = async function ({ getNamedAccounts, deployments }) {
	const { deploy, log } = deployments
	const { deployer } = await getNamedAccounts()
	// const chainId = network.config.chainId
	const inititalSupply = 1e18

	log("Starting contract deploy.....")
	const token = await deploy("OurToken", {
		from: deployer,
		log: true,
		args: [inititalSupply.toString()],
        waitConfirmations: network.config.blockConfirmations || 1
	})
}
