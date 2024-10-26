import React from 'react';
import { Game } from '../../types';
import { Calendar, Clock } from 'lucide-react';

type ScheduleGridProps = {
  games: Game[];
  onViewDetails: (gameId: number) => void;
};

export default function ScheduleGrid({ games, onViewDetails }: ScheduleGridProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {games.map(game => (
        <div
          key={game.id}
          onClick={() => onViewDetails(game.id)}
          className="glass-card p-4 hover:scale-[1.02] transition-transform cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-blue-400">{game.league}</span>
            <span className={`text-sm font-medium px-2 py-1 rounded ${
              game.status === 'live' ? 'bg-red-500/20 text-red-400' :
              game.status === 'upcoming' ? 'bg-green-500/20 text-green-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {game.status.toUpperCase()}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{game.homeTeam.name}</span>
              {game.currentScore && (
                <span className="text-xl font-bold">{game.currentScore.home}</span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{game.awayTeam.name}</span>
              {game.currentScore && (
                <span className="text-xl font-bold">{game.currentScore.away}</span>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-700/50 flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(game.startTime)}</span>
            </div>
            {game.timeLeft && (
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Q{game.quarter} - {game.timeLeft}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}