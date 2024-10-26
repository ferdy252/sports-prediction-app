// import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type ScorePredictionProps = {
  predictedScore: {
    home: number;
    away: number;
  };
};

export default function ScorePrediction({ predictedScore }: ScorePredictionProps) {
  const data = [
    { name: 'Home', score: predictedScore.home },
    { name: 'Away', score: predictedScore.away },
  ];

  return (
    <div className="bg-gray-700 p-3 rounded">
      <h3 className="text-sm font-semibold mb-2">Predicted Score</h3>
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
              labelStyle={{ color: '#fff' }}
            />
            <Bar dataKey="score" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
