// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract OurToken is ERC20 {
    // uint public initialSupply = 10;

    constructor (uint initialSupply) ERC20("OurToken", "OT") {
        _mint(msg.sender, initialSupply);
    }
}