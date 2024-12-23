import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="font-bold text-xl text-neon">
          RogueEcho
        </Link>
        <Button variant="outline" className="bg-transparent text-neon border-white hover:bg-neon hover:text-black transition-colors">
          Select Wallet
        </Button>
      </div>
    </header>
  )
}

