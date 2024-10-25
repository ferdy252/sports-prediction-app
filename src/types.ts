export type Team = {
  name: string;
  recentForm: number[];
  avgScore: number;
  injuries?: string[];
};

export type Game = {
  id: number;
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