const BCC721 = artifacts.require('BCC721.sol');

contract('BCC721', function ([creator, ...accounts]) {
    const name = "BCC721";
    const tokenId = 1;

    it("...is going to confirm the token name and tokenId.", async () => {
        const bcc721Instance = await BCC721.deployed();
        let tokenName = await bcc721Instance.name();
        let owner = await bcc721Instance.ownerOf(tokenId);

        assert.equal(tokenName, name, "Name isn't the same.");
        assert.equal(creator, owner, "Account isn't the same.");
    });
});