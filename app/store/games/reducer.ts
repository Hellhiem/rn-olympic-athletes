
import { GamesStateType, GamesActionsType, GamesReducerConstants } from 'types/games';

const initialState: GamesStateType = {
  isFetchingGames: false,
  data: [],
};

function games(state: GamesStateType = initialState, action: GamesActionsType) {
  switch (action.type) {
    case GamesReducerConstants.GAMES_FETCH_REQUEST:
      return {
        ...state,
        isFetchingGames: true,
      };
    case GamesReducerConstants.GAMES_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingGames: false,
        data: action.response.data,
      };
    case GamesReducerConstants.GAMES_FETCH_FAIL:
      return {
        ...state,
        isFetchingGames: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export { games, initialState };