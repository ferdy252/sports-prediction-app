import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { Game } from '../../types';
import GameCard from '../GameCard';

type TopPredictionsProps = {
  games: Game[];
  onViewDetails: (gameId: number) => void;
};

export default function TopPredictions({ games, onViewDetails }: TopPredictionsProps) {
  const highConfidenceGames = games
    .filter(game => game.prediction.confidence > 65)
    .sort((a, b) => b.prediction.confidence - a.prediction.confidence);

  return (
    <div className="space-y-6">
      {highConfidenceGames.length > 0 ? (
        highConfidenceGames.map(game => (
          <GameCard
            key={game.id}
            game={game}
            onViewDetails={onViewDetails}
          />
        ))
      ) : (
        <div className="flex items-center justify-center gap-3 text-gray-400 py-8">
          <AlertTriangle size={24} />
          <span>No high confidence predictions available</span>
        </div>
      )}
    </div>
  );
}