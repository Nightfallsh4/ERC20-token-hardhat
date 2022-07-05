// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract ManualToken {
    mapping(address => uint256) public balanceOf;


    function _transfer(address from, address to, uint amount) public {
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
    }
}