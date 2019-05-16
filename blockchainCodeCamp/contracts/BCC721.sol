pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract BCC721 is ERC721Full {
    constructor(
        string memory name, 
        string memory symbol,
        uint tokenId,
        string memory tokenURI
    )
        ERC721Full(name, symbol)
        public
    {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}