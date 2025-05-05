const { ethers } = require("ethers");

const INFURA_ID = 'e7d8fbaa1257430fafc117c84e2a5db3'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = '0xC5Fe379198AB22B5B63bAc95107598371b69231E' // Your account address 1
const account2 = '0x9Ab8a5A0568C5FCD5487dfA011f7A827dA9A5C71' // Your account address 2

const privateKey1 = '9200fd74898449a62bd01ba803036caa6c175185d3caa7c5fb2e928c60ed1281' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider) // Important wallet - ethers wallet instance is being created

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    // =================================
    // Performing the transaction
    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025") //enter amount you want to send to account 2
    })

    await tx.wait() // we wait to transaction to finish- actually get mined on the blockchain
    console.log(tx)
    // ==========================================
    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()