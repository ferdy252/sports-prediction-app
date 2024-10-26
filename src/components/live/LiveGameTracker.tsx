import React from 'react';
import { Activity, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { Game } from '../../types';

type LiveGameTrackerProps = {
  game: Game;
};

export default function LiveGameTracker({ game }: LiveGameTrackerProps) {
  const { homeTeam, awayTeam, currentScore, quarter, timeLeft } = game;

  const getScoreTrend = (team: 'home' | 'away') => {
    if (!currentScore) return null;
    const diff = team === 'home' 
      ? currentScore.home - currentScore.away
      : currentScore.away - currentScore.home;
    return diff > 0 ? TrendingUp : TrendingDown;
  };

  const HomeTrend = getScoreTrend('home');
  const AwayTrend = getScoreTrend('away');

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="text-red-400 animate-pulse" />
          <span className="text-red-400 font-semibold">LIVE</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={18} />
          <span>Q{quarter} - {timeLeft}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">{homeTeam.name}</span>
            {HomeTrend && <HomeTrend className="text-green-400" size={20} />}
          </div>
          <span className="text-2xl font-bold">{currentScore?.home}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">{awayTeam.name}</span>
            {AwayTrend && <AwayTrend className="text-red-400" size={20} />}
          </div>
          <span className="text-2xl font-bold">{currentScore?.away}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Win Probability</span>
          <span className="text-xl font-bold text-green-400">
            {game.prediction.confidence}%
          </span>
        </div>
      </div>
    </div>
  );
}