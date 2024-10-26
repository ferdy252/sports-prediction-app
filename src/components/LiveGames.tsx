import React from 'react';
import { Game } from '../types';

type LiveGamesProps = {
  games: Game[];
};

export default function LiveGames({ games }: LiveGamesProps) {
  return (
    <div className="space-y-4">
      {games.map((game) => (
        <div key={game.id} className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-red-400 animate-pulse flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              LIVE
            </div>
            <div className="text-sm text-gray-400">
              Q{game.quarter} {game.timeLeft}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="font-semibold">{game.homeTeam.name}</span>
                <span className="text-2xl font-bold text-white">
                  {game.currentScore?.home}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold">{game.awayTeam.name}</span>
                <span className="text-2xl font-bold text-white">
                  {game.currentScore?.away}
                </span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-400">Win Probability</div>
              <div className="text-xl font-bold text-green-400">
                {game.prediction.confidence}%
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}