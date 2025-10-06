import { client } from './client'
import contractAbi from './abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`

export async function getMessage() {
  const data = await client.readContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'getMessage',
  })
  return data
}