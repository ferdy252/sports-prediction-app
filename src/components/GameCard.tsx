import React from 'react';
import { Activity, Trophy, TrendingDown, TrendingUp, ArrowRight } from 'lucide-react';
import { Game } from '../types';
import ScorePrediction from './ScorePrediction';
import OddsComparison from './OddsComparison';

type GameCardProps = {
  game: Game;
  onViewDetails: (gameId: number) => void;
};

export default function GameCard({ game, onViewDetails }: GameCardProps) {
  const { homeTeam, awayTeam, prediction, odds } = game;
  const isHighConfidence = prediction.confidence > 70;

  return (
    <div className="bg-gray-800 p-4 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {homeTeam.name} vs {awayTeam.name}
            <Trophy className={isHighConfidence ? "text-yellow-400" : "text-gray-400"} size={20} />
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Activity size={16} />
              Form:
            </span>
            {homeTeam.recentForm.map((result, i) => (
              <span key={i} className={result > 0 ? "text-green-400" : "text-red-400"}>
                {result > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">
            {prediction.confidence}%
          </div>
          <div className="text-sm text-gray-400">Confidence</div>
        </div>
      </div>

      <ScorePrediction predictedScore={prediction.predictedScore} />
      <OddsComparison odds={odds} bookmakerOdds={game.bookmakerOdds} />
      
      <button
        onClick={() => onViewDetails(game.id)}
        className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
      >
        View Full Analysis
        <ArrowRight size={16} />
      </button>
    </div>
  );
}