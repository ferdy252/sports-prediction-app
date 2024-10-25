import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type OddsComparisonProps = {
  odds: {
    home: number;
    away: number;
  };
  bookmakerOdds: {
    name: string;
    home: number;
    away: number;
  }[];
};

export default function OddsComparison({ odds, bookmakerOdds }: OddsComparisonProps) {
  const data = [
    { name: 'Our Prediction', home: odds.home, away: odds.away },
    ...bookmakerOdds,
  ];

  return (
    <div className="bg-gray-700 p-3 rounded">
      <h3 className="text-sm font-semibold mb-2">Odds Comparison</h3>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
              labelStyle={{ color: '#fff' }}
            />
            <Line type="monotone" dataKey="home" stroke="#4ade80" />
            <Line type="monotone" dataKey="away" stroke="#f87171" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}