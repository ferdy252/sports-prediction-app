import React, { useState } from 'react';
import { Calendar, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Game, League, GameFilters } from '../../types';
import ScheduleFilters from './ScheduleFilters';
import ScheduleGrid from './ScheduleGrid';

type GameScheduleProps = {
  games: Game[];
  onViewDetails: (gameId: number) => void;
};

export default function GameSchedule({ games, onViewDetails }: GameScheduleProps) {
  const [filters, setFilters] = useState<GameFilters>({
    league: undefined,
    team: '',
    dateRange: 'week',
    status: 'upcoming'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [currentWeek, setCurrentWeek] = useState(1);

  const filteredGames = games.filter(game => {
    if (filters.league && game.league !== filters.league) return false;
    if (filters.team && 
        !game.homeTeam.name.toLowerCase().includes(filters.team.toLowerCase()) &&
        !game.awayTeam.name.toLowerCase().includes(filters.team.toLowerCase())) {
      return false;
    }
    if (searchQuery && 
        !game.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !game.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.status && game.status !== filters.status) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Calendar className="text-blue-400" />
            Game Schedule
          </h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentWeek(prev => Math.max(1, prev - 1))}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-lg font-semibold">Week {currentWeek}</span>
            <button 
              onClick={() => setCurrentWeek(prev => prev + 1)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <ScheduleFilters
        filters={filters}
        onFilterChange={setFilters}
      />

      <ScheduleGrid
        games={filteredGames}
        onViewDetails={onViewDetails}
      />
    </div>
  );
}