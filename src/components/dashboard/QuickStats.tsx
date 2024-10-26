import React from 'react';
import { Trophy, TrendingUp, Target, Percent } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      label: 'Prediction Accuracy',
      value: '76%',
      icon: Target,
      trend: '+2.3%',
      color: 'text-green-400'
    },
    {
      label: 'Win Rate (Last 30)',
      value: '71%',
      icon: Trophy,
      trend: '+1.5%',
      color: 'text-blue-400'
    },
    {
      label: 'ROI',
      value: '12.4%',
      icon: Percent,
      trend: '+0.8%',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="glass-card p-4 hover-scale">
          <div className="flex items-center justify-between mb-2">
            <stat.icon className={`${stat.color}`} size={24} />
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="text-green-400" size={16} />
              <span className="text-green-400">{stat.trend}</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}