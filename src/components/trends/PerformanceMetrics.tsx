import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type PerformanceMetricsProps = {
  teams: string[];
  timeRange: string;
};

export default function PerformanceMetrics({ teams, timeRange }: PerformanceMetricsProps) {
  const metrics = [
    { name: 'Win Rate', [teams[0]]: 65, [teams[1]]: 58 },
    { name: 'Points/Game', [teams[0]]: 112, [teams[1]]: 108 },
    { name: 'Rebounds', [teams[0]]: 44, [teams[1]]: 46 },
    { name: 'Assists', [teams[0]]: 25, [teams[1]]: 27 },
    { name: 'Steals', [teams[0]]: 8, [teams[1]]: 7 }
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={metrics}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
          />
          <Bar dataKey={teams[0]} fill="#4ade80" />
          <Bar dataKey={teams[1]} fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}