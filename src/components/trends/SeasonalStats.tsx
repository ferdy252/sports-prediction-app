import React from 'react';
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react';

type SeasonalStatsProps = {
  teams: string[];
};

export default function SeasonalStats({ teams }: SeasonalStatsProps) {
  const stats = {
    [teams[0]]: {
      record: '42-28',
      streak: 'W3',
      lastTen: '7-3',
      homeRecord: '24-11',
      awayRecord: '18-17',
      trend: 'up'
    },
    [teams[1]]: {
      record: '38-32',
      streak: 'L1',
      lastTen: '6-4',
      homeRecord: '22-13',
      awayRecord: '16-19',
      trend: 'down'
    }
  };

  return (
    <div className="space-y-6">
      {teams.map(team => (
        <div key={team} className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {team}
              {stats[team].trend === 'up' ? (
                <TrendingUp className="text-green-400" size={20} />
              ) : (
                <TrendingDown className="text-red-400" size={20} />
              )}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-400">Season Record</div>
              <div className="text-xl font-bold">{stats[team].record}</div>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-400">Current Streak</div>
              <div className="text-xl font-bold">{stats[team].streak}</div>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-400">Last 10 Games</div>
              <div className="text-xl font-bold">{stats[team].lastTen}</div>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <div className="text-sm text-gray-400">Home/Away</div>
              <div className="text-sm font-bold">
                {stats[team].homeRecord} / {stats[team].awayRecord}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}