import GameType from './GameType';

type GamesStateType = {
  isFetchingGames: boolean;
  data: GameType[];
  error?: string;
};

export default GamesStateType;