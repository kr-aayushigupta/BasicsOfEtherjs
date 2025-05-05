const {ethers}=require ("ethers");

const INFURA_ID = 'e7d8fbaa1257430fafc117c84e2a5db3'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const queryblockchain= async() =>{
    // const block=await provider.getBlockNumber();
    // console.log("Current block number is :",block);

    const balance=await provider.getBalance("0x2C82D9F451A7A3FB2890199b68E09c5Fa4812952");
    console.log("Balance of the account in (Bignumber):",balance);
   
    const balanceineth=ethers.utils.formatEther(balance);
    console.log("Balance of the account in ether :",balanceineth);

    const balanceinwei=ethers.utils.parseEther(balanceineth);
    console.log("Balance of the account in wei :",balanceinwei);
}

queryblockchain();