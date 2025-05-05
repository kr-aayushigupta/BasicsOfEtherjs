const { ethers } = require("ethers");

const INFURA_ID = 'e7d8fbaa1257430fafc117c84e2a5db3'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = '0xC5Fe379198AB22B5B63bAc95107598371b69231E' // Your account address 1
const account2 = '0x9Ab8a5A0568C5FCD5487dfA011f7A827dA9A5C71' // Your account address 2

const privateKey1 = '9200fd74898449a62bd01ba803036caa6c175185d3caa7c5fb2e928c60ed1281' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)
// ==========================================================
const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0xd38E5c25935291fFD51C9d66C3B7384494bb099A'

// ===========================================================
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)
// ====================================
    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()
// ====================================
    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()