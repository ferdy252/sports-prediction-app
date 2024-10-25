import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function FavoriteTeams() {
  const favoriteTeams = [
    {
      name: "Lakers",
      lastGame: "W vs Warriors (112-108)",
      trend: "up",
      nextGame: "vs Suns (Tomorrow)",
    },
    {
      name: "Celtics",
      lastGame: "L vs Bucks (105-110)",
      trend: "down",
      nextGame: "vs Nets (Today)",
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
      {favoriteTeams.map((team, index) => (
        <div key={index} className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">{team.name}</span>
            {team.trend === 'up' ? (
              <TrendingUp className="text-green-400" size={20} />
            ) : (
              <TrendingDown className="text-red-400" size={20} />
            )}
          </div>
          <div className="text-sm text-gray-400">
            <div>{team.lastGame}</div>
            <div>{team.nextGame}</div>
          </div>
        </div>
      ))}
    </div>
  );
}