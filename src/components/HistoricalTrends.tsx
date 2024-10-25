import React, { useState } from 'react';
import { Calendar, Filter, TrendingUp } from 'lucide-react';
import ComparisonChart from './trends/ComparisonChart';
import TrendFilters from './trends/TrendFilters';
import PerformanceMetrics from './trends/PerformanceMetrics';
import SeasonalStats from './trends/SeasonalStats';

type TimeRange = '1M' | '3M' | '6M' | '1Y' | 'ALL';
type MetricType = 'wins' | 'points' | 'efficiency' | 'defense';

export default function HistoricalTrends() {
  const [selectedTeams, setSelectedTeams] = useState<string[]>(['Lakers', 'Warriors']);
  const [timeRange, setTimeRange] = useState<TimeRange>('3M');
  const [metric, setMetric] = useState<MetricType>('points');
  
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <TrendingUp className="text-blue-400" />
          Historical Trends
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar size={20} />
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as TimeRange)}
              className="bg-gray-700 border-none rounded px-3 py-1"
            >
              <option value="1M">Last Month</option>
              <option value="3M">Last 3 Months</option>
              <option value="6M">Last 6 Months</option>
              <option value="1Y">Last Year</option>
              <option value="ALL">All Time</option>
            </select>
          </div>
          <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            <Filter size={20} />
            Advanced Filters
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Team Comparison</h2>
            <TrendFilters
              selectedTeams={selectedTeams}
              onTeamChange={setSelectedTeams}
              metric={metric}
              onMetricChange={setMetric}
            />
            <div className="mt-6">
              <ComparisonChart
                teams={selectedTeams}
                metric={metric}
                timeRange={timeRange}
              />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
            <PerformanceMetrics teams={selectedTeams} timeRange={timeRange} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Seasonal Stats</h2>
            <SeasonalStats teams={selectedTeams} />
          </div>
        </div>
      </div>
    </div>
  );
}