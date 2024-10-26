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
    <div className="glass-card hover-scale p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-xl font-bold flex items-center gap-3">
            {homeTeam.name} vs {awayTeam.name}
            {isHighConfidence && (
              <Trophy className="text-yellow-400 animate-pulse" size={20} />
            )}
          </h2>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Activity size={16} />
              Recent Form:
            </span>
            {homeTeam.recentForm.map((result, i) => (
              <span 
                key={i} 
                className={`flex items-center ${
                  result > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {result > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-green-400">
            {prediction.confidence}%
          </div>
          <div className="text-sm text-gray-400">Confidence</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ScorePrediction predictedScore={prediction.predictedScore} />
        <OddsComparison odds={odds} bookmakerOdds={game.bookmakerOdds} />
      </div>
      
      <button
        onClick={() => onViewDetails(game.id)}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-200 font-semibold"
      >
        View Full Analysis
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
