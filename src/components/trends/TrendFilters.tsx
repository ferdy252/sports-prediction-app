import React from 'react';
import { ChevronDown } from 'lucide-react';

type TrendFiltersProps = {
  selectedTeams: string[];
  onTeamChange: (teams: string[]) => void;
  metric: string;
  onMetricChange: (metric: string) => void;
};

const teams = [
  'Lakers', 'Warriors', 'Celtics', 'Heat', 'Bucks',
  'Suns', 'Nets', '76ers', 'Nuggets', 'Clippers'
];

const metrics = [
  { id: 'wins', label: 'Win Rate' },
  { id: 'points', label: 'Points Scored' },
  { id: 'efficiency', label: 'Offensive Efficiency' },
  { id: 'defense', label: 'Defensive Rating' }
];

export default function TrendFilters({
  selectedTeams,
  onTeamChange,
  metric,
  onMetricChange
}: TrendFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="relative">
        <select
          value={selectedTeams[0]}
          onChange={(e) => onTeamChange([e.target.value, selectedTeams[1]])}
          className="appearance-none bg-gray-700 text-white px-4 py-2 pr-8 rounded focus:ring-2 focus:ring-blue-400"
        >
          {teams.map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      </div>

      <div className="relative">
        <select
          value={selectedTeams[1]}
          onChange={(e) => onTeamChange([selectedTeams[0], e.target.value])}
          className="appearance-none bg-gray-700 text-white px-4 py-2 pr-8 rounded focus:ring-2 focus:ring-blue-400"
        >
          {teams.map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      </div>

      <div className="relative ml-auto">
        <select
          value={metric}
          onChange={(e) => onMetricChange(e.target.value)}
          className="appearance-none bg-gray-700 text-white px-4 py-2 pr-8 rounded focus:ring-2 focus:ring-blue-400"
        >
          {metrics.map(({ id, label }) => (
            <option key={id} value={id}>{label}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      </div>
    </div>
  );
}