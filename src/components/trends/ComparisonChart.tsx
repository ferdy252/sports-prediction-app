import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ComparisonChartProps = {
  teams: string[];
  metric: string;
  timeRange: string;
};

export default function ComparisonChart({ teams, metric, timeRange }: ComparisonChartProps) {
  // Sample data - in a real app, this would come from your API
  const data = [
    { date: '2023-10', [teams[0]]: 105, [teams[1]]: 98 },
    { date: '2023-11', [teams[0]]: 112, [teams[1]]: 115 },
    { date: '2023-12', [teams[0]]: 108, [teams[1]]: 102 },
    { date: '2024-01', [teams[0]]: 95, [teams[1]]: 97 },
    { date: '2024-02', [teams[0]]: 110, [teams[1]]: 105 },
    { date: '2024-03', [teams[0]]: 118, [teams[1]]: 112 }
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={teams[0]}
            stroke="#4ade80"
            strokeWidth={2}
            dot={{ fill: '#4ade80' }}
          />
          <Line
            type="monotone"
            dataKey={teams[1]}
            stroke="#f87171"
            strokeWidth={2}
            dot={{ fill: '#f87171' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}