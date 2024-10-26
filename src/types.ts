<<<<<<< HEAD
export type League = 'NBA' | 'NFL' | 'NCAAF';

export type Team = {
  name: string;
  league: League;
=======
export type Team = {
  name: string;
>>>>>>> b103c380c06e5e96e8ae151762a5cb1fb7d5f4db
  recentForm: number[];
  avgScore: number;
  injuries?: string[];
};

export type Game = {
  id: number;
<<<<<<< HEAD
  league: League;
=======
>>>>>>> b103c380c06e5e96e8ae151762a5cb1fb7d5f4db
  status: 'upcoming' | 'live' | 'finished';
  startTime: string;
  currentScore?: {
    home: number;
    away: number;
  };
  quarter?: number;
  timeLeft?: string;
  homeTeam: Team;
  awayTeam: Team;
  odds: {
    home: number;
    away: number;
    draw?: number;
  };
  prediction: {
    winner: string;
    confidence: number;
    predictedScore: {
      home: number;
      away: number;
    };
  };
  bookmakerOdds: {
    name: string;
    home: number;
    away: number;
  }[];
<<<<<<< HEAD
};

export type GameFilters = {
  league?: League;
  team?: string;
  dateRange?: 'today' | 'week' | 'month';
  status?: 'upcoming' | 'live' | 'finished';
=======
>>>>>>> b103c380c06e5e96e8ae151762a5cb1fb7d5f4db
};