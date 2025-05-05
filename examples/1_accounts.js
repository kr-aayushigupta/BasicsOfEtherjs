// Read an accounts balance
// getBalance() method


const { ethers } = require("ethers");

const INFURA_ID = 'e7d8fbaa1257430fafc117c84e2a5db3'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'
const address = '0xC5Fe379198AB22B5B63bAc95107598371b69231E'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

// User Profile Smart Contract: This contract will manage user profiles, including World ID and user-specific data. It will assign unique identifiers to users and store profile data off-chain to ensure anonymity while still maintaining integrity and security. It also stores information about the referrals made by each user. This additional functionality allows the platform to track and attribute referrals to specific users accurately. By storing referral information on-chain, SurveyBull ensures transparency and integrity while incentivizing users to grow the platform's user base through referrals.