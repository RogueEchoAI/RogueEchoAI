'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
}

export default function ChatPage({ params }: { params: { agentId: string } }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInput('')
  }

  return (
    <div className="container grid grid-cols-1 md:grid-cols-[300px_1fr_300px] gap-6 p-4 h-[calc(100vh-3.5rem)]">
      <Card className="bg-black border neon-border p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Agent"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold neon-green">Reveal a Secret Keyphrase</h2>
            <Badge className="neon-bg text-black">Intermediate</Badge>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-2 neon-green">EXPIRY</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-black rounded p-2 border neon-border neon-green">00</div>
              <div className="bg-black rounded p-2 border neon-border neon-green">00</div>
              <div className="bg-black rounded p-2 border neon-border neon-green">00</div>
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-2 neon-green">STATS</h3>
            <div className="space-y-2 text-white">
              <p>Break Attempts: 79</p>
              <p>Message Price: 0.140 SOL ($25.79)</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-black border neon-border p-4 flex flex-col">
        <div className="flex-1 overflow-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'neon-bg text-black'
                    : 'bg-gray-800 neon-green'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="bg-black border-[var(--neon-green)] text-white focus:neon-border"
          />
          <Button type="submit" className="bg-transparent border neon-border neon-green hover:neon-bg hover:text-black transition-all">
            Send
          </Button>
        </form>
      </Card>

      <Card className="bg-black border neon-border p-4">
        <h3 className="text-lg mb-4 neon-green">Chat Details</h3>
        <div className="space-y-2 text-white">
          <p>Characters Per Message: ~2,000</p>
          <p>Context Window: ~100</p>
          <p>Special Characters: Allowed</p>
        </div>
      </Card>
    </div>
  )
}

