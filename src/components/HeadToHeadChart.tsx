import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const historicalData = [
  { date: '2023-10', home: 105, away: 98 },
  { date: '2023-12', home: 112, away: 115 },
  { date: '2024-01', home: 108, away: 102 },
  { date: '2024-02', home: 95, away: 97 },
  { date: '2024-03', home: 110, away: 105 },
];

export default function HeadToHeadChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={historicalData}>
          <XAxis dataKey="date" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="home"
            name="Home Team"
            stroke="#4ade80"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="away"
            name="Away Team"
            stroke="#f87171"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}