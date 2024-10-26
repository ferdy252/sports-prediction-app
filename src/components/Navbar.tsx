import React from 'react';
<<<<<<< HEAD
import { TrendingUp, History, Database, Settings, Calendar } from 'lucide-react';

type NavbarProps = {
  currentView: 'dashboard' | 'schedule' | 'trends';
  onViewChange: (view: 'dashboard' | 'schedule' | 'trends') => void;
=======
import { TrendingUp, History, Database, Settings } from 'lucide-react';

type NavbarProps = {
  currentView: 'dashboard' | 'trends';
  onViewChange: (view: 'dashboard' | 'trends') => void;
>>>>>>> b103c380c06e5e96e8ae151762a5cb1fb7d5f4db
};

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
  return (
<<<<<<< HEAD
    <nav className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-400 h-6 w-6" />
            <span className="font-bold text-xl bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
              Sports Predictor Pro
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => onViewChange('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'dashboard' 
                  ? 'text-green-400 bg-gray-700/50' 
                  : 'hover:text-green-400 hover:bg-gray-700/30'
=======
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
>>>>>>> b103c380c06e5e96e8ae151762a5cb1fb7d5f4db
              }`}
            >
              <Database size={20} />
              <span>Dashboard</span>
            </button>
            <button
<<<<<<< HEAD
              onClick={() => onViewChange('schedule')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'schedule' 
                  ? 'text-green-400 bg-gray-700/50' 
                  : 'hover:text-green-400 hover:bg-gray-700/30'
              }`}
            >
              <Calendar size={20} />
              <span>Schedule</span>
            </button>
            <button
              onClick={() => onViewChange('trends')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'trends' 
                  ? 'text-green-400 bg-gray-700/50' 
                  : 'hover:text-green-400 hover:bg-gray-700/30'
              }`}
            >
              <History size={20} />
              <span>Trends</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:text-green-400 hover:bg-gray-700/30 transition-all duration-200">
=======
              onClick={() => onViewChange('trends')}
              className={`flex items-center gap-2 transition-colors ${
                currentView === 'trends' ? 'text-green-400' : 'hover:text-green-400'
              }`}
            >
              <History size={20} />
              <span>Historical Trends</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
>>>>>>> b103c380c06e5e96e8ae151762a5cb1fb7d5f4db
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}