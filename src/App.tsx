import { useState } from 'react';
import { RefreshCw, History, Database, Star } from 'lucide-react';
import { Game } from './types';
import Navbar from './components/Navbar';
import TopPredictions from './components/dashboard/TopPredictions';
import QuickStats from './components/dashboard/QuickStats';
import LiveGameTracker from './components/live/LiveGameTracker';
import FavoriteTeams from './components/FavoriteTeams';
import PredictionDetails from './components/PredictionDetails';
import HistoricalTrends from './components/HistoricalTrends';
import GameSchedule from './components/schedule/GameSchedule';

export default function App() {
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'schedule' | 'trends'>('dashboard');
  const [games] = useState<Game[]>([
    {
      id: 1,
      league: 'NBA',
      status: 'live',
      startTime: '2024-03-19T19:30:00Z',
      currentScore: { home: 87, away: 82 },
      quarter: 3,
      timeLeft: '4:23',
      homeTeam: {
        name: 'Lakers',
        league: 'NBA',
        recentForm: [1, 1, 0, 1, 1],
        avgScore: 115.5,
        injuries: ['Anthony Davis (questionable)']
      },
      awayTeam: {
        name: 'Warriors',
        league: 'NBA',
        recentForm: [1, 0, 1, 1, 0],
        avgScore: 118.2
      },
      odds: { home: 1.85, away: 1.95 },
      prediction: {
        winner: 'Lakers',
        confidence: 68,
        predictedScore: { home: 112, away: 108 }
      },
      bookmakerOdds: [
        { name: 'Bookmaker A', home: 1.83, away: 1.97 },
        { name: 'Bookmaker B', home: 1.87, away: 1.93 }
      ]
    },
    // Add more sample games here with different leagues
  ]);

  const selectedGame = games.find(game => game.id === selectedGameId);
  const liveGames = games.filter(game => game.status === 'live');

  if (selectedGame) {
    return (
      <div className="min-h-screen">
        <Navbar 
          currentView={currentView} 
          onViewChange={setCurrentView} 
        />
        <PredictionDetails
          game={selectedGame}
          onBack={() => setSelectedGameId(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <main className="container mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <>
            <QuickStats />
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="glass-card gradient-border p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <Database className="text-blue-400" />
                      Today's Predictions
                    </h2>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-700/70">
                      <RefreshCw size={20} />
                      Refresh
                    </button>
                  </div>
                  <TopPredictions 
                    games={games.filter(game => game.status === 'upcoming')}
                    onViewDetails={setSelectedGameId}
                  />
                </div>
              </div>
              <div className="space-y-8">
                {liveGames.length > 0 && (
                  <div className="glass-card gradient-border p-6">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <History className="text-red-400" />
                      Live Games
                    </h2>
                    <div className="space-y-4">
                      {liveGames.map(game => (
                        <LiveGameTracker key={game.id} game={game} />
                      ))}
                    </div>
                  </div>
                )}
                <div className="glass-card gradient-border p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Star className="text-yellow-400" />
                    Favorite Teams
                  </h2>
                  <FavoriteTeams />
                </div>
              </div>
            </div>
          </>
        )}

        {currentView === 'schedule' && (
          <GameSchedule 
            games={games}
            onViewDetails={setSelectedGameId}
          />
        )}

        {currentView === 'trends' && <HistoricalTrends />}
      </main>
    </div>
  );
}
