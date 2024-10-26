import { 
  ArrowBack,
  CalendarToday,
  LocationOn,
  Cloud,
  EmojiEvents
} from '@mui/icons-material';
import { Game } from '../types';
import ScorePrediction from './ScorePrediction';
import OddsComparison from './OddsComparison';
import HeadToHeadChart from './HeadToHeadChart';
import TeamStats from './TeamStats';

type PredictionDetailsProps = {
  game: Game;
  onBack: () => void;
};

export default function PredictionDetails({ game, onBack }: PredictionDetailsProps) {
  const { homeTeam, awayTeam, prediction, startTime } = game;
  const gameDate = new Date(startTime);

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowBack sx={{ fontSize: 20 }} />
        Back to Dashboard
      </button>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl font-bold mb-4">
              {homeTeam.name} vs {awayTeam.name}
            </h1>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <CalendarToday sx={{ fontSize: 20 }} />
                {gameDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <LocationOn sx={{ fontSize: 20 }} />
                Staples Center, Los Angeles
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <Cloud sx={{ fontSize: 20 }} />
                Clear, 72°F
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <EmojiEvents className="text-yellow-400" />
                Prediction Summary
              </h2>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {prediction.confidence}% Confidence
                </div>
                <p className="text-gray-300">
                  Our model predicts a {prediction.winner} victory with a margin of{' '}
                  {Math.abs(prediction.predictedScore.home - prediction.predictedScore.away)} points.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ScorePrediction predictedScore={prediction.predictedScore} />
            <OddsComparison odds={game.odds} bookmakerOdds={game.bookmakerOdds} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TeamStats team={homeTeam} />
        <TeamStats team={awayTeam} />
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Head-to-Head History</h2>
        <HeadToHeadChart />
      </div>
    </div>
  );
}
