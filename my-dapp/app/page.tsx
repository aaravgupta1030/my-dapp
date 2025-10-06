'use client'

import { useState, useEffect } from 'react'
import { getMessage } from '../utils/contract'

export default function Home() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMessage() {
      try {
        const msg = await getMessage()
        setMessage(msg as string)
      } catch (error) {
        console.error('Error fetching message:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMessage()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">My Smart Contract dApp</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="text-2xl p-8 border rounded-lg">
            <p className="text-gray-600 mb-2">Contract Message:</p>
            <p className="font-bold">{message}</p>
          </div>
        )}
      </div>
    </main>
  )
}