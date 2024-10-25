import React, { useState } from 'react';
import { TrendingUp, Settings, RefreshCw, History, Database, Star } from 'lucide-react';
import { Game } from './types';
import GameCard from './components/GameCard';
import Navbar from './components/Navbar';
import LiveGames from './components/LiveGames';
import FavoriteTeams from './components/FavoriteTeams';
import PredictionDetails from './components/PredictionDetails';
import HistoricalTrends from './components/HistoricalTrends';

export default function App() {
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'trends'>('dashboard');
  const [games] = useState<Game[]>([
    // ... existing games data ...
  ]);

  const selectedGame = games.find(game => game.id === selectedGameId);

  if (selectedGame) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar onViewChange={setCurrentView} currentView={currentView} />
        <PredictionDetails
          game={selectedGame}
          onBack={() => setSelectedGameId(null)}
        />
      </div>
    );
  }

  if (currentView === 'trends') {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar onViewChange={setCurrentView} currentView={currentView} />
        <HistoricalTrends />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onViewChange={setCurrentView} currentView={currentView} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* ... existing dashboard content ... */}
      </main>
    </div>
  );
}