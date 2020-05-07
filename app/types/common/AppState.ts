import { GamesStateType } from 'types/games';
import { AthleteStateType } from 'types/athletes';

type AppState = {
  games: GamesStateType;
  athlete: AthleteStateType;
};

export default AppState;