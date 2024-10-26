import React from 'react';
import { GameFilters, League } from '../../types';

type ScheduleFiltersProps = {
  filters: GameFilters;
  onFilterChange: (filters: GameFilters) => void;
};

const LEAGUES: League[] = ['NBA', 'NFL', 'NCAAF'];
const DATE_RANGES = [
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' }
];
const STATUS_OPTIONS = [
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'live', label: 'Live' },
  { value: 'finished', label: 'Finished' }
];

export default function ScheduleFilters({ filters, onFilterChange }: ScheduleFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4 glass-card">
      <div className="space-y-1">
        <label className="text-sm text-gray-400">League</label>
        <div className="flex gap-2">
          {LEAGUES.map(league => (
            <button
              key={league}
              onClick={() => onFilterChange({
                ...filters,
                league: filters.league === league ? undefined : league
              })}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filters.league === league
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {league}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-gray-400">Date Range</label>
        <div className="flex gap-2">
          {DATE_RANGES.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onFilterChange({ ...filters, dateRange: value as any })}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filters.dateRange === value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-gray-400">Status</label>
        <div className="flex gap-2">
          {STATUS_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onFilterChange({ ...filters, status: value as any })}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filters.status === value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}