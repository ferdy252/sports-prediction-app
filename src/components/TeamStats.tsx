import React from 'react';
import { Team } from '../types';
import { Activity, Users, Percent } from 'lucide-react';

type TeamStatsProps = {
  team: Team;
};

export default function TeamStats({ team }: TeamStatsProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{team.name} Stats</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <Activity size={20} />
            Average Score
          </div>
          <div className="text-xl font-bold">{team.avgScore.toFixed(1)}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <Users size={20} />
            Active Players
          </div>
          <div className="text-xl font-bold">
            {team.injuries ? `${12 - team.injuries.length}/12` : '12/12'}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <Percent size={20} />
            Win Rate (Last 5)
          </div>
          <div className="text-xl font-bold">
            {(team.recentForm.filter(result => result > 0).length / 5 * 100).toFixed(0)}%
          </div>
        </div>

        {team.injuries && team.injuries.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Injuries</h3>
            <ul className="space-y-1">
              {team.injuries.map((injury, index) => (
                <li key={index} className="text-red-400 text-sm">{injury}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}