import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { GameStatus } from '@/components/game-status'

export default function Home() {
  return (
    <main className="flex flex-col gap-16 py-16">
      <section className="container px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-neon">RogueEcho</h1>
        <p className="text-xl text-gray-300 mb-12">
          The first open-source decentralized app where orgs test their language models and their interaction with other language models while detectives earn rewards for breaking them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-black border border-white p-6">
            <h3 className="text-neon mb-2 text-lg">TOTAL PAYOUT</h3>
            <p className="text-3xl font-bold">$115,115</p>
          </Card>
          <Card className="bg-black border border-white p-6">
            <h3 className="text-neon mb-2 text-lg">TOTAL REVENUE</h3>
            <p className="text-3xl font-bold">$49,335</p>
          </Card>
          <Card className="bg-black border border-white p-6">
            <h3 className="text-neon mb-2 text-lg">BREAK ATTEMPTS</h3>
            <p className="text-3xl font-bold">2,305</p>
          </Card>
        </div>
        <Button asChild className="bg-transparent text-neon border border-white hover:bg-neon hover:text-black transition-colors px-8 py-3 text-lg">
          <Link href="/agents">START BREAKING</Link>
        </Button>
      </section>

      <section className="container px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-neon">Game Status</h2>
        <GameStatus stage="bidding" />
      </section>
    </main>
  )
}

