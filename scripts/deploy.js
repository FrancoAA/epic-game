
const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  // Initialize the contract with the characters
  const gameContract = await gameContractFactory.deploy(
    ["Capitan Fort", "Don Carlos", "Peron"],       // Names
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2009_Ricardo_Fort.jpg/480px-2009_Ricardo_Fort.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Menem_con_banda_presidencial.jpg/440px-Menem_con_banda_presidencial.jpg", 
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Juan_Peron_con_banda_de_presidente.jpg"],
    [100, 1, 300],                    // HP values
    [100, 50, 25],                       // Attack damage values
    "CFK", // Boss name
    "https://cdn.cienradios.com/wp-content/uploads/sites/28/2020/10/Cristina-Kirchner-La-voz.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
    );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();