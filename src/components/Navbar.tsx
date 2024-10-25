import React from 'react';
import { TrendingUp, History, Database, Settings } from 'lucide-react';

type NavbarProps = {
  currentView: 'dashboard' | 'trends';
  onViewChange: (view: 'dashboard' | 'trends') => void;
};

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-green-400" />
            <span className="font-bold text-xl">Sports Predictor Pro</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => onViewChange('dashboard')}
              className={`flex items-center gap-2 transition-colors ${
                currentView === 'dashboard' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              <Database size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => onViewChange('trends')}
              className={`flex items-center gap-2 transition-colors ${
                currentView === 'trends' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              <History size={20} />
              <span>Historical Trends</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}