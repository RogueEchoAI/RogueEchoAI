import { Card } from '@/components/ui/card'

type GameStage = 'about-to-start' | 'bidding' | 'ongoing'

interface GameStatusProps {
  stage: GameStage
}

export function GameStatus({ stage }: GameStatusProps) {
  const getStatusText = (stage: GameStage) => {
    switch (stage) {
      case 'about-to-start':
        return 'Game is about to start'
      case 'bidding':
        return 'Bidding stage is in progress'
      case 'ongoing':
        return 'Game is ongoing'
    }
  }

  return (
    <Card className="bg-black border border-white p-6">
      <p className="text-xl text-neon">{getStatusText(stage)}</p>
    </Card>
  )
}

