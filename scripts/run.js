const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  // Initialize the contract with the characters
  const gameContract = await gameContractFactory.deploy(
    ["Capitan Fort", "Don Carlos", "Peron"],       // Names
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2009_Ricardo_Fort.jpg/480px-2009_Ricardo_Fort.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Menem_con_banda_presidencial.jpg/440px-Menem_con_banda_presidencial.jpg", 
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Juan_Peron_con_banda_de_presidente.jpg"],
    [100, 200, 300],                    // HP values
    [100, 50, 25]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {   process.exit(1);
  }
};

runMain();