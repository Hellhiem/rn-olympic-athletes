import { ThunkDispatch } from 'redux-thunk';
import { AppState } from 'types/common';
import { fetchGames } from 'services/games';
import { GamesReducerConstants } from 'types/games';

const fetchGamesAction = () => {
  return (dispatch: ThunkDispatch<AppState, void, any>) => {
    return dispatch({
      types: [
        GamesReducerConstants.GAMES_FETCH_REQUEST,
        GamesReducerConstants.GAMES_FETCH_SUCCESS,
        GamesReducerConstants.GAMES_FETCH_FAIL,
      ],
      asyncRequest: {
        request: () => {
          return fetchGames();
        },
      },
    });
  };
};

export { fetchGamesAction };