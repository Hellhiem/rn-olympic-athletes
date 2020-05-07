import GameType from './GameType';

type GamesStateType = {
  isFetchingGames: boolean;
  isFetchingGameAthletes: boolean;
  gamesData: GameType[];
  athletesData: any;
  error?: string;
};

export default GamesStateType;