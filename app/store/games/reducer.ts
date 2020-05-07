import orderBy from 'lodash/orderBy';
import { GamesStateType, GamesActionsType, GamesReducerConstants } from 'types/games';

const initialState: GamesStateType = {
  isFetchingGames: false,
  isFetchingGameAthletes: false,
  athletesData: {},
  gamesData: [],
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
        gamesData: orderBy(action.response.data, 'year', 'desc'),
      };
    case GamesReducerConstants.GAMES_FETCH_FAIL:
      return {
        ...state,
        isFetchingGames: false,
        error: action.error,
      };
    case GamesReducerConstants.GAMES_ATHLETES_FETCH_REQUEST:
      return {
        ...state,
        isFetchingGameAthletes: true,
      };
    case GamesReducerConstants.GAMES_ATHLETES_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingGameAthletes: false,
        athletesData: {
          ...state.athletesData,
          [action.response.gameId]: action.response.response.data,
        },
      };
    case GamesReducerConstants.GAMES_ATHLETES_FETCH_FAIL:
      return {
        ...state,
        isFetchingGameAthletes: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export { games, initialState };