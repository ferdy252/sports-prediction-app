export type League = 'NBA' | 'NFL' | 'NCAAF';

export type Team = {
  name: string;
  league: League;
  recentForm: number[];
  avgScore: number;
  injuries?: string[];
};

export type Game = {
  id: number;
  league: League;
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
};

export type GameFilters = {
  league?: League;
  team?: string;
  dateRange?: 'today' | 'week' | 'month';
  status?: 'upcoming' | 'live' | 'finished';
};